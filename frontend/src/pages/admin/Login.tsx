import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Login Card */}
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

        {/* copyright message */}
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
    // background: "linear-gradient(135deg, #f59e0b, #dc2626)",
    background: "linear-gradient(135deg, #f97316, #fb7185)"
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px", // spacing between card & footer
  },

  card: {
    width: "340px",
    padding: "30px",
    borderRadius: "16px",
    background: "#ffffff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  heading: {
    textAlign: "center",
    color: "#b91c1c",
    margin: 0,
    fontSize: "20px",
  },

  subText: {
    textAlign: "center",
    fontSize: "14px",
    color: "#666",
    marginBottom: "10px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    outline: "none",
  },

  button: {
    marginTop: "10px",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #f59e0b, #dc2626)",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
  },

  footer: {
    textAlign: "center",
    fontSize: "13px",
    color: "#c2410c",
    cursor: "pointer",
  },

  copy: {
    textAlign: "center",
    fontSize: "12px",
    color: "#eee",
  },

  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};