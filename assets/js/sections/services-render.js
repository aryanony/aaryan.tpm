// assets/js/sections/services-render.js

const ICON_CLASSES = {
  briefcase: 'ph-duotone ph-briefcase',
  heartbeat: 'ph-duotone ph-heartbeat',
  brain: 'ph-duotone ph-brain',
  code: 'ph-duotone ph-code',
  shield: 'ph-duotone ph-shield-check',
  users: 'ph-duotone ph-users'
};

export async function renderServices() {
  const container = document.querySelector('.services-grid');
  if (!container) return;

  const res = await fetch('/data/services.json');
  const services = await res.json();

  container.innerHTML = services.map((s, idx) => {
    const iconClass = ICON_CLASSES[s.icon] || 'ph-duotone ph-circle';
    const isFirstFeatured = idx === 0 ? 'featured-service' : ''; // Optional hook for prominent style
    
    const tagsHTML = s.tags.map(t => `<span class="chip">${t}</span>`).join('');

    return `
      <div class="card service-card ${isFirstFeatured}" data-tilt data-id="${s.id}">
        <div class="card__inner">
          <div class="service-card__icon-wrap">
            <i class="${iconClass}"></i>
          </div>
          <h3 class="service-card__title">${s.heading}</h3>
          <div class="service-card__subtitle">${s.subheading}</div>
          <p class="service-card__body">${s.body}</p>
          <div class="service-card__tags chip-group">
            ${tagsHTML}
          </div>
          <div class="service-card__footer">
            <span class="service-card__price">${s.price}</span>
            <a href="${s.href}" class="service-card__link">
              ${s.cta}
              <i class="ph-bold ph-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Initialize interactive ROI estimator
  initROIEstimator();

  // Recalculate ScrollTrigger positions & trigger reveal observer
  import('../animations/gsap-init.js').then(({ ScrollTrigger }) => {
    ScrollTrigger.refresh();
  });
  import('../animations/scroll-reveal.js').then(m => m.observeAll?.());
}

function initROIEstimator() {
  const teamInput = document.getElementById('input-team-size');
  const timelineInput = document.getElementById('input-timeline');
  const teamVal = document.getElementById('val-team-size');
  const timelineVal = document.getElementById('val-timeline');
  const hoursSavedEl = document.getElementById('roi-hours-saved');
  const riskReductionEl = document.getElementById('roi-risk-reduction');
  const moneySavedEl = document.getElementById('roi-money-saved');

  if (!teamInput || !timelineInput) return;

  let currentHours = 0;
  let currentRisk = 0;
  let currentMoney = 0;

  const updateCalculations = (isInitial = false) => {
    const devs = parseInt(teamInput.value);
    const months = parseInt(timelineInput.value);

    teamVal.innerText = `${devs} ${devs === 1 ? 'Dev' : 'Devs'}`;
    timelineVal.innerText = `${months} ${months === 1 ? 'Month' : 'Months'}`;

    // Calculation formulas
    const hoursSaved = devs * months * 6;
    const riskReduction = Math.min(15 + (devs * 5) + (months * 2), 85);
    const moneySaved = hoursSaved * 20; // $20/hr average developer rate

    const duration = isInitial ? 0 : 350;

    animateValue(hoursSavedEl, currentHours, hoursSaved, duration, ' hrs');
    animateValue(riskReductionEl, currentRisk, riskReduction, duration, '%');
    animateValue(moneySavedEl, currentMoney, moneySaved, duration, '+', '$');

    currentHours = hoursSaved;
    currentRisk = riskReduction;
    currentMoney = moneySaved;
  };

  teamInput.addEventListener('input', () => updateCalculations(false));
  timelineInput.addEventListener('input', () => updateCalculations(false));

  // Run initial calculation with animation
  updateCalculations(true);
}

function animateValue(obj, start, end, duration, suffix = '', prefix = '') {
  if (duration === 0) {
    obj.innerText = `${prefix}${end.toLocaleString()}${suffix}`;
    return;
  }
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const val = Math.floor(progress * (end - start) + start);
    obj.innerText = `${prefix}${val.toLocaleString()}${suffix}`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
