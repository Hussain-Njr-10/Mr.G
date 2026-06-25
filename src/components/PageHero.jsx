import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './PageHero.css';

const PageHero = ({ title, subtitle, backgroundImage }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    
    // Simple fade in and slide up for text
    const textElements = el.querySelectorAll('.page-hero-text');
    gsap.fromTo(textElements,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
    );
    
    // Subtle zoom on background
    const bgImage = el.querySelector('.page-hero-bg');
    gsap.fromTo(bgImage,
      { scale: 1.1 },
      { scale: 1, duration: 2, ease: 'power2.out' }
    );
  }, []);

  return (
    <section className="page-hero" ref={heroRef}>
      <div className="page-hero-bg-wrapper">
        <div className="page-hero-overlay"></div>
        <img src={backgroundImage} alt={title} className="page-hero-bg" />
      </div>
      <div className="container page-hero-content">
        {subtitle && <span className="page-hero-subtitle page-hero-text">{subtitle}</span>}
        <h1 className="page-hero-title page-hero-text">{title}</h1>
      </div>
    </section>
  );
};

export default PageHero;
