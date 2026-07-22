// assets/js/utils/analytics-tracker.js

export function initAnalyticsTracker() {
  window.dataLayer = window.dataLayer || [];

  // 1. UTM and Click ID Forwarding
  const params = new URLSearchParams(window.location.search);
  const trackingKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid', 'li_fat_id'];
  const activeParams = {};

  trackingKeys.forEach(key => {
    const val = params.get(key);
    if (val) {
      activeParams[key] = val;
    }
  });

  // Save to or load from sessionStorage for multi-page persistence
  if (Object.keys(activeParams).length === 0) {
    trackingKeys.forEach(key => {
      const val = sessionStorage.getItem(key);
      if (val) {
        activeParams[key] = val;
      }
    });
  } else {
    Object.keys(activeParams).forEach(key => {
      sessionStorage.setItem(key, activeParams[key]);
    });
  }

  // Function to append tracking parameters to outbound Calendly and WhatsApp links
  const appendTrackingParams = () => {
    document.querySelectorAll('a').forEach(link => {
      if (link.href && (link.href.includes('calendly.com') || link.href.includes('wa.me') || link.href.includes('api.whatsapp.com'))) {
        try {
          const url = new URL(link.href);
          let changed = false;
          Object.keys(activeParams).forEach(key => {
            if (url.searchParams.get(key) !== activeParams[key]) {
              url.searchParams.set(key, activeParams[key]);
              changed = true;
            }
          });
          if (changed) {
            link.href = url.toString();
          }
        } catch (e) {
          // ignore invalid URLs
        }
      }
    });
  };

  // Run on initialization
  if (Object.keys(activeParams).length > 0) {
    appendTrackingParams();
    // Observe DOM mutations to append parameters to dynamically rendered links
    const observer = new MutationObserver(appendTrackingParams);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // 2. Global Event Tracking (Clicks)
  document.body.addEventListener('click', e => {
    const target = e.target.closest('a');
    if (!target || !target.href) return;

    // Track Calendly Bookings
    if (target.href.includes('calendly.com')) {
      window.dataLayer.push({
        event: 'calendly_booking_click',
        link_url: target.href,
        button_text: target.textContent?.trim() || ''
      });
      console.log('[AG-Analytics] Tracked Calendly click:', target.href);
    }
    
    // Track WhatsApp Chats
    else if (target.href.includes('wa.me') || target.href.includes('api.whatsapp.com')) {
      window.dataLayer.push({
        event: 'whatsapp_click',
        link_url: target.href,
        button_text: target.textContent?.trim() || ''
      });
      console.log('[AG-Analytics] Tracked WhatsApp click:', target.href);
    }

    // Track Email Contacts
    else if (target.href.startsWith('mailto:')) {
      window.dataLayer.push({
        event: 'email_click',
        email_address: target.href.replace('mailto:', '').split('?')[0]
      });
      console.log('[AG-Analytics] Tracked Email click:', target.href);
    }

    // Track Social link clicks
    else {
      let platform = '';
      if (target.href.includes('linkedin.com')) platform = 'LinkedIn';
      else if (target.href.includes('twitter.com') || target.href.includes('x.com')) platform = 'Twitter';
      else if (target.href.includes('instagram.com')) platform = 'Instagram';
      else if (target.href.includes('github.com')) platform = 'GitHub';

      if (platform) {
        window.dataLayer.push({
          event: 'social_link_click',
          platform: platform,
          link_url: target.href
        });
        console.log('[AG-Analytics] Tracked Social Link click:', platform, target.href);
      }
    }
  });

  // 3. Scroll Depth Tracking
  const scrollThresholds = [25, 50, 75, 90];
  const triggeredScrolls = {};
  let scrollTicking = false;

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0) {
          const scrollPercent = Math.round((window.scrollY / docHeight) * 100);
          scrollThresholds.forEach(threshold => {
            if (scrollPercent >= threshold && !triggeredScrolls[threshold]) {
              triggeredScrolls[threshold] = true;
              window.dataLayer.push({
                event: 'scroll_depth_milestone',
                scroll_percentage: threshold
              });
              console.log('[AG-Analytics] Scroll depth milestone reached:', threshold + '%');
            }
          });
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  // 4. Active engaged session tracking (engaged milliseconds)
  let activeTime = 0;
  let lastActivity = Date.now();
  const engagementThresholds = [30, 60, 120];
  const triggeredEngagements = {};

  ['mousemove', 'keydown', 'scroll', 'click'].forEach(evt => {
    window.addEventListener(evt, () => {
      lastActivity = Date.now();
    }, { passive: true });
  });

  setInterval(() => {
    const isTabActive = document.visibilityState === 'visible';
    const isWindowFocused = document.hasFocus();
    const isUserActive = (Date.now() - lastActivity) < 15000; // active in last 15s

    if (isTabActive && isWindowFocused && isUserActive) {
      activeTime++;
      engagementThresholds.forEach(threshold => {
        if (activeTime >= threshold && !triggeredEngagements[threshold]) {
          triggeredEngagements[threshold] = true;
          window.dataLayer.push({
            event: 'session_engagement_milestone',
            engaged_seconds: threshold
          });
          console.log('[AG-Analytics] Session engagement milestone reached:', threshold + 's');
        }
      });
    }
  }, 1000);

  // 5. Rage Click Auditing
  let clicks = [];
  document.addEventListener('click', e => {
    const target = e.target;
    // Check if target is a standard interactive element
    const isInteractive = target.closest('a') || 
                          target.closest('button') || 
                          target.closest('input') || 
                          target.closest('select') || 
                          target.closest('textarea') || 
                          target.closest('[role="button"]') ||
                          window.getComputedStyle(target).cursor === 'pointer';

    if (isInteractive) return;

    const now = Date.now();
    clicks.push({ x: e.clientX, y: e.clientY, time: now });
    clicks = clicks.filter(c => now - c.time < 1000); // 1-second window

    if (clicks.length >= 3) {
      const first = clicks[0];
      const allClose = clicks.every(c => Math.abs(c.x - first.x) < 30 && Math.abs(c.y - first.y) < 30);
      if (allClose) {
        window.dataLayer.push({
          event: 'rage_click',
          clicked_tag: target.tagName,
          clicked_class: target.className,
          clicked_text: target.textContent?.substring(0, 30).trim() || ''
        });
        console.warn('[AG-Analytics] Rage click detected on element:', target);
        clicks = [];
      }
    }
  });

  // 6. Text Copy Event Auditing
  document.addEventListener('copy', () => {
    const selectedText = window.getSelection()?.toString();
    if (selectedText && selectedText.trim().length > 0) {
      window.dataLayer.push({
        event: 'content_copied',
        copied_length: selectedText.length,
        copied_snippet: selectedText.substring(0, 50).trim()
      });
      console.log('[AG-Analytics] Copied snippet tracked:', selectedText.substring(0, 50).trim() + '...');
    }
  });

  // 7. Form focus tracking
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const fields = contactForm.querySelectorAll('input, textarea, select');
    fields.forEach(field => {
      field.addEventListener('focus', () => {
        window.dataLayer.push({
          event: 'form_field_focus',
          field_name: field.id || field.name,
          form_name: 'contact-form'
        });
        console.log('[AG-Analytics] Form field focused:', field.id || field.name);
      });
    });
  }
}
