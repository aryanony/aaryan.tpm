// assets/js/core/theme.js

import { STORAGE_KEYS, EVENTS } from '@config/constants.js';

export function initTheme(config) {
  const toggleBtn = document.querySelector('.theme-toggle');
  
  const getTheme = () => {
    return localStorage.getItem(STORAGE_KEYS.THEME) || 
           (window.matchMedia('(prefers-color-scheme:light)').matches ? 'light' : 'dark');
  };
  
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    document.dispatchEvent(new CustomEvent(EVENTS.THEME_CHANGE, { detail: { theme } }));
  };
  
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = getTheme();
      const next = current === 'light' ? 'dark' : 'light';
      setTheme(next);
    });
  }
  
  // Set initial theme state
  setTheme(getTheme());
}
