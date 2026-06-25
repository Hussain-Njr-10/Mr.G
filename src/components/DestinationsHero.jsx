import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import './DestinationsHero.css';

// Using verified famous Unsplash images to guarantee no broken links
const allDestinations = [
  {
    id: 1,
    title: "Genting Highlands",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80" // Mountains
  },
  {
    id: 2,
    title: "KLIA Transfer",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80" // Travel/Airport
  },
  {
    id: 3,
    title: "Cameron Highlands",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80" // Nature/Hills
  },
  {
    id: 4,
    title: "Johor Bahru",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80" // City
  },
  {
    id: 5,
    title: "Penang Island",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80" // Street/Heritage
  },
  {
    id: 6,
    title: "Malacca City",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80" // Architecture/City
  }
];

const DestinationsHero = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = allDestinations.length - 2; // 2 visible cards because they are wider
  
  useEffect(() => {
    const el = containerRef.current;
    
    // Initial text animation
    gsap.fromTo(el.querySelectorAll('.hero-text-anim'), 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
    );
    
    // Initial cards track animation
    gsap.fromTo(el.querySelector('.dh-cards-track'),
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="destinations-hero" ref={containerRef}>
      {/* Background Images with Crossfade */}
      <div className="dh-bg-wrapper">
        <div className="dh-overlay"></div>
        {allDestinations.map((dest, index) => (
          <img 
            key={`bg-${dest.id}`}
            src={dest.image} 
            alt="Destinations Background" 
            className="dh-bg-img" 
            style={{ 
              opacity: index === activeIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out'
            }}
          />
        ))}
      </div>

      <div className="container dh-container">
        {/* Left Side: Content */}
        <div className="dh-content">
          <span className="dh-subtitle hero-text-anim">Travel Website</span>
          <h1 className="dh-title hero-text-anim">
            NEVER STOP<br />EXPLORING THE<br />WORLD.
          </h1>
          <p className="dh-desc hero-text-anim">
            Elevate your journey with our curated experiences. From high-altitude luxury resorts to seamless airport VIP transfers, travel in uncompromising comfort.
          </p>
          <div className="hero-text-anim">
            <button className="dh-btn">
              LEARN MORE <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Side: Cards Track */}
        <div className="dh-cards-wrapper">
          <div className="dh-pattern-dots"></div>
          <div 
            className="dh-cards-track"
            style={{ 
              transform: `translateX(calc(-${activeIndex} * (45% + 1.5rem)))`
            }}
          >
            {allDestinations.map((dest, index) => {
              // The second visible card dynamically pops up
              const isMiddle = index === activeIndex + 1;
              // Cards that have slid left past the active index should fade out
              const isPast = index < activeIndex;
              return (
                <div 
                  key={dest.id} 
                  className={`dh-card ${isMiddle ? 'is-middle' : ''}`}
                  style={{
                    opacity: isPast ? 0 : 1,
                    pointerEvents: isPast ? 'none' : 'auto'
                  }}
                >
                  <img src={dest.image} alt={dest.title} className="dh-card-img" />
                  <div className="dh-card-overlay"></div>
                  <h3 className="dh-card-title">{dest.title.split(' ')[0]}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Bottom pagination */}
      <div className="dh-pagination container">
        <div className="dh-controls">
          <button 
            className="dh-control-btn" 
            onClick={handlePrev}
            style={{ opacity: activeIndex === 0 ? 0.3 : 1, cursor: activeIndex === 0 ? 'default' : 'pointer' }}
          >&lt;</button>
          <button 
            className="dh-control-btn" 
            onClick={handleNext}
            style={{ opacity: activeIndex === maxIndex ? 0.3 : 1, cursor: activeIndex === maxIndex ? 'default' : 'pointer' }}
          >&gt;</button>
        </div>
        <div className="dh-progress-bar">
          <div 
            className="dh-progress-fill" 
            style={{ width: `${((activeIndex + 1) / (maxIndex + 1)) * 100}%`, transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
          ></div>
        </div>
        <span className="dh-page-num">0{activeIndex + 1}</span>
      </div>
    </section>
  );
};

export default DestinationsHero;
