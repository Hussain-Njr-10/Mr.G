import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './EliteSelection.css';

gsap.registerPlugin(ScrollTrigger);

const EliteSelection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    
    // Reveal cards
    const cards = el.querySelectorAll('.reveal-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1, 
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
        }
      }
    );

    // Parallax on inner images
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
    <section className="elite-section" id="fleet" ref={sectionRef}>
      <div className="container">
        <div className="elite-header">
          <h2 className="section-title">Elite Selection</h2>
          <span className="section-subtitle">01 / THE MACHINES</span>
        </div>

        <div className="elite-grid">
          {/* Column 1: Alphard */}
          <div className="elite-card alphard-card glass-panel reveal-card">
            <div className="image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80" 
                alt="Toyota Alphard" 
                className="elite-image"
              />
            </div>
            
            <div className="card-details">
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">CAPACITY</span>
                  <span className="spec-value">6-7 Passengers</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">LUGGAGE</span>
                  <span className="spec-value">4 Large Cases</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">VIP FEATURES</span>
                  <span className="spec-value">Pilot Seats</span>
                </div>
              </div>
              
              <div className="card-footer">
                <div>
                  <h3 className="card-title">Alphard</h3>
                  <span className="card-subtitle">EXECUTIVE LOUNGE</span>
                </div>
                <a href="/fleet/alphard" className="btn-reserve-text">RESERVE</a>
              </div>
            </div>
          </div>

          {/* Column 2: Center Column */}
          <div className="elite-center-col">
            <div className="feature-block glass-panel reveal-card">
              <Sparkles className="text-accent feature-icon" size={24} />
              <h4 className="feature-title">ENGINEERED SERENITY</h4>
              <p className="feature-desc">
                A sanctuary on wheels where every vibration is damped and every noise is silenced.
              </p>
            </div>

            <div className="elite-card vellfire-card glass-panel reveal-card">
              <div className="image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80" 
                  alt="Toyota Vellfire" 
                  className="elite-image"
                />
              </div>
              <div className="card-details">
                <p className="vellfire-desc">
                  Optimized for corporate discretion and high-impact arrivals.
                </p>
                <div className="card-footer">
                  <div>
                    <h3 className="card-title">Vellfire</h3>
                    <span className="card-subtitle">BOLD SOPHISTICATION</span>
                  </div>
                  <a href="/fleet/vellfire" className="btn-link">SPECS</a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Staria */}
          <div className="elite-card staria-card glass-panel reveal-card">
            <div className="image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80" 
                alt="Hyundai Staria" 
                className="elite-image"
              />
            </div>
            <div className="card-details">
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">CAPACITY</span>
                  <span className="spec-value">9 Passengers</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">VIP FEATURES</span>
                  <span className="spec-value">Panoramic View</span>
                </div>
              </div>
              <div className="card-footer">
                <div>
                  <h3 className="card-title">Staria</h3>
                  <span className="card-subtitle">FUTURISTIC COMFORT</span>
                </div>
                <a href="/fleet/staria" className="btn-link">EXPLORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteSelection;
