import React, { useState } from 'react';
import './Signup.css'; // Importing the modern styles

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    rollNumber: '',
    branch: '',
    yearOfStudy: '',
    role: '', // Add role field
    password: '', // Add password field
    confirmPassword: '' // Add confirm password field
  });

  const [message, setMessage] = useState(''); // State for success/error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          rollNumber: formData.rollNumber,
          branch: formData.branch,
          yearOfStudy: formData.yearOfStudy,
          role: formData.role,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Signup successful! Your data has been integrated into the backend.');
        // Optionally redirect or clear the form
      } else {
        setMessage(`Error: ${data.message}`); // Show error message if signup fails
      }
    } catch (error) {
      console.error('Signup Error:', error);
      setMessage('Error: An unexpected error occurred.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="rollNumber"
          placeholder="Roll Number"
          value={formData.rollNumber}
          onChange={handleChange}
        />
        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Branch</option>
          <option value="CSE">CSE</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
          <option value="AIML">AIML</option>
          <option value="Robotics">Robotics</option>
          <option value="Electrical">Electrical</option>
          <option value="Electronics and Communication">Electronics and Communication</option>
        </select>
        <select
          name="yearOfStudy"
          value={formData.yearOfStudy}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Year of Study</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Role</option>
          <option value="student">Student</option>
          <option value="company">Company</option>
          <option value="institute">Institute</option>
        </select>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Account</button>
      </form>
      {message && <p className="message">{message}</p>} {/* Display message */}
    </div>
  );
};

export default Signup;
