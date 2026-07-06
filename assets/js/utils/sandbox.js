// assets/js/utils/sandbox.js

import { gsap } from '../animations/gsap-init.js';

export function openSandbox(url, projectName) {
  // Check if sandbox is already open
  if (document.querySelector('.sandbox-overlay')) return;

  // Build the overlay HTML structure
  const overlay = document.createElement('div');
  overlay.className = 'sandbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', `Live Preview of ${projectName}`);

  overlay.innerHTML = `
    <div class="sandbox-window">
      <!-- Browser Header controls -->
      <div class="sandbox-header">
        <div class="sandbox-window-dots">
          <span class="sandbox-dot red" title="Close"></span>
          <span class="sandbox-dot yellow" title="Minimize"></span>
          <span class="sandbox-dot green" title="Maximize"></span>
        </div>
        
        <!-- Device Emulators -->
        <div class="sandbox-device-selectors">
          <button class="sandbox-device-btn active" data-device="desktop" aria-label="Desktop Preview">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M208,40H48A16,16,0,0,0,32,56V176a16,16,0,0,0,16,16h64v24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H144V192h64a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm0,136H48V56H208V176Z"/></svg>
          </button>
          <button class="sandbox-device-btn" data-device="tablet" aria-label="Tablet Preview">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M192,24H64A16,16,0,0,0,48,40V216a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V40A16,16,0,0,0,192,24Zm0,192H64V40H192V216ZM128,176a12,12,0,1,1-12,12A12,12,0,0,1,128,176Z"/></svg>
          </button>
          <button class="sandbox-device-btn" data-device="mobile" aria-label="Mobile Preview">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M176,16H80A16,16,0,0,0,64,32V224a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V32A16,16,0,0,0,176,16Zm0,208H80V32h96V224ZM128,192a12,12,0,1,1-12,12A12,12,0,0,1,128,192Z"/></svg>
          </button>
        </div>

        <!-- Address Bar -->
        <div class="sandbox-address-bar">
          <span class="sandbox-lock">🔒</span>
          <input type="text" class="sandbox-url-input" readonly value="${url}">
          <button class="sandbox-refresh-btn" aria-label="Refresh frame">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a96,96,0,0,1-147,81.24l-.16-.11L64.55,197A8,8,0,1,0,51.45,206.1l14.77,21A8,8,0,0,0,79.52,224l.11-.14A96.06,96.06,0,0,1,224,128ZM32,128A96,96,0,0,1,179,46.76l.16.11,12.28,12.1A8,8,0,0,0,204.55,50L189.78,29A8,8,0,0,0,176.48,32l-.11.14A96.06,96.06,0,0,1,32,128Z"/></svg>
          </button>
        </div>

        <!-- Utility Actions -->
        <div class="sandbox-actions">
          <a href="${url}" target="_blank" rel="noopener" class="sandbox-action-btn" aria-label="Open in new tab">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M224,104a8,8,0,0,1-16,0V59.31l-98.34,98.35a8,8,0,0,1-11.32-11.32L196.69,48H152a8,8,0,0,1,0-16h72a8,8,0,0,1,8,8Zm-32,80a8,8,0,0,0-8,8v32H48V88H80a8,8,0,0,0,0-16H40A16,16,0,0,0,24,88V216a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V192A8,8,0,0,0,192,184Z"/></svg>
          </a>
          <button class="sandbox-close-btn" aria-label="Close Sandbox Panel">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/></svg>
          </button>
        </div>
      </div>

      <!-- Iframe body & loader -->
      <div class="sandbox-body">
        <div class="sandbox-loader-overlay flex-center">
          <div class="sandbox-loader-logo"></div>
          <span style="font-family: var(--font-mono); font-size: var(--text-sm); color: var(--text-secondary); margin-top: var(--sp-3);">Loading Sandbox...</span>
        </div>
        <div class="sandbox-viewport desktop">
          <iframe src="${url}" class="sandbox-iframe" title="Interactive live demo of ${projectName}"></iframe>
        </div>
      </div>
    </div>
  `;

  // Append overlay
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden'; // Lock main scroll

  // Selectors
  const win = overlay.querySelector('.sandbox-window');
  const loader = overlay.querySelector('.sandbox-loader-overlay');
  const iframe = overlay.querySelector('.sandbox-iframe');
  const viewport = overlay.querySelector('.sandbox-viewport');
  const closeBtn = overlay.querySelector('.sandbox-close-btn');
  const redDot = overlay.querySelector('.sandbox-dot.red');
  const refreshBtn = overlay.querySelector('.sandbox-refresh-btn');
  const deviceButtons = overlay.querySelectorAll('.sandbox-device-btn');

  // GSAP Entrance
  gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.3 });
  gsap.fromTo(win, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.2)' });

  // Hide loader when iframe loaded
  iframe.addEventListener('load', () => {
    gsap.to(loader, { opacity: 0, duration: 0.3, onComplete: () => {
      loader.style.display = 'none';
    }});
  });

  // Device Resizing handlers
  deviceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const device = btn.dataset.device;
      
      // Update active btn style
      deviceButtons.forEach(b => b.classList.toggle('active', b === btn));

      // Remove classes and apply new one
      viewport.className = `sandbox-viewport ${device}`;
      
      // Trigger loader show/hide on resize for UX
      loader.style.display = 'flex';
      loader.style.opacity = '1';
      // Simulating a fast check
      setTimeout(() => {
        gsap.to(loader, { opacity: 0, duration: 0.2, onComplete: () => {
          loader.style.display = 'none';
        }});
      }, 350);
    });
  });

  // Refresh frame
  refreshBtn.addEventListener('click', () => {
    loader.style.display = 'flex';
    loader.style.opacity = '1';
    iframe.src = url; // reload
  });

  // Close logic
  const closeSandbox = () => {
    document.body.style.overflow = ''; // Unlock scroll
    gsap.to(win, { scale: 0.95, opacity: 0, duration: 0.25, ease: 'power2.in' });
    gsap.to(overlay, { opacity: 0, duration: 0.25, onComplete: () => {
      overlay.remove();
    }});
  };

  closeBtn.addEventListener('click', closeSandbox);
  redDot.addEventListener('click', closeSandbox);
}

// Global click event binder to hijack any "Live Demo" action and launch preview
export function initGlobalLivePreview() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-live-preview]');
    if (target) {
      e.preventDefault();
      const url = target.getAttribute('data-live-preview');
      const name = target.getAttribute('data-project-name') || 'Project View';
      openSandbox(url, name);
    }
  });
}
