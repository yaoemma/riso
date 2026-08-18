import { useEffect } from 'react';

export function useScrollEffects() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document
      .querySelectorAll('.service-card, .feature-card, .event-card, .member-card, .testimonial-card')
      .forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
      });

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statNumber = entry.target.querySelector('h3');
          if (!statNumber || statNumber.dataset.animated) return;
          statNumber.dataset.animated = 'true';
          const target = parseInt(statNumber.textContent.replace(/[^\d]/g, ''), 10);
          let start = 0;
          const increment = target / 125;
          const update = () => {
            start += increment;
            if (start < target) {
              statNumber.textContent = Math.floor(start);
              requestAnimationFrame(update);
            } else {
              statNumber.textContent = target;
            }
          };
          update();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat').forEach((stat) => statsObserver.observe(stat));

    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('animate'), index * 200);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.timeline-item').forEach((item) => timelineObserver.observe(item));

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
      timelineObserver.disconnect();
    };
  }, []);
}
