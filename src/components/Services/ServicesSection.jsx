import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigateWithTransition } from '../NavigationManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPencilAlt, faEye, faMagic, faSpa, faGraduationCap, faPaintBrush, faSyringe, faHandSparkles } from '@fortawesome/free-solid-svg-icons';
import './ServicesSection.css';
import './service-links-fix.css'; // Corrección para los enlaces "Saber más"
import './button-height-fix.css'; // Corrección para la altura del botón CTA

const ServicesSection = () => {
  // Obtener la ubicación actual para determinar si estamos en la página de servicios
  const location = useLocation();
  const services = [
    {
      icon: faPencilAlt,
      title: 'Microblading',
      description: 'Técnica semipermanente para cejas perfectamente definidas y naturales que dura hasta 2 años.',
      link: '/servicios/microblading'
    },
    {
      icon: faEye,
      title: 'Micropigmentación',
      description: 'Realza tus labios, ojos y cejas con esta técnica de maquillaje semipermanente de alta precisión.',
      link: '/servicios/micropigmentacion'
    },
    {
      icon: faMagic,
      title: 'Micropunción',
      description: 'Tratamiento rejuvenecedor que estimula la producción natural de colágeno y elastina en la piel.',
      link: '/servicios/micropuncion'
    },
    {
      icon: faGraduationCap,
      title: 'Escuela de maquillaje',
      description: 'Aprende técnicas profesionales para resaltar tu belleza natural con nuestros cursos personalizados.',
      link: '/servicios/escuela-maquillaje'
    },
    {
      icon: faSpa,
      title: 'Diseño de cejas',
      description: 'Diseñamos tus cejas según la morfología de tu rostro para conseguir una mirada armónica y expresiva.',
      link: '/servicios/diseno-cejas'
    },
    {
      icon: faPaintBrush,
      title: 'Tinte de cejas y pestañas',
      description: 'Dale color y definición a tus cejas y pestañas para lucir una mirada intensa sin necesidad de maquillaje.',
      link: '/servicios/tinte-cejas-pestanas'
    },
    {
      icon: faSyringe,
      title: 'Terapia de inducción de colágeno',
      description: 'Tratamiento avanzado que estimula la renovación celular y la producción de colágeno para una piel más firme y rejuvenecida.',
      link: '/servicios/terapia-induccion-colageno'
    },
    {
      icon: faHandSparkles,
      title: 'Manicura',
      description: 'Cuidado completo para tus manos y uñas con técnicas profesionales y los mejores productos para un acabado perfecto y duradero.',
      link: '/servicios/manicura'
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tratamientos de Belleza Profesionales</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Ofrecemos una amplia gama de tratamientos de belleza y bienestar realizados con técnica profesional y utilizando los mejores productos del mercado.
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
              {/* Enlace con transición suave entre páginas usando React Router */}
              <a
                href={service.link}
                className="service-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigateWithTransition(service.link);
                }}
              >
                Saber más <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>

        {/* Mostrar el botón solo cuando NO estamos en la página de servicios */}
        {location.pathname !== '/servicios' && (
          <div className="services-cta" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <a
              href="/servicios"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                navigateWithTransition('/servicios');
              }}
              style={{
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Ver los Servicios
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
