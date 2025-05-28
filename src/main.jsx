import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faPhone, faArrowDown, faCalendarAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import App from './App';

// Importar estilos globales
import './index.css';
import './styles/colors.css';
import './styles/global.css';

// Configurar FontAwesome
library.add(faBars, faTimes, faPhone, faArrowDown, faCalendarAlt, faSpinner, faFacebookF, faInstagram);

// Renderizar la aplicación dentro de BrowserRouter para habilitar la navegación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
