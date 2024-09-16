import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Importing the modern styles

function Navbar() {
  const [isMinimized, setIsMinimized] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY); // Log scroll position for debugging
      if (window.scrollY > 100) { // Threshold for minimizing
        setIsMinimized(true);
      } else {
        setIsMinimized(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isMinimized ? 'minimized' : ''}`}>
      <div className="logo">
        <Link to="/">Placement Management System</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link 
            to="/" 
            className={currentPath === '/' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/login" 
            className={currentPath === '/login' ? 'active' : ''}
          >
            Login
          </Link>
        </li>
        {/* Add more navigation links here if needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
