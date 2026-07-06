// assets/js/interactions/magnetic.js

export function initMagnetic() {
  if (window.matchMedia('(hover: none)').matches) return;
  
  const apply = (root = document) => {
    root.querySelectorAll('.btn-magnetic:not([data-mag-done])').forEach(btn => {
      btn.setAttribute('data-mag-done', '1');
      let raf;
      
      btn.addEventListener('mousemove', e => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const r  = btn.getBoundingClientRect();
          const dx = e.clientX - r.left - r.width/2;
          const dy = e.clientY - r.top  - r.height/2;
          btn.style.transform  = `translate(${dx * 0.25}px, ${dy * 0.25}px)`;
          btn.style.transition = 'transform 0.12s var(--ease-out)';
        });
      });
      
      btn.addEventListener('mouseleave', () => {
        cancelAnimationFrame(raf);
        btn.style.transform  = 'translate(0,0)';
        btn.style.transition = 'transform 0.45s var(--ease-spring)';
      });
    });
  };
  
  apply();
  document.addEventListener('ag:ready', () => apply());
}
