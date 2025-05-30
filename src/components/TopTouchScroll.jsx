import React, { useEffect } from 'react';

const TopTouchScroll = () => {
  useEffect(() => {
    // Altura del área de toque en la parte superior
    const touchAreaHeight = 150; // píxeles
    
    // Función para hacer scroll suave hacia arriba
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
    // Crear un área de toque en la parte superior de la pantalla
    const touchArea = document.createElement('div');
    touchArea.id = 'top-touch-area';
    touchArea.style.position = 'fixed';
    touchArea.style.top = '0';
    touchArea.style.left = '0';
    touchArea.style.width = '100%';
    touchArea.style.height = touchAreaHeight + 'px';
    touchArea.style.zIndex = '9999';
    touchArea.style.cursor = 'pointer';
    
    // Hacer el área totalmente transparente pero clickeable
    touchArea.style.opacity = '0';
    
    // Añadir el evento de toque
    const handleTouch = (event) => {
      // Prevenir comportamiento predeterminado
      event.preventDefault();
      
      // Comprobar si el toque es en la parte superior
      if (event.touches && event.touches.length > 0) {
        const touchY = event.touches[0].clientY;
        if (touchY <= touchAreaHeight) {
          scrollToTop();
        }
      }
    };
    
    // Añadir el evento de clic para compatibilidad con navegadores de escritorio
    touchArea.addEventListener('click', scrollToTop);
    touchArea.addEventListener('touchstart', handleTouch);
    
    // Añadir el área de toque al body
    document.body.appendChild(touchArea);
    
    // Limpieza al desmontar
    return () => {
      touchArea.removeEventListener('click', scrollToTop);
      touchArea.removeEventListener('touchstart', handleTouch);
      if (document.body.contains(touchArea)) {
        document.body.removeChild(touchArea);
      }
    };
  }, []);
  
  return null;
};

export default TopTouchScroll;
