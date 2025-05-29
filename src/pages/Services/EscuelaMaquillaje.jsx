import React from 'react';
import ServiceTemplate from './ServiceTemplate';

const EscuelaMaquillaje = () => {
  const serviceData = {
    title: 'Escuela de Maquillaje',
    description: 'Aprende técnicas profesionales para resaltar tu belleza natural con nuestros cursos personalizados.',
    image: 'https://images.unsplash.com/photo-1596704017234-0e70364d8448?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Cursos para todos los niveles: básico, intermedio y avanzado',
      'Grupos reducidos para atención personalizada',
      'Productos de alta calidad incluidos en el curso',
      'Sesiones prácticas con seguimiento individual',
      'Certificado de participación al finalizar'
    ],
    benefits: [
      'Aprende a maquillarte para cualquier ocasión',
      'Conoce los productos y herramientas adecuados para tu tipo de piel',
      'Domina técnicas profesionales adaptadas a tus rasgos',
      'Ahorra dinero al saber elegir y aplicar productos correctamente',
      'Adquiere confianza para expresar tu estilo personal'
    ]
  };

  return <ServiceTemplate {...serviceData} />;
};

export default EscuelaMaquillaje;
