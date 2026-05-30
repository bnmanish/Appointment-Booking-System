function App() {
  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2>Welcome Back</h2>

        <div>
          <input
            className="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <input
            className="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div>
          <button className="login-btn">Login</button>
        </div>

        <div className="extra-links">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default App;