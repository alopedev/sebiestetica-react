import React, { useEffect } from 'react';
import AboutSection from '../components/About/AboutSection';

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">Nosotros</h1>
      <AboutSection />
    </div>
  );
}

export default AboutPage;
