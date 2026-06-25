import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Share2, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">MR.G</h2>
            <p className="footer-desc">
              Elevating the standard of luxury transport across Malaysia and Singapore through meticulous service and elite machinery.
            </p>
            <div className="footer-socials">
              <button aria-label="Share"><Share2 size={20} /></button>
              <button aria-label="Email"><Mail size={20} /></button>
            </div>
          </div>
          
          <div className="footer-links-group">
            <div className="footer-column">
              <h4 className="footer-heading">SERVICES</h4>
              <Link to="#">Airport Transfers</Link>
              <Link to="#">City Tours</Link>
              <Link to="#">Long Distance</Link>
              <Link to="#">Corporate Events</Link>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">COMPANY</h4>
              <Link to="#">Our Story</Link>
              <Link to="#">Sustainability</Link>
              <Link to="#">Careers</Link>
              <Link to="#">Contact</Link>
            </div>
            
            <div className="footer-column footer-subscribe">
              <h4 className="footer-heading">SUBSCRIBE</h4>
              <p>Receive exclusive updates and travel insights.</p>
              <div className="subscribe-form">
                <input type="email" placeholder="Email address" />
                <button aria-label="Submit">
                  <ArrowRight size={20} className="text-accent" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 MR.G TOUR & TRANSPORT. ALL RIGHTS RESERVED.</p>
          <div className="footer-legal">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
