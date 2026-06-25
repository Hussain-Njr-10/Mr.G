import React, { useEffect, useRef } from 'react';
import { User, ShieldCheck, Eye } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './StandardOfExcellence.css';

gsap.registerPlugin(ScrollTrigger);

const StandardOfExcellence = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    
    // Parallax on the image
    const img = el.querySelector('.excellence-image');
    gsap.to(img, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: el.querySelector('.excellence-image-wrapper'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Cascading fade in for feature items
    const features = el.querySelectorAll('.feature-item');
    gsap.fromTo(features,
      { opacity: 0, x: -30 },
      {
        opacity: 1, 
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el.querySelector('.features-list'),
          start: 'top 80%',
        }
      }
    );
    
    // Fade in testimonial
    const testimonial = el.querySelector('.testimonial-content');
    gsap.fromTo(testimonial,
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el.querySelector('.testimonial-section'),
          start: 'top 80%',
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <section className="excellence-section">
        <div className="container excellence-container">
        <div className="excellence-content">
          <h2 className="section-title excellence-title">The Standard of<br/>Excellence</h2>
          <p className="excellence-desc">
            We don't just provide transport; we curate an environment of absolute tranquility. Every detail is calibrated to your preference, from the temperature of the cabin to the silence of the drive.
          </p>

          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <User size={20} />
              </div>
              <div className="feature-text">
                <h4 className="feature-name">MASTER CHAUFFEURS</h4>
                <p>Highly trained professionals committed to discretion and safety.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={20} />
              </div>
              <div className="feature-text">
                <h4 className="feature-name">PRISTINE FLEET</h4>
                <p>Vehicles maintained to a showroom standard, inside and out.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Eye size={20} />
              </div>
              <div className="feature-text">
                <h4 className="feature-name">RADICAL TRANSPARENCY</h4>
                <p>Fixed pricing with no hidden surprises. Ever.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="excellence-image-wrapper" style={{ overflow: 'hidden' }}>
          <img 
            src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80" 
            alt="Chauffeur Service" 
            className="excellence-image"
            style={{ height: '120%', top: '-10%', position: 'relative', width: '100%', objectFit: 'cover' }}
          />
        </div>
        </div>
      </section>
      
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-content">
            <span className="quote-mark">"</span>
            <p className="testimonial-text">
              The seamless transition from the airport to my meeting in a silent, perfectly appointed Alphard redefined my expectations of travel in SE Asia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StandardOfExcellence;
