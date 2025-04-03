import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/signup.scss'; // Import your SCSS file
import axios from 'axios'; // Using axios to make HTTP requests

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/signup", {
        email,
        password,
      });
      alert("User registered successfully!");
      console.log(response.data); // Optional: Log response data for debugging
    } catch (error: any) {
      console.error("Error during signup:", error.response || error.message);
      alert(error.response?.data?.detail || "Failed to register. Try again.");
    }
  };

  const handleBack = () => {
    navigate('/'); // Navigate to the login page
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
      </form>
      
      <div className="back-button">
        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default SignupPage;
