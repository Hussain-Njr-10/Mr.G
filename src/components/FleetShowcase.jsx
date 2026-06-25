import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './FleetShowcase.css';

const FleetShowcase = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const el = containerRef.current;
    
    // Headline animation
    gsap.fromTo(el.querySelectorAll('.fs-text-anim'), 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
    );

    // Image reveal animation
    const showcaseImg = el.querySelector('.fs-main-image');
    if (showcaseImg) {
      gsap.fromTo(showcaseImg,
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out', delay: 0.5 }
      );
    }
    
    // Stats cards animation
    gsap.fromTo(el.querySelectorAll('.fs-stat-card'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.8 }
    );
  }, []);

  return (
    <section className="fleet-showcase" ref={containerRef}>
      {/* Top Content */}
      <div className="container fs-container">
        <div className="fs-header">
          <div className="fs-logo-mark fs-text-anim">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h1 className="fs-title fs-text-anim">
            Control your fleet<br />like never before.
          </h1>
          <p className="fs-desc fs-text-anim">
            Real-time tracking, advanced analytics, and seamless management - all in one powerful platform.
          </p>
        </div>
      </div>

      {/* Main Full Width Image */}
      <div className="fs-image-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80" 
          alt="MR.G Signature Fleet" 
          className="fs-main-image" 
        />
      </div>

      {/* Stats Section */}
      <div className="container fs-stats-section">
        <div className="fs-stats-header">
          <h2 className="fs-stats-title">The Standard of Excellence.</h2>
          <p className="fs-stats-subtitle">Our technologies enhance business efficiency and passenger safety.</p>
        </div>
        
        <div className="fs-stats-grid">
          {/* Card 1 */}
          <div className="fs-stat-card">
            <span className="fs-card-label">Availability</span>
            <div className="fs-card-number">24/7</div>
            <h3 className="fs-card-headline">Concierge Access</h3>
            <p className="fs-card-desc">Dedicated support to accommodate your schedule, anywhere.</p>
          </div>
          
          {/* Card 2 */}
          <div className="fs-stat-card">
            <span className="fs-card-label">Discretion</span>
            <div className="fs-card-number">100%</div>
            <h3 className="fs-card-headline">Absolute Privacy</h3>
            <p className="fs-card-desc">Tinted cabins and highly trained chauffeurs ensure total confidentiality.</p>
          </div>
          
          {/* Card 3 */}
          <div className="fs-stat-card">
            <span className="fs-card-label">Reliability</span>
            <div className="fs-card-number">0</div>
            <h3 className="fs-card-headline">Compromises</h3>
            <p className="fs-card-desc">Meticulously maintained flagship fleet for a flawless, punctual journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetShowcase;
