import React from 'react';
import { useLocation } from 'react-router-dom';

// Componente de menú directo para móvil - solución de emergencia
const MobileMenuDirect = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  // Determinar cuál es la página activa
  const isActive = (path) => location.pathname === path;
  
  return (
    <div className={`mobile-menu-direct ${isOpen ? 'open' : ''}`} style={{
      position: 'fixed',
      top: '90px',
      left: 0,
      width: '100%',
      height: isOpen ? 'calc(100vh - 90px)' : '0',
      backgroundColor: 'white',
      overflow: 'hidden',
      transition: 'height 0.3s ease',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: isOpen ? '20px' : '0'
    }}>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: '100%',
        textAlign: 'center'
      }}>
        <li style={{
          margin: '15px 0',
          padding: '10px 0',
          borderBottom: '1px solid #eee'
        }}>
          <a 
            href="/" 
            style={{
              color: isActive('/') ? '#b27c60' : '#333',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: isActive('/') ? 'bold' : 'normal',
              display: 'block',
              width: '100%',
              padding: '10px 0'
            }}
            onClick={() => {
              // Cerrar el menú antes de navegar
              onClose();
            }}
          >
            Inicio
          </a>
        </li>
        <li style={{
          margin: '15px 0',
          padding: '10px 0',
          borderBottom: '1px solid #eee'
        }}>
          <a 
            href="/sobre-nosotros" 
            style={{
              color: isActive('/sobre-nosotros') ? '#b27c60' : '#333',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: isActive('/sobre-nosotros') ? 'bold' : 'normal',
              display: 'block',
              width: '100%',
              padding: '10px 0'
            }}
            onClick={() => {
              // Cerrar el menú antes de navegar
              onClose();
            }}
          >
            Nosotros
          </a>
        </li>
        <li style={{
          margin: '15px 0',
          padding: '10px 0',
          borderBottom: '1px solid #eee'
        }}>
          <a 
            href="/servicios" 
            style={{
              color: isActive('/servicios') ? '#b27c60' : '#333',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: isActive('/servicios') ? 'bold' : 'normal',
              display: 'block',
              width: '100%',
              padding: '10px 0'
            }}
            onClick={() => {
              // Cerrar el menú antes de navegar
              onClose();
            }}
          >
            Servicios
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenuDirect;
