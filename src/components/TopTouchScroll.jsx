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
      
      if (touch.clientY <= topThreshold) {
        // Hacer scroll hacia el top suavemente
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    
    // Añadir el evento a nivel global
    window.addEventListener('touchstart', handleTouchStart);
    
    // Función para identificar visualmente la área de toque (opcional)
    const addVisualIndicator = () => {
      
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
