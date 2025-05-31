import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollFix from './components/ScrollFix';
import PageTransition from './components/PageTransition';
import NavigationManager from './components/NavigationManager';
import TopTouchScroll from './components/TopTouchScroll'; // Importar el componente de scroll al tocar
import './App.css';
import './components/button-fix.css'; // Corrección para el botón de contacto
import './components/performance-fixes.css'; // Optimizaciones de rendimiento

// Importar componentes principales (no lazy)
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const Microblading = lazy(() => import('./pages/Services/Microblading'));
const Micropigmentacion = lazy(() => import('./pages/Services/Micropigmentacion'));
const Micropuncion = lazy(() => import('./pages/Services/Micropuncion'));
const EscuelaMaquillaje = lazy(() => import('./pages/Services/EscuelaMaquillaje'));
const DisenoCejas = lazy(() => import('./pages/Services/DisenoCejas'));
const TinteCejasPestanas = lazy(() => import('./pages/Services/TinteCejasPestanas'));
const TerapiaInduccionColageno = lazy(() => import('./pages/Services/TerapiaInduccionColageno'));
const Manicura = lazy(() => import('./pages/Services/Manicura'));
const LocationPage = lazy(() => import('./pages/Location/LocationPage'));


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
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2rem' }}>Cargando página...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<AboutPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
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
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
