import React from 'react';
import ServiceTemplate from './ServiceTemplate';

const DisenoCejas = () => {
  const serviceData = {
    title: 'Diseño de cejas',
    description: 'Diseñamos tus cejas según la morfología de tu rostro para conseguir una mirada armónica y expresiva.',
    image: 'https://images.unsplash.com/photo-1560830889-96266c6dbe96?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Estudio personalizado de la morfología facial',
      'Diseño adaptado a tu estilo y preferencias',
      'Técnicas de depilación con cera o pinza',
      'Tinte opcional para mayor definición',
      'Productos hipoalergénicos de alta calidad'
    ],
    benefits: [
      'Cejas perfectamente definidas y simétricas',
      'Realza la expresividad y belleza de tu mirada',
      'Rejuvenece el aspecto general del rostro',
      'Corrige asimetrías faciales',
      'Realza tus rasgos naturales aportando armonía'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default DisenoCejas;
