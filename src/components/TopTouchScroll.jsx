import React, { useEffect } from 'react';

/**
 * Componente que permite hacer scroll hacia arriba al tocar la parte superior de la pantalla.
 * El enfoque simplificado modifica directamente el header para darle la funcionalidad.
 */
const TopTouchScroll = () => {
  useEffect(() => {
    // Esperar a que el DOM esté completamente cargado
    const setupHeaderScrollToTop = () => {
      // Buscar el elemento header existente
      const headerElement = document.querySelector('.header-top-bar');
      
      if (headerElement) {
        console.log('Header encontrado, añadiendo funcionalidad de scroll');
        
        // Función para hacer scroll suave hacia arriba
        const scrollToTop = () => {
          console.log('Ejecutando scroll hacia arriba');
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        };
        
        // Agregar un indicador visual sutil (opcional)
        headerElement.style.cursor = 'pointer';
        
        // Añadir eventos directamente al header
        headerElement.addEventListener('click', scrollToTop);
        headerElement.addEventListener('touchstart', (e) => {
          // No prevenimos el comportamiento predeterminado para permitir
          // que los enlaces dentro del header sigan funcionando
          scrollToTop();
        });
        
        console.log('Eventos de scroll añadidos al header');
      } else {
        console.error('No se encontró el elemento header');
      }
    };
    
    // Asegurar que el DOM esté listo
    if (document.readyState === 'complete') {
      setupHeaderScrollToTop();
    } else {
      window.addEventListener('load', setupHeaderScrollToTop);
    }
    
    // Limpieza al desmontar
    return () => {
      const headerElement = document.querySelector('.header-top-bar');
      if (headerElement) {
        headerElement.removeEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
        headerElement.removeEventListener('touchstart', () => window.scrollTo({top: 0, behavior: 'smooth'}));
      }
      window.removeEventListener('load', setupHeaderScrollToTop);
    };
  }, []);
  
  return null;
};

export default TopTouchScroll;
