/**
 * tabs.js — Controls interactive tab structures across various sections
 */

export function setupHudControls(tabClass, paneClass, autoPlayDuration = 5000) {
  const tabs = document.querySelectorAll(tabClass);
  const panes = document.querySelectorAll(paneClass);
  if (tabs.length === 0) return;

  let autoPlayInterval;
  let autoplayResumeTimeout;
  let currentIndex = 0;
  let isAutoClick = false;

  // Find initially active index
  tabs.forEach((t, idx) => {
    if (t.classList.contains('active')) currentIndex = idx;
  });

  const stopAutoPlay = () => {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabs.length;
      isAutoClick = true;
      tabs[currentIndex].click();
      isAutoClick = false;
    }, autoPlayDuration);
  };

  const resetAutoPlayTimer = () => {
    stopAutoPlay();
    clearTimeout(autoplayResumeTimeout);
    autoplayResumeTimeout = setTimeout(() => {
      startAutoPlay();
    }, 5000);
  };

  tabs.forEach((tab, idx) => {
    const activate = () => {
      const targetId = tab.getAttribute('data-target');
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      currentIndex = idx;

      panes.forEach(pane => {
        if (pane.id === targetId) {
          pane.classList.add('active');
          pane.setAttribute('aria-hidden', 'false');
          
          // Trigger animation on children for visual feedback
          const animatedChildren = pane.querySelectorAll('.geom-card, p, li, h3, h4, .roadmap-node, .experience-stepper-pane, .journey-stepper-pane, .about__stats-grid, .about__feature-item, .card');
          animatedChildren.forEach((child, i) => {
            child.style.animation = 'none';
            child.offsetHeight; // Force reflow
            child.style.animation = `dashFadeIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 40}ms both`;
          });
        } else {
          pane.classList.remove('active');
          pane.setAttribute('aria-hidden', 'true');
        }
      });
    };

    tab.addEventListener('click', () => {
      activate();
      if (!isAutoClick) {
        resetAutoPlayTimer();
      }
    });
  });

  // Bind interaction events on closest common parent container to reset/hold autoplay
  const parent = tabs[0].closest('section') || tabs[0].closest('.why-console') || tabs[0].parentElement.parentElement;
  if (parent) {
    ['mousemove', 'mousedown', 'touchstart', 'keydown', 'scroll'].forEach(evt => {
      parent.addEventListener(evt, () => {
        resetAutoPlayTimer();
      }, { passive: true });
    });
  }

  startAutoPlay();
}

export function initAboutTabs() {
  setupHudControls('.about-tab-btn', '.about-pane');
}

export function initWhyConsole() {
  setupHudControls('.why-console-btn', '.why-display-pane');
}

export function initJourneyStepper() {
  setupHudControls('.journey-step-node', '.journey-stepper-pane');
  
  const nodes = document.querySelectorAll('.journey-step-node');
  const fill = document.querySelector('.journey-progress-fill');
  if (!fill || nodes.length === 0) return;

  const updateProgress = () => {
    let activeIndex = 0;
    nodes.forEach((node, idx) => {
      if (node.classList.contains('active')) activeIndex = idx;
    });
    const pct = (activeIndex / (nodes.length - 1)) * 100;
    fill.style.width = pct + '%';
  };

  nodes.forEach(node => {
    node.addEventListener('click', updateProgress);
  });
  updateProgress();
}
