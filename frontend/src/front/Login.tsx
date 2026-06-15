import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useEffect } from "react";



function Login() {
  // redirect on dashboard if already logged In - starts
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [navigate]);
  // redirect on dashboard if already logged In - ends

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setEmailError] = useState("");
  const [errorPassword, setPasswordError] = useState("");

  const handleClick = async () => {
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      setEmailError("Email is required!");
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email!");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("Please enter password!");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) return;

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(apiUrl+'/login',{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (data.status) {
        console.log(data.message);
        localStorage.setItem("token", data.token);
        navigate("/admin/dashboard");
      } else {
        console.log(data.message);
        // Example: show backend error
        // setPasswordError(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("API Error:", error);
      setPasswordError("Something went wrong. Please try again.");
    }

  };

  return (
    <div className="login-form">
      <h2>Welcome Back</h2>

      <div>
        <input
          className="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailError("")}
        />
        {errorEmail && <p className="errorcls">{errorEmail}</p>}
      </div>

      <div>
        <input
          className="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordError("")}
        />
        {errorPassword && <p className="errorcls">{errorPassword}</p>}
      </div>

      <div>
        <button onClick={handleClick} className="login-btn">Login</button>
      </div>

      <div className="extra-links">
        <a href="#">Forgot Password?</a>
      </div>
      <div className="extra-links">
          New here? <Link to="/signup">Create an Account</Link>
      </div>
    </div>
  );
}

export default Login;