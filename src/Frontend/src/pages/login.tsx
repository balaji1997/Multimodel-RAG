// pages/LoginPage.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/login.scss";
import axios from "axios";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Send login request to the backend
      const response = await axios.post("http://127.0.0.1:8000/auth/login", {
        email,
        password,
      });

      setErrorMessage(null); // Clear any error message
      console.log(response.data); // Log response for debugging

      // Redirect to home page upon successful login
      navigate("/home");
    } catch (error: any) {
      console.error("Login Error:", error.response || error.message);
      setErrorMessage(
        error.response?.data?.detail || "Failed to login. Please check your credentials"
      );
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <div className="md:py-4">
          <Link to="/signup">Sign Up</Link>
        </div>
      </form>
      <div className="forgot-password">
        <Link to="/forget-password">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default LoginPage;
