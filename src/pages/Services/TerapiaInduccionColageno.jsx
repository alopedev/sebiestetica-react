import React from 'react';
import ServiceTemplate from './ServiceTemplate';

const TerapiaInduccionColageno = () => {
  const serviceData = {
    title: 'Terapia de inducción de colágeno',
    description: 'Tratamiento avanzado que estimula la renovación celular y la producción de colágeno para una piel más firme y rejuvenecida.',
    image: 'https://images.unsplash.com/photo-1591343395902-1adcb454c4e2?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Tratamiento no invasivo con resultados visibles',
      'Tecnología de microagujas ultrafinas indoloras',
      'Estimulación natural de la producción de colágeno',
      'Productos regeneradores de alta calidad',
      'Sesiones personalizadas según el tipo de piel'
    ],
    benefits: [
      'Reducción visible de líneas finas y arrugas',
      'Mejora de la textura y firmeza de la piel',
      'Disminución de cicatrices y marcas de acné',
      'Tratamiento eficaz para estrías y flacidez',
      'Resultados progresivos que mejoran con el tiempo'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default TerapiaInduccionColageno;
