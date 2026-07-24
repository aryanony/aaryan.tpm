// assets/js/interactions/smooth-scroll.js

export function initSmoothScroll() {
  document.addEventListener('click', e => {
    const anchor = e.target.closest('a[href*="#"]');
    if (!anchor) return;
    
    // Skip links inside the PWA bottom nav to prevent conflicts
    if (anchor.closest('#pwa-bottom-nav')) return;
    
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    
    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) return;
    
    const targetId = href.substring(hashIndex);
    if (targetId === '#' || targetId.length <= 1) return;
    
    const pathPart = href.substring(0, hashIndex);
    const currentPath = window.location.pathname;
    const isHome = currentPath === '/' || currentPath.endsWith('index.html');

    // If link is for homepage sections (e.g., "/#services" or "/index.html#services") and we are NOT on the homepage:
    if ((pathPart === '/' || pathPart === '/index.html' || pathPart.endsWith('index.html')) && !isHome) {
      e.preventDefault();
      window.location.href = href;
      return;
    }

    // If link is for another specific subpage (e.g., "/services.html#faq") and we are NOT on that subpage:
    if (pathPart && pathPart !== '/' && pathPart !== '/index.html' && !currentPath.endsWith(pathPart.replace('/', ''))) {
      return; // Let browser do normal page navigation
    }

    // Otherwise, target is on the current page
    const target = document.querySelector(targetId);
    if (!target) return;
    
    e.preventDefault();
    const navHeight = 72;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
}
