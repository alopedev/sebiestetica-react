import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">¿Quieres lucir radiante?</h2>
          <p className="cta-text">
            Reserva tu cita ahora y descubre cómo podemos ayudarte a sentirte y verte mejor que nunca.
            Estamos listos para atenderte con los mejores tratamientos de belleza y bienestar.
          </p>
          <div className="cta-buttons">
            <Link to="/reservar" className="cta-btn cta-btn-primary">
              <FontAwesomeIcon icon={faCalendarAlt} className="btn-icon" />
              Reservar Cita
            </Link>
            <a href="tel:+34977333869" className="cta-btn cta-btn-secondary">
              <FontAwesomeIcon icon={faPhoneAlt} className="btn-icon" />
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
