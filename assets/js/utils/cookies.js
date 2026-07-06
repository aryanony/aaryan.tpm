// assets/js/utils/cookies.js

import { STORAGE_KEYS } from '@config/constants.js';

export function initCookies() {
  const consent = localStorage.getItem(STORAGE_KEYS.COOKIE_CONSENT);
  if (consent) return; // Consent already given/refused

  // Create cookie banner DOM element
  const banner = document.createElement('div');
  banner.className = 'cookie-banner reveal';
  banner.style.cssText = `
    position: fixed;
    bottom: var(--sp-6);
    right: var(--sp-6);
    background: var(--bg-card);
    border: 1px solid var(--bd-mid);
    padding: var(--sp-5) var(--sp-6);
    z-index: var(--z-modal);
    clip-path: var(--clip-card-sm);
    box-shadow: var(--sh-float);
    max-width: 380px;
    display: flex;
    flex-direction: column;
    gap: var(--sp-3);
  `;
  
  banner.innerHTML = `
    <h4 style="font-family: var(--font-display); font-size: var(--text-base); color: var(--text-primary); font-weight: 600;">Cookie Consent</h4>
    <p style="font-size: var(--text-sm); color: var(--text-secondary); line-height: var(--leading-normal);">We use cookies to analyze website traffic and optimize your practice management research experience.</p>
    <div style="display: flex; gap: var(--sp-3); margin-top: var(--sp-1);">
      <button class="btn btn-p btn-sm btn-accept" style="padding: 0.4rem 1rem;">Accept</button>
      <button class="btn btn-w btn-sm btn-decline" style="padding: 0.4rem 1rem;">Decline</button>
    </div>
  `;

  document.body.appendChild(banner);
  
  // Stagger entry
  setTimeout(() => {
    banner.classList.add('visible');
  }, 100);

  banner.querySelector('.btn-accept').addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEYS.COOKIE_CONSENT, 'accepted');
    banner.remove();
  });

  banner.querySelector('.btn-decline').addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEYS.COOKIE_CONSENT, 'declined');
    banner.remove();
  });
}
