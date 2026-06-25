import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
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
          <button className="hamburger-btn" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          <Link to="/fleet" className="mobile-link" onClick={closeMobileMenu}>Fleet</Link>
          <Link to="/destinations" className="mobile-link" onClick={closeMobileMenu}>Destinations</Link>
          <Link to="/experience" className="mobile-link" onClick={closeMobileMenu}>Experience</Link>
          <Link to="/about" className="mobile-link" onClick={closeMobileMenu}>About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
