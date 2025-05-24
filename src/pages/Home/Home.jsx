import React from 'react';
import Hero from '../../components/Hero/Hero';
import ServicesSection from '../../components/Services/ServicesSection';
import Testimonials from '../../components/Testimonials/Testimonials';
import AboutSection from '../../components/About/AboutSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
      <CtaSection />
    </div>
  );
};

export default Home;
