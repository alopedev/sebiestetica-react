import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

// Importar componentes de la página de inicio
import Hero from './components/Hero/Hero';
import AboutSection from './components/About/AboutSection';
import ServicesSection from './components/Services/ServicesSection';
import CtaSection from './components/CtaSection/CtaSection';
import Testimonials from './components/Testimonials/Testimonials';

// Importar componentes de diseño
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Página de inicio que combina los componentes
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

// Páginas adicionales (a implementar)
function About() {
  return <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Sobre Nosotros</h1>
    <p>Página en construcción. Próximamente más información sobre nuestra empresa.</p>
  </div>;
}

function Services() {
  return <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Nuestros Servicios</h1>
    <p>Página en construcción. Próximamente información detallada sobre nuestros servicios.</p>
  </div>;
}

function Contact() {
  return <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Contacto</h1>
    <p>Página en construcción. Próximamente podrás contactarnos a través de este formulario.</p>
  </div>;
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cerrar el menú móvil al cambiar de ruta
  useEffect(() => {
    const handleRouteChange = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    return () => {
      // Limpiar el event listener
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="app">
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
