/**
 * main.js — Orchestrates all modules in correct dependency order
 */

// Centralized dynamic injection of premium Phosphor Web Icons stylesheet CDN
const weights = ['regular', 'fill', 'duotone', 'bold', 'light', 'thin'];
weights.forEach(weight => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.media = 'print';
  link.onload = function() { this.media = 'all'; };
  link.href = `https://unpkg.com/@phosphor-icons/web@2.1.1/src/${weight}/style.css`;
  document.head.appendChild(link);
});


import { loadConfig }           from '@config/site.config.js';
import { initTheme }            from '@core/theme.js';
import { initLoader }           from '@core/loader.js';
import Cursor                   from '@interactions/cursor.js';
import { initMagnetic }         from '@interactions/magnetic.js';
import { initTilt }             from '@interactions/tilt.js';
import { initSmoothScroll }     from '@interactions/smooth-scroll.js';
import { initAboutTabs, initWhyConsole, initJourneyStepper } from '@interactions/tabs.js';
import { initHeroAnimation }    from '@animations/hero-animations.js';
import { initScrollAnimations } from '@animations/scroll-reveal.js';
import { initTypewriter }       from '@animations/typewriter.js';
import { initMarquee }          from '@animations/marquee.js';
import { renderServices }       from '@sections/services-render.js';
import { renderProjects }       from '@sections/projects-render.js';
import { renderExperience }     from '@sections/experience-render.js';
import { renderSkills }         from '@sections/skills-render.js';
import { renderFAQ }            from '@sections/faq-render.js';
import { renderStats }          from '@sections/stats-render.js';
import { renderHealthtech }     from '@sections/healthtech-render.js';
import { initNav }              from '@sections/nav.js';
import { initContactForm }      from '@forms/contact-form.js';
import { initScrollProgress }   from '@utils/scroll-progress.js';
import { initLazyLoad }         from '@utils/lazy-load.js';
import { initCopyEmail }        from '@utils/copy-email.js';
import { initGlobalLivePreview } from '@utils/sandbox.js';

async function init() {
  try {
    // 1. Config FIRST
    const cfg = await loadConfig();
    
    // 2. Theme & Loader (prevent flash of unstyled content / give immediate loader)
    initTheme(cfg);
    initLoader();
    initNav(cfg);

    // 3. Render dynamic sections from datasets
    await Promise.all([
      renderServices(), 
      renderProjects(), 
      renderExperience(),
      renderSkills(), 
      renderFAQ(), 
      renderStats(),
      renderHealthtech(),
    ]);
    
    // Dispatch ready event for tilt and magnetic hooks
    document.dispatchEvent(new Event('ag:ready'));

    // 4. Interactive custom events
    initMagnetic();
    initTilt();
    initSmoothScroll();
    initAboutTabs();
    initWhyConsole();
    initJourneyStepper();
    initScrollProgress();
    initLazyLoad();
    initCopyEmail();
    initGlobalLivePreview();

    // 5. Scroll Reveals & Special animations
    initHeroAnimation();
    initScrollAnimations();
    initTypewriter(cfg);
    initMarquee();

    // 6. Three.js Particle system (lazy load under desktop specs)
    if (import.meta.env.VITE_ENABLE_THREEJS !== 'false' && window.innerWidth >= 768) {
      import('@three/hero-bg.js').then(m => m.initHeroBackground());
    }

    // 7. Forms
    initContactForm(cfg);

    // 8. Non-critical features deferred by 2.5s for page speed optimization
    setTimeout(async () => {
      const { initCookies }   = await import('@utils/cookies.js');
      const { initAnalytics } = await import('@utils/analytics.js');
      const { initPWA }       = await import('@utils/pwa.js');
      initCookies();
      initAnalytics(cfg.analytics);
      initPWA();
    }, 2500);

    document.documentElement.classList.add('js-loaded');
  } catch (err) {
    console.error('[AG] Initialization error:', err);
    document.documentElement.classList.add('js-loaded');
  }
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', init)
  : init();
