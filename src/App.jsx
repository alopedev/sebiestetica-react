import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Importar componentes
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutSection from './components/About/AboutSection';
import ServicesSection from './components/Services/ServicesSection';
import CtaSection from './components/CtaSection/CtaSection';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';



// Definición de páginas
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

function About() {
  return (
    <div className="page-container">
      <h1 className="page-title">Nosotros</h1>
      <AboutSection />
    </div>
  );
}

function Services() {
  return (
    <div className="page-container">
      <h1 className="page-title">Nuestros Servicios</h1>
      <ServicesSection />
      <CtaSection />
    </div>
  );
}

function Contact() {
  return (
    <div className="page-container">
      <h1 className="page-title">Contacto</h1>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Tu email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" placeholder="¿En qué podemos ayudarte?"></textarea>
          </div>
          <button type="submit" className="btn-primary">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
}

function App() {
  // Estado para controlar el menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* Header con props correctas */}
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
