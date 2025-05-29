import React, { useEffect } from 'react';
import ServiceTemplate from './ServiceTemplate';

const Micropigmentacion = () => {
  // Forzar scroll al inicio de la página cuando se carga el componente
  useEffect(() => {
    // Múltiples intentos con diferentes técnicas para garantizar compatibilidad
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
    
    // Intentos adicionales con timeouts
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 0);
    
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100);
    
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 500);
  }, []);
  const serviceData = {
    title: 'Micropigmentación',
    description: 'Realza tus labios, ojos y cejas con esta técnica de maquillaje semipermanente de alta precisión.',
    image: 'https://images.unsplash.com/photo-1594125674956-61a9b49c258d?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Aplicable en cejas, ojos (eyeliner) y labios',
      'Duración de 1 a 3 años dependiendo de la zona',
      'Pigmentos orgánicos de alta calidad',
      'Diseño personalizado según tus rasgos faciales',
      'Técnica profesional con mínimas molestias'
    ],
    benefits: [
      'Perfección cosmética duradera',
      'Ahorro significativo de tiempo diario',
      'Apariencia impecable en cualquier situación',
      'Corrección de asimetrías y definición de contornos',
      'Incrementa tu autoestima y seguridad personal'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default Micropigmentacion;
