import React from 'react';
import ServiceTemplate from './ServiceTemplate';

const Manicura = () => {
  const serviceData = {
    title: 'Manicura',
    description: 'Cuidado completo para tus manos y uñas con técnicas profesionales y los mejores productos para un acabado perfecto y duradero.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Tratamiento completo con limado y conformación de uñas',
      'Cuidado de cutículas con técnicas profesionales',
      'Hidratación profunda de manos y uñas',
      'Esmaltes de alta duración y acabado brillante',
      'Opciones de diseño y decoración personalizada'
    ],
    benefits: [
      'Mejora el aspecto y la salud de tus uñas',
      'Previene problemas como uñas quebradizas o cutículas dañadas',
      'Hidratación intensiva que rejuvenece la piel de las manos',
      'Acabado profesional que realza tu imagen personal',
      'Momento de relax y autocuidado para tu bienestar'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default Manicura;
