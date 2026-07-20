// assets/js/sections/products-render.js
import { ScrollTrigger } from '../animations/gsap-init.js';

/* ──────────────────────────────────────────────────────────
   TAGLINE OVERRIDES — ACTION-ORIENTED SALES PSYCHOLOGY
   Every tagline answers the implicit question: "What's in it for me?"
   ────────────────────────────────────────────────────────── */
const TAGLINE_MAP = {
  'labtrack-pro': 'Eliminate Referral Disputes. Automate Report Delivery.',
  'recallmd': 'Stop Losing Patients to Forgetfulness.',
  'tokenq': 'Turn Waiting Room Chaos Into Precision Flow.',
  'wellnessdesk': 'Never Lose Track of a Session or Membership Again.',
  'rxpad-pro': 'Write Prescriptions in 30 Seconds, Not 3 Minutes.',
  'carereview': 'Turn Every Happy Patient Into a Google Review.',
  'quoteflow': 'Close Deals Faster. Track Every Rupee.',
  'smartproof': 'Give Clients a Portal They\'ll Actually Use.',
  'shiftmate': 'Payroll Done in Minutes, Not Half a Day.',
  'leadboard': 'Never Let a Hot Lead Go Cold Again.',
  'dashcore': 'Turn Spreadsheet Chaos Into Visual Clarity.',
  'automation-whatsapp': 'Your Receptionist Just Got Superpowers.',
  'automation-leads': 'Every Lead Captured. Every Follow-Up Triggered.',
  'automation-billing': 'Get Paid Faster Without Chasing Clients.',
  'automation-chatbot': 'A 24/7 Sales Rep That Never Calls in Sick.'
};

const FEATURED_MAP = {
  'tokenq': { type: 'flagship', label: '⚡ MOST DEPLOYED' },
  'rxpad-pro': { type: 'popular', label: '🏆 FLAGSHIP' },
  'labtrack-pro': { type: 'flagship', label: '⚡ ENTERPRISE GRADE' },
  'quoteflow': { type: 'popular', label: '🏆 TOP RATED' }
};

export async function renderProducts() {
  const container = document.querySelector('.product-details-container');
  const tabsNav = document.querySelector('.products-tabs');
  
  if (!container) return;

  const res = await fetch('/data/products.json?v=' + Date.now());
  const products = await res.json();

  // Initialize ROI Simulator logic
  initROISimulator();

  // Animate trust counters
  animateTrustCounters();

  // Initial render: show all
  displayProducts(products, container);
  ScrollTrigger.refresh();

  if (tabsNav) {
    const tabButtons = tabsNav.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        let filtered = products;
        
        if (filter !== 'all') {
          filtered = products.filter(p => p.category === filter);
        }

        displayProducts(filtered, container);
        ScrollTrigger.refresh();
      });
    });
  }
}

/* ──────────────────────────────────────────────────────────
   ANIMATED TRUST COUNTERS
   ────────────────────────────────────────────────────────── */
function animateTrustCounters() {
  const counters = document.querySelectorAll('.counter-value[data-target]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const startTime = performance.now();
    
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.round(target * eased);
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    
    // Use IntersectionObserver to trigger on scroll into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(update);
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  });
}

/* ──────────────────────────────────────────────────────────
   LIFETIME ROI SIMULATOR CONTROLLER
   ────────────────────────────────────────────────────────── */
