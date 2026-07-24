// assets/js/animations/scroll-reveal.js
import { gsap } from './gsap-init.js';

let revealObserver = null;

export function initScrollAnimations() {
  initRevealObserver();

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

/**
 * Initializes high-performance IntersectionObserver for smooth Blur-to-Unblur reveal effects.
 * Observes existing and dynamically rendered cards/sections.
 */
function initRevealObserver() {
  if ('prefersReducedMotion' in window && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal, .reveal-grid > *').forEach(el => {
      el.classList.add('is-revealed');
    });
    return;
  }

  if (!revealObserver && 'IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05
    });

    // Auto-observe whenever new elements are dynamically added to DOM
    if ('MutationObserver' in window) {
      const mutObs = new MutationObserver(() => {
        observeAll();
      });
      mutObs.observe(document.body, { childList: true, subtree: true });
    }
  }

  observeAll();

  // Fail-safe protection: reveal everything after 1.5 seconds so nothing stays stuck
  setTimeout(() => {
    document.querySelectorAll('.reveal, .reveal-grid > *').forEach(el => {
      el.classList.add('is-revealed');
    });
  }, 1500);
}

export function observeAll() {
  const elements = document.querySelectorAll('.reveal, .reveal-grid > *');
  elements.forEach(el => {
    if (!el.classList.contains('is-revealed')) {
      if (revealObserver) {
        revealObserver.observe(el);
      } else {
        el.classList.add('is-revealed');
      }
    }
  });
}
