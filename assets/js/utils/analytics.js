// assets/js/utils/analytics.js

import { STORAGE_KEYS } from '@config/constants.js';

export function initAnalytics(analyticsConfig) {
  const consent = localStorage.getItem(STORAGE_KEYS.COOKIE_CONSENT);
  if (consent === 'declined') {
    console.log('[AG] Analytics disabled per user preference');
    return;
  }

  const gaId = analyticsConfig?.ga4_id;
  if (gaId && gaId !== 'G-XXXXXXXXXX') {
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
    console.log('[AG] Google Analytics 4 initialized with ID:', gaId);
  }

  const clarityId = analyticsConfig?.clarity_id;
  if (clarityId && clarityId !== 'XXXXXXXXXX') {
    // Load Microsoft Clarity
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window,document,"clarity","script",clarityId);
    console.log('[AG] Microsoft Clarity initialized with ID:', clarityId);
  }
}
