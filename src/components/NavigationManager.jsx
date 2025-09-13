import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Sistema simplificado de navegación con transiciones suaves para React Router
 */
const NavigationManager = () => {
  const navigate = useNavigate();

  // Crear una referencia global a la función navigate para usarla desde cualquier parte
  useEffect(() => {
    let timeoutId1 = null;
    let timeoutId2 = null;
    
    // Función para manejar la navegación con transición
    const handleNavigation = (event) => {
      const { detail } = event;
      if (detail && detail.path) {
        // Mostrar overlay de transición
        const overlay = document.getElementById('transitionOverlay');
        if (overlay) {
          overlay.classList.add('visible');
        }

        // Prevenir scroll durante la transición
        document.body.style.overflow = 'hidden';

        // Navegar a la nueva ruta después de un breve retraso
        timeoutId1 = setTimeout(() => {
          navigate(detail.path);
          
          // Restaurar scroll y ocultar overlay después de la navegación
          timeoutId2 = setTimeout(() => {
            window.scrollTo(0, 0);
            document.body.style.overflow = '';
            
            // Ocultar overlay una vez cargada la página
            if (overlay) {
              overlay.classList.remove('visible');
            }
          }, 400);
        }, 400);
      }
    };

    // Registrar el event listener
    window.addEventListener('customNavigate', handleNavigation);

    // Limpiar al desmontar
    return () => {
      window.removeEventListener('customNavigate', handleNavigation);
      // Clear any pending timeouts to prevent race conditions
      if (timeoutId1) clearTimeout(timeoutId1);
      if (timeoutId2) clearTimeout(timeoutId2);
    };
  }, [navigate]);

  return null; // Este componente no renderiza nada
};

/**
 * Función auxiliar para navegar con transición desde cualquier componente
 */
export const navigateWithTransition = (path) => {
  if (!path) return;
  
  // Disparar evento personalizado para la navegación
  window.dispatchEvent(
    new CustomEvent('customNavigate', {
      detail: { path }
    })
  );
};

export default NavigationManager;
