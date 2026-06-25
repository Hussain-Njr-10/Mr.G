import React from 'react';
import { MessageCircle } from 'lucide-react';
import './VehicleHero.css';

const VehicleHero = () => {
  return (
    <section className="vehicle-hero">
      <div className="vehicle-background">
        <h1 className="vehicle-bg-text">VELLFIRE</h1>
      </div>
      
      <div className="container vehicle-hero-container">
        {/* Left Sidebar Specs */}
        <div className="vehicle-specs-sidebar">
          <div className="spec-block">
            <span className="spec-label">CAPACITY</span>
            <span className="spec-value-large">07</span>
            <span className="spec-unit">SEATS</span>
          </div>
          <div className="spec-block">
            <span className="spec-label">LUGGAGE</span>
            <span className="spec-value-large">04</span>
            <span className="spec-unit">LARGE CASES</span>
          </div>
          <div className="spec-block">
            <span className="spec-label">COMFORT</span>
            <span className="spec-unit">PILOT SEATS</span>
          </div>
        </div>

        {/* Main Center Image */}
        <div className="vehicle-hero-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80" 
            alt="Toyota Vellfire" 
            className="vehicle-main-img"
          />
        </div>

        {/* Right Info Box */}
        <div className="vehicle-info-box">
          <h2 className="info-title">The<br/>Suite</h2>
          <p className="info-desc">
            Experience a private jet on wheels. The Vellfire Executive Lounge is designed for silence and sophistication.
          </p>
          
          <div className="info-pricing">
            <div className="pricing-label">
              <span>DAILY</span>
              <span>RATE</span>
            </div>
            <div className="pricing-value text-accent">$450</div>
          </div>
          
          <div className="info-chauffeur">
            <span className="chauffeur-label">CHAUFFEUR</span>
            <span className="chauffeur-value">INCLUDED</span>
          </div>
          
          <div className="info-actions">
            <button className="btn-request">REQUEST QUOTE</button>
            <button className="btn-whatsapp text-accent">
              <MessageCircle size={18} />
              WHATSAPP CONCIERGE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleHero;
