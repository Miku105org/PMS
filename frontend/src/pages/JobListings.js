// JobListings.js
import React from 'react';
import './JobListings.css'; // Create a CSS file for styling

const JobListings = () => {
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'ABC Corp', location: 'New York', type: 'Full-Time' },
    { id: 2, title: 'Data Scientist', company: 'XYZ Inc', location: 'San Francisco', type: 'Part-Time' },
    { id: 3, title: 'Product Manager', company: 'TechSolutions', location: 'Remote', type: 'Contract' },
    { id: 4, title: 'UX Designer', company: 'Creative Minds', location: 'Boston', type: 'Full-Time' },
  ];

  return (
    <div className="job-listings-container">
      <h1>Available Jobs</h1>
      <table className="job-listings-table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Job Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>{job.location}</td>
              <td>{job.type}</td>
              <td>
                <button className="apply-button">Apply</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobListings;
