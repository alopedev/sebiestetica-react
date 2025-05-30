import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigateWithTransition } from '../NavigationManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

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
      {/* Barra superior: social y teléfono directamente en header-top-bar para simplificar */}
      <div className="header-top-bar">
        {/* Ya no se usa .header-top-bar-layout-container ni .header-top-bar-content aquí para simplificar */}
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
        </div>
      </div>
      {/* Zona principal: logo y menú en container */}
      <div className="header-main">
        <div className="container">
          <div className="header-logo">
            <Link to="/" aria-label="Inicio">
              {/* Logotipo sin texto, solo para mantener la estructura del enlace */}
            </Link>
          </div>
          <nav className={`main-nav ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <a 
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition('/');
                  }}
                >Inicio</a>
              </li>
              <li className={`nav-item ${location.pathname === '/sobre-nosotros' ? 'active' : ''}`}>
                <a 
                  href="/sobre-nosotros"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition('/sobre-nosotros');
                  }}
                >Nosotros</a>
              </li>
              <li className={`nav-item ${location.pathname === '/servicios' ? 'active' : ''}`}>
                <a 
                  href="/servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition('/servicios');
                  }}
                >Servicios</a>
              </li>
              <li className={`nav-item ${location.pathname === '/contacto' ? 'active' : ''}`}>
                <a 
                  href="/contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition('/contacto');
                  }}
                >Contacto</a>
              </li>
            </ul>
            <div className="nav-cta">
              <a 
                href="/ubicacion" 
                className="btn btn-primary"
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
              >¿Dónde estamos?</a>
            </div>

            <button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </nav>
        </div>
      </div>

      {/* Overlay para el menú móvil */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
