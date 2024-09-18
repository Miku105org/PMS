import React, { useState } from 'react';
import './Home.css'; // Ensure this path is correct
import microsoft from '../images/microsoft.png'; // Ensure this path is correct
import ResumeBuilder from './ResumeBuilder'; // Import the ResumeBuilder component
import Footer from '../components/Footer'; // Import Footer component

function Home() {
  const [showResumeBuilder, setShowResumeBuilder] = useState(false);

  const handleOpenResumeBuilder = () => setShowResumeBuilder(true);
  const handleCloseResumeBuilder = () => setShowResumeBuilder(false);

  return (
    <div className="home-container">
      {/* Resume Builder Button */}
      <button className="btn-resume-builder" onClick={handleOpenResumeBuilder}>
        Open Resume Builder
      </button>
      {/* {showResumeBuilder && <ResumeBuilder onClose={handleCloseResumeBuilder} />} */}

      {/* Hero Section */}
      <header className="hero-section">
        <h1>Welcome to Our Job Platform</h1>
        <p>Find your dream job or internship today</p>
      </header>

      {/* Main content flex container */}
      <div className="content-wrapper">
        {/* Left Section */}
        <div className="left-section">
          <div className="section-title">
            <h3>Upcoming Job Opportunities</h3>
          </div>
          <ul className="job-list">
            <li>Job 1</li>
            <li>Job 2</li>
            <li>Job 3</li>
            <li>Job 1</li>
            <li>Job 2</li>
            <li>Job 3</li>
            <li>Job 1</li>
            <li>Job 2</li>
            <li>Job 3</li>
            <li>Job 1</li>
            <li>Job 2</li>
            <li>Job 3</li>
            <li>Job 3</li>
            <li>Job 1</li>
            <li>Job 2</li>
            <li>Job 3</li>
            <li>Job 1</li>
            <li>Job 2</li>
            <li>Job 3</li>
            <li>Job 1</li>
            <li>Job 2</li>
            <li>Job 3</li>
            <li>Job 1</li>
            <li>Job 2</li>
            <li>Job 3</li>
            <li>Job 1</li>
            <li>Job 2</li>
            <li>Job 3</li>
            <li>Job 3</li>
            <li>Job 1</li>
            <li>Job 2</li>
            <li>Job 3</li>
            {/* Add more job opportunities here */}
          </ul>
        </div>

        {/* Card Grid */}
        <div className="cards-container">
          <div className="card-grid">
            {[...Array(20)].map((_, i) => (
              <div className="card" key={i}>
                <img src={microsoft} alt="Company Logo" className="card-logo" />
                <div className="card-buttons">
                  <button className="btn-apply">Apply</button>
                  <button className="btn-about">About</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="section-title">
            <h3>New Internship Opportunities</h3>
          </div>
          <ul className="internship-list">
            <li>Internship 1</li>
            <li>Internship 2</li>
            <li>Internship 3</li>
            <li>Internship 4</li>
            <li>Internship 5</li>
            <li>Internship 6</li>
            <li>Internship 1</li>
            <li>Internship 2</li>
            <li>Internship 3</li>
            <li>Internship 4</li>
            <li>Internship 5</li>
            <li>Internship 6</li>
            <li>Internship 3</li>
            <li>Internship 4</li>
            <li>Internship 5</li>
            <li>Internship 6</li>
            <li>Internship 1</li>
            <li>Internship 2</li>
            <li>Internship 3</li>
            <li>Internship 4</li>
            <li>Internship 5</li>
            <li>Internship 6</li>
            <li>Internship 1</li>
            <li>Internship 2</li>
            <li>Internship 3</li>
            <li>Internship 4</li>
            <li>Internship 5</li>
            <li>Internship 6</li>
            <li>Internship 3</li>
            <li>Internship 4</li>
            <li>Internship 5</li>
            <li>Internship 6</li>
            
            {/* Add more internships here */}
          </ul>
        </div>
      </div>

      {/* Footer Component */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
