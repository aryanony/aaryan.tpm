// assets/js/sections/projects-render.js

import { gsap } from '../animations/gsap-init.js';

// Phosphor Icon class mapping for project metrics
const METRIC_ICONS = {
  user: `<i class="ph-fill ph-users" style="font-size:18px;"></i>`,
  activity: `<i class="ph-fill ph-activity" style="font-size:18px;"></i>`,
  database: `<i class="ph-fill ph-database" style="font-size:18px;"></i>`,
  download: `<i class="ph-fill ph-cloud-arrow-down" style="font-size:18px;"></i>`,
  layers: `<i class="ph-fill ph-stack" style="font-size:18px;"></i>`,
  check: `<i class="ph-fill ph-check-circle" style="font-size:18px;"></i>`,
  clock: `<i class="ph-fill ph-clock" style="font-size:18px;"></i>`,
  workflow: `<i class="ph-fill ph-chart-line-up" style="font-size:18px;"></i>`
};

function getProjectMetricIcon(label) {
  const lbl = label.toLowerCase();
  if (lbl.includes('onboarding') || lbl.includes('user')) return METRIC_ICONS.user;
  if (lbl.includes('sprint') || lbl.includes('deliver')) return METRIC_ICONS.activity;
  if (lbl.includes('latency') || lbl.includes('api') || lbl.includes('db')) return METRIC_ICONS.database;
  if (lbl.includes('download')) return METRIC_ICONS.download;
  if (lbl.includes('component') || lbl.includes('ui')) return METRIC_ICONS.layers;
  if (lbl.includes('a11y') || lbl.includes('score')) return METRIC_ICONS.check;
  if (lbl.includes('ticket') || lbl.includes('reduction')) return METRIC_ICONS.check;
  if (lbl.includes('lag') || lbl.includes('time') || lbl.includes('response')) return METRIC_ICONS.clock;
  if (lbl.includes('integration') || lbl.includes('workflow') || lbl.includes('flow')) return METRIC_ICONS.workflow;
  return METRIC_ICONS.activity;
}

/**
 * Generates the visual area HTML — live iframe preview if livePreviewUrl exists,
 * otherwise falls back to a static screenshot image.
 * The iframe renders directly inside the same frame box used for screenshots.
 */
function buildVisualHTML(project, mode) {
  if (project.livePreviewUrl) {
    const isChatbot = project.id === 'aibot';
    const wrapClass = mode === 'showcase'
      ? `work__mock-frame work__live-frame ${isChatbot ? 'work__live-frame--fit' : 'work__live-frame--scroll'}`
      : `project-card__img-wrap work__live-frame ${isChatbot ? 'work__live-frame--fit' : 'work__live-frame--scroll'}`;
    return `
      <div class="${wrapClass}" data-live-src="${project.livePreviewUrl}">
        <div class="work__live-loader">
          <div class="work__live-spinner"></div>
          <span>Loading preview…</span>
        </div>
        <iframe
          title="Live preview of ${project.name}"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          class="work__live-iframe"
          scrolling="no"
        ></iframe>
      </div>
    `;
  }
  // Fallback to static image
  if (mode === 'showcase') {
    return `
      <div class="work__mock-frame">
        <img src="${project.image}" alt="${project.name} screenshot" class="work__mock-img" loading="lazy">
      </div>
    `;
  }
  return `
    <div class="project-card__img-wrap">
      <img src="${project.image}" alt="${project.name} image" class="project-card__img" loading="lazy">
    </div>
  `;
}

/**
 * Activates all live preview frames inside a container:
 * - Uses IntersectionObserver to set iframe src only when visible (performance)
 * - Hides loader once iframe has loaded
 */
function activateLiveFrames(container) {
  const frames = container.querySelectorAll('.work__live-frame');
  if (!frames.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const frame = entry.target;
        const iframe = frame.querySelector('iframe');
        const loader = frame.querySelector('.work__live-loader');
        const src = frame.dataset.liveSrc;

        if (iframe && src && !iframe.src) {
          iframe.src = src;
          iframe.addEventListener('load', () => {
            if (loader) {
              loader.style.opacity = '0';
              setTimeout(() => loader.style.display = 'none', 300);
            }
          }, { once: true });
        }
        observer.unobserve(frame);
      }
    });
  }, { rootMargin: '200px' });

  frames.forEach(frame => observer.observe(frame));
}

