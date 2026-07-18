// assets/js/sections/healthtech-render.js

export async function renderHealthtech() {
  const container = document.querySelector('.healthtech__products');
  if (!container) return;

  const res = await fetch('/data/products.json?v=' + Date.now());
  const allProducts = await res.json();
  const products = allProducts.filter(p => p.category === 'Healthcare');

  const BADGE_MAP = {
    'tokenq': '⚡ MOST DEPLOYED',
    'rxpad-pro': '🏆 CLINIC FAVORITE',
    'labtrack-pro': '🔒 ENTERPRISE',
    'recallmd': '📈 98% RETENTION',
    'carereview': '⭐ REPUTATION',
    'wellnessdesk': '💪 STUDIO LITE'
  };

  container.innerHTML = products.map((p, idx) => {
    const activeClass = idx === 0 ? 'active' : ''; // Expand first card on load
    const badgeText = BADGE_MAP[p.id] || '';
    const badgeHtml = badgeText ? `<span class="badge badge-success" style="font-size: 8px; padding: 2px 6px; margin-left: 6px; display: inline-flex; align-items: center; line-height: 1; height: 16px;">${badgeText}</span>` : '';
    
    return `
      <div class="ht-product ${activeClass}" data-id="${p.id}">
        <div class="ht-product__hdr">
          <div class="ht-product__info">
            <h4 class="ht-product__name" style="display: flex; align-items: center; flex-wrap: wrap; gap: 4px;">${p.name}${badgeHtml}</h4>
            <span class="ht-product__tagline">${p.tagline}</span>
          </div>
          <span class="ht-product__price">${p.price}</span>
        </div>
        <div class="ht-product__body">
          <p class="ht-product__desc">${p.desc}</p>
          <div class="ht-product__meta">
            <span>Deploy: <strong>${p.deployment}</strong></span>
            <span>License: <strong>One-time</strong></span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const items = container.querySelectorAll('.ht-product');
  
  // Set initial scroll height for the active card
  const initialActive = container.querySelector('.ht-product.active .ht-product__body');
  if (initialActive) {
    initialActive.style.maxHeight = `${initialActive.scrollHeight}px`;
  }

  items.forEach(item => {
    item.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all products
      items.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.ht-product__body').style.maxHeight = '0px';
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('active');
        const body = item.querySelector('.ht-product__body');
        body.style.maxHeight = `${body.scrollHeight}px`;
      }
    });
  });

  // Initialize interactive simulation
  initTokenQSimulator();

  // Recalculate ScrollTrigger positions due to dynamic content height changes
  import('../animations/gsap-init.js').then(({ ScrollTrigger }) => {
    ScrollTrigger.refresh();
  });
}

function initTokenQSimulator() {
  const btnNext = document.getElementById('btn-sim-next');
  const btnAdd = document.getElementById('btn-sim-add');
  const activeTokenEl = document.getElementById('sim-active-token');
  const queueSizeEl = document.getElementById('sim-queue-size');
  const feedEl = document.getElementById('sim-feed');

  if (!btnNext || !btnAdd) return;

  let activeToken = 14;
  let queueSize = 3;

  const logMessage = (msg) => {
    if (!feedEl) return;
    const div = document.createElement('div');
    div.innerText = `> ${msg}`;
    feedEl.appendChild(div);
    feedEl.scrollTop = feedEl.scrollHeight;
  };

  btnAdd.addEventListener('click', () => {
    queueSize++;
    queueSizeEl.innerHTML = `${queueSize}<span style="font-size: var(--text-xs); color: var(--text-muted); font-weight: 500;"> patients</span>`;
    logMessage(`New patient registered. Queue size: ${queueSize}.`);
  });

  btnNext.addEventListener('click', () => {
    if (queueSize > 0) {
      queueSize--;
      activeToken++;
      activeTokenEl.innerText = activeToken;
      queueSizeEl.innerHTML = `${queueSize}<span style="font-size: var(--text-xs); color: var(--text-muted); font-weight: 500;"> patients</span>`;
      logMessage(`Token ${activeToken} called to OPD Consulting Room 1.`);
    } else {
      logMessage(`Queue is empty. Active token remaining: ${activeToken}.`);
    }
  });
}
