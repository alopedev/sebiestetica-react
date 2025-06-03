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
          {/* Enlaces directos para asegurar su funcionamiento */}
          <a 
            href="https://www.facebook.com/SebiEstetica/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}
            onClick={(e) => {
              // Mantener el evento predeterminado para abrir el enlace
              console.log('Facebook clic');
            }}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a 
            href="https://www.instagram.com/sebi.estetica/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}
            onClick={(e) => {
              // Mantener el evento predeterminado para abrir el enlace
              console.log('Instagram clic');
            }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a 
            href="tel:+34977333869" 
            className="phone-link" 
            aria-label="Llamar"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}
            onClick={(e) => {
              // Mantener el evento predeterminado para la llamada telefónica
              console.log('Teléfono clic');
            }}
          >
            <FontAwesomeIcon icon={faPhone} />
          </a>
          {/* Icono de mapa eliminado para evitar redundancia con el botón principal */}
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
          >
            ¿Dónde estamos?
          </a>
          
          {/* Botón de mapa para móvil ahora movido a la barra social */}
        </div>
      </div>

      {/* Menú móvil eliminado por completo como solicitó el cliente */}
    </header>
  );
};

export default Header;
