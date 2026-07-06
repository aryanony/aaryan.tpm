// assets/js/utils/scroll-progress.js

export function initScrollProgress() {
  const progressBar = document.querySelector('.nav__progress');
  if (!progressBar) return;

  const updateProgress = () => {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (scrollHeight > 0) {
      const scrolled = (window.scrollY / scrollHeight) * 100;
      progressBar.style.width = `${scrolled}%`;
    } else {
      progressBar.style.width = '0%';
    }
  };

  window.addEventListener('scroll', updateProgress);
  updateProgress(); // Run once initially
}
