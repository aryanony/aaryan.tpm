// assets/js/sections/stats-render.js

export async function renderStats() {
  const container = document.querySelector('.about__stats-grid');
  if (!container) return;

  const res = await fetch('/data/stats.json');
  const stats = await res.json();

  container.innerHTML = stats.map(s => {
    // Extract suffix from string value (e.g., "70+" count is 70, suffix is "+")
    const suffix = s.value.replace(String(s.count), '');
    
    return `
      <div class="about__stat-item">
        <span class="about__stat-num" data-counter="${s.count}" data-suffix="${suffix}">0</span>
        <span class="about__stat-lbl">${s.label}</span>
      </div>
    `;
  }).join('');
}
