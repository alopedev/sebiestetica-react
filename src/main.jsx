import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { applyPerformanceOptimizations, optimizeFonts } from './components/performance-optimizations';
import { faBars, faTimes, faPhone, faArrowDown, faCalendarAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import App from './App';

// Importar estilos globales
import './index.css'; // imports colors.css internally
import './styles/migrated-inline-styles.css';
// import './styles/colors.css'; // Redundant: colors.css is imported by index.css
import './styles/global.css';
import './styles/background-fix.css'; // Corrección para unificar colores y mejorar formulario
import './styles/layout-fixes.css'; // Corrección para el layout general, formulario y hero
import './components/common/section-titles-enhanced.css'; // Mejoras visuales para títulos de secciones
import './styles/mobile-fixes.css'; // Soluciones definitivas para dispositivos móviles
import './styles/mobile-emergency-fixes.css'; // Correcciones de emergencia para móviles

// Configurar FontAwesome
library.add(faBars, faTimes, faPhone, faArrowDown, faCalendarAlt, faSpinner, faFacebookF, faInstagram);

// Renderizar la aplicación dentro de BrowserRouter para habilitar la navegación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Aplicar optimizaciones de rendimiento después de que la aplicación se haya cargado
window.addEventListener('load', () => {
  // Pequeño retraso para asegurar que los componentes principales ya se hayan renderizado
  setTimeout(() => {
    applyPerformanceOptimizations();
    optimizeFonts();
    
    // Registrar que las optimizaciones se han aplicado
    console.log('Optimizaciones de rendimiento aplicadas');
  }, 200);
});
