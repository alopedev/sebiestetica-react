import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faAward, faUsers, faSmile } from '@fortawesome/free-solid-svg-icons';
import aboutImage from '../../assets/images/handsOn.webp';
import './AboutSection.css';

const AboutSection = () => {
  const features = [
    {
      icon: faAward,
      title: 'Profesionalidad Certificada',
      description: 'Sebiestetica cuenta con todas las certificaciones especializadas en estética y bienestar.'
    },
    {
      icon: faUsers,
      title: 'Atención Personalizada',
      description: 'Ofrecemos un trato cercano y adaptado a las necesidades de cada cliente.'
    },
    {
      icon: faSmile,
      title: 'Resultados Visibles',
      description: 'Técnicas avanzadas que ofrecen resultados notables desde la primera sesión.'
    }
  ];

  return (
    <section className="about-section">
      <div className="container">
        {/* Título Bienvenidos movido encima de la imagen, oculto en desktop y visible en móvil */}
        <div className="section-header mobile-welcome-title">
          <h2 className="section-title" data-component-name="AboutSection">Bienvenidos</h2>
        </div>
        
        <div className="about-grid">
          <div className="about-image">
            <img
              src={aboutImage}
              alt="Tratamiento de estética en Sebiestetica"
              className="about-img"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
            <div className="experience-badge">
              <span className="years">20+</span>
              <span className="text">Años de Experiencia</span>
            </div>
          </div>

          <div className="about-content">
            <div className="section-header desktop-welcome-title">
              <h2 className="section-title" data-component-name="AboutSection">Bienvenidos</h2>
              <div className="section-divider"></div>
              <p className="section-description" style={{ fontFamily: "'Playfair Display', serif" }}>
                En Sebiestetica nos dedicamos a realzar tu belleza natural a través de tratamientos personalizados y de la más alta calidad. Nuestro objetivo es ofrecerte una experiencia única de relajación y bienestar.
              </p>
            </div>

            <div className="about-features">
              {features.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p style={{ fontFamily: "'Playfair Display', serif" }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Se han eliminado los botones a petición del usuario */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
