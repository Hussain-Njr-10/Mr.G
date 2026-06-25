import React, { useEffect } from 'react';
import LenisProvider from '../components/LenisProvider';
import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import WhatsAppCTA from '../components/WhatsAppCTA';
import Footer from '../components/Footer';

const Reserve = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LenisProvider>
      <Navbar />
      <main>
        <PageHero 
          title="Reserve" 
          subtitle="Begin Your Journey" 
          backgroundImage="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80" 
        />
        {/* Reuse the WhatsAppCTA for the booking flow */}
        <WhatsAppCTA />
      </main>
      <Footer />
    </LenisProvider>
  );
};

export default Reserve;
