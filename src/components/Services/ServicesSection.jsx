import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSpa, faUserMd, faHandsWash, faSmile } from '@fortawesome/free-solid-svg-icons';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      icon: faSpa,
      title: 'Tratamientos Faciales',
      description: 'Descubre nuestra gama de tratamientos faciales personalizados para todo tipo de pieles y necesidades.',
      link: '/servicios/tratamientos-faciales'
    },
    {
      icon: faUserMd,
      title: 'Medicina Estética',
      description: 'Técnicas avanzadas de medicina estética para un rejuvenecimiento facial y corporal efectivo.',
      link: '/servicios/medicina-estetica'
    },
    {
      icon: faHandsWash,
      title: 'Manicura y Pedicura',
      description: 'Dale a tus manos y pies el cuidado que se merecen con nuestros tratamientos profesionales.',
      link: '/servicios/manicura-pedicura'
    },
    {
      icon: faSmile,
      title: 'Bienestar Corporal',
      description: 'Disfruta de experiencias de relajación y tratamientos corporales para tu bienestar integral.',
      link: '/servicios/bienestar-corporal'
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tratamientos de Belleza Profesionales</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Ofrecemos una amplia gama de tratamientos de belleza y bienestar realizados por profesionales cualificados con los mejores productos del mercado.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link to={service.link} className="service-link">
                Saber más <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <Link to="/servicios" className="btn btn-primary">Ver Todos los Servicios</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
