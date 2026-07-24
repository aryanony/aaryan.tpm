// assets/js/sections/experience-render.js

import { gsap, ScrollTrigger } from '../animations/gsap-init.js';

// Phosphor Icon classes for company roles
const ICONS = {
  oblinex: `<i class="ph-duotone ph-buildings" style="font-size:20px;"></i>`,
  mydigishell: `<i class="ph-duotone ph-code" style="font-size:20px;"></i>`,
  elipact: `<i class="ph-duotone ph-chart-bar" style="font-size:20px;"></i>`,
  ipistis: `<i class="ph-duotone ph-monitor" style="font-size:20px;"></i>`
};

// Phosphor Icon classes for metrics
const METRIC_ICONS = {
  globe: `<i class="ph-duotone ph-globe-hemisphere-west" style="font-size:18px;"></i>`,
  lightning: `<i class="ph-duotone ph-lightning" style="font-size:18px;"></i>`,
  heart: `<i class="ph-duotone ph-heart" style="font-size:18px;"></i>`,
  calendar: `<i class="ph-duotone ph-calendar-blank" style="font-size:18px;"></i>`,
  gauge: `<i class="ph-duotone ph-gauge" style="font-size:18px;"></i>`,
  shield: `<i class="ph-duotone ph-shield-check" style="font-size:18px;"></i>`
};

function getMetricIcon(label) {
  const lbl = label.toLowerCase();
  if (lbl.includes('market') || lbl.includes('global')) return METRIC_ICONS.globe;
  if (lbl.includes('speed') || lbl.includes('velocity') || lbl.includes('milestone')) return METRIC_ICONS.lightning;
  if (lbl.includes('retention') || lbl.includes('satisfaction') || lbl.includes('client')) return METRIC_ICONS.heart;
  if (lbl.includes('duration') || lbl.includes('months')) return METRIC_ICONS.calendar;
  if (lbl.includes('score') || lbl.includes('lighthouse') || lbl.includes('deliver') || lbl.includes('sites')) return METRIC_ICONS.gauge;
  if (lbl.includes('audit') || lbl.includes('qa') || lbl.includes('security')) return METRIC_ICONS.shield;
  return METRIC_ICONS.gauge;
}

