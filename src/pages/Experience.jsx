import React, { useEffect } from 'react';
import LenisProvider from '../components/LenisProvider';
import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import StandardOfExcellence from '../components/StandardOfExcellence';
import VehicleFeatures from '../components/VehicleFeatures';
import Footer from '../components/Footer';

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LenisProvider>
      <Navbar />
      <main>
        <PageHero 
          title="The MR.G Experience" 
          subtitle="Beyond Transportation" 
          backgroundImage="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80" 
        />
        <StandardOfExcellence />
        <VehicleFeatures />
      </main>
      <Footer />
    </LenisProvider>
  );
};

export default Experience;
