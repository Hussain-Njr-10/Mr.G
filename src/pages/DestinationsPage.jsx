import React, { useEffect } from 'react';
import LenisProvider from '../components/LenisProvider';
import Navbar from '../components/Navbar';
import DestinationsHero from '../components/DestinationsHero';
import Footer from '../components/Footer';

const DestinationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LenisProvider>
      <Navbar />
      <main>
        <DestinationsHero />
      </main>
      <Footer />
    </LenisProvider>
  );
};

export default DestinationsPage;
