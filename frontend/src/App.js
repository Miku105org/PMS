import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Path to Home.js
import Login from './components/Login'; // Path to Login.js
import Signup from './pages/Signup'; // Path to Signup.js
import Navbar from './components/Navbar'; // Path to Navbar.js
import Footer from './components/Footer'; // Path to Footer.js
import StudentDashboard from './dashboards/StudentDashboard'; // Path to StudentDashboard.js
import InstituteDashboard from './dashboards/InstituteDashboard'; // Path to InstituteDashboard.js
import CompanyDashboard from './dashboards/CompanyDashboard'; // Path to CompanyDashboard.js

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Main content with routing */}
        <main>
          <Routes>
            {/* Home page */}
            <Route path="/" element={<Home />} />
            
            {/* Login page */}
            <Route path="/login" element={<Login heading="Login" account="Login" />} />
            
            {/* Signup page */}
            <Route path="/signup" element={<Signup />} />
            
            {/* Dashboards */}
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/institute-dashboard" element={<InstituteDashboard />} />
            <Route path="/company-dashboard" element={<CompanyDashboard />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
