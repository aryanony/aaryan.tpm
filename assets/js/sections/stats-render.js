// assets/js/sections/stats-render.js

export async function renderStats() {
  const container = document.querySelector('.about__stats-grid');
  if (!container) return;

  const res = await fetch('/data/stats.json');
  const stats = await res.json();

  container.innerHTML = stats.map(s => {
    // Extract suffix from string value (e.g., "70+" count is 70, suffix is "+")
    const suffix = s.value.replace(String(s.count), '');
    
    return `
      <div class="about__stat-item">
        <span class="about__stat-num" data-counter="${s.count}" data-suffix="${suffix}">0</span>
        <span class="about__stat-lbl">${s.label}</span>
      </div>
    `;
  }).join('');

  // Mobile autoplay logic
  const isMobile = window.innerWidth <= 480;
  if (isMobile) {
    const items = container.querySelectorAll('.about__stat-item');
    if (items.length > 0) {
      let activeIdx = 0;
      let autoplayInterval;
      let resumeTimeout;

      const activateItem = (index) => {
        items.forEach((item, i) => item.classList.toggle('active', i === index));
        activeIdx = index;
      };

      const stopAutoplay = () => {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      };

      const startAutoplay = () => {
        stopAutoplay();
        autoplayInterval = setInterval(() => {
          activeIdx = (activeIdx + 1) % items.length;
          activateItem(activeIdx);
        }, 4000);
      };

      const resetTimer = () => {
        stopAutoplay();
        clearTimeout(resumeTimeout);
        resumeTimeout = setTimeout(() => {
          startAutoplay();
        }, 5000);
      };

      activateItem(0);
      startAutoplay();

      // Bind click on items to manually expand and reset timer
      items.forEach((item, idx) => {
        item.addEventListener('click', () => {
          resetTimer();
          activateItem(idx);
        });
      });

      // Bind interaction on the whole grid container to pause/reset timer
      ['mousemove', 'mousedown', 'touchstart', 'keydown', 'scroll'].forEach(evt => {
        container.addEventListener(evt, resetTimer, { passive: true });
      });
    }
  }

  // Refresh ScrollTrigger to update layouts after loading stats
  import('../animations/gsap-init.js').then(({ ScrollTrigger }) => {
    ScrollTrigger.refresh();
  });
  import('../animations/scroll-reveal.js').then(m => m.observeAll?.());
}
