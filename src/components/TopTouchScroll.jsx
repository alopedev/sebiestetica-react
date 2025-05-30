import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const TopTouchScroll = () => {
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    // Función para verificar si se debe mostrar el botón
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    
    // Añadir detector de evento de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Estilos CSS inyectados para el botón
    const style = document.createElement('style');
    style.textContent = `
      .scroll-to-top-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #795548;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        transition: opacity 0.3s, transform 0.3s;
        opacity: 0;
        transform: scale(0);
        pointer-events: none;
      }
      
      .scroll-to-top-button.visible {
        opacity: 1;
        transform: scale(1);
        pointer-events: auto;
      }
      
      .scroll-to-top-button:active {
        transform: scale(0.95);
      }
    `;
    document.head.appendChild(style);
    
    // Limpieza al desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    // Crear el botón de manera programática
    const button = document.createElement('button');
    button.className = 'scroll-to-top-button';
    button.id = 'scroll-to-top-button';
    button.innerHTML = '&#8593;'; // Flecha arriba en HTML
    button.addEventListener('click', scrollToTop);
    document.body.appendChild(button);
    
    // Observador para actualizar la visibilidad del botón
    const updateButtonVisibility = () => {
      const buttonElement = document.getElementById('scroll-to-top-button');
      if (buttonElement) {
        if (showButton) {
          buttonElement.classList.add('visible');
        } else {
          buttonElement.classList.remove('visible');
        }
      }
    };
    
    updateButtonVisibility();
    
    // Configurar un observador para cambios en showButton
    const observer = new MutationObserver(() => {
      updateButtonVisibility();
    });
    
    // Limpiar cuando el componente se desmonte
    return () => {
      const buttonElement = document.getElementById('scroll-to-top-button');
      if (buttonElement) {
        buttonElement.removeEventListener('click', scrollToTop);
        document.body.removeChild(buttonElement);
      }
    };
  }, [showButton]);
  
  // Este componente no renderiza nada visible en React directamente
  // El botón se crea y gestiona mediante DOM nativo
  return null;
};

export default TopTouchScroll;
