/**
 * main.js — Performance-optimized orchestrator
 * 
 * Strategy:
 *  - Only critical-path modules loaded synchronously (theme, loader, nav, config, hero)
 *  - All below-fold section renderers use IntersectionObserver lazy-loading
 *  - Interaction modules deferred to after first paint
 *  - Phosphor icons reduced to 2 weights (fill + duotone), deferred
 *  - Three.js gated behind requestIdleCallback
 */

// ── Critical-path static imports (theme, loader, config, nav) ──
import { loadConfig }           from '@config/site.config.js';
import { initTheme }            from '@core/theme.js';
import { initLoader }           from '@core/loader.js';

// ── IntersectionObserver lazy-loader for below-fold sections ──
function lazySection(selector, importFn) {
  const el = document.querySelector(selector);
  if (!el) return;

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      observer.disconnect();
      importFn();
    }
  }, { rootMargin: '200px' }); // trigger 200px before visible

  observer.observe(el);
}

async function init() {
  try {
    // 1. Config FIRST (needed for nav + hero text injection)
    const cfg = await loadConfig();
    
    // 2. Theme & Loader (prevent FOUC, show loader immediately)
    initTheme(cfg);
    initLoader();

    // 3. Nav — critical above-fold, but use dynamic import to keep main chunk small
    const { initNav } = await import('@sections/nav.js');
    initNav(cfg);

    // 4. Hero animation — above-fold, load immediately but async
    import('@animations/hero-animations.js').then(m => m.initHeroAnimation());

    // 5. Typewriter — above-fold visual, load immediately
    import('@animations/typewriter.js').then(m => m.initTypewriter(cfg));

    // 6. Below-fold section renderers — lazy via IntersectionObserver
    lazySection('.services-section, [id="services"]', () =>
      import('@sections/services-render.js').then(m => m.renderServices())
    );
    if (document.querySelector('.services-grid') && !document.querySelector('#services')) {
      import('@sections/services-render.js').then(m => m.renderServices());
    }
    lazySection('.work-section, [id="projects"]', () =>
      import('@sections/projects-render.js').then(m => m.renderProjects())
    );
    lazySection('.exp-section, [id="experience"]', () =>
      import('@sections/experience-render.js').then(m => m.renderExperience())
    );
    lazySection('.skills-section, [id="skills"]', () =>
      import('@sections/skills-render.js').then(m => m.renderSkills())
    );
    lazySection('.faq-section, .faq-container, [id="faq"]', () =>
      import('@sections/faq-render.js').then(m => m.renderFAQ())
    );
    lazySection('#stats-section, .stats-section', () =>
      import('@sections/stats-render.js').then(m => m.renderStats())
    );
    lazySection('.healthtech-section, [id="products"]', () =>
      import('@sections/healthtech-render.js').then(m => m.renderHealthtech())
    );
    if (document.querySelector('.product-details-container')) {
      import('@sections/products-render.js').then(m => m.renderProducts());
    }

    // 7. Defer non-critical interactions to after first paint
    requestAnimationFrame(() => {
      setTimeout(async () => {
        
        const [
          { default: Cursor },
          { initMagnetic },
          { initTilt },
          { initSmoothScroll },
          { initAboutTabs, initWhyConsole, initJourneyStepper },
          { initCommandPalette },
          { initScrollAnimations },
          { initMarquee },
          { initScrollProgress },
          { initLazyLoad },
          { initCopyEmail },
          { initGlobalLivePreview },
          { initAnalyticsTracker },
          { initContactForm },
          { initPWA },
        ] = await Promise.all([
          import('@interactions/cursor.js'),
          import('@interactions/magnetic.js'),
          import('@interactions/tilt.js'),
          import('@interactions/smooth-scroll.js'),
          import('@interactions/tabs.js'),
          import('@interactions/cmd-k.js'),
          import('@animations/scroll-reveal.js'),
          import('@animations/marquee.js'),
          import('@utils/scroll-progress.js'),
          import('@utils/lazy-load.js'),
          import('@utils/copy-email.js'),
          import('@utils/sandbox.js'),
          import('@utils/analytics-tracker.js'),
          import('@forms/contact-form.js'),
          import('@utils/pwa.js'),
        ]);

        // Dispatch ready event for tilt and magnetic hooks
        document.dispatchEvent(new Event('ag:ready'));

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
        initCommandPalette();
        initScrollAnimations();
        initMarquee();
        initAnalyticsTracker();
        initContactForm(cfg);
        initPWA();
      }, 50); // 50ms delay to let first paint complete
    });

    // 8. Three.js Particle system — lazy via requestIdleCallback + viewport check
    if (import.meta.env.VITE_ENABLE_THREEJS !== 'false' && window.innerWidth >= 768) {
      const loadThree = () => import('@three/hero-bg.js').then(m => m.initHeroBackground());
      if ('requestIdleCallback' in window) {
        requestIdleCallback(loadThree, { timeout: 5000 });
      } else {
        setTimeout(loadThree, 3000);
      }
    }

    // 9. Non-critical features deferred by 4s for page speed optimization
    setTimeout(async () => {
      const { initCookies }   = await import('@utils/cookies.js');
      const { initAnalytics } = await import('@utils/analytics.js');
      initCookies();
      initAnalytics(cfg.analytics);
    }, 4000);

    document.documentElement.classList.add('js-loaded');
  } catch (err) {
    console.error('[AG] Initialization error:', err);
    document.documentElement.classList.add('js-loaded');
  }
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', init)
  : init();
