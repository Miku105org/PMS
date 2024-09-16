import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Ensure the correct path for Home.js
import Login from './components/Login'; // Ensure the correct path for Login.js
import Signup from './pages/Signup'; // Ensure the correct path for Signup.js
import Navbar from './components/Navbar'; // Ensure the correct path for Navbar.js
import Footer from './components/Footer'; // Ensure the correct path for Footer.js

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
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
