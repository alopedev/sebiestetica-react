import React, { useEffect } from 'react';
import ServicesSection from '../components/Services/ServicesSection';
import CtaSection from '../components/CtaSection/CtaSection';

function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">Nuestros Servicios</h1>
      <ServicesSection />
      <CtaSection />
    </div>
  );
}

export default ServicesPage;
