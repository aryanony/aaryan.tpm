// assets/js/utils/scroll-progress.js

export function initScrollProgress() {
  const progressBar = document.querySelector('.nav__progress');
  if (!progressBar) return;

  let ticking = false;

  const updateProgress = () => {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (scrollHeight > 0) {
      const scrolled = (window.scrollY / scrollHeight) * 100;
      progressBar.style.width = `${scrolled}%`;
    } else {
      progressBar.style.width = '0%';
    }
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  updateProgress(); // Run once initially
}

