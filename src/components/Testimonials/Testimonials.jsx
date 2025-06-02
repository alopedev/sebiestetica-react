import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import './Testimonials.css';
import './testimonials-enhanced.css';

// Usar las variables de color definidas en colors.css
// No sobrescribimos las variables para mantener la coherencia de la paleta

// Logo de Google Reviews para el encabezado
const GoogleLogo = () => (
  <img
    src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
    alt="Google Reviews"
    style={{
      width: '92px',
      height: '30px',
      display: 'block',
      margin: '0.5rem 0',
      objectFit: 'contain'
    }}
  />
);

// Render stars based on rating
const renderStars = (rating) => {
  return Array(5).fill(0).map((_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={index < rating ? faStarSolid : faStarRegular}
    />
  ));
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Helena Gil Castillo',
      date: 'Hace un año',
      content: 'Soy clienta habitual y no puedo estar más contenta con el servicio que da Sebi. Profesional y cercana. Siempre quiero volver.',
      rating: 5,
      initials: 'HG',
      image: null
    },
    {
      id: 2,
      name: 'Esther Gispert',
      date: 'Hace un año',
      content: 'Excelente profesional. Tratamientos de belleza con resultados fabulosos. Trato cercano y cariñoso, te hace sentir como en casa. Recomiento 100X100. Gracias Sebi.',
      rating: 5,
      initials: 'EG',
      image: null
    },
    {
      id: 3,
      name: 'Vanessa Sole',
      date: 'Hace un año',
      content: 'Grandes profesionales! Gran trato! Y resultados evidentes. Más de 6 años siendo clienta y los q me quedan.',
      rating: 5,
      initials: 'VS',
      image: null
    },
    {
      id: 4,
      name: 'Sheila Díez Cano',
      date: 'Hace 11 meses',
      content: 'Mi chico y yo llevamos años haciéndonos las cejas con sebi y nunca he tenido de mejores. Se lo recomiendo a todo el mundo. No podría vivir sin ella, te cambia la cara.',
      rating: 5,
      initials: 'SD',
      image: null
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const itemsToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 3;

  // Función para manejar el cambio de testimonio
  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - itemsToShow ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - itemsToShow : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Manejar navegación por teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isTransitioning]);

  // Manejar toque para dispositivos táctiles
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      goToNext();
    }

    if (touchStart - touchEnd < -50) {
      goToPrev();
    }
  };

  // Renderizar estrellas de valoración
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={i < rating ? faStarSolid : faStarRegular}
        style={{ color: i < rating ? '#F4B400' : '#E0E0E0' }}
      />
    ));
  };

  // Calculate average rating
  const averageRating = 5; // As per the image
  const totalReviews = 951; // As per the image

  // Format date - usar directamente el texto de la fecha en lugar de formatear
  const formatDate = (dateString) => {
    // Si la fecha ya está en texto (como "Hace un año"), devolverla directamente
    if (typeof dateString === 'string' && (dateString.includes('Hace') || dateString.includes('mes') || dateString.includes('año'))) {
      return dateString;
    }
    // De lo contrario, intentar formatearla si es una fecha válida
    try {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(dateString).toLocaleDateString('es-ES', options).replace(/\//g, '-');
    } catch (e) {
      // En caso de error, devolver la fecha original o un texto predeterminado
      return dateString || 'Fecha reciente';
    }
  };

  return (
    <section className="testimonials-section testimonials-section-enhanced">
      <div className="testimonials-container testimonials-container-enhanced">
        {/* Google Reviews Header */}
        <div className="google-reviews-header testimonials-header-enhanced">
          <h2 className="google-reviews-title testimonials-title-enhanced">¿QUÉ OPINAN NUESTROS CLIENTES?</h2>

          <div className="google-reviews-rating">
            <div className="google-reviews-stars testimonials-stars-enhanced">
              {renderStars(averageRating)}
            </div>
            {/* El texto de reseñas ha sido eliminado a petición del usuario */}
            <div className="google-logo-container">
              <GoogleLogo className="google-logo-enhanced" />
            </div>
          </div>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="testimonials-carousel-container" style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Botón anterior */}
          <button
            className="testimonial-nav-enhanced prev"
            onClick={goToPrev}
            aria-label="Anterior testimonio"
          >
            <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#5f6368' }} />
          </button>

          <div
            className="testimonials-carousel testimonials-carousel-enhanced"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Hide scrollbar for Chrome, Safari and Opera */}
            <style>{
              `.testimonials-carousel::-webkit-scrollbar { display: none; }`
            }</style>
            {testimonials.slice(currentIndex, currentIndex + itemsToShow).map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card-enhanced">
                <div className="testimonial-google-badge-enhanced">
                  <span style={{ fontSize: '12px', marginRight: '4px', color: '#555' }}>Reseña de</span>
                  <svg height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#4285F4' }}>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>

                <div className="testimonial-header-enhanced">
                  <div className="testimonial-avatar-enhanced">
                    {testimonial.initials}
                  </div>
                  <div className="testimonial-user-enhanced">
                    <h4 className="testimonial-name-enhanced">{testimonial.name}</h4>
                    <p className="testimonial-date-enhanced">{formatDate(testimonial.date)}</p>
                  </div>
                </div>

                <div className="testimonial-rating-enhanced">
                  <div className="testimonial-stars-enhanced">
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="testimonial-verified-enhanced">
                    <FontAwesomeIcon icon={faCheck} style={{ marginRight: '4px', fontSize: '0.7rem' }} />
                    <span>Verificado</span>
                  </div>
                </div>

                <p className="testimonial-content-enhanced">{testimonial.content}</p>
              </div>
            ))}
          </div>

          {/* Botón siguiente */}
          <button
            className="testimonial-nav-enhanced next"
            onClick={goToNext}
            aria-label="Siguiente testimonio"
          >
            <FontAwesomeIcon icon={faChevronRight} style={{ color: '#5f6368' }} />
          </button>
        </div>
        
        {/* Indicadores de navegación */}
        <div className="testimonial-indicators">
          {Array(testimonials.length - itemsToShow + 1).fill(0).map((_, index) => (
            <div 
              key={index} 
              className={`testimonial-indicator ${currentIndex === index ? 'active' : ''}`}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 300);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