export async function renderExperience() {
  const container = document.querySelector('.exp__timeline');
  if (!container) return;

  const res = await fetch('/data/experience.json');
  const experience = await res.json();
  
  let activeIndex = 0;
  let activeView = 'dashboard';
  let flowTriggers = [];

  // Setup scroll-triggers for vertical items to dynamically activate them
  const setupFlowTriggers = () => {
    // Clear any existing scroll triggers first to prevent memory leak
    flowTriggers.forEach(t => t.kill());
    flowTriggers = [];

    const items = container.querySelectorAll('.exp__item');
    items.forEach(item => {
      const trigger = ScrollTrigger.create({
        trigger: item,
        start: 'top 65%',
        end: 'bottom 35%',
        onEnter: () => item.classList.add('active'),
        onEnterBack: () => item.classList.add('active'),
        onLeave: () => item.classList.remove('active'),
        onLeaveBack: () => item.classList.remove('active'),
      });
      flowTriggers.push(trigger);
    });
  };

  // Render HTML structure
  container.innerHTML = `
    <div class="exp__controls-wrapper">
      <div class="exp__controls">
        <button class="btn btn-sm btn-p exp__btn-toggle" data-view="dashboard" aria-pressed="true">
          <i class="ph-duotone ph-squares-four" style="font-size:16px; margin-right: var(--sp-1.5);"></i>
          Interactive Board
        </button>
        <button class="btn btn-sm btn-g exp__btn-toggle" data-view="flow" aria-pressed="false">
          <i class="ph-duotone ph-list" style="font-size:16px; margin-right: var(--sp-1.5);"></i>
          Vertical Flow
        </button>
      </div>
    </div>

    <!-- 1. Interactive Dashboard Container -->
    <div class="exp__dashboard-view">
      <div class="exp__track-map">
        <div class="exp__track-line">
          <div class="exp__track-fill"></div>
        </div>
        <div class="exp__track-nodes">
          ${experience.map((exp, idx) => `
            <button class="exp__node ${idx === 0 ? 'active' : ''}" data-idx="${idx}" aria-label="Select ${exp.role} at ${exp.company}">
              <div class="exp__node-dot">
                ${ICONS[exp.id] || ''}
              </div>
              <span class="exp__node-company">${exp.shortCompany}</span>
              <span class="exp__node-year">${exp.period.split(' — ')[0].split(' ')[1] || exp.period.split(' — ')[0]}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <div class="exp__panel card">
        <div class="card__inner exp__panel-inner">
          <!-- Injected dynamically -->
        </div>
      </div>
    </div>

    <!-- 2. Classic Flow Container (hidden by default) -->
    <div class="exp__flow-view" style="display: none;">
      <div class="exp__stem"></div>
      ${experience.map((exp, idx) => {
        const activeClass = exp.current ? 'active' : '';
        const currentBadge = exp.current ? `<span class="badge badge-success" style="margin-left: var(--sp-2);">Now</span>` : '';
        const bulletsHTML = exp.bullets.map(b => `<li>${b}</li>`).join('');
        const skillsHTML = exp.skills.map(s => `<span class="chip chip-sm">${s}</span>`).join('');
        
        return `
          <div class="exp__item ${activeClass}">
            <div class="exp__dot"></div>
            <div class="exp__card">
              <div class="exp__hdr">
                <span class="exp__period">${exp.period}</span>
                <span class="exp__title" style="display:inline-flex; align-items:center; gap: var(--sp-2);">
                  <span style="color:var(--accent-p); display:inline-flex;">${ICONS[exp.id] || ''}</span>
                  ${exp.role}
                </span>
              </div>
              <div class="exp__company">
                ${exp.company}
                <span>(${exp.location})</span>
                ${currentBadge}
              </div>
              <ul class="exp__bullets" style="margin-top: var(--sp-4);">
                ${bulletsHTML}
              </ul>
              <div class="exp__skills-wrap" style="margin-top: var(--sp-4); border-top: 1px solid var(--bd-subtle); padding-top: var(--sp-3);">
                <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--sp-2);">Skills Utilized:</div>
                <div class="chip-group">${skillsHTML}</div>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Selectors hooks
  const dbView = container.querySelector('.exp__dashboard-view');
  const flView = container.querySelector('.exp__flow-view');
  const toggleButtons = container.querySelectorAll('.exp__btn-toggle');
  const nodes = container.querySelectorAll('.exp__node');
  const panelInner = container.querySelector('.exp__panel-inner');
  const trackFill = container.querySelector('.exp__track-fill');

  let accordionInterval;
  let accordionResumeTimeout;
  let onActivityCallback;

  // Inject content for specific index
  const updatePanel = (idx) => {
    // Clear any existing accordion interval
    if (accordionInterval) clearInterval(accordionInterval);

    const exp = experience[idx];
    const bulletsHTML = exp.bullets.map(b => `<li>${b}</li>`).join('');
    const skillsHTML = exp.skills.map(s => `<span class="chip">${s}</span>`).join('');
    
    const metricsHTML = exp.metrics.map((m, i) => `
      <div class="exp__metric-card ${i === 0 ? 'active' : ''}">
        <div class="card__inner">
          <span class="metric-icon" style="display:inline-flex;">${getMetricIcon(m.label)}</span>
          <span class="exp__metric-val" data-target="${m.value}" data-suffix="${m.suffix}">0</span>
          <span class="exp__metric-lbl">${m.label}</span>
        </div>
      </div>
    `).join('');

    const currentBadge = exp.current ? `<span class="badge badge-success">Current Role</span>` : '';

    // Fade out previous content
    gsap.to(panelInner, {
      opacity: 0,
      y: 12,
      duration: 0.25,
      onComplete: () => {
        panelInner.innerHTML = `
          <div class="exp__panel-grid">
            <div class="exp__panel-meta">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: var(--sp-3); flex-wrap:wrap; gap:var(--sp-2);">
                <span class="exp__period">${exp.period}</span>
                ${currentBadge}
              </div>
              <h3 class="exp__panel-title" style="display:inline-flex; align-items:center; gap:var(--sp-3);">
                <span style="color:var(--accent-p); display:inline-flex; transform: scale(1.15);">${ICONS[exp.id] || ''}</span>
                ${exp.role}
              </h3>
              <h4 class="exp__panel-company">${exp.company}</h4>
              <span class="exp__panel-loc">${exp.location}</span>
              
              <!-- Metrics dial grid (now Accordion) -->
              <div class="exp__panel-metrics">
                ${metricsHTML}
              </div>
            </div>
            <div class="exp__panel-details">
              <div>
                <h4 style="font-family: var(--font-display); font-size: var(--text-lg); font-weight:700; margin-bottom: var(--sp-3); color: var(--text-primary); border-bottom: 1px solid var(--bd-subtle); padding-bottom: var(--sp-2);">Deliveries & Impact</h4>
                <ul class="exp__bullets">
                  ${bulletsHTML}
                </ul>
              </div>
              
              <div style="margin-top: var(--sp-6); border-top: 1px solid var(--bd-subtle); padding-top: var(--sp-4);">
                <h4 style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--sp-2);">Technologies & Methods:</h4>
                <div class="chip-group">
                  ${skillsHTML}
                </div>
              </div>
            </div>
          </div>
        `;

        // Fade in new content
        gsap.to(panelInner, { opacity: 1, y: 0, duration: 0.35 });

        // Accordion Auto-Play Logic
        const accCards = panelInner.querySelectorAll('.exp__metric-card');
        let activeAccIdx = 0;
        let accordionResumeTimeoutLocal;

        const activateAccCard = (index) => {
          accCards.forEach((c, i) => c.classList.toggle('active', i === index));
          activeAccIdx = index;
        };

        let lastAccActivityTime = 0;
        let isHoveringAccordion = false;

        const recordAccActivity = () => {
          lastAccActivityTime = Date.now();
        };

        const stopAccordionAutoPlay = () => {
          clearInterval(accordionInterval);
          accordionInterval = null;
        };

        const startAccordionAutoPlay = () => {
          stopAccordionAutoPlay();
          accordionInterval = setInterval(() => {
            if (isHoveringAccordion) return;
            if (Date.now() - lastAccActivityTime < 6000) return;

            activeAccIdx = (activeAccIdx + 1) % accCards.length;
            activateAccCard(activeAccIdx);
          }, 3500);
        };

        const resetAccordionTimer = () => {
          recordAccActivity();
        };

        const resetAccordionTimerLocal = () => {
          recordAccActivity();
        };

        onActivityCallback = resetAccordionTimer;
        startAccordionAutoPlay();

        // Bind direct card click activity
        accCards.forEach((card, i) => {
          card.addEventListener('click', () => {
            resetAccordionTimerLocal();
            activateAccCard(i);
          });
        });

        // Bind hover events to pause experience accordion autoplay when mouse is over it
        const metricsContainer = panelInner.querySelector('.exp__panel-metrics');
        if (metricsContainer) {
          metricsContainer.addEventListener('mouseenter', () => {
            isHoveringAccordion = true;
          });
          metricsContainer.addEventListener('mouseleave', () => {
            isHoveringAccordion = false;
            recordAccActivity();
          });
          
          ['mousemove', 'mousedown', 'touchstart'].forEach(evt => {
            metricsContainer.addEventListener(evt, recordAccActivity, { passive: true });
          });
        }

        // Animate metrics counter numbers
        panelInner.querySelectorAll('.exp__metric-val').forEach(el => {
          const target = parseFloat(el.dataset.target);
          const suffix = el.dataset.suffix || '';
          const obj = { val: 0 };
          
          gsap.to(obj, {
            val: target,
            duration: 1.2,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = Math.round(obj.val) + suffix;
            }
          });
        });
      }
    });

    // Update nodes states
    nodes.forEach((n, i) => {
      n.classList.toggle('active', i === idx);
    });

    // Animate progress line fill percentage
    const percent = (idx / (experience.length - 1)) * 100;
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      gsap.to(trackFill, { height: `${percent}%`, width: '100%', duration: 0.4 });
    } else {
      gsap.to(trackFill, { width: `${percent}%`, height: '100%', duration: 0.4 });
    }
  };

  // Switch between views
  const switchView = (view) => {
    activeView = view;
    toggleButtons.forEach(btn => {
      const active = btn.dataset.view === view;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.className = `btn btn-sm exp__btn-toggle ${active ? 'btn-p' : 'btn-g'}`;
    });

    if (view === 'dashboard') {
      gsap.to(flView, { opacity: 0, y: 10, duration: 0.25, onComplete: () => {
        flView.style.display = 'none';
        dbView.style.display = 'block';
        gsap.fromTo(dbView, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.35 });
        updatePanel(activeIndex);
        // Clear scroll triggers when showing dashboard
        flowTriggers.forEach(t => t.kill());
        flowTriggers = [];
      }});
    } else {
      gsap.to(dbView, { opacity: 0, y: 10, duration: 0.25, onComplete: () => {
        dbView.style.display = 'none';
        flView.style.display = 'block';
        gsap.fromTo(flView, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.35 });
        setupFlowTriggers();
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }});
    }
  };

  // Attach controls listeners
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
  });

  // Attach nodes click listeners
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      activeIndex = parseInt(node.dataset.idx);
      updatePanel(activeIndex);
    });
  });

  // Bind interaction events on experience dashboard to reset/hold autoplay
  if (dbView) {
    ['mousemove', 'mousedown', 'touchstart', 'keydown', 'scroll'].forEach(evt => {
      dbView.addEventListener(evt, () => {
        if (onActivityCallback) onActivityCallback();
      }, { passive: true });
    });
  }

  // Initial render state
  updatePanel(0);
  ScrollTrigger.refresh();
  import('../animations/scroll-reveal.js').then(m => m.observeAll?.());
}
