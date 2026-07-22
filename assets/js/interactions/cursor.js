// assets/js/interactions/cursor.js

class Cursor {
  constructor() {
    this.dot  = document.querySelector('.cursor-dot');
    this.ring = document.querySelector('.cursor-ring');
    if (!this.dot || !this.ring) return;
    if (window.matchMedia('(hover: none)').matches || 'ontouchstart' in window || window.innerWidth < 768) return;
    this.mouse   = { x: -100, y: -100 };
    this.ringPos = { x: -100, y: -100 };
    this.init();
  }

  init() {
    document.addEventListener('mousemove', e => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      // The custom cursor dot top-left (0,0) is the tip, so no centering offset
      this.dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    const addHover = (root = document) => {
      root.querySelectorAll('a, button, .card, [data-tilt], .ht-product').forEach(el => {
        if (el.dataset.cursorDone) return;
        el.dataset.cursorDone = '1';
        el.addEventListener('mouseenter', () => { this.ring.dataset.state = 'hover'; });
        el.addEventListener('mouseleave', () => { delete this.ring.dataset.state; });
      });
    };

    addHover();
    document.addEventListener('ag:ready', () => addHover());
    document.addEventListener('mousedown', () => { this.ring.dataset.state = 'click'; });
    document.addEventListener('mouseup',   () => { delete this.ring.dataset.state; });
    this.tick();
  }

  tick() {
    const lerp = (a, b, t) => a + (b - a) * t;
    this.ringPos.x = lerp(this.ringPos.x, this.mouse.x, 0.12);
    this.ringPos.y = lerp(this.ringPos.y, this.mouse.y, 0.12);
    this.ring.style.transform = `translate(${this.ringPos.x}px, ${this.ringPos.y}px) translate(-50%, -50%)`;
    requestAnimationFrame(() => this.tick());
  }
}

export default new Cursor();
