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
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">¿Quieres lucir radiante?</h2>
          <p className="cta-text">
            Descubre cómo podemos ayudarte a sentirte y verte mejor que nunca.
            Estamos listos para atenderte con los mejores tratamientos de belleza y bienestar.
          </p>
          <div className="cta-buttons" data-component-name="CtaSection">
            <a 
              href="tel:+34977333869" 
              className="cta-btn cta-btn-secondary" 
              data-component-name="CtaSection"
              style={{
                padding: '0.6rem 1.2rem',
                fontSize: '0.85rem',
                minWidth: '140px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '45px'
              }}
            >
              <FontAwesomeIcon 
                icon={faPhoneAlt} 
                className="btn-icon" 
                style={{
                  fontSize: '0.9em',
                  width: '0.9em',
                  height: '0.9em',
                  marginRight: '3px'
                }}  
              />
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>
      <div className="cta-overlay"></div>
    </section>
  );
};

export default CtaSection;
