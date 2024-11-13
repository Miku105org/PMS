import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ heading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Role state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        // Navigate to the appropriate dashboard based on the role
        if (role === 'student') navigate('/student-dashboard');
        if (role === 'company') navigate('/company-dashboard');
        if (role === 'institute') navigate('/institute-dashboard');
      } else {
        alert(data.message); // Show error message if login fails
      }
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>{heading}</h2>    
            <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="input-box">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="" disabled>Select Role</option>
              <option value="student">Student</option>
              <option value="company">Company</option>
              <option value="institute">Institute</option>
            </select>
          </div>
          <div className="forgot-pass">
            <a href="/forgot-password">Forgot your password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="signup-link">
            <a href="/signup">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
