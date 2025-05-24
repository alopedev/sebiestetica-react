import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
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

            <div className="footer-contact">
              <h4>Contacto</h4>
              <ul className="contact-info">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>Carrer de Xavier Gambús, 1, 43201 Reus, Tarragona</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="tel:+34977333869">977 33 38 69</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:info@sebiestetica.com">info@sebiestetica.com</a>
                </li>
              </ul>
            </div>

            <div className="footer-hours">
              <h4>Horario</h4>
              <ul className="opening-hours">
                <li>
                  <span>Lunes</span>
                  <span>16:00 - 20:00</span>
                </li>
                <li>
                  <span>Martes - Viernes</span>
                  <span>10:00 - 20:00</span>
                </li>
                <li>
                  <span>Sábado</span>
                  <span>10:00 - 14:00</span>
                </li>
                <li>
                  <span>Domingo</span>
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Sebiestetica. Todos los derechos reservados.</p>
            <div className="payment-methods">
              <span>Aceptamos:</span>
              <div className="payment-icons">
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fab fa-cc-paypal"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
