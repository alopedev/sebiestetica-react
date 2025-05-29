import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';
import './ServicePage-fix.css'; // Correcciones para las páginas de servicios
import './ServicePage-advanced-fix.css'; // Solución definitiva para el problema de scroll

const ServiceTemplate = ({ title, description, image, features, benefits }) => {
  // Hacer scroll al inicio de la página cuando se carga el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="service-page">
      <div className="container">
        <div className="service-header">
          <h1 className="service-title">{title}</h1>
          <div className="service-divider"></div>
          <p className="service-subtitle">{description}</p>
        </div>

        <div className="service-content">
          <div className="service-image-container">
            {/* Usar una imagen estática para asegurar que siempre se cargue */}
            <div
              className="service-main-image"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '400px',
                borderRadius: '10px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}
              aria-label={title}
              role="img"
            />
          </div>
          
          <div className="service-details">
            <div className="service-section">
              <h2>Descripción del Servicio</h2>
              <p>{description}</p>
            </div>
            
            {features && features.length > 0 && (
              <div className="service-section">
                <h2>Características</h2>
                <ul className="service-features-list">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {benefits && benefits.length > 0 && (
              <div className="service-section">
                <h2>Beneficios</h2>
                <ul className="service-benefits-list">
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Se ha eliminado la sección CTA a petición del usuario */}
      </div>
    </div>
  );
};

export default ServiceTemplate;
