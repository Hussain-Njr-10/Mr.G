import React, { useEffect } from 'react';
import LenisProvider from '../components/LenisProvider';
import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LenisProvider>
      <Navbar />
      <main>
        <PageHero 
          title="Our Story" 
          subtitle="Legacy of Excellence" 
          backgroundImage="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80" 
        />
        
        <section className="about-section">
          <div className="container about-container">
            <div className="about-content glass-panel">
              <h2 className="about-title">Redefining Luxury Transport</h2>
              <p className="about-text">
                MR.G was founded on a singular principle: that the journey should be as remarkable as the destination. 
                For over a decade, we have been the premier choice for elite clientele across Malaysia and Singapore, 
                providing an unparalleled standard of chauffeured luxury.
              </p>
              <p className="about-text">
                Our fleet of meticulously maintained Alphard, Vellfire, and Staria vehicles represents the pinnacle 
                of automotive comfort. Coupled with our highly trained, discreet, and professional chauffeurs, 
                every ride with MR.G is an exercise in engineered serenity.
              </p>
              
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years of Excellence</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Journeys Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80" 
                alt="Chauffeur Service" 
                className="about-image"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </LenisProvider>
  );
};

export default About;
