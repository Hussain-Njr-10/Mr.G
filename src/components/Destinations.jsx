import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Destinations.css';

gsap.registerPlugin(ScrollTrigger);

const Destinations = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    // Card reveal stagger
    const cards = el.querySelectorAll('.destination-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1, 
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el.querySelector('.destinations-grid'),
          start: 'top 80%',
        }
      }
    );

    // Parallax on images
    const images = el.querySelectorAll('.parallax-img');
    images.forEach(img => {
      gsap.to(img, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="destinations-section" ref={sectionRef}>
      <div className="container">
        <div className="destinations-header">
          <span className="destinations-label">THE DESTINATIONS</span>
          <h2 className="section-title">Curated Landscapes</h2>
        </div>

        <div className="destinations-grid">
          <div className="destination-card glass-panel" style={{ overflow: 'hidden', padding: 0 }}>
            <div className="destination-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80" 
                alt="Genting Highlands" 
                className="destination-img parallax-img"
                style={{ height: '120%', top: '-10%', position: 'relative', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="destination-info glass-panel" style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', borderRadius: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4))' }}>
              <span className="destination-region text-accent">MALAYSIA</span>
              <h3 className="destination-name">Genting Highlands</h3>
            </div>
          </div>

          <div className="destination-card glass-panel" style={{ overflow: 'hidden', padding: 0 }}>
            <div className="destination-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80" 
                alt="Kuala Lumpur" 
                className="destination-img parallax-img"
                style={{ height: '120%', top: '-10%', position: 'relative', width: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="destination-info glass-panel" style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', borderRadius: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4))' }}>
              <span className="destination-region text-accent">URBAN</span>
              <h3 className="destination-name">Kuala Lumpur</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
