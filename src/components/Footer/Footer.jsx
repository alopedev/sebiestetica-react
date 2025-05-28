import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faWhatsapp, faCcVisa, faCcMastercard, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Columna 1: Sobre Nosotros */}
          <div className="footer-about">
            <h3>Sebiestetica</h3>
            <p>Tu centro de belleza y bienestar en Reus. Ofrecemos tratamientos personalizados para realzar tu belleza natural.</p>
            
            <div className="social-links">
              <a href="https://www.facebook.com/SebiEstetica/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.instagram.com/sebi.estetica/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://wa.me/34977333869" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="footer-links">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
              <li><Link to="/politica-privacidad">Política de Privacidad</Link></li>
              <li><Link to="/aviso-legal">Aviso Legal</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="footer-contact">
            <h4>Información de Contacto</h4>
            <ul className="contact-info">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <div>
                  <strong>Dirección:</strong><br />
                  Carrer de Xavier Gambús, 1<br />
                  43201 Reus, Tarragona
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+34977333869">977 33 38 69</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:info@sebiestetica.com">info@sebiestetica.com</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} />
                <div>
                  <strong>Horario:</strong><br />
                  Lunes: 16:00 - 20:00<br />
                  Martes-Viernes: 10:00 - 20:00<br />
                  Sábado: 10:00 - 14:00<br />
                  Domingo: Cerrado
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer inferior */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Sebiestetica. Todos los derechos reservados.</p>
          <div className="payment-methods">
            <span>Aceptamos:</span>
            <div className="payment-icons">
              <FontAwesomeIcon icon={faCcVisa} />
              <FontAwesomeIcon icon={faCcMastercard} />
              <FontAwesomeIcon icon={faCcPaypal} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
