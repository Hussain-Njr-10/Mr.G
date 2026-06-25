import React, { useEffect } from 'react';
import VehicleDashboard from '../components/VehicleDashboard';
import Footer from '../components/Footer';
import LenisProvider from '../components/LenisProvider';

const VehicleDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LenisProvider>
      <main>
        <VehicleDashboard />
      </main>
      <Footer />
    </LenisProvider>
  );
};

export default VehicleDetails;
