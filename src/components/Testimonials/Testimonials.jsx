import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import './Testimonials.css';

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
      name: 'Lorena Navarro',
      date: 'Hace 2 meses',
      content: 'Es la primera vez que vengo y sin duda no será la última. Trato genial, simpática y sincera. Me ha transmitido confianza y profesionalidad. Sin duda volveré!!!!!!',
      rating: 5,
      initials: 'LN',
      image: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    {
      id: 2,
      name: 'Aina Gómez',
      date: '2025-03-17',
      content: 'Increíble como siempre, trato excepcional. Super cómoda en todo momento y resultado inmejorable, siempre será mi clínica de confianza.',
      rating: 5,
      initials: 'AG',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 3,
      name: 'Natalia Ramos',
      date: '2025-02-15',
      content: 'Una gran profesional, encantada siempre con el resultado y el trato. Súper recomendado!',
      rating: 5,
      initials: 'NR',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 4,
      name: 'Estel Ceballos',
      date: '2025-01-10',
      content: 'Fuí por primera vez a Sebiestetica y quedé muy contenta, tanto por el trato y amabilidad como por su profesionalidad. Sebi me dejó unas cejas 10🤩 mi nueva estética de confianza.',
      rating: 5,
      initials: 'EC',
      image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
      id: 5,
      name: 'Sheila Díez',
      date: '2024-06-20',
      content: 'Mi chico y yo llevamos años haciéndonos las cejas con sebi y nunca he tenido de mejores. Se lo recomiendo a todo el mundo. No podría vivir sin ella, te cambia la cara.',
      rating: 5,
      initials: 'SD',
      image: 'https://randomuser.me/api/portraits/women/65.jpg'
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

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('es-ES', options).replace(/\//g, '-');
  };

  return (
    <section className="testimonials-section" style={{
      backgroundColor: '#fff',
      padding: '4rem 0',
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'Roboto, Arial, sans-serif'
    }}>
      <div className="testimonials-container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Google Reviews Header */}
        <div className="google-reviews-header" style={{
          margin: '0 auto 3rem',
          textAlign: 'center',
          maxWidth: '800px',
          position: 'relative',
          zIndex: 1,
          padding: '0 20px',
          boxSizing: 'border-box'
        }}>
          <h2 className="google-reviews-title" style={{
            fontSize: '2.2rem',
            fontWeight: 600,
            margin: '0 0 1.5rem',
            color: '#202124',
            lineHeight: '1.2'
          }}>¿QUÉ OPINAN NUESTROS CLIENTES?</h2>

          <div className="google-reviews-rating" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '1.5rem',
            position: 'relative',
            zIndex: 1
          }}>
            <div className="google-reviews-stars" style={{
              display: 'flex',
              gap: '4px',
              marginBottom: '0.75rem',
              justifyContent: 'center'
            }}>
              {renderStars(averageRating)}
            </div>
            <div className="google-reviews-count" style={{
              fontSize: '1rem',
              color: '#5f6368',
              marginBottom: '1.25rem',
              fontWeight: 500
            }}>A base de {totalReviews} reseñas</div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '0.5rem'
            }}>
              <GoogleLogo />
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div style={{
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
            className="testimonial-nav prev"
            onClick={goToPrev}
            aria-label="Anterior testimonio"
            style={{
              position: 'relative',
              left: 0,
              width: '40px',
              height: '40px',
              background: 'white',
              borderRadius: '50%',
              boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 30,
              border: 'none',
              outline: 'none',
              transition: 'all 0.3s ease',
              opacity: 0.9,
              padding: 0,
              marginRight: '10px'
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#5f6368' }} />
          </button>

          <div
            className="testimonials-carousel"
            style={{
              display: 'flex',
              gap: '20px',
              overflowX: 'auto',
              padding: '20px 0',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              position: 'relative',
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth',
              margin: '0 -10px', // Compensar el padding de las tarjetas
              flex: 1,
              minWidth: 0
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Hide scrollbar for Chrome, Safari and Opera */}
            <style>{
              `.testimonials-carousel::-webkit-scrollbar { display: none; }`
            }</style>
            {testimonials.slice(currentIndex, currentIndex + itemsToShow).map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card" style={{
                flex: '0 0 calc(33.333% - 20px)',
                minWidth: '280px',
                background: '#f8f9fa',
                borderRadius: '8px',
                padding: '24px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                scrollSnapAlign: 'start',
                margin: '0 10px',
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxSizing: 'border-box',
                border: '1px solid #e0e0e0'
              }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <span style={{ fontSize: '12px', marginRight: '4px', color: '#555' }}>Reseña de</span>
                  <svg height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#4285F4' }}>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>

                <div className="testimonial-header" style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <div className="testimonial-avatar" style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: '#e0e0e0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#5f6368',
                    marginRight: '16px',
                    overflow: 'hidden'
                  }}>
                    {testimonial.initials}
                  </div>
                  <div className="testimonial-user" style={{ textAlign: 'left' }}>
                    <h4 className="testimonial-name" style={{
                      fontWeight: 500,
                      color: '#202124',
                      margin: '0 0 4px',
                      fontSize: '1rem'
                    }}>{testimonial.name}</h4>
                    <p className="testimonial-date" style={{
                      fontSize: '0.85rem',
                      color: '#5f6368',
                      margin: 0
                    }}>{formatDate(testimonial.date)}</p>
                  </div>
                </div>

                <div className="testimonial-rating" style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '8px 0 12px'
                }}>
                  <div className="testimonial-rating-stars" style={{
                    display: 'flex',
                    gap: '2px',
                    marginRight: '8px'
                  }}>
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="testimonial-verified" style={{
                    color: '#1a73e8',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <FontAwesomeIcon icon={faCheck} style={{ marginRight: '4px', fontSize: '0.7rem' }} />
                    <span>Verificado</span>
                  </div>
                </div>

                <p className="testimonial-content" style={{
                  textAlign: 'left',
                  color: '#3c4043',
                  lineHeight: 1.6,
                  fontSize: '0.95rem',
                  margin: 0,
                  fontFamily: 'Roboto, Arial, sans-serif'
                }}>{testimonial.content}</p>
              </div>
            ))}
          </div>

          {/* Botón siguiente */}
          <button
            className="testimonial-nav next"
            onClick={goToNext}
            aria-label="Siguiente testimonio"
            style={{
              position: 'relative',
              right: 0,
              width: '40px',
              height: '40px',
              background: 'white',
              borderRadius: '50%',
              boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 30,
              border: 'none',
              outline: 'none',
              transition: 'all 0.3s ease',
              opacity: 0.9,
              padding: 0,
              marginLeft: '10px'
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} style={{ color: '#5f6368' }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
