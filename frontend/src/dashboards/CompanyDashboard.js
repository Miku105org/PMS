// CompanyDashboard.js
import React from 'react';
import './CompanyDashboard.css'; // Updated CSS for the company dashboard

const CompanyDashboard = ({ firstName }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {firstName ? firstName : 'Company'}!</h1>
        <p>Manage your company's hiring process easily here:</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Post Job Listings</h2>
          <p>Create job and internship opportunities for students.</p>
          <button className="action-button">Create Job Post</button>
        </div>

        <div className="dashboard-card">
          <h2>View Applications</h2>
          <p>See and manage all student applications.</p>
          <button className="action-button">View Applications</button>
        </div>

        <div className="dashboard-card">
          <h2>Schedule Interviews</h2>
          <p>Set up and manage interview schedules with candidates.</p>
          <button className="action-button">Schedule Now</button>
        </div>

        <div className="dashboard-card">
          <h2>Track Candidate Status</h2>
          <p>Follow the progress of candidates through the hiring process.</p>
          <button className="action-button">Track Status</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
