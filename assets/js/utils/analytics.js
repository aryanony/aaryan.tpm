// assets/js/utils/analytics.js

import { STORAGE_KEYS } from '@config/constants.js';

export function initAnalytics(analyticsConfig) {
  const consent = localStorage.getItem(STORAGE_KEYS.COOKIE_CONSENT);
  if (consent === 'declined') {
    console.log('[AG] Analytics disabled per user preference');
    return;
  }

  const gaId = analyticsConfig?.ga4_id;
  if (!gaId || gaId === 'G-XXXXXXXXXX') return;

  // Load GA4 script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', gaId, {
    anonymize_ip: true,
    page_path: window.location.pathname
  });
}
