import { useState } from "react";


function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleClick = () => {
    console.log(email,password);
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2>Welcome Back</h2>

        <div>
          <input
            className="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            className="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button onClick={handleClick} className="login-btn">Login</button>
        </div>

        <div className="extra-links">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default App;