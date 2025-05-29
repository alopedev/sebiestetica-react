import React from 'react';
import ServiceTemplate from './ServiceTemplate';

const TinteCejasPestanas = () => {
  const serviceData = {
    title: 'Tinte de cejas y pestañas',
    description: 'Dale color y definición a tus cejas y pestañas para lucir una mirada intensa sin necesidad de maquillaje.',
    image: 'https://images.unsplash.com/photo-1588302699905-d0b3b4ab3ce2?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Tintes vegetales de alta calidad',
      'Selección personalizada del tono ideal',
      'Duración de 3 a 5 semanas',
      'Procedimiento rápido (30-40 minutos)',
      'Test de alergia previo para mayor seguridad'
    ],
    benefits: [
      'Mirada más expresiva e intensa de forma natural',
      'Ahorro de tiempo en la rutina diaria de belleza',
      'Ideal para actividades deportivas y vacaciones',
      'Resistente al agua, sudor y maquillaje',
      'Efecto natural que potencia tus rasgos faciales'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default TinteCejasPestanas;
