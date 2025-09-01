// Enhanced animations and interactions for Yukti Tech website
document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Parallax effect for hero section
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      heroSection.style.transform = `translateY(${rate}px)`;
    });
  }

  // Animated counters for stats
  const stats = document.querySelectorAll('.stat-number');
  const animateCounters = () => {
    stats.forEach(stat => {
      const target = parseInt(stat.textContent.replace(/\D/g, ''));
      const increment = target / 100;
      let current = 0;
      
      const updateCounter = () => {
        if (current < target) {
          current += increment;
          stat.textContent = Math.ceil(current) + '+';
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target + '+';
        }
      };
      
      updateCounter();
    });
  };

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // Trigger counter animation for stats
        if (entry.target.classList.contains('stats-section')) {
          animateCounters();
        }
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));

  // Hover effects for service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
      this.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
  });

  // Typing effect for hero title
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    // Start typing effect when element is visible
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeWriter();
          titleObserver.unobserve(entry.target);
        }
      });
    });
    
    titleObserver.observe(heroTitle);
  }

  // Floating particles effect
  const createParticle = () => {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 50%;
      pointer-events: none;
      z-index: 1000;
      animation: float-particle 6s linear infinite;
    `;
    
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 6000);
  };

  // Create particles periodically
  setInterval(createParticle, 3000);

  // Add CSS for floating particles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float-particle {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
      }
    }
    
    .animate-in {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    
    .service-card {
      transition: all 0.3s ease;
    }
    
    .floating-particle {
      will-change: transform, opacity;
    }
  `;
  document.head.appendChild(style);

  // Smooth reveal for features
  const features = document.querySelectorAll('.feature-item');
  features.forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
      feature.style.transition = 'all 0.6s ease';
      feature.style.opacity = '1';
      feature.style.transform = 'translateY(0)';
    }, index * 200);
  });

  // Interactive cursor effect
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.1s ease;
    mix-blend-mode: difference;
  `;
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
  });

  // Cursor effects on interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .card, .feature-item');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
      cursor.style.background = 'linear-gradient(135deg, #f093fb, #f5576c)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    });
  });

  // Hide cursor on mobile
  if ('ontouchstart' in window) {
    cursor.style.display = 'none';
  }

  console.log('🎨 Yukti Tech animations loaded successfully!');
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Add smooth reveal animations for sections
const revealSections = () => {
  const sections = document.querySelectorAll('section, .widget');
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const windowTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    if (windowTop + windowHeight > sectionTop + 100) {
      section.classList.add('revealed');
    }
  });
};

window.addEventListener('scroll', throttle(revealSections, 100)); 