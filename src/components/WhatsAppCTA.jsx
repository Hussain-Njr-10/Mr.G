import React, { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhatsAppCTA.css';

gsap.registerPlugin(ScrollTrigger);

const WhatsAppCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    // Scale up reveal
    const ctaPanel = el.querySelector('.cta-content');
    gsap.fromTo(ctaPanel,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1, 
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
        }
      }
    );

    // Continuous floating animation
    gsap.to(ctaPanel, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Background parallax
    const bgImg = el.querySelector('.cta-bg-image');
    gsap.to(bgImg, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=I%20am%20interested%20in%20booking%20a%20premium%20ride', '_blank');
  };

  return (
    <section className="whatsapp-cta-section" ref={sectionRef}>
      <div className="cta-background">
        <div className="cta-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80" 
          alt="Luxury Alphard" 
          className="cta-bg-image" 
          style={{ height: '120%', top: '-10%', position: 'relative', width: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className="container">
        <div className="cta-content glass-panel" style={{ borderTop: '1px solid rgba(255,255,255,0.2)', borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
          <h2 className="cta-title">Ready For A <span className="metallic-text">Premium Ride?</span></h2>
          <p className="cta-subtitle text-secondary">Your chauffeur is only one message away.</p>
          
          <button className="whatsapp-btn gold-glow-hover" onClick={handleWhatsApp}>
            <MessageCircle size={24} />
            <span>Book On WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
