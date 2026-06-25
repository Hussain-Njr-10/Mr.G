import React from 'react';
import LenisProvider from '../components/LenisProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import EliteSelection from '../components/EliteSelection';
import VehicleFeatures from '../components/VehicleFeatures';
import StandardOfExcellence from '../components/StandardOfExcellence';
import Destinations from '../components/Destinations';
import WhatsAppCTA from '../components/WhatsAppCTA';

const Home = () => {
  return (
    <LenisProvider>
      <Navbar />
      <main>
        <Hero />
        <EliteSelection />
        <VehicleFeatures />
        <StandardOfExcellence />
        <Destinations />
        <WhatsAppCTA />
      </main>
      <Footer />
    </LenisProvider>
  );
};

export default Home;
