// assets/js/animations/hero-animations.js

import { gsap } from './gsap-init.js';

export function initHeroAnimation() {
  const heroSection = document.querySelector('.hero');
  if (!heroSection) return;

  const tl = gsap.timeline({ delay: 0.2 });
  
  tl.fromTo('.hero__badge',     
      { opacity: 0, x: -24 }, 
      { opacity: 1, x: 0, duration: 0.45 }
    )
    .fromTo('.hero__h1 .word',  
      { opacity: 0, y: 40, rotationX: 12 }, 
      { opacity: 1, y: 0, rotationX: 0, stagger: 0.07, duration: 0.6 }, 
      '-=0.2'
    )
    .fromTo('.hero__typewriter-wrap', 
      { opacity: 0, y: 16 }, 
      { opacity: 1, y: 0, duration: 0.4 }, 
      '-=0.1'
    )
    .fromTo('.hero__body',      
      { opacity: 0 }, 
      { opacity: 1, duration: 0.4 }, 
      '-=0.1'
    )
    .fromTo('.hero__ctas .btn', 
      { opacity: 0, y: 12, scale: 0.95 }, 
      { opacity: 1, y: 0, scale: 1, stagger: 0.1, ease: 'back.out(1.4)' }, 
      '-=0.1'
    )
    .fromTo('.hero__trust',     
      { opacity: 0 }, 
      { opacity: 1, duration: 0.35 }, 
      '-=0.1'
    )
    .fromTo('.hero__photo-wrapper', 
      { opacity: 0, scale: 0.93, x: 24 }, 
      { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: 'power3.out' }, 
      0.15
    )
    .fromTo('.hero__stat-card', 
      { opacity: 0, y: 24, rotationY: -10 }, 
      { opacity: 1, y: 0, rotationY: 0, stagger: 0.14, duration: 0.6, ease: 'back.out(1.2)' }, 
      '-=0.4'
    );
    
  return tl;
}
