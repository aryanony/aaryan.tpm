// assets/js/interactions/tilt.js

export function initTilt() {
  if (window.matchMedia('(hover: none)').matches) return;
  
  const apply = (root = document) => {
    root.querySelectorAll('[data-tilt]:not([data-tilt-ready])').forEach(card => {
      card.setAttribute('data-tilt-ready', '1');
      card.style.transformStyle = 'preserve-3d';
      
      const shine = Object.assign(document.createElement('div'), {
        className: 'card-shine',
        ariaHidden: 'true'
      });
      card.appendChild(shine);
      let raf;
      
      card.addEventListener('mousemove', e => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const r  = card.getBoundingClientRect();
          const dx = (e.clientX - r.left - r.width/2)  / (r.width/2);
          const dy = (e.clientY - r.top  - r.height/2) / (r.height/2);
          card.style.transform  = `perspective(var(--perspective)) rotateX(${-dy * 8}deg) rotateY(${dx * 8}deg) scale(1.02)`;
          card.style.transition = 'transform 0.1s linear';
          shine.style.background = `radial-gradient(circle at ${(dx + 1) / 2 * 100}% ${(dy + 1) / 2 * 100}%, rgba(13,148,136,0.12) 0%, transparent 60%)`;
        });
      });
      
      card.addEventListener('mouseleave', () => {
        cancelAnimationFrame(raf);
        card.style.transform  = 'perspective(var(--perspective)) rotateX(0) rotateY(0) scale(1)';
        card.style.transition = 'transform 0.5s var(--ease-out)';
        shine.style.background = 'none';
      });
    });
  };
  
  apply();
  document.addEventListener('ag:ready', () => apply());
  setTimeout(apply, 1200);
}
