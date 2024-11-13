// InstituteDashboard.js
import React from 'react';
import './InstituteDashboard.css'; // Updated CSS file specific to the institute dashboard

const InstituteDashboard = ({ firstName }) => {
  return (
    <div className="institute-dashboard">
      <div className="welcome-section">
        <h1>Welcome, {firstName}!</h1> {/* Dynamically display the first name */}
        <p>Manage student placements and collaborate with companies below:</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Manage Student Placements</h3>
          <p>Oversee the placement activities of students and guide them in their career paths.</p>
          <button className="action-button">Manage Placements</button>
        </div>
        <div className="dashboard-card">
          <h3>Company Listings</h3>
          <p>View, add, and update company information for the placements and collaborations.</p>
          <button className="action-button">View Companies</button>
        </div>
        <div className="dashboard-card">
          <h3>Track Applications</h3>
          <p>Monitor the status of student applications and provide timely feedback.</p>
          <button className="action-button">Track Applications</button>
        </div>
        <div className="dashboard-card">
          <h3>Post Opportunities</h3>
          <p>Post job and internship opportunities to help students explore industry prospects.</p>
          <button className="action-button">Post Jobs & Internships</button>
        </div>
      </div>
    </div>
  );
};

export default InstituteDashboard;
