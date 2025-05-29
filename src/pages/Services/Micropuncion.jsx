import React from 'react';
import ServiceTemplate from './ServiceTemplate';

const Micropuncion = () => {
  const serviceData = {
    title: 'Micropunción',
    description: 'Tratamiento rejuvenecedor que estimula la producción natural de colágeno y elastina en la piel.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Microagujas estériles de uso único',
      'Diferentes profundidades según la zona a tratar',
      'Combina con sueros regeneradores específicos',
      'Tratamiento personalizado según tipo de piel',
      'Resultados visibles desde la primera sesión'
    ],
    benefits: [
      'Reduce arrugas finas y líneas de expresión',
      'Mejora la textura y luminosidad de la piel',
      'Minimiza cicatrices de acné y marcas',
      'Estimula la regeneración celular natural',
      'Potencia la absorción de principios activos'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default Micropuncion;
