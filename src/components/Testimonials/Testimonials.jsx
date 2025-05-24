import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import './Testimonials.css';

// Asegurarse de que los estilos se apliquen
document.documentElement.style.setProperty('--color-primary', '#FF6B6B');
document.documentElement.style.setProperty('--color-secondary', '#4ECDC4');
document.documentElement.style.setProperty('--color-accent', '#FFD166');
document.documentElement.style.setProperty('--color-text', '#2D3436');
document.documentElement.style.setProperty('--color-background', '#FFFFFF');

// Google logo oficial
const GoogleLogo = () => (
  <img
    src="https://www.gstatic.com/images/icons/material/system/2x/star_rate_google_color_24dp.png"
    alt="Google Reviews"
    style={{
      width: '32px',
      height: '32px',
      display: 'block',
      margin: '1rem auto',
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
      name: 'Olga Melguizo',
      date: '2025-04-21',
      content: 'Increíble experiencia en Sebiestetica. El personal es muy profesional y los tratamientos son de primera calidad. ¡Mi piel nunca había estado tan radiante!',
      rating: 5,
      initials: 'OM',
      image: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    {
      id: 2,
      name: 'Ana C',
      date: '2025-04-17',
      content: 'Quedé muy satisfecha con el servicio. Me realizaron un tratamiento facial personalizado y los resultados fueron visibles desde la primera sesión. Totalmente recomendable.',
      rating: 5,
      initials: 'AC',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 3,
      name: 'María G.',
      date: '2025-04-15',
      content: 'El mejor centro de estética al que he ido. La atención es excepcional y los resultados siempre superan mis expectativas. No voy a ningún otro sitio.',
      rating: 5,
      initials: 'MG',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 4,
      name: 'Carlos M.',
      date: '2025-04-10',
      content: 'Gran profesionalismo y atención personalizada. Los resultados han superado mis expectativas. Sin duda, volveré por más tratamientos.',
      rating: 5,
      initials: 'CM',
      image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
      id: 5,
      name: 'Laura T.',
      date: '2025-04-05',
      content: 'Increíble experiencia desde el primer momento. El personal es muy atento y los tratamientos son de primera calidad. ¡Altamente recomendado!',
      rating: 5,
      initials: 'LT',
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
                <img
                  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                  alt="Google"
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '60px',
                    height: '20px',
                    objectFit: 'contain'
                  }}
                />

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
