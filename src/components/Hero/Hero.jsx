import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { navigateWithTransition } from '../NavigationManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCalendarAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';
import './mobile-hero-fix.css'; // Solución para problemas responsive en móviles

// Importar las imágenes
import imagenEntrada from '../../assets/images/entrada.webp';
import imagenEntradaFrontal from '../../assets/images/entrada frontal.webp';
import imagenCristalExterior from '../../assets/images/cristal exterior.webp';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [nextBgIndex, setNextBgIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeout = useRef(null);

  // Array de imágenes para el fondo con las imágenes importadas
  const backgroundImages = [
    imagenEntrada,
    imagenEntradaFrontal,
    imagenCristalExterior
  ];

  // Precargar imágenes
  useEffect(() => {
    const preloadImages = () => {
      backgroundImages.forEach(image => {
        const img = new Image();
        img.src = image;
      });
      setIsLoading(false);
    };

    preloadImages();
  }, []);

  // Efecto para manejar las transiciones de fondo
  useEffect(() => {
    if (isLoading) return;

    const transitionDuration = 2000; // 2 segundos para la transición (aumentado de 1s)
    const displayDuration = 8000; // 8 segundos mostrando cada imagen (aumentado de 5s)

    const startTransition = () => {
      setIsTransitioning(true);

      // Después de la mitad de la transición, cambiar la imagen de fondo
      transitionTimeout.current = setTimeout(() => {
        setCurrentBgIndex(nextBgIndex);
        setNextBgIndex((nextBgIndex + 1) % backgroundImages.length);

        // Restaurar opacidad después de la transición
        setTimeout(() => {
          setIsTransitioning(false);
        }, transitionDuration / 2);
      }, transitionDuration / 2);
    };

    // Iniciar la transición después del tiempo de visualización
    const displayTimeout = setTimeout(startTransition, displayDuration);

    return () => {
      clearTimeout(displayTimeout);
      clearTimeout(transitionTimeout.current);
    };
  }, [currentBgIndex, nextBgIndex, isLoading]);

  // Estilos para las capas de fondo
  const heroStyle = {
    '--current-bg': `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${backgroundImages[currentBgIndex]})`,
    '--next-bg': `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${backgroundImages[nextBgIndex]})`,
    '--transition-duration': '2s',
    '--transition-timing': 'ease-in-out'
  };

  if (isLoading) {
    return (
      <div className="hero-loading">
        <FontAwesomeIcon icon={faSpinner} className="loading-spinner" spin />
      </div>
    );
  }

  return (
    <>
      {/* Título movido fuera del hero para versión móvil */}
      <h1 className="mobile-main-title">Sebiestetica</h1>
      
      <section className={`hero ${isTransitioning ? 'transitioning' : ''}`} style={heroStyle}>
        <div className="hero-bg">
          <div className="hero-bg-layer current"></div>
          <div className="hero-bg-layer next"></div>
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title desktop-only">Sebiestetica</h1>
            <h2 className="hero-subtitle">Tu espacio de belleza y bienestar en Reus</h2>
            <p className="hero-text">
              Descubre una experiencia única de cuidado personal donde la belleza se encuentra con la relajación.
              Nuestros tratamientos profesionales están diseñados para realzar tu belleza natural.
            </p>
            <div className="hero-buttons">
              <a 
                href="/servicios" 
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  navigateWithTransition('/servicios');
                }}
                style={{
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                Ver Tratamientos
              </a>
              <a 
                href="/ubicacion" 
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  navigateWithTransition('/ubicacion');
                }}
                style={{
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                data-component-name="Hero"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>

        <div className="hero-overlay"></div>

        {/* Elemento 'Desliza para descubrir' eliminado por solicitud del cliente */}
      </section>
    </>
  );
};

export default Hero;