export async function renderProjects() {
  const container = document.querySelector('.work-showcase');
  if (!container) return;

  const res = await fetch('/data/projects.json');
  const allProjects = await res.json();

  let activeCategory = 'All';
  let activeIndex = 0;
  let activeView = 'showcase'; // 'showcase' or 'grid'
  
  let showcaseAutoInterval;
  let metricAutoInterval;

  // Extract categories dynamically
  const categories = ['All', ...new Set(allProjects.map(p => p.category))];

  // Helper to filter projects
  const getFilteredProjects = () => {
    if (activeCategory === 'All') return allProjects;
    return allProjects.filter(p => p.category === activeCategory);
  };

  const startShowcaseAutoPlay = () => {
    clearInterval(showcaseAutoInterval);
    showcaseAutoInterval = setInterval(() => {
      if (activeView === 'showcase') {
        const projCount = getFilteredProjects().length;
        if (projCount > 1) {
          activeIndex = (activeIndex + 1) % projCount;
          updateShowcase();
        }
      }
    }, 5000);
  };

  const renderFrame = () => {
    container.innerHTML = `
      <div class="work__controls-panel">
        <div class="work__pills">
          ${categories.map(cat => `
            <button class="chip ${cat === activeCategory ? 'chip-active' : ''} work__pill-btn" data-cat="${cat}">
              ${cat}
            </button>
          `).join('')}
        </div>
        <div class="work__toggles">
          <button class="btn btn-sm ${activeView === 'showcase' ? 'btn-p' : 'btn-g'} work__toggle-btn" data-view="showcase" aria-pressed="${activeView === 'showcase'}">
            <i class="ph-fill ph-list" style="font-size:16px; margin-right:var(--sp-1.5);"></i>
            Showcase
          </button>
          <button class="btn btn-sm ${activeView === 'grid' ? 'btn-p' : 'btn-g'} work__toggle-btn" data-view="grid" aria-pressed="${activeView === 'grid'}">
            <i class="ph-fill ph-grid-four" style="font-size:16px; margin-right:var(--sp-1.5);"></i>
            Grid Explorer
          </button>
        </div>
      </div>

      <!-- 1. Interactive Showcase View -->
      <div class="work__showcase-view" tabindex="0">
        <div class="work__board">
          <!-- Injected dynamically -->
        </div>
        <div class="work__thumbs-wrapper">
          <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); margin-bottom: var(--sp-2);">Select Project:</div>
          <div class="work__thumbs">
            <!-- Injected dynamically -->
          </div>
        </div>
      </div>

      <!-- 2. Grid Explorer View -->
      <div class="work__grid-view" style="display: none;">
        <div class="work-grid">
          <!-- Injected dynamically -->
        </div>
      </div>
    `;

    // Bind pause/play events to the showcase view
    const showcaseView = container.querySelector('.work__showcase-view');
    showcaseView.addEventListener('mouseenter', () => clearInterval(showcaseAutoInterval));
    showcaseView.addEventListener('mouseleave', () => startShowcaseAutoPlay());
    showcaseView.addEventListener('focusin', () => clearInterval(showcaseAutoInterval));
    showcaseView.addEventListener('focusout', () => startShowcaseAutoPlay());

    bindControls();
    updateShowcase();
    startShowcaseAutoPlay();
  };

  const updateShowcase = () => {
    const projects = getFilteredProjects();
    
    // Ensure activeIndex is in bounds
    if (activeIndex >= projects.length) activeIndex = 0;
    
    const activeProj = projects[activeIndex];
    const showcaseView = container.querySelector('.work__showcase-view');
    const gridView = container.querySelector('.work__grid-view');

    if (activeView === 'showcase') {
      showcaseView.style.display = 'block';
      gridView.style.display = 'none';

      const board = container.querySelector('.work__board');
      if (!board || !activeProj) return;

      const tagsHTML = activeProj.tags.map(t => `<span class="chip chip-sm">${t}</span>`).join('');
      const highlightsHTML = activeProj.highlights.map(h => `<li>${h}</li>`).join('');
      const metricsHTML = activeProj.metricsList.map((m, idx) => `
        <div class="work__metric-card card card-sm ${idx === 0 ? 'active' : ''}">
          <div class="card__inner flex-center" style="flex-direction:column; padding: var(--sp-3);">
            <span class="metric-icon" style="color:var(--accent-p); display:inline-flex; margin-bottom:var(--sp-1.5); transition: margin 0.3s ease;">${getProjectMetricIcon(m.label)}</span>
            <span class="work__metric-val" data-target="${m.value}" data-suffix="${m.suffix}">0</span>
            <span class="work__metric-lbl">${m.label}</span>
          </div>
        </div>
      `).join('');

      const demoLink = activeProj.demo ? `
        <a href="${activeProj.demo}" data-live-preview="${activeProj.demo}" data-project-name="${activeProj.name}" class="btn btn-p btn-sm btn-magnetic" target="_blank" rel="noopener">
          <i class="ph-bold ph-arrow-square-out" style="font-size:16px; margin-right:6px;"></i>
          Live Demo
        </a>
      ` : '';

      const githubLink = activeProj.github ? `
        <a href="${activeProj.github}" class="btn btn-g btn-sm btn-magnetic" target="_blank" rel="noopener">
          <i class="ph-fill ph-github-logo" style="font-size:16px; margin-right:6px;"></i>
          Source Code
        </a>
      ` : '';

      // Animate board transition
      gsap.to(board, {
        opacity: 0,
        y: 12,
        duration: 0.2,
        onComplete: () => {
          board.innerHTML = `
            <div class="work__board-grid">
              <div class="work__board-visual">
                ${buildVisualHTML(activeProj, 'showcase')}
              </div>
              <div class="work__board-details">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:var(--sp-2); margin-bottom:var(--sp-2);">
                  <span class="badge badge-outline">${activeProj.category}</span>
                  <span style="font-family:var(--font-mono); font-size:var(--text-xs); color:var(--text-accent); font-weight:600;">${activeProj.metric}</span>
                </div>
                <h3 class="work__board-title">${activeProj.name}</h3>
                <h4 class="work__board-tagline">${activeProj.tagline}</h4>
                <p class="work__board-body">${activeProj.body}</p>

                <div class="work__board-metrics">
                  ${metricsHTML}
                </div>

                <div style="margin-top:var(--sp-6);">
                  <h4 style="font-family:var(--font-display); font-size:var(--text-sm); margin-bottom:var(--sp-2); color:var(--text-primary);">Deliveries & Impact:</h4>
                  <ul class="work__board-bullets">
                    ${highlightsHTML}
                  </ul>
                </div>

                <div class="chip-group" style="margin-top:var(--sp-6);">
                  ${tagsHTML}
                </div>

                <div class="work__board-actions" style="margin-top:auto; padding-top:var(--sp-4); display:flex; gap:var(--sp-3); flex-wrap:wrap;">
                  ${demoLink}
                  ${githubLink}
                  <a href="${activeProj.href}" class="btn btn-w btn-sm btn-magnetic" style="display:inline-flex; align-items:center;">
                    Read Case Study
                    <i class="ph-bold ph-arrow-right" style="font-size:16px; margin-left:6px;"></i>
                  </a>
                </div>
              </div>
            </div>
          `;

          gsap.to(board, { opacity: 1, y: 0, duration: 0.3 });

          // Activate live iframe previews
          activateLiveFrames(board);

          // Animate numeric counters
          board.querySelectorAll('.work__metric-val').forEach(el => {
            const target = parseFloat(el.dataset.target);
            const suffix = el.dataset.suffix || '';
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 1.2,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = (target % 1 === 0 ? Math.round(obj.val) : obj.val.toFixed(1)) + suffix;
              }
            });
          });

          // Metrics Accordion Auto-Play for Mobile
          clearInterval(metricAutoInterval);
          const metricCards = board.querySelectorAll('.work__metric-card');
          if (metricCards.length > 0) {
            let currentMetric = 0;
            const startMetricAuto = () => {
              clearInterval(metricAutoInterval);
              metricAutoInterval = setInterval(() => {
                metricCards[currentMetric].classList.remove('active');
                currentMetric = (currentMetric + 1) % metricCards.length;
                metricCards[currentMetric].classList.add('active');
              }, 4000);
            };
            startMetricAuto();
            metricCards.forEach((card, idx) => {
              card.addEventListener('mouseenter', () => clearInterval(metricAutoInterval));
              card.addEventListener('mouseleave', () => startMetricAuto());
              card.addEventListener('click', () => {
                clearInterval(metricAutoInterval);
                metricCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                currentMetric = idx;
              });
            });
          }

          // Dispatch event to activate tilt
          document.dispatchEvent(new Event('ag:ready'));
        }
      });

      // Update thumbnails list
      const thumbsContainer = container.querySelector('.work__thumbs');
      if (thumbsContainer) {
        thumbsContainer.innerHTML = projects.map((p, idx) => `
          <button class="work__thumb-card card card-sm ${idx === activeIndex ? 'active' : ''}" data-idx="${idx}">
            <div class="card__inner flex-center" style="gap: var(--sp-3); padding: var(--sp-2) var(--sp-3); justify-content: flex-start;">
              <div class="work__thumb-img-wrap">
                <img src="${p.image}" alt="${p.name} preview icon" class="work__thumb-img" loading="lazy">
              </div>
              <div style="text-align: left;">
                <div class="work__thumb-name">${p.name}</div>
                <div class="work__thumb-tag">${p.tagline.split(' ')[0]}</div>
              </div>
            </div>
          </button>
        `).join('');

        // Bind thumbnails click
        thumbsContainer.querySelectorAll('.work__thumb-card').forEach(btn => {
          btn.addEventListener('click', () => {
            activeIndex = parseInt(btn.dataset.idx);
            updateShowcase();
          });
        });
      }

    } else {
      showcaseView.style.display = 'none';
      gridView.style.display = 'block';

      const grid = container.querySelector('.work-grid');
      if (!grid) return;

      grid.innerHTML = projects.map((p, idx) => {
        const tagsHTML = p.tags.map(t => `<span class="chip">${t}</span>`).join('');
        const demoLink = p.demo ? `
          <a href="${p.demo}" data-live-preview="${p.demo}" data-project-name="${p.name}" class="project-card__link" target="_blank" rel="noopener" aria-label="Demo of ${p.name}">
            <i class="ph-bold ph-arrow-square-out" style="font-size:18px;"></i>
          </a>
        ` : '';
        const githubLink = p.github ? `
          <a href="${p.github}" class="project-card__link" target="_blank" rel="noopener" aria-label="GitHub of ${p.name}">
            <i class="ph-fill ph-github-logo" style="font-size:18px;"></i>
          </a>
        ` : '';

        return `
          <div class="card project-card" data-tilt data-id="${p.id}">
            <div class="card__inner">
              ${buildVisualHTML(p, 'grid')}
              <div class="project-card__hdr">
                <h3 class="project-card__title">${p.name}</h3>
                <span class="badge badge-outline">${p.category}</span>
              </div>
              <p class="project-card__body">${p.body}</p>
              <div class="project-card__tags chip-group" style="margin-bottom: var(--sp-6);">
                ${tagsHTML}
              </div>
              <div class="project-card__meta">
                <span class="project-card__metric">
                  <i class="ph-fill ph-chart-line-up" style="font-size:16px; margin-right:4px;"></i>
                  ${p.metric}
                </span>
                <div class="project-card__links">
                  ${githubLink}
                  ${demoLink}
                  <a href="${p.href}" class="project-card__link" aria-label="Read full case study for ${p.name}">
                    <i class="ph-bold ph-arrow-right" style="font-size:18px;"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');

      // Activate live iframe previews in grid
      activateLiveFrames(grid);

      // Dispatch event to activate tilt
      document.dispatchEvent(new Event('ag:ready'));
    }
  };

  const bindControls = () => {
    // Category pills click
    container.querySelectorAll('.work__pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.cat;
        activeIndex = 0;
        
        container.querySelectorAll('.work__pill-btn').forEach(b => {
          b.classList.toggle('chip-active', b.dataset.cat === activeCategory);
        });

        updateShowcase();
      });
    });

    // View toggles click
    container.querySelectorAll('.work__toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeView = btn.dataset.view;
        
        container.querySelectorAll('.work__toggle-btn').forEach(b => {
          const active = b.dataset.view === activeView;
          b.setAttribute('aria-pressed', active ? 'true' : 'false');
          b.className = `btn btn-sm work__toggle-btn ${active ? 'btn-p' : 'btn-g'}`;
        });

        updateShowcase();
      });
    });
  };

  renderFrame();
}
