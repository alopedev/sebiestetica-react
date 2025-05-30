import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigateWithTransition } from '../NavigationManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
// Eliminado el menú móvil como solicitado por el cliente
import './Header.css';
import './header-enhanced.css'; // Mejoras visuales para el header
import './mobile-header-fix.css'; // Solución para problemas responsive en móviles

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Efecto para manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location, setIsMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      {/* Barra superior: social y teléfono */}
      <div className="header-top-bar">
        {/* Los social-links serán un hijo directo y se posicionarán con flexbox desde el padre */}
        <div className="social-links">
          <a href="https://www.facebook.com/SebiEstetica/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/sebi.estetica/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="tel:+34977333869" className="phone-link" aria-label="Llamar">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          {/* Icono de mapa en la barra social para móvil */}
          <a 
            href="/ubicacion" 
            className="map-link mobile-location-btn"
            onClick={(e) => {
              e.preventDefault();
              navigateWithTransition('/ubicacion');
            }}
            aria-label="¿Dónde estamos?"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </a>
        </div>
      </div>
      
      {/* Zona principal: logo y menú en container */}
      <div className="header-main">
        <div className="container">
          {/* Logo */}
          <div className="header-logo">
            <Link to="/" aria-label="Inicio">
              {/* Logotipo sin texto, solo para mantener la estructura del enlace */}
            </Link>
          </div>
          
          {/* Botón hamburguesa eliminado para versión móvil */}
          
          {/* Menú de navegación - visible solo en desktop */}
          <nav className="main-nav desktop-only">
            <ul className="nav-links">
              <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/" onClick={() => navigateWithTransition('/')}>Inicio</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/sobre-nosotros' ? 'active' : ''}`}>
                <Link to="/sobre-nosotros" onClick={() => navigateWithTransition('/sobre-nosotros')}>Nosotros</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/servicios' ? 'active' : ''}`}>
                <Link to="/servicios" onClick={() => navigateWithTransition('/servicios')}>Servicios</Link>
              </li>
            </ul>
          </nav>
          
          {/* Botón "Dónde estamos" con dos versiones: texto para desktop, icono para móvil */}
          <a 
            href="/ubicacion" 
            className="btn btn-primary desktop-location-btn"
            onClick={(e) => {
              e.preventDefault();
              navigateWithTransition('/ubicacion');
            }}
            style={{
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 15px',
              borderRadius: '5px',
              backgroundColor: 'rgba(178, 124, 96, 0.9)',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '14px',
              marginLeft: 'auto', /* En desktop, lo coloca a la derecha */
              minWidth: '180px', /* Ancho mínimo para asegurar texto en una sola línea */
              whiteSpace: 'nowrap' /* Evita que el texto se divida en varias líneas */
            }}
          >¿Dónde estamos?</a>
          
          {/* Botón de mapa para móvil ahora movido a la barra social */}
        </div>
      </div>

      {/* Menú móvil eliminado por completo como solicitó el cliente */}
    </header>
  );
};

export default Header;