function initROISimulator() {
  const sliderYears = document.getElementById('slider-years');
  const sliderVol = document.getElementById('slider-volume');
  const sliderTicket = document.getElementById('slider-ticket');
  
  const lblYears = document.getElementById('label-years');
  const lblVol = document.getElementById('label-volume');
  const lblTicket = document.getElementById('label-ticket');
  
  const industryBtns = document.querySelectorAll('.industry-btn');
  
  const barSaas = document.getElementById('bar-saas');
  const barAaryan = document.getElementById('bar-aaryan');
  const costSaasEl = document.getElementById('cost-saas');
  const costAaryanEl = document.getElementById('cost-aaryan');
  const savingsAmountEl = document.getElementById('savings-amount');
  const savingsPctEl = document.getElementById('savings-pct');
  const hoursSavedEl = document.getElementById('metric-hours');
  const roiRatioEl = document.getElementById('metric-roi');

  if (!sliderYears || !sliderVol || !sliderTicket) return;

  let activeSaasFee = 2500;
  let activeSetupFee = 12000;
  let activeHostingFee = 500;

  const calculateROI = () => {
    const years = parseInt(sliderYears.value);
    const volume = parseInt(sliderVol.value);
    const ticket = parseInt(sliderTicket.value);

    lblYears.innerText = `${years} ${years === 1 ? 'Year' : 'Years'}`;
    lblVol.innerText = `${volume} / day`;
    lblTicket.innerText = `₹${ticket}`;

    const baseSaaS3Year = activeSaasFee * 12 * years;
    const commSaaS3Year = volume * ticket * 0.015 * 30 * 12 * years;
    const totalSaaS = Math.round(baseSaaS3Year + commSaaS3Year);

    const totalAaryan = Math.round(activeSetupFee + (activeHostingFee * 12 * years));

    const totalSavings = Math.max(0, totalSaaS - totalAaryan);
    const hoursSaved = Math.round(volume * 0.08 * 30 * 12 * years);
    const roiRatio = totalAaryan > 0 ? (totalSaaS / totalAaryan).toFixed(1) : '10';
    const savingsPct = totalSaaS > 0 ? Math.round(((totalSaaS - totalAaryan) / totalSaaS) * 100) : 0;

    costSaasEl.innerText = `₹${totalSaaS.toLocaleString('en-IN')}`;
    costAaryanEl.innerText = `₹${totalAaryan.toLocaleString('en-IN')}`;
    savingsAmountEl.innerText = `₹${totalSavings.toLocaleString('en-IN')}`;
    hoursSavedEl.innerText = `${Math.round(hoursSaved / (12 * years))} hrs/mo`;
    roiRatioEl.innerText = `${roiRatio}x`;
    
    if (savingsPctEl) {
      savingsPctEl.innerText = `You save ${savingsPct}% vs. renting`;
    }

    const maxVal = Math.max(totalSaaS, totalAaryan);
    barSaas.style.width = `${(totalSaaS / maxVal) * 100}%`;
    barAaryan.style.width = `${(totalAaryan / maxVal) * 100}%`;
  };

  sliderYears.addEventListener('input', calculateROI);
  sliderVol.addEventListener('input', calculateROI);
  sliderTicket.addEventListener('input', calculateROI);

  industryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      industryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSaasFee = parseInt(btn.getAttribute('data-saas-fee'));
      activeSetupFee = parseInt(btn.getAttribute('data-setup-fee'));
      activeHostingFee = btn.getAttribute('data-industry') === 'SMB' ? 0 : 500;
      calculateROI();
    });
  });

  calculateROI();
}

/* ──────────────────────────────────────────────────────────
   DYNAMIC PRODUCTS GRID DISPLAY
   ────────────────────────────────────────────────────────── */
