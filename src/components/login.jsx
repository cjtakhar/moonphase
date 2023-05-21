import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
    } else {
      setError(false);
      navigate("/enter-data");
    }
  };

  const handleLoginToggle = () => {
    setEmail("");
    setPassword("");
    setError(false);
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-container">
      <div className="login-text">
        <h1 className="login-title">MoonPhase</h1>
        <h2 className="login-subtitle">
          A place to track your spiritual journey
        </h2>
      </div>
      <div className="login-form">
        <form className="form" onSubmit={handleSubmit}>
          {isLogin ? (
            <input
              className={`input ${error ? 'input-error' : ''}`}
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="email"
            />
          ) : (
            <input
              className={`input ${error ? 'input-error' : ''}`}
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="username"
            />
          )}
          <input
            className={`input ${error ? 'input-error' : ''}`}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="password"
          />
          {error && (
            <p className="error-message">
              Please enter a valid email and password
            </p>
          )}
          <div className="btn-container">
            <button className="btn-login" type="submit">
              Log In
            </button>
            <button className="btn-login" type="button" onClick={handleLoginToggle}>
              {isLogin ? "Create Account" : "Log In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
