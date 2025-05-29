import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollFix from './components/ScrollFix';
import PageTransition from './components/PageTransition';
import NavigationManager from './components/NavigationManager';
import './App.css';
import './components/button-fix.css'; // Corrección para el botón de contacto
import './components/performance-fixes.css'; // Optimizaciones de rendimiento

// Importar componentes
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutSection from './components/About/AboutSection';
import ServicesSection from './components/Services/ServicesSection';
import CtaSection from './components/CtaSection/CtaSection';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

// Importar páginas de servicios individuales
import Microblading from './pages/Services/Microblading';
import Micropigmentacion from './pages/Services/Micropigmentacion';
import Micropuncion from './pages/Services/Micropuncion';
import EscuelaMaquillaje from './pages/Services/EscuelaMaquillaje';
import DisenoCejas from './pages/Services/DisenoCejas';
import TinteCejasPestanas from './pages/Services/TinteCejasPestanas';



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
  // Asegurar scroll al inicio en la sección Nosotros
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

function Services() {
  // Asegurar scroll al inicio en la sección Servicios
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

// Se ha reemplazado por el componente ScrollFix

function Contact() {
  // Asegurar scroll al inicio en la sección Contacto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      {/* Componente de transición entre páginas */}
      <PageTransition />
      
      {/* Componente para manejar la navegación con transiciones */}
      <NavigationManager />
      
      {/* Componente mejorado que asegura el scroll al inicio en cada navegación */}
      <ScrollFix />
      
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
          
          {/* Rutas para servicios individuales */}
          <Route path="/servicios/microblading" element={<Microblading />} />
          <Route path="/servicios/micropigmentacion" element={<Micropigmentacion />} />
          <Route path="/servicios/micropuncion" element={<Micropuncion />} />
          <Route path="/servicios/escuela-maquillaje" element={<EscuelaMaquillaje />} />
          <Route path="/servicios/diseno-cejas" element={<DisenoCejas />} />
          <Route path="/servicios/tinte-cejas-pestanas" element={<TinteCejasPestanas />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
