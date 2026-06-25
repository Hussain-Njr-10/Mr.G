import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          MR.G
        </Link>
        <div className="navbar-links">
          <Link to="/fleet" className="nav-link">Fleet</Link>
          <Link to="/destinations" className="nav-link">Destinations</Link>
          <Link to="/experience" className="nav-link">Experience</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>
        <div className="navbar-actions">
          <Link to="/reserve">
            <button className="btn-reserve">RESERVE</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
