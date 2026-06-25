import React, { useEffect } from 'react';
import LenisProvider from '../components/LenisProvider';
import Navbar from '../components/Navbar';
import FleetShowcase from '../components/FleetShowcase';
import Footer from '../components/Footer';

const Fleet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LenisProvider>
      <Navbar />
      <main>
        <FleetShowcase />
      </main>
      <Footer />
    </LenisProvider>
  );
};

export default Fleet;
