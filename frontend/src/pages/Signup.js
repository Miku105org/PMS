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
    yearOfStudy: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Form Data Submitted:', formData);
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
          required
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
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
