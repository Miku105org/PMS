// CompanyDashboard.js
import React from 'react';
import './Dashboard.css'; // Use a common CSS file for consistent styling

const CompanyDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Company Dashboard</h1>
      <p>Welcome to the Company dashboard! Here you can:</p>
      <ul>
        <li>Post job listings and internship opportunities</li>
        <li>View student applications</li>
        <li>Schedule interviews</li>
        <li>Track candidate status</li>
      </ul>
    </div>
  );
};

export default CompanyDashboard;
