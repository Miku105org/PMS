import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { jsPDF } from 'jspdf'; // Import jsPDF for PDF generation
import './StudentDashboard.css';

const StudentDashboard = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [showModal, setShowModal] = useState(false); // Manage modal state
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    education: '',
    workExperience: '',
    skills: ''
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle job view button click
  const handleViewJobs = () => {
    navigate('/jobs'); // Navigate to the job listings page
  };

  // Generate PDF resume
  const generateResume = () => {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(18);
    doc.text('Resume', 10, 10);

    // Add user inputs to the PDF
    doc.setFontSize(12);
    doc.text(`Full Name: ${formData.fullName}`, 10, 20);
    doc.text(`Mobile Number: ${formData.mobileNumber}`, 10, 30);
    doc.text(`Email: ${formData.email}`, 10, 40);
    doc.text(`Education: ${formData.education}`, 10, 50);
    doc.text(`Work Experience: ${formData.workExperience}`, 10, 60);
    doc.text(`Skills: ${formData.skills}`, 10, 70);

    // Save the PDF
    doc.save('resume.pdf');

    // Close the modal after resume generation
    setShowModal(false);
  };

  return (
    <div className="student-dashboard">
      <div className="welcome-section">
        <h1>Welcome, Student!</h1>
        <p>Manage your career path with the tools below:</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Job Listings</h3>
          <p>Browse and apply for the latest job opportunities suited for your profile.</p>
          <button className="action-button" onClick={handleViewJobs}>
            View Jobs
          </button>
        </div>
        <div className="dashboard-card">
          <h3>Resume Builder</h3>
          <p>Access and update your resume with the latest achievements and experiences.</p>
          <button className="action-button" onClick={() => setShowModal(true)}>Update Resume</button>
        </div>
        <div className="dashboard-card">
          <h3>Application Status</h3>
          <p>Track the status of your job applications in real-time.</p>
          <button className="action-button">Check Status</button>
        </div>
        <div className="dashboard-card">
          <h3>Internship Opportunities</h3>
          <p>Explore internship programs to gain valuable industry experience.</p>
          <button className="action-button">Find Internships</button>
        </div>
      </div>

      {/* Modal for resume input form */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Update Your Resume</h2>
            <form>
              <label>Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
              <label>Mobile Number:</label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                required
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
              />
              <label>Education Qualification:</label>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                placeholder="Enter your education qualification"
                required
              />
              <label>Work Experience:</label>
              <textarea
                name="workExperience"
                value={formData.workExperience}
                onChange={handleInputChange}
                placeholder="Enter your work experience"
                required
              />
              <label>Skills:</label>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                placeholder="Enter your skills"
                required
              />
              <div className="modal-actions">
                <button type="button" onClick={generateResume} className="action-button">
                  Generate Resume
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="action-button secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;

