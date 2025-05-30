import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import './LocationPage.css';
import './location-fix.css'; // Solución para el problema de ancho

const LocationPage = () => {
  // Hacer scroll al inicio de la página cuando se carga el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="location-page">
      <div className="container">
        <div className="location-header">
          <h1 className="location-title">Nuestra Ubicación</h1>
          <div className="location-divider"></div>
          <p className="location-subtitle">
            Encuéntranos en Reus, Tarragona
          </p>
        </div>

        <div className="location-content">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.649605791023!2d1.1026763!3d41.1551851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a15a4c32372a21%3A0xe61cb4679e95b5cc!2sCarrer%20de%20Xavier%20Gamb%C3%BAs%2C%201%2C%2043202%20Reus%2C%20Tarragona!5e0!3m2!1ses!2ses!4v1685416529935!5m2!1ses!2ses"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Sebi Estética"
              style={{ border: 0 }}
            ></iframe>
          </div>

          <div className="location-info">
            <div className="info-card">
              <div className="info-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="info-details">
                <h3>Dirección</h3>
                <p>Carrer de Xavier Gambús, 1, 43202 Reus, Tarragona</p>
                <p>Provincia: Tarragona</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="info-details">
                <h3>Teléfono</h3>
                <p><a href="tel:+34977333869">977 33 38 69</a></p>
              </div>
            </div>

            <div className="info-card" style={{gridColumn: '1 / -1'}}>
              <div className="info-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="info-details">
                <h3>Horario</h3>
                <div className="schedule">
                  <div className="schedule-row">
                    <span className="day">Lunes:</span>
                    <span className="hours">16:00–20:00</span>
                  </div>
                  <div className="schedule-row">
                    <span className="day">Martes:</span>
                    <span className="hours">10:00–13:00, 16:00–20:00</span>
                  </div>
                  <div className="schedule-row">
                    <span className="day">Miércoles:</span>
                    <span className="hours">10:00–13:00, 16:00–20:00</span>
                  </div>
                  <div className="schedule-row">
                    <span className="day">Jueves:</span>
                    <span className="hours">10:00–13:00, 16:00–20:00</span>
                  </div>
                  <div className="schedule-row">
                    <span className="day">Viernes:</span>
                    <span className="hours">10:00–13:00, 16:00–20:00</span>
                  </div>
                  <div className="schedule-row">
                    <span className="day">Sábado:</span>
                    <span className="hours">10:00–14:00</span>
                  </div>
                  <div className="schedule-row">
                    <span className="day">Domingo:</span>
                    <span className="hours">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
