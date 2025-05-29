// Optimizaciones de rendimiento para la web de Sebiestetica

/**
 * Aplica optimizaciones de rendimiento cuando se carga la página
 */
export function applyPerformanceOptimizations() {
  // Precarga de imágenes críticas
  preloadCriticalImages();
  
  // Optimización de reflows
  optimizeReflows();
  
  // Reducción de Cumulative Layout Shift (CLS)
  reduceCLS();
  
  // Aplica lazy loading a elementos no críticos
  setupLazyLoading();
}

/**
 * Precarga imágenes críticas para mejorar First Contentful Paint
 */
function preloadCriticalImages() {
  const criticalImages = [
    '/src/assets/images/entrada.png',
    '/src/assets/images/handsOn.png'
  ];
  
  criticalImages.forEach(imageSrc => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imageSrc;
    document.head.appendChild(link);
  });
}

/**
 * Optimiza reflows para mejorar la experiencia de usuario
 */
function optimizeReflows() {
  // Batch DOM operations
  document.documentElement.classList.add('optimize-animations');
  
  // Evitar cálculos de layout innecesarios
  window.addEventListener('resize', debounce(() => {
    // Actualizar componentes reactivos solo cuando sea necesario
  }, 150));
}

/**
 * Reduce el Cumulative Layout Shift (CLS) reservando espacio para contenido que carga asíncronamente
 */
function reduceCLS() {
  // Reservar espacio para imágenes
  document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
      // Establecer dimensiones aproximadas para evitar saltos de layout
      if (img.classList.contains('service-main-image')) {
        img.style.aspectRatio = '16/9';
      } else if (img.classList.contains('about-img')) {
        img.style.aspectRatio = '4/3';
      }
    }
  });
}

/**
 * Configura lazy loading para elementos no críticos
 */
function setupLazyLoading() {
  // Usar IntersectionObserver para cargar imágenes solo cuando sean visibles
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img:not([loading="eager"])');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      imageObserver.observe(img);
    });
  }
}

/**
 * Función auxiliar para limitar la frecuencia de llamadas a funciones
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Optimiza las fuentes para evitar el Flash of Unstyled Text (FOUT)
 */
export function optimizeFonts() {
  // Verificar si la fuente está cargada
  if (document.fonts) {
    document.fonts.ready.then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });
  } else {
    // Fallback para navegadores que no soportan document.fonts
    setTimeout(() => {
      document.documentElement.classList.add('fonts-loaded');
    }, 300);
  }
}
