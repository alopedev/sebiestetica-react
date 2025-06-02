import React from 'react';
import { Link } from 'react-router-dom';
import { navigateWithTransition } from '../NavigationManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './CtaSection.css';
import './custom-buttons.css';
import './button-height-fix.css';
import './cta-enhanced.css'; // Estilos mejorados para la sección CTA
const CtaSection = () => {
  return (
    <section className="cta-section cta-enhanced">
      <div className="cta-overlay"></div>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">¿Quieres lucir radiante?</h2>
          <p className="cta-text">
            Descubre cómo podemos ayudarte a sentirte y verte mejor que nunca.
            Estamos listos para atenderte con los mejores tratamientos de belleza y bienestar.
          </p>
          <div className="cta-buttons" data-component-name="CtaSection">
            <Link 
              to="/contacto" 
              className="cta-btn cta-btn-primary" 
              data-component-name="CtaSection"
              onClick={(e) => {
                e.preventDefault();
                navigateWithTransition('/contacto');
              }}
            >
              <FontAwesomeIcon 
                icon={faCalendarAlt} 
                className="btn-icon" 
              />
              Reservar Cita
            </Link>
            <a 
              href="tel:+34977333869" 
              className="cta-btn cta-btn-secondary" 
              data-component-name="CtaSection"
            >
              <FontAwesomeIcon 
                icon={faPhoneAlt} 
                className="btn-icon" 
              />
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
