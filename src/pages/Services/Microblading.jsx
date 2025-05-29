import React from 'react';
import ServiceTemplate from './ServiceTemplate';

const Microblading = () => {
  const serviceData = {
    title: 'Microblading',
    description: 'Técnica semipermanente para cejas perfectamente definidas y naturales que dura hasta 2 años.',
    image: 'https://images.unsplash.com/photo-1619870973878-e953299d2e01?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Tratamiento semipermanente que dura entre 1-2 años',
      'Técnica pelo a pelo para un resultado natural',
      'Personalizado según la morfología de tu rostro',
      'Pigmentos de alta calidad hipoalergénicos',
      'Realizado por especialistas certificados'
    ],
    benefits: [
      'Cejas perfectamente definidas todos los días',
      'Ahorro de tiempo en tu rutina diaria de maquillaje',
      'Resistente al agua y al sudor',
      'Ideal para personas con cejas escasas o con fallos',
      'Resultados naturales que mejoran tu expresión facial'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default Microblading;
