import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Sebiestetica</h1>
          <h2 className="hero-subtitle">Tu oasis de belleza y bienestar en Reus</h2>
          <p className="hero-text">Descubre una experiencia única de relajación y cuidado personal en nuestro exclusivo centro de estética.</p>
          <div className="hero-buttons">
            <Link to="/servicios" className="btn btn-primary">Nuestros Servicios</Link>
            <Link to="/contacto" className="btn btn-secondary">Reserva Ahora</Link>
          </div>
        </div>

        <div className="hero-scroll">
          <span>Desliza para descubrir</span>
          <FontAwesomeIcon icon={faArrowDown} className="scroll-icon" />
        </div>
      </div>

      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
