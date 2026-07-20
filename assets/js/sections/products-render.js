// assets/js/sections/products-render.js
import { ScrollTrigger } from '../animations/gsap-init.js';

/* ──────────────────────────────────────────────────────────
   PRODUCTS RENDERER — INFOGRAPHIC-FIRST, BUYER-FOCUSED
   No tech stacks, no architecture diagrams, no competitor intel.
   Pure value communication: What, Why, Who, How Much.
   ────────────────────────────────────────────────────────── */

export async function renderProducts() {
  const container = document.querySelector('.product-details-container');
  const tabsNav = document.querySelector('.products-tabs');
  if (!container) return;

  const res = await fetch('/data/products.json?v=' + Date.now());
  const products = await res.json();

  // Initialize interactive widgets
  initROISimulator();
  animateTrustCounters();

  // Initial render
  displayProducts(products, container);
  ScrollTrigger.refresh();

  // Tab filtering
  if (tabsNav) {
    const tabButtons = tabsNav.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
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
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(update);
    }
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
   ROI SIMULATOR
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
    const baseSaaS = activeSaasFee * 12 * years;
    const commSaaS = volume * ticket * 0.015 * 30 * 12 * years;
    const totalSaaS = Math.round(baseSaaS + commSaaS);
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
    if (savingsPctEl) savingsPctEl.innerText = `You save ${savingsPct}% vs. renting`;
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
   CATEGORY HEADERS
   ────────────────────────────────────────────────────────── */
function getCategoryConfig(cat) {
  const map = {
    'Healthcare': { icon: 'ph-first-aid', label: 'Healthcare & Clinics', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(6,182,212,0.08))', color: '#10b981', count: 7 },
    'SMB': { icon: 'ph-storefront', label: 'Business & Trading', gradient: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(168,85,247,0.08))', color: '#3b82f6', count: 3 },
    'Automation': { icon: 'ph-robot', label: 'AI & Automation', gradient: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(249,115,22,0.08))', color: '#a855f7', count: 3 }
  };
  return map[cat] || { icon: 'ph-squares-four', label: cat, gradient: 'none', color: '#94a3b8' };
}

/* ──────────────────────────────────────────────────────────
   MAIN PRODUCT GRID RENDERER
   ────────────────────────────────────────────────────────── */
function displayProducts(items, container) {
  if (items.length === 0) {
    container.innerHTML = `<div class="reveal" style="text-align:center; padding: var(--sp-12); color: var(--text-muted); font-family: var(--font-mono);">No products found in this category.</div>`;
    return;
  }

  // Group products by category for section headers (only in "all" view)
  const isAllView = items.length > 5; // heuristic for "all" tab
  let html = '';

  if (isAllView) {
    const grouped = {};
    items.forEach(p => {
      if (!grouped[p.category]) grouped[p.category] = [];
      grouped[p.category].push(p);
    });
    const categoryOrder = ['Healthcare', 'SMB', 'Automation'];
    categoryOrder.forEach(cat => {
      if (!grouped[cat]) return;
      const cfg = getCategoryConfig(cat);
      html += `
        <div class="prod-category-header reveal" style="--cat-color: ${cfg.color}; background: ${cfg.gradient};">
          <div class="prod-category-header__inner">
            <i class="ph-duotone ${cfg.icon} prod-category-header__icon"></i>
            <div>
              <h2 class="prod-category-header__title">${cfg.label}</h2>
              <span class="prod-category-header__count">${grouped[cat].length} Solutions</span>
            </div>
          </div>
        </div>
      `;
      grouped[cat].forEach((p, idx) => {
        html += renderProductCard(p, idx === 0);
      });
    });
  } else {
    items.forEach((p, idx) => {
      html += renderProductCard(p, idx === 0);
    });
  }

  container.innerHTML = html;

  // Setup accordion + tab behaviors
  setupCardInteractions(container);

  // Refresh ScrollTrigger
  import('../animations/gsap-init.js').then(({ ScrollTrigger }) => {
    ScrollTrigger.refresh();
  });
}

/* ──────────────────────────────────────────────────────────
   SINGLE PRODUCT CARD RENDERER — INFOGRAPHIC-FIRST
   ────────────────────────────────────────────────────────── */
function renderProductCard(p, isFirstInCategory) {
  const activeClass = isFirstInCategory ? 'active' : '';

  // Badge markup
  const badgeHtml = p.badge
    ? `<span class="prod-badge prod-badge--${p.badge.type}"><span class="prod-badge__dot"></span>${p.badge.label}</span>`
    : '';

  // Key benefits grid
  const benefitsHtml = p.keyBenefits.map(b => `
    <div class="prod-benefit-pill">
      <div class="prod-benefit-pill__icon" style="--pill-color: ${p.color}">
        <i class="ph-duotone ${b.icon}"></i>
      </div>
      <div class="prod-benefit-pill__text">
        <strong>${b.title}</strong>
        <span>${b.desc}</span>
      </div>
    </div>
  `).join('');

  // "Who is this for" chips
  const forWhomHtml = p.forWhom.map(fw => `
    <div class="prod-whom-chip">
      <i class="ph-duotone ${fw.icon}"></i>
      <span>${fw.label}</span>
    </div>
  `).join('');

  // "How it works" steps
  const stepsHtml = p.howItWorks.map((step, i) => `
    <div class="prod-step">
      <div class="prod-step__number" style="--step-color: ${p.color}">${step.step}</div>
      <div class="prod-step__icon"><i class="ph-duotone ${step.icon}"></i></div>
      <div class="prod-step__content">
        <strong>${step.title}</strong>
        <span>${step.desc}</span>
      </div>
      ${i < p.howItWorks.length - 1 ? '<div class="prod-step__connector"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-4-4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' : ''}
    </div>
  `).join('');

  // Comparison table
  const comparisonHtml = p.comparison ? `
    <div class="prod-comparison">
      <table class="prod-comparison__table">
        <thead>
          <tr>${p.comparison.headers.map((h, i) => `<th${i === 1 ? ' class="prod-comparison__highlight"' : ''}>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${p.comparison.rows.map(row => `
            <tr>${row.map((cell, i) => `<td${i === 1 ? ' class="prod-comparison__highlight"' : ''}>${cell}</td>`).join('')}</tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  ` : '';

  // Pricing tiers
  const pricingHtml = p.pricing.tiers.map(tier => `
    <div class="prod-tier${tier.recommended ? ' prod-tier--recommended' : ''}">
      ${tier.recommended ? '<span class="prod-tier__badge">✦ RECOMMENDED</span>' : ''}
      <h5 class="prod-tier__name">${tier.name}</h5>
      <span class="prod-tier__price">${tier.price}</span>
      <ul class="prod-tier__features">
        ${tier.features.map(f => `<li><i class="ph-fill ph-check-circle"></i><span>${f}</span></li>`).join('')}
      </ul>
      <a href="/contact.html" class="prod-tier__cta">
        <span>Request This Package</span>
        <i class="ph-bold ph-arrow-right"></i>
      </a>
    </div>
  `).join('');

  // Product FAQ
  const faqHtml = p.faq.map(item => `
    <div class="prod-faq-item">
      <button class="prod-faq-q" aria-expanded="false">
        <span>${item.q}</span>
        <i class="ph-bold ph-plus prod-faq-icon"></i>
      </button>
      <div class="prod-faq-body">
        <div class="prod-faq-ans">${item.a}</div>
      </div>
    </div>
  `).join('');

  // Use case story
  const useCaseHtml = p.useCase ? `
    <div class="prod-usecase">
      <div class="prod-usecase__icon"><i class="ph-duotone ph-map-pin"></i></div>
      <div class="prod-usecase__content">
        <span class="prod-usecase__city">${p.useCaseCity}</span>
        <p>${p.useCase}</p>
      </div>
    </div>
  ` : '';

  // Trust points
  const trustHtml = p.trustPoints.map(t => `
    <div class="prod-trust-point">
      <i class="ph-fill ph-seal-check"></i>
      <span>${t}</span>
    </div>
  `).join('');

  return `
    <article class="prod-card ${activeClass}" data-id="${p.id}" data-category="${p.category}" itemscope itemtype="https://schema.org/SoftwareApplication">
      <meta itemprop="applicationCategory" content="${p.category === 'Healthcare' ? 'MedicalApplication' : 'BusinessApplication'}" />
      <meta itemprop="operatingSystem" content="Web Browser (Any Device)" />
      
      <!-- CARD HEADER — Click to expand/collapse -->
      <div class="prod-card__hdr" style="--card-accent: ${p.color}">
        <div class="prod-card__icon-wrap" style="--icon-color: ${p.color}">
          <i class="ph-duotone ${p.icon}"></i>
        </div>
        <div class="prod-card__title-wrap">
          <h3 itemprop="name">
            ${p.name}
            <span class="prod-card__category-pill">${p.category === 'Healthcare' ? 'Healthcare' : p.category === 'SMB' ? 'Business' : 'AI & Automation'}</span>
            ${badgeHtml}
          </h3>
          <span class="prod-card__headline">${p.headline}</span>
        </div>
        <div class="prod-card__meta-right">
          <span class="prod-card__price-badge" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
            <meta itemprop="priceCurrency" content="INR" />
            <span itemprop="price" content="${p.pricing.startingAt.replace(/[₹,]/g, '')}">Starting ${p.pricing.startingAt}</span>
          </span>
          <i class="ph-bold ph-caret-down prod-card__toggle-arrow"></i>
        </div>
      </div>
      
      <!-- CARD BODY — Expandable infographic content -->
      <div class="prod-card__body">
        
        <!-- HERO SECTION -->
        <div class="prod-card__hero">
          <span class="prod-card__eyebrow">${p.eyebrow}</span>
          <p class="prod-card__subheadline" itemprop="description">${p.subheadline}</p>
          <div class="prod-card__ctas">
            <a href="/contact.html" class="btn btn-p btn-sm btn-magnetic prod-card__cta-primary">
              <i class="ph-bold ph-play-circle"></i> ${p.cta.primary}
            </a>
            <a data-cfg-href="contact.calendlyUrl" class="btn btn-ghost btn-sm btn-magnetic prod-card__cta-secondary">
              <i class="ph-bold ph-phone"></i> ${p.cta.secondary}
            </a>
          </div>
          <span class="prod-card__deployment-label"><i class="ph-duotone ph-cloud-check"></i> ${p.deploymentLabel}</span>
        </div>

        <!-- INNER TABS -->
        <nav class="prod-card__tabs" aria-label="Product detail sections">
          <button class="prod-inner-tab active" data-tab-target="tab-overview-${p.id}">
            <i class="ph-bold ph-info"></i> Overview
          </button>
          <button class="prod-inner-tab" data-tab-target="tab-howit-${p.id}">
            <i class="ph-bold ph-flow-arrow"></i> How It Works
          </button>
          <button class="prod-inner-tab" data-tab-target="tab-pricing-${p.id}">
            <i class="ph-bold ph-tag"></i> Pricing
          </button>
          <button class="prod-inner-tab" data-tab-target="tab-faq-${p.id}">
            <i class="ph-bold ph-question"></i> FAQ
          </button>
        </nav>

        <div class="prod-panes-container">

          <!-- TAB 1: Overview -->
          <div class="prod-tab-pane active" id="tab-overview-${p.id}">
            
            <!-- Problem / Solution -->
            <div class="prod-problem-solution">
              <div class="prod-problem-box">
                <div class="prod-box-header"><i class="ph-duotone ph-warning-circle"></i> The Problem</div>
                <p>${p.problemSummary}</p>
              </div>
              <div class="prod-solution-box">
                <div class="prod-box-header"><i class="ph-duotone ph-lightbulb"></i> The Solution</div>
                <p>${p.solutionSummary}</p>
              </div>
            </div>

            <!-- Key Benefits Grid -->
            <div class="prod-section-label"><i class="ph-bold ph-sparkle"></i> Key Benefits</div>
            <div class="prod-benefits-grid">
              ${benefitsHtml}
            </div>

            <!-- Who It's For -->
            <div class="prod-section-label"><i class="ph-bold ph-users-three"></i> Built For</div>
            <div class="prod-whom-grid">
              ${forWhomHtml}
            </div>

            <!-- Use Case Story -->
            ${useCaseHtml}

            <!-- Trust Points -->
            <div class="prod-trust-grid">
              ${trustHtml}
            </div>
          </div>

          <!-- TAB 2: How It Works -->
          <div class="prod-tab-pane" id="tab-howit-${p.id}">
            <div class="prod-section-label"><i class="ph-bold ph-flow-arrow"></i> How It Works — 4 Simple Steps</div>
            <div class="prod-steps-flow">
              ${stepsHtml}
            </div>

            <!-- Comparison Table -->
            <div class="prod-section-label" style="margin-top: var(--sp-8);"><i class="ph-bold ph-scales"></i> Why This Beats the Alternatives</div>
            ${comparisonHtml}
          </div>

          <!-- TAB 3: Pricing -->
          <div class="prod-tab-pane" id="tab-pricing-${p.id}">
            <div class="prod-section-label"><i class="ph-bold ph-tag"></i> Transparent, One-Time Pricing — No Monthly Rent</div>
            <div class="prod-pricing-grid">
              ${pricingHtml}
            </div>
          </div>

          <!-- TAB 4: FAQ -->
          <div class="prod-tab-pane" id="tab-faq-${p.id}">
            <div class="prod-section-label"><i class="ph-bold ph-question"></i> Frequently Asked Questions</div>
            <div class="prod-faq-list">
              ${faqHtml}
            </div>
          </div>

        </div>
      </div>
    </article>
  `;
}

/* ──────────────────────────────────────────────────────────
   CARD INTERACTIONS — Accordion + Inner Tabs + FAQ
   ────────────────────────────────────────────────────────── */
function setupCardInteractions(container) {
  const cards = container.querySelectorAll('.prod-card');

  // Expand first active card
  const initialActive = container.querySelector('.prod-card.active');
  if (initialActive) {
    const body = initialActive.querySelector('.prod-card__body');
    body.style.maxHeight = `${body.scrollHeight}px`;
    setupInnerTabs(initialActive);
    setupProductFAQs(initialActive);
  }

  // Accordion behavior
  cards.forEach(card => {
    const header = card.querySelector('.prod-card__hdr');
    header.addEventListener('click', (e) => {
      if (e.target.closest('.prod-card__tabs') || e.target.closest('.prod-panes-container')) return;
      const isOpen = card.classList.contains('active');

      // Close all
      cards.forEach(c => {
        c.classList.remove('active');
        const b = c.querySelector('.prod-card__body');
        if (b) b.style.maxHeight = '0px';
      });

      if (!isOpen) {
        card.classList.add('active');
        const body = card.querySelector('.prod-card__body');
        body.style.maxHeight = `${body.scrollHeight}px`;
        setupInnerTabs(card);
        setupProductFAQs(card);
        setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
      }

      setTimeout(() => ScrollTrigger.refresh(), 550);
    });
  });
}

function setupInnerTabs(card) {
  const tabs = card.querySelectorAll('.prod-inner-tab');
  const body = card.querySelector('.prod-card__body');

  tabs.forEach(tab => {
    if (tab.getAttribute('data-bound') === 'true') return;
    tab.setAttribute('data-bound', 'true');

    tab.addEventListener('click', (e) => {
      e.stopPropagation();
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetId = tab.getAttribute('data-tab-target');
      const panes = card.querySelectorAll('.prod-tab-pane');
      panes.forEach(p => p.classList.remove('active'));
      const targetPane = card.querySelector(`#${targetId}`);
      if (targetPane) targetPane.classList.add('active');

      body.style.maxHeight = 'none';
      const newHeight = body.scrollHeight;
      body.style.maxHeight = `${newHeight}px`;
    });
  });
}

function setupProductFAQs(card) {
  const faqItems = card.querySelectorAll('.prod-faq-q');
  faqItems.forEach(btn => {
    if (btn.getAttribute('data-bound') === 'true') return;
    btn.setAttribute('data-bound', 'true');

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = btn.closest('.prod-faq-item');
      const isOpen = item.classList.contains('open');

      // Close all in this card
      card.querySelectorAll('.prod-faq-item').forEach(fi => fi.classList.remove('open'));
      card.querySelectorAll('.prod-faq-q').forEach(fb => fb.setAttribute('aria-expanded', 'false'));

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }

      // Recalculate card body height
      const body = card.querySelector('.prod-card__body');
      body.style.maxHeight = 'none';
      body.style.maxHeight = `${body.scrollHeight}px`;
    });
  });
}
