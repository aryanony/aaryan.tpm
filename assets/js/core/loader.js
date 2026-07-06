// assets/js/core/loader.js

export function initLoader() {
  const loader = document.querySelector('.loader-wrapper');
  const bar = document.querySelector('.loader-progress-bar');
  if (!loader || !bar) return;

  let progress = 0;
  // Dynamic incremental progress before full window loads
  const interval = setInterval(() => {
    if (progress < 85) {
      progress += Math.random() * 8;
      if (progress > 85) progress = 85;
      bar.style.width = `${progress}%`;
    }
  }, 80);

  // Complete and remove loader on load
  const finish = () => {
    clearInterval(interval);
    bar.style.width = '100%';
    setTimeout(() => {
      loader.classList.add('loaded');
      setTimeout(() => {
        loader.remove();
      }, 600);
    }, 450);
  };

  if (document.readyState === 'complete') {
    finish();
  } else {
    window.addEventListener('load', finish);
  }
}
