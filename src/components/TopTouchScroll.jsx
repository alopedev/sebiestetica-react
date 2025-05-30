import React, { useEffect } from 'react';

const TopTouchScroll = () => {
  useEffect(() => {
    // Definir la zona sensible al toque (parte superior de la pantalla)
    const topThreshold = 120; // altura en píxeles desde el top
    
    // Función para manejar el evento de toque
    const handleTouch = (event) => {
      // Obtener la posición del toque
      if (event.touches && event.touches.length > 0) {
        const touchY = event.touches[0].clientY;
        
        // Si el toque está dentro de la zona superior definida
        if (touchY < topThreshold) {
          console.log('Toque en la parte superior detectado:', touchY);
          // Scroll suave hacia arriba
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Función para manejar clics en el header (alternativa para algunos dispositivos)
    const handleHeaderClick = (event) => {
      const clickY = event.clientY;
      if (clickY < topThreshold) {
        console.log('Clic en la parte superior detectado:', clickY);
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };
    
    // Agregar eventos para detectar interacciones en la pantalla
    document.addEventListener('touchstart', handleTouch, { passive: true });
    document.addEventListener('click', handleHeaderClick);
    
    // Crear un elemento visible que cubra la parte superior de la pantalla
    const touchArea = document.createElement('div');
    touchArea.style.position = 'fixed';
    touchArea.style.top = '0';
    touchArea.style.left = '0';
    touchArea.style.width = '100%';
    touchArea.style.height = topThreshold + 'px';
    touchArea.style.zIndex = '9999';
    touchArea.style.opacity = '0'; // Invisible pero funcional
    touchArea.style.pointerEvents = 'auto';
    touchArea.id = 'top-touch-area';
    
    touchArea.addEventListener('click', () => {
      console.log('Elemento de toque superior clickeado');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    document.body.appendChild(touchArea);
    
    // Limpieza del evento cuando el componente se desmonta
    return () => {
      document.removeEventListener('touchstart', handleTouch);
      document.removeEventListener('click', handleHeaderClick);
      const element = document.getElementById('top-touch-area');
      if (element) {
        element.remove();
      }
    };
  }, []);
  
  // Este componente no renderiza nada visible en React
  return null;
};

export default TopTouchScroll;
