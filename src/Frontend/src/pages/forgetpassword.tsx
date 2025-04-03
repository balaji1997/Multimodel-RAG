// pages/ForgetPassword.tsx
import React, { useState } from 'react';
import '../styles/forgetpassword.scss';

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for forget password logic (API call)
    console.log("Forget Password Submitted")
  };

  return (
    <div className="forget-password">
      <h2>Forgot Password</h2>
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
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgetPassword;

