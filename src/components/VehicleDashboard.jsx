import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  ArrowLeft, User, Sliders, Calendar, MessageSquare, 
  MapPin, Settings, Check, Clock, ChevronRight, ChevronLeft,
  Paperclip, Mic, Send, X, CreditCard, Expand, PieChart, ShieldCheck, NotebookPen
} from 'lucide-react';
import './VehicleDashboard.css';

const vehicleData = {
  alphard: {
    title: 'Toyota Alphard',
    subtitle: 'Executive Lounge Edition',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80',
    type: 'Luxury MPV'
  },
  staria: {
    title: 'Hyundai Staria',
    subtitle: 'Futuristic Comfort',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80',
    type: 'Premium Van'
  },
  vellfire: {
    title: 'Toyota Vellfire',
    subtitle: 'Bold Sophistication',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80',
    type: 'Luxury MPV'
  }
};

const VehicleDashboard = () => {
  const { id } = useParams();
  const car = vehicleData[id] || vehicleData['alphard'];
  
  const dashboardRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const el = dashboardRef.current;
    
    // Initial Assembly Animation
    const panels = el.querySelectorAll('.dash-glass:not(.dashboard-modal-content)');
    const carImage = el.querySelector('.car-image');
    
    const tl = gsap.timeline();
    
    // Animate panels in
    tl.fromTo(panels, 
      { y: 50, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: 'power3.out' }
    );
    
    // Animate car sliding in
    tl.fromTo(carImage,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: 'power2.out' },
      "-=0.8"
    );

    // Continuous float for the assistant panel
    const assistantPanel = el.querySelector('.dash-assistant');
    gsap.to(assistantPanel, {
      y: -10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

  }, [id]);

  return (
    <>
      <div className="vehicle-dashboard" ref={dashboardRef}>
        <div className="dashboard-bg-noise"></div>
        
        {/* Top Bar */}
        <div className="dash-topbar">
          <a href="/" className="sidebar-icon" style={{ borderRadius: '50%' }}>
            <ArrowLeft size={20} />
          </a>
          
          <div className="toggle-group">
            <div className="toggle-btn active">Rent</div>
            <div className="toggle-btn">Buy</div>
            <div className="toggle-btn">Sell</div>
          </div>
          
          <div className="location-display">
            <MapPin size={16} className="text-accent" />
            <span>Your Location: Tokyo, Japan</span>
            <div className="sidebar-icon" style={{ borderRadius: '50%', width: '40px', height: '40px', marginLeft: '1rem' }}>
              <Settings size={18} />
            </div>
          </div>
        </div>

        {/* Sidebar Nav */}
        <div className={`dash-sidebar ${expandedCard ? 'elevated-sidebar' : ''}`}>
          <div className="sidebar-icon active"><User size={22} /></div>
          <div className="sidebar-icon"><Sliders size={22} /></div>
          <div className="sidebar-icon"><Calendar size={22} /></div>
          <div className="sidebar-icon"><MessageSquare size={22} /></div>
        </div>

        {/* Center Canvas */}
        <div className="dash-canvas">
          <div className={`car-title-wrapper ${expandedCard ? 'elevated-sidebar' : ''}`}>
            <h1 className="car-title">{car.title}</h1>
            <p className="car-subtitle">{car.subtitle}</p>
            <div className="badges">
              <div className="badge-circle active">L</div>
              <div className="badge-circle">R</div>
              <div className="badge-circle">F</div>
              <div className="badge-circle">B</div>
            </div>
          </div>
          
          <div className="car-image-container">
            <img src={car.image} alt={car.title} className="car-image" />
          </div>
        </div>

        {/* Right Assistant Panel */}
        <div className="dash-assistant dash-glass">
          <div className="assistant-header">
            <div>
              <h2 className="assistant-title">AI Assistant</h2>
              <p className="assistant-sub">How can I help you?</p>
            </div>
            <div className="sidebar-icon" style={{ width: '30px', height: '30px' }}><X size={16} /></div>
          </div>
          
          <div className="assistant-grid">
            <div className="assist-option">
              <div className="assist-option-header">
                <NotebookPen size={16} className="text-accent" />
                <span>Book a rent</span>
              </div>
              <span className="assist-option-sub">5 min</span>
            </div>
            
            <div className="assist-option">
              <div className="assist-option-header">
                <PieChart size={16} />
                <span>Analysis</span>
              </div>
              <span className="assist-option-sub">Damages</span>
            </div>
            
            <div className="assist-option">
              <div className="assist-option-header">
                <ShieldCheck size={16} />
                <span>Insurance</span>
              </div>
              <span className="assist-option-sub">Pick a Plan</span>
            </div>
            
            <div className="assist-option">
              <div className="assist-option-header">
                <CreditCard size={16} />
                <span>Payment</span>
              </div>
              <span className="assist-option-sub">Calculate</span>
            </div>
          </div>
          
          <div className="chat-input-wrapper">
            <input type="text" className="chat-input" placeholder="Arrange to rent this car for 8am" defaultValue="Arrange to rent this car for 8am|" />
            <div className="chat-actions">
              <div className="chat-icon-btns">
                <div className="icon-btn"><Mic size={16} /></div>
                <div className="icon-btn"><Paperclip size={16} /></div>
                <div className="icon-btn"><Settings size={16} /></div>
              </div>
              <button className="send-btn">
                Send <Send size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Control Deck */}
        <div className="dash-bottom-deck">
          <div className="deck-card dash-glass">
            <div className="deck-header">
              <div>
                <h3 className="deck-title">My Location</h3>
                <p className="deck-sub">Shinjuku, Tokyo</p>
              </div>
              <Expand size={16} className="expand-icon" onClick={() => setExpandedCard('location')} />
            </div>
            <div className="map-placeholder">
              <div className="map-pin"><MapPin size={16} /></div>
            </div>
          </div>
          
          <div className="deck-card dash-glass">
            <div className="deck-header">
              <div>
                <h3 className="deck-title">My Dates</h3>
                <p className="deck-sub">20th of July · 10:25 AM</p>
              </div>
              <Expand size={16} className="expand-icon" onClick={() => setExpandedCard('dates')} />
            </div>
            <div className="dates-content">
              <div className="date-big">
                <ChevronLeft size={20} className="arrow-btn" />
                <span>20</span>
                <span className="date-month">Jul</span>
                <ChevronRight size={20} className="arrow-btn" />
              </div>
              <div className="time-big">10:25 <span style={{ fontSize: '0.9rem' }}>AM</span></div>
            </div>
          </div>
          
          <div className="deck-card dash-glass">
            <div className="deck-header">
              <div>
                <h3 className="deck-title">Payment Method</h3>
                <p className="deck-sub">Credit Card</p>
              </div>
              <Expand size={16} className="expand-icon" onClick={() => setExpandedCard('payment')} />
            </div>
            <div className="payment-method">
              <div className="payment-details">
                <CreditCard size={20} />
                <div>
                  <div style={{ fontSize: '0.9rem' }}>Credit Card</div>
                  <div className="card-number">3451 **** **** 7896</div>
                </div>
              </div>
              <div className="radio-circle">
                <div className="radio-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {expandedCard && (
          <motion.div 
            className="dashboard-modal-overlay"
            style={{ pointerEvents: 'none' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={`dashboard-modal-content dash-glass ${expandedCard === 'location' ? 'location-expanded' : ''}`}
              style={{ pointerEvents: 'auto' }}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {expandedCard === 'location' && (
                <div className="location-modal-full">
                  {/* Top Bar */}
                  <div className="lm-topbar">
                    <div className="lm-top-left">
                      <div className="lm-icon-box"><User size={20} /></div>
                      <div>
                        <h3 className="deck-title" style={{fontSize: '1.4rem', marginBottom: '0.2rem', fontFamily: 'var(--font-heading)', color: '#fff'}}>My Location</h3>
                        <p className="deck-sub" style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)'}}>Shinjuku, Tokyo</p>
                      </div>
                    </div>
                    <button className="lm-close-btn" onClick={() => setExpandedCard(null)}>
                      <X size={18} />
                    </button>
                  </div>

                  {/* Center Radar */}
                  <div className="lm-center-radar">
                    <div className="radar-circle circle-1"></div>
                    <div className="radar-circle circle-2"></div>
                    <div className="radar-circle circle-3"></div>
                    <div className="radar-pin">
                      <MapPin size={40} fill="currentColor" strokeWidth={1} color="#111" />
                    </div>
                  </div>

                  {/* Bottom Left Info */}
                  <div className="lm-bottom-info">
                    <MapPin size={20} className="text-accent" />
                    <div>
                      <div style={{fontWeight: 500, fontSize: '1.1rem', color: '#fff'}}>Shinjuku, Tokyo</div>
                      <div style={{color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginTop: '0.3rem'}}>Japan 〒160-0022</div>
                    </div>
                  </div>
                </div>
              )}
              
              {expandedCard === 'dates' && (
                <>
                  <div className="deck-header">
                    <div>
                      <h3 className="deck-title">My Dates</h3>
                      <p className="deck-sub">20th of July · 10:25 AM</p>
                    </div>
                    <X size={20} className="expand-icon" onClick={() => setExpandedCard(null)} style={{cursor: 'pointer'}} />
                  </div>
                  <div className="dates-content" style={{flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <div className="date-big">
                      <ChevronLeft size={30} className="arrow-btn" />
                      <span style={{fontSize: '4rem'}}>20</span>
                      <span className="date-month" style={{fontSize: '2rem'}}>Jul</span>
                      <ChevronRight size={30} className="arrow-btn" />
                    </div>
                    <div className="time-big" style={{fontSize: '3rem', justifyContent: 'center'}}>
                      10:25 <span style={{ fontSize: '1.2rem', marginLeft: '10px' }}>AM</span>
                    </div>
                  </div>
                </>
              )}

              {expandedCard === 'payment' && (
                <>
                  <div className="deck-header">
                    <div>
                      <h3 className="deck-title">Payment Method</h3>
                      <p className="deck-sub">Credit Card</p>
                    </div>
                    <X size={20} className="expand-icon" onClick={() => setExpandedCard(null)} style={{cursor: 'pointer'}} />
                  </div>
                  <div className="payment-method" style={{flexGrow: 1, alignItems: 'center'}}>
                    <div className="payment-details">
                      <CreditCard size={32} />
                      <div>
                        <div style={{ fontSize: '1.2rem' }}>Credit Card</div>
                        <div className="card-number" style={{ fontSize: '1.2rem' }}>3451 **** **** 7896</div>
                      </div>
                    </div>
                    <div className="radio-circle" style={{width: '24px', height: '24px'}}>
                      <div className="radio-inner" style={{width: '12px', height: '12px'}}></div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VehicleDashboard;
