import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log({ email, password });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/login",
        {
          email,
          password,
        }
      );
      const data = response.data;
      if (data.status) {
        // ✅ store token
        localStorage.setItem("token", data.token);
        // ✅ store user name
        localStorage.setItem("adminName", data.user.name);
        // ✅ redirect
        navigate("/admin/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error: any) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message || "Login failed");
      } else {
        alert("Server not reachable");
      }
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <form style={styles.card} onSubmit={handleSubmit}>
          <h2 style={styles.heading}>
            Appointment Booking System
          </h2>

          <p style={styles.subText}>
            Please login to continue managing your appointments
          </p>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Login
          </button>

          <p style={styles.footer}>Forgot Password?</p>
        </form>

        <p style={styles.copy}>
          © {new Date().getFullYear()} All rights reserved. Created by{" "}
          <a
            href="https://github.com/bnmanish"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            B N Manish
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #14b8a6, #3b82f6)", // 🌿 teal → blue
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },

  card: {
    width: "340px",
    padding: "30px",
    borderRadius: "16px",
    background: "#ffffff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  heading: {
    textAlign: "center",
    color: "#0f172a", // dark slate (soft on eyes)
    margin: 0,
    fontSize: "20px",
  },

  subText: {
    textAlign: "center",
    fontSize: "14px",
    color: "#64748b", // muted gray
    marginBottom: "10px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #cbd5f5",
    fontSize: "14px",
    outline: "none",
  },

  button: {
    marginTop: "10px",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #14b8a6, #3b82f6)",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
  },

  footer: {
    textAlign: "center",
    fontSize: "13px",
    color: "#2563eb",
    cursor: "pointer",
  },

  copy: {
    textAlign: "center",
    fontSize: "12px",
    color: "#e0f2fe",
  },

  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};