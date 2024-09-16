// Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Make sure this path is correct

const Login = ({ heading, account }) => {
  return (
    <div className="container">
      <div className="login-box">
        <h2>{heading}</h2>
        <form action="1">
          <div className="input-box">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="forgot-pass">
            <a href="1">Forgot your password?</a>
          </div>
          <button type="submit" className="btn">{account}</button>
          <div className="signup-link">
            {/* Updated to use Link for navigation */}
            <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
