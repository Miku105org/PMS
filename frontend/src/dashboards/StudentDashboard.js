// StudentDashboard.js
import React from 'react';
import './Dashboard.css'; // Use a common CSS file for consistent styling

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>
      <p>Welcome to your dashboard, Student! Here you can:</p>
      <ul>
        <li>View and apply for job listings</li>
        <li>Access your resume and update details</li>
        <li>Check your application status</li>
        <li>Explore internship opportunities</li>
      </ul>
    </div>
  );
};

export default StudentDashboard;
