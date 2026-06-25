import React, { useEffect, useRef } from 'react';
import { CalendarDays, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VehicleFeatures.css';

gsap.registerPlugin(ScrollTrigger);

const VehicleFeatures = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    // Metrics reveal
    const metrics = el.querySelectorAll('.metric-card');
    gsap.fromTo(metrics, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: el.querySelector('.metrics-grid'),
          start: 'top 80%',
        }
      }
    );

    // Features reveal
    const features = el.querySelectorAll('.feature-card');
    gsap.fromTo(features,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el.querySelector('.features-card-grid'),
          start: 'top 80%',
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="vehicle-features" ref={sectionRef}>
      <div className="container">
        {/* Availability & Security Grid */}
        <div className="metrics-grid">
          <div className="metric-card map-card glass-panel" style={{ overflow: 'hidden', position: 'relative' }}>
            <h3 className="metric-title" style={{ position: 'relative', zIndex: 2 }}>Tokyo</h3>
            <span className="metric-subtitle" style={{ position: 'relative', zIndex: 2 }}>AVAILABLE REGION</span>
          </div>
          
          <div className="metric-card glass-panel">
            <div className="metric-icon-wrapper">
              <CalendarDays className="text-secondary" size={24} />
              <span className="metric-badge">FLEXIBLE</span>
            </div>
            <h3 className="metric-title">Availability</h3>
            <p className="metric-desc">
              Our fleet maintains a 98% uptime for immediate dispatch within 2 hours of confirmation.
            </p>
          </div>
          
          <div className="metric-card glass-panel">
            <div className="metric-icon-wrapper">
              <ShieldCheck className="text-accent" size={24} />
              <span className="metric-badge text-accent">ENCRYPTED</span>
            </div>
            <h3 className="metric-title">Security</h3>
            <p className="metric-desc">
              Direct invoicing and secure payment gateways for corporate and high-profile clients.
            </p>
          </div>
        </div>

        {/* Interior Philosophy */}
        <div className="interior-section">
          <div className="interior-header">
            <span className="interior-label text-accent">INTERIOR PHILOSOPHY</span>
            <h2 className="section-title">The Art of Silence</h2>
          </div>
          
          <div className="features-card-grid">
            <div className="feature-card glass-panel" style={{ padding: '1rem', borderRadius: '12px' }}>
              <img 
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80" 
                alt="Leather Artistry" 
                className="feature-card-img"
                style={{ borderRadius: '8px' }}
              />
              <h4 className="feature-card-title">Leather Artistry</h4>
              <p className="feature-card-desc">
                Hand-stitched semi-aniline leather designed for multi-hour transit comfort.
              </p>
            </div>
            
            <div className="feature-card glass-panel" style={{ padding: '1rem', borderRadius: '12px' }}>
              <img 
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80" 
                alt="Nocturnal Glow" 
                className="feature-card-img"
                style={{ borderRadius: '8px' }}
              />
              <h4 className="feature-card-title">Nocturnal Glow</h4>
              <p className="feature-card-desc">
                Adjustable 64-color ambient lighting system to match your travel mood.
              </p>
            </div>
            
            <div className="feature-card glass-panel" style={{ padding: '1rem', borderRadius: '12px' }}>
              <img 
                src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80" 
                alt="White Glove" 
                className="feature-card-img"
                style={{ borderRadius: '8px' }}
              />
              <h4 className="feature-card-title">White Glove</h4>
              <p className="feature-card-desc">
                Discreet, professional chauffeurs trained in the art of hospitality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleFeatures;
