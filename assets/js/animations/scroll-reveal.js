// assets/js/animations/scroll-reveal.js

import { gsap, ScrollTrigger } from './gsap-init.js';

export function initScrollAnimations() {
  // Generic fade-up reveal (hardware accelerated)
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.fromTo(el, 
      { opacity: 0, y: 28 }, 
      {
        opacity: 1, 
        y: 0, 
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { 
          trigger: el, 
          start: 'top 88%', 
          toggleActions: 'play none none none' 
        }
      }
    );
  });

  // Staggered grid item reveals (hardware accelerated)
  gsap.utils.toArray('.reveal-grid').forEach(grid => {
    gsap.fromTo(grid.querySelectorAll(':scope > *'),
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.06, 
        duration: 0.55,
        ease: 'power3.out',
        scrollTrigger: { 
          trigger: grid, 
          start: 'top 86%', 
          toggleActions: 'play none none none' 
        }
      }
    );
  });

  // Timeline stem scroll scrub drawing
  const stem = document.querySelector('.exp__stem');
  if (stem) {
    gsap.fromTo(stem, 
      { scaleY: 0 }, 
      { 
        scaleY: 1, 
        transformOrigin: 'top center', 
        ease: 'none',
        scrollTrigger: { 
          trigger: '.experience', 
          start: 'top 80%', 
          end: 'bottom 20%', 
          scrub: true 
        }
      }
    );
  }

  // Animated metric counters
  gsap.utils.toArray('[data-counter]').forEach(el => {
    const target = parseInt(el.dataset.counter);
    const suffix = el.dataset.suffix || '';
    const obj = { val: 0 };
    
    gsap.to(obj, { 
      val: target, 
      duration: 1.8, 
      ease: 'power2.out',
      onUpdate: () => { 
        el.textContent = Math.round(obj.val) + suffix; 
      },
      scrollTrigger: { 
        trigger: el, 
        start: 'top 85%', 
        toggleActions: 'play none none none' 
      }
    });
  });
}
