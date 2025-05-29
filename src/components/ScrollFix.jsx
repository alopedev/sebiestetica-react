import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Componente global para manejar el scroll en toda la aplicación
function ScrollFix() {
  const location = useLocation();

  // Esta función fuerza el scroll al inicio de la página
  const forceScrollToTop = () => {
    // Múltiples intentos con diferentes técnicas para garantizar compatibilidad
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
    
    // Intentos adicionales con timeouts para asegurar que funcione después de que el DOM se actualice
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 0);
    
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100);
    
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 500);
  };

  // Ejecutar cuando cambia la ruta
  useEffect(() => {
    forceScrollToTop();
  }, [location.pathname]);

  // También exportamos la función para usarla directamente en enlaces
  window.forceScrollToTop = forceScrollToTop;

  return null; // Este componente no renderiza nada
}

export default ScrollFix;
