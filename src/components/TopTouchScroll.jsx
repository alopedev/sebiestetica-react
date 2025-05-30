import React, { useEffect } from 'react';

/**
 * Componente que permite hacer scroll hacia arriba al tocar la parte superior de la pantalla.
 * Implementa el código proporcionado por el usuario para detectar toques en la parte superior.
 */
const TopTouchScroll = () => {
  useEffect(() => {
    // Función de manejo de toques directamente en el documento
    const handleTouchStart = (event) => {
      // Obtener la posición del toque
      const touch = event.touches[0];
      const topThreshold = 50; // píxeles desde la parte superior para detectar el toque
      
      console.log('Touch detected at Y:', touch.clientY);

      if (touch.clientY <= topThreshold) {
        console.log('Top touch detected, scrolling to top');
        // Hacer scroll hacia el top suavemente
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    
    // Añadir el evento a nivel global
    window.addEventListener('touchstart', handleTouchStart);
    
    // Función para identificar visualmente la área de toque (opcional)
    const addVisualIndicator = () => {
      // Crear un indicador visual sutil en la consola
      console.log('Touch area active in top 50px of screen');
      
      // Opcional: Añadir un indicador visual en la parte superior
      const topBar = document.querySelector('.header-top-bar');
      if (topBar) {
        topBar.style.cursor = 'pointer';
      }
    };
    
    // Activar el indicador visual cuando el DOM esté listo
    if (document.readyState === 'complete') {
      addVisualIndicator();
    } else {
      window.addEventListener('load', addVisualIndicator);
    }
    
    // Limpieza al desmontar
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('load', addVisualIndicator);
    };
  }, []);
  
  return null;
};

export default TopTouchScroll;
