import React, { useState, useEffect, useRef } from 'react';
import './PageTransition.css';

/**
 * Componente de transición de página
 * Maneja la animación de transición entre páginas basada en eventos
 */
const PageTransition = () => {
  // Estado para controlar la visibilidad del overlay de transición
  const [isTransitioning, setIsTransitioning] = useState(false);
  const overlayRef = useRef(null);
  const timeoutRef = useRef(null);
  
  // Limpiar timeouts al desmontar el componente
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  // Función para manejar la transición de página
  const handleTransition = () => {
    // Limpiar timeouts anteriores si existen
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Mostrar el overlay
    setIsTransitioning(true);
    
    // Aplicar clase de transición
    document.body.classList.add('page-transitioning');
    
    // Ocultar el overlay después de completar la transición
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      document.body.classList.remove('page-transitioning');
      
      // Aplicar efecto de aparición al nuevo contenido
      const mainContent = document.querySelector('.main-content');
      if (mainContent) {
        mainContent.classList.add('fade-in');
        
        // Eliminar la clase después de la animación
        setTimeout(() => {
          mainContent.classList.remove('fade-in');
        }, 500);
      }
    }, 800); // Tiempo ajustado para permitir que se vea bien la transición
  };
  
  // Escuchar el evento de navegación personalizado
  useEffect(() => {
    const handleNavigationStart = () => {
      handleTransition();
    };
    
    // Añadir el event listener para el evento de navegación personalizado
    window.addEventListener('customNavigate', handleNavigationStart);
    
    // Limpiar al desmontar
    return () => {
      window.removeEventListener('customNavigate', handleNavigationStart);
    };
  }, []);
  
  return (
    <div 
      id="transitionOverlay"
      ref={overlayRef}
      className={`page-transition-overlay ${isTransitioning ? 'visible' : ''}`}
      aria-hidden="true"
    >
      <div className="transition-logo">
        <span>Sebiestetica</span>
      </div>
    </div>
  );
};

export default PageTransition;