function displayProducts(items, container) {
  if (items.length === 0) {
    container.innerHTML = `<div class="reveal" style="text-align:center; padding: var(--sp-12); color: var(--text-muted); font-family: var(--font-mono);">No products found in this category.</div>`;
    return;
  }

  container.innerHTML = items.map((p, idx) => {
    const techBadges = p.techstack.map(tech => `<span class="prod-tech-badge">${tech}</span>`).join('');

    // Topology SVGs
    if (!p.deployment) p.deployment = 'Pure Local Desktop';

    let topologyMarkup = '';
    if (p.deployment.includes('Local Network LAN') || p.id === 'tokenq') {
      topologyMarkup = generateLANTopologySVG(p.name);
    } else if (p.deployment.includes('Hybrid') || p.deployment.includes('VPS') || p.category === 'Automation') {
      topologyMarkup = generateCloudTopologySVG(p.name);
    } else {
      topologyMarkup = generateOfflineTopologySVG(p.name);
    }

    // Architecture breakdown
    const frontendWeight = p.category === 'Automation' ? 15 : (p.id === 'dashcore' ? 30 : 50);
    const backendWeight = p.category === 'Automation' ? 70 : (p.id === 'rxpad-pro' ? 20 : 35);
    const dbWeight = 100 - frontendWeight - backendWeight;
    const complexityScore = p.features.length >= 5 ? 85 : (p.features.length >= 4 ? 65 : 45);
    const buildWeeks = p.id === 'labtrack-pro' ? 6 : (p.id === 'smartproof' ? 5 : (p.id === 'dashcore' ? 4 : 3));

    // Apply upgraded tagline
    const tagline = TAGLINE_MAP[p.id] || p.tagline;

    // Featured badge
    const featured = FEATURED_MAP[p.id];
    const featuredBadge = featured 
      ? `<span class="prod-featured-badge ${featured.type}">${featured.label}</span>` 
      : '';

    // Feature highlights (visible in stats pane)
    const featureHighlights = (p.features || []).map(f => {
      // Extract just the descriptive part after the colon if present
      const parts = f.split(':');
      const label = parts.length > 1 ? parts[0].trim() : f;
      return `<div class="prod-feature-check"><i class="ph-fill ph-check-circle"></i><span>${label}</span></div>`;
    }).join('');

    // Expand the first product card by default
    const activeClass = idx === 0 ? 'active' : '';

    return `
      <div class="prod-card ${activeClass}" data-id="${p.id}" data-base-price="${p.price}" data-category="${p.category}">
        <div class="prod-card__hdr">
          <div class="prod-card__icon-wrap">
            <i class="ph-duotone ${p.icon || 'ph-cube'}"></i>
          </div>
          <div class="prod-card__title-wrap">
            <h3>${p.name} <span class="category-pill">${p.category}</span> ${featuredBadge}</h3>
            <span class="prod-card__tagline">${tagline}</span>
          </div>
          <div class="prod-card__meta-right">
            <span class="prod-card__price-badge" id="badge-price-${p.id}">${p.price}</span>
            <i class="ph-bold ph-caret-down prod-card__toggle-arrow"></i>
          </div>
        </div>
        
        <div class="prod-card__body">
          <nav class="prod-card__tabs" aria-label="Product detail segments">
            <button class="prod-card-tab-btn active" data-tab-pane="pane-stats-${p.id}">
              <i class="ph-bold ph-chart-bar"></i> Overview & Architecture
            </button>
            <button class="prod-card-tab-btn" data-tab-pane="pane-topo-${p.id}">
              <i class="ph-bold ph-git-fork"></i> System Topology
            </button>
            <button class="prod-card-tab-btn" data-tab-pane="pane-plans-${p.id}">
              <i class="ph-bold ph-tag"></i> Setup Packages
            </button>
          </nav>

          <div class="prod-panes-container">
            
            <!-- Pane 1: Stats & Architecture -->
            <div class="prod-tab-pane active" id="pane-stats-${p.id}">
              <div class="prod-details-layout">
                <div class="prod-info-block">
                  <p class="prod-desc-text">${p.desc}</p>
                  
                  <div class="prod-needs-box">
                    <strong><i class="ph-bold ph-target"></i> The Problem This Solves</strong>
                    <p>${p.needs}</p>
                  </div>
                  
                  <div style="display:flex; flex-direction:column; gap:var(--sp-2);">
                    <span style="font-size:var(--text-xs); color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.5px; font-weight:600;">Deployment Model & Core Stacks</span>
                    <div class="prod-tech-list">
                      <span class="prod-tech-badge" style="background:rgba(16,185,129,0.05); color:var(--prod-teal); border-color:rgba(16,185,129,0.2);">${p.deployment}</span>
                      ${techBadges}
                    </div>
                  </div>

                  <!-- Feature Highlights visible directly -->
                  <div style="display:flex; flex-direction:column; gap:var(--sp-2); border-top:1px solid var(--prod-border-subtle); padding-top:var(--sp-4); margin-top:var(--sp-2);">
                    <span style="font-size:var(--text-xs); color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.5px; font-weight:600;">Key Capabilities</span>
                    <div class="prod-features-grid">
                      ${featureHighlights}
                    </div>
                  </div>
                </div>
                
                <div class="metrics-panel">
                  <div class="tech-breakdown-box">
                    <h5>Engineering Depth Analysis</h5>
                    
                    <div class="tech-progress-bar-wrap">
                      <div class="tech-progress-label-wrap">
                        <span>Frontend Interface Layer</span>
                        <span>${frontendWeight}%</span>
                      </div>
                      <div class="tech-progress-outer">
                        <div class="tech-progress-inner" style="width: ${frontendWeight}%; background: var(--prod-blue);"></div>
                      </div>
                    </div>

                    <div class="tech-progress-bar-wrap">
                      <div class="tech-progress-label-wrap">
                        <span>Backend Logic & Integrations</span>
                        <span>${backendWeight}%</span>
                      </div>
                      <div class="tech-progress-outer">
                        <div class="tech-progress-inner" style="width: ${backendWeight}%; background: var(--prod-cyan);"></div>
                      </div>
                    </div>

                    <div class="tech-progress-bar-wrap">
                      <div class="tech-progress-label-wrap">
                        <span>Database & Storage Engine</span>
                        <span>${dbWeight}%</span>
                      </div>
                      <div class="tech-progress-outer">
                        <div class="tech-progress-inner" style="width: ${dbWeight}%; background: var(--prod-teal);"></div>
                      </div>
                    </div>
                  </div>

                  <div class="timeline-progress-wrap">
                    <div class="tech-progress-bar-wrap">
                      <div class="tech-progress-label-wrap" style="color:var(--text-secondary);">
                        <span>System Sophistication Index</span>
                        <span>${complexityScore}%</span>
                      </div>
                      <div class="tech-progress-outer" style="height:4px;">
                        <div class="tech-progress-inner" style="width: ${complexityScore}%; background: var(--prod-purple);"></div>
                      </div>
                    </div>
                    
                    <div class="tech-progress-bar-wrap" style="margin-top:12px;">
                      <div class="tech-progress-label-wrap" style="color:var(--text-secondary);">
                        <span>Deployment Sprint Duration</span>
                        <span>${buildWeeks} Weeks</span>
                      </div>
                      <div class="tech-progress-outer" style="height:4px;">
                        <div class="tech-progress-inner" style="width: ${(buildWeeks / 8) * 100}%; background: var(--prod-yellow);"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pane 2: Topology -->
            <div class="prod-tab-pane" id="pane-topo-${p.id}">
              <div class="topology-container">
                ${topologyMarkup}
                <span class="topo-caption">${p.deployment} — Architecture Flow</span>
              </div>
            </div>

            <!-- Pane 3: Setup Plans -->
            <div class="prod-tab-pane" id="pane-plans-${p.id}">
              <div class="prod-plans-wrapper">
                
                <div class="pricing-configurator-box">
                  <h5><i class="ph-bold ph-sliders-horizontal"></i> Build Your Custom Package</h5>
                  <div class="config-options-list">
                    <label class="config-option-item">
                      <span class="config-option-lbl">
                        <input type="checkbox" class="addon-cb" data-addon-price="10000" data-target-id="${p.id}">
                        <span>🟢 Add WhatsApp Automation — never miss a patient message again</span>
                      </span>
                      <span class="config-option-val">+₹10,000</span>
                    </label>
                    
                    <label class="config-option-item">
                      <span class="config-option-lbl">
                        <input type="checkbox" class="addon-cb" data-addon-price="15000" data-target-id="${p.id}">
                        <span>🛡️ Add Priority Support — 2-hour guaranteed response SLA for 1 year</span>
                      </span>
                      <span class="config-option-val">+₹15,000</span>
                    </label>
                  </div>
                </div>

                <div class="plans-grid">
                  ${p.plans.map((plan, planIdx) => `
                    <div class="plan-tier-card">
                      ${planIdx === p.plans.length - 1 ? '<span class="plan-popular-pill">✦ RECOMMENDED</span>' : ''}
                      <div class="plan-tier-hdr">
                        <h5 class="plan-tier-name">${plan.name}</h5>
                        <span class="plan-tier-price">${plan.price}</span>
                      </div>
                      <ul class="plan-features-ul">
                        ${plan.features.map(feat => `
                          <li>
                            <i class="ph-fill ph-check-circle"></i>
                            <span>${feat}</span>
                          </li>
                        `).join('')}
                      </ul>
                      <a href="/contact.html" class="plan-cta-btn">
                        <span>Request This Package</span>
                        <i class="ph-bold ph-arrow-right"></i>
                      </a>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  }).join('');

  // Setup accordion behaviors
  const cards = container.querySelectorAll('.prod-card');
  
  const initialActive = container.querySelector('.prod-card.active');
  if (initialActive) {
    const body = initialActive.querySelector('.prod-card__body');
    body.style.maxHeight = `${body.scrollHeight}px`;
    initCardTabs(initialActive);
    initAddonConfigurators(initialActive);
  }

  cards.forEach(card => {
    const header = card.querySelector('.prod-card__hdr');
    header.addEventListener('click', (e) => {
      if (e.target.closest('.prod-card__tabs') || e.target.closest('.prod-panes-container')) return;

      const isOpen = card.classList.contains('active');

      cards.forEach(c => {
        c.classList.remove('active');
        c.querySelector('.prod-card__body').style.maxHeight = '0px';
      });

      if (!isOpen) {
        card.classList.add('active');
        const body = card.querySelector('.prod-card__body');
        body.style.maxHeight = `${body.scrollHeight}px`;
        
        initCardTabs(card);
        initAddonConfigurators(card);
        
        // Smooth scroll to the opened card
        setTimeout(() => {
          card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }

      // Refresh ScrollTrigger to update layouts after height transition completes
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 550);
    });
  });

  // Recalculate ScrollTrigger positions due to dynamic content height changes
  import('../animations/gsap-init.js').then(({ ScrollTrigger }) => {
    ScrollTrigger.refresh();
  });
}

/* ──────────────────────────────────────────────────────────
   CARD SUB-TABS INTERACTIVITY MANAGER
   ────────────────────────────────────────────────────────── */
function initCardTabs(card) {
  const tabs = card.querySelectorAll('.prod-card-tab-btn');
  const body = card.querySelector('.prod-card__body');

  tabs.forEach(tab => {
    if (tab.getAttribute('data-bound') === 'true') return;
    tab.setAttribute('data-bound', 'true');

    tab.addEventListener('click', (e) => {
      e.stopPropagation();
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const paneId = tab.getAttribute('data-tab-pane');
      const pane = card.querySelector(`#${paneId}`);
      
      const panes = card.querySelectorAll('.prod-tab-pane');
      panes.forEach(p => p.classList.remove('active'));
      pane.classList.add('active');

      body.style.maxHeight = 'none';
      const newHeight = body.scrollHeight;
      body.style.maxHeight = `${newHeight}px`;
    });
  });
}

/* ──────────────────────────────────────────────────────────
   PRICING ADDON CONFIGURATOR SIMULATOR
   ────────────────────────────────────────────────────────── */
function initAddonConfigurators(card) {
  const checkboxes = card.querySelectorAll('.addon-cb');
  const priceBadge = card.querySelector(`#badge-price-${card.getAttribute('data-id')}`);
  const basePriceRangeStr = card.getAttribute('data-base-price');

  checkboxes.forEach(cb => {
    if (cb.getAttribute('data-bound') === 'true') return;
    cb.setAttribute('data-bound', 'true');

    cb.addEventListener('change', () => {
      let addonTotal = 0;
      checkboxes.forEach(box => {
        if (box.checked) addonTotal += parseInt(box.getAttribute('data-addon-price'));
      });

      const priceRegex = /₹([0-9,]+)/g;
      const prices = [];
      let match;
      while ((match = priceRegex.exec(basePriceRangeStr)) !== null) {
        prices.push(parseInt(match[1].replace(/,/g, '')));
      }

      if (prices.length > 0) {
        const updatedPrices = prices.map(price => price + addonTotal);
        if (updatedPrices.length === 2) {
          priceBadge.innerText = `₹${updatedPrices[0].toLocaleString('en-IN')} – ₹${updatedPrices[1].toLocaleString('en-IN')}`;
        } else {
          priceBadge.innerText = `₹${updatedPrices[0].toLocaleString('en-IN')}`;
        }
      }
    });
  });
}

/* ──────────────────────────────────────────────────────────
   SVG TOPOLOGY GENERATORS
   ────────────────────────────────────────────────────────── */
function generateOfflineTopologySVG() {
  return `
    <svg class="topo-svg" viewBox="0 0 500 220">
      <defs>
        <filter id="neon-glow-blue" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path class="topo-connect-line" d="M 120 110 L 250 110" />
      <path class="topo-connect-line" d="M 250 110 L 380 110" />
      <path class="topo-pulse-line" d="M 120 110 L 250 110" />
      <path class="topo-pulse-line" d="M 250 110 L 380 110" />
      <g class="topo-node highlight" transform="translate(70, 75)" filter="url(#neon-glow-blue)">
        <rect x="0" y="0" width="100" height="70" rx="8" />
        <text class="topo-icon-text" x="50" y="30">🖥️</text>
        <text class="topo-label-text" x="50" y="55">Desktop Client</text>
      </g>
      <g class="topo-node highlight" transform="translate(200, 75)" filter="url(#neon-glow-blue)">
        <rect x="0" y="0" width="100" height="70" rx="8" />
        <text class="topo-icon-text" x="50" y="30">🗄️</text>
        <text class="topo-label-text" x="50" y="55">SQLite Local DB</text>
      </g>
      <g class="topo-node highlight" transform="translate(330, 75)" filter="url(#neon-glow-blue)">
        <rect x="0" y="0" width="100" height="70" rx="8" />
        <text class="topo-icon-text" x="50" y="30">🖨️</text>
        <text class="topo-label-text" x="50" y="55">Printer Output</text>
      </g>
    </svg>`;
}

function generateLANTopologySVG() {
  return `
    <svg class="topo-svg" viewBox="0 0 500 220">
      <path class="topo-connect-line" d="M 100 110 L 250 110" />
      <path class="topo-connect-line" d="M 250 110 L 400 60" />
      <path class="topo-connect-line" d="M 250 110 L 400 160" />
      <path class="topo-pulse-line-teal" d="M 100 110 L 250 110" />
      <path class="topo-pulse-line-teal" d="M 250 110 L 400 60" />
      <path class="topo-pulse-line-teal" d="M 250 110 L 400 160" />
      <g class="topo-node highlight-teal" transform="translate(50, 75)">
        <rect x="0" y="0" width="100" height="70" rx="8" />
        <text class="topo-icon-text" x="50" y="30">💻</text>
        <text class="topo-label-text" x="50" y="55">LAN Server PC</text>
      </g>
      <g class="topo-node highlight-teal" transform="translate(200, 75)">
        <rect x="0" y="0" width="100" height="70" rx="8" />
        <text class="topo-icon-text" x="50" y="30">📶</text>
        <text class="topo-label-text" x="50" y="55">Clinic Router</text>
      </g>
      <g class="topo-node highlight-teal" transform="translate(350, 25)">
        <rect x="0" y="0" width="100" height="70" rx="8" />
        <text class="topo-icon-text" x="50" y="30">🩺</text>
        <text class="topo-label-text" x="50" y="55">Doctor Screen</text>
      </g>
      <g class="topo-node highlight-teal" transform="translate(350, 125)">
        <rect x="0" y="0" width="100" height="70" rx="8" />
        <text class="topo-icon-text" x="50" y="30">📺</text>
        <text class="topo-label-text" x="50" y="55">OPD TV Display</text>
      </g>
    </svg>`;
}

function generateCloudTopologySVG() {
  return `
    <svg class="topo-svg" viewBox="0 0 500 220">
      <path class="topo-connect-line" d="M 80 110 L 200 60" />
      <path class="topo-connect-line" d="M 80 110 L 200 160" />
      <path class="topo-connect-line" d="M 200 60 L 320 110" />
      <path class="topo-connect-line" d="M 200 160 L 320 110" />
      <path class="topo-connect-line" d="M 320 110 L 440 110" />
      <path class="topo-pulse-line" d="M 80 110 L 200 60" />
      <path class="topo-pulse-line-teal" d="M 80 110 L 200 160" />
      <path class="topo-pulse-line" d="M 200 60 L 320 110" />
      <path class="topo-pulse-line-teal" d="M 200 160 L 320 110" />
      <path class="topo-pulse-line" d="M 320 110 L 440 110" />
      <g class="topo-node highlight" transform="translate(30, 75)">
        <rect x="0" y="0" width="100" height="70" rx="8" />
        <text class="topo-icon-text" x="50" y="30">📥</text>
        <text class="topo-label-text" x="50" y="55">Local Intake</text>
      </g>
      <g class="topo-node highlight" transform="translate(150, 25)">
        <rect x="0" y="0" width="100" height="70" rx="8" />
        <text class="topo-icon-text" x="50" y="30">☁️</text>
        <text class="topo-label-text" x="50" y="55">VPS Sync Node</text>
      </g>
      <g class="topo-node highlight-teal" transform="translate(150, 125)">
        <rect x="0" y="0" width="100" height="70" rx="8" />
        <text class="topo-icon-text" x="50" y="30">💬</text>
        <text class="topo-label-text" x="50" y="55">WhatsApp API</text>
      </g>
      <g class="topo-node highlight-teal" transform="translate(270, 75)">
        <rect x="0" y="0" width="100" height="70" rx="8" />
        <text class="topo-icon-text" x="50" y="30">👤</text>
        <text class="topo-label-text" x="50" y="55">Patient Portal</text>
      </g>
      <g class="topo-node highlight" transform="translate(390, 75)">
        <rect x="0" y="0" width="100" height="70" rx="8" />
        <text class="topo-icon-text" x="50" y="30">📊</text>
        <text class="topo-label-text" x="50" y="55">Admin Dashboard</text>
      </g>
    </svg>`;
}
