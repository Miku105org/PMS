// InstituteDashboard.js
import React from 'react';
import './Dashboard.css'; // Use a common CSS file for consistent styling

const InstituteDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Institute Dashboard</h1>
      <p>Welcome to the Institute dashboard! Here you can:</p>
      <ul>
        <li>Manage student placements</li>
        <li>View and update company listings</li>
        <li>Track student applications and statuses</li>
        <li>Post new job and internship opportunities</li>
      </ul>
    </div>
  );
};

export default InstituteDashboard;
