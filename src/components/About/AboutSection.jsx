import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faAward, faUsers, faSmile } from '@fortawesome/free-solid-svg-icons';
import aboutImage from '../../assets/images/handsOn.png';
import './AboutSection.css';

const AboutSection = () => {
  const features = [
    {
      icon: faAward,
      title: 'Profesionales Certificados',
      description: 'Nuestro equipo está formado por expertos con certificaciones en estética y bienestar.'
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
              <span className="years">10+</span>
              <span className="text">Años de Experiencia</span>
            </div>
          </div>
          
          <div className="about-content">
            <div className="section-header">
              <h2 className="section-title">Bienvenidos a Sebiestetica</h2>
              <div className="section-divider"></div>
              <p className="section-description">
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
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="about-cta">
              <Link to="/about" className="btn btn-primary">Conoce Más</Link>
              <Link to="/contact" className="btn btn-outline">Contáctanos</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
