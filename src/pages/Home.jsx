import React from 'react';
import Hero from '../components/Hero/Hero';
import AboutSection from '../components/About/AboutSection';
import ServicesSection from '../components/Services/ServicesSection';
import CtaSection from '../components/CtaSection/CtaSection';
import Testimonials from '../components/Testimonials/Testimonials';

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CtaSection />
      <Testimonials />
    </>
  );
}

export default Home;
