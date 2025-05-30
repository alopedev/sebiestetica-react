import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollFix from './components/ScrollFix';
import PageTransition from './components/PageTransition';
import NavigationManager from './components/NavigationManager';
import TopTouchScroll from './components/TopTouchScroll'; // Importar el componente de scroll al tocar
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
import TerapiaInduccionColageno from './pages/Services/TerapiaInduccionColageno';
import Manicura from './pages/Services/Manicura';
import LocationPage from './pages/Location/LocationPage';



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

// La función Contact ha sido eliminada ya que la dueña del negocio no utiliza el correo electrónico

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
      
      {/* Componente para permitir scroll al tocar la parte superior en móviles */}
      <TopTouchScroll />
      
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
          {/* Ruta de contacto eliminada */}
          
          {/* Rutas para servicios individuales */}
          <Route path="/servicios/microblading" element={<Microblading />} />
          <Route path="/servicios/micropigmentacion" element={<Micropigmentacion />} />
          <Route path="/servicios/micropuncion" element={<Micropuncion />} />
          <Route path="/servicios/escuela-maquillaje" element={<EscuelaMaquillaje />} />
          <Route path="/servicios/diseno-cejas" element={<DisenoCejas />} />
          <Route path="/servicios/tinte-cejas-pestanas" element={<TinteCejasPestanas />} />
          <Route path="/servicios/terapia-induccion-colageno" element={<TerapiaInduccionColageno />} />
          <Route path="/servicios/manicura" element={<Manicura />} />
          <Route path="/ubicacion" element={<LocationPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
