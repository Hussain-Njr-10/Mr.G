import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    const img = imageRef.current;
    
    // Parallax effect on the hero image
    gsap.to(img, {
      yPercent: 30, // image moves slower than scroll
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80" 
          alt="Luxury Vehicle" 
          className="hero-image"
          style={{ height: '130%', top: '-15%', position: 'relative' }} 
        />
      </div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="hero-title">
            <motion.span className="hero-title-line" variants={childVariants}>The Art of</motion.span>
            <motion.span className="hero-title-line hero-title-italic" variants={childVariants}>the Journey</motion.span>
          </h1>
          
          <div className="hero-bottom-grid">
            <motion.p className="hero-subtitle" variants={childVariants}>
              Transcending transportation into a choreographed experience of comfort, precision, and absolute discretion.
            </motion.p>
            
            <motion.a href="#fleet" className="hero-cta" variants={childVariants}>
              DISCOVER THE FLEET <span className="hero-cta-dot"></span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
