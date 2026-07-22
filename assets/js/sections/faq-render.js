// assets/js/sections/faq-render.js
import { gsap, ScrollTrigger } from '../animations/gsap-init.js';

export async function renderFAQ() {
  const container = document.querySelector('.faq-container');
  if (!container) return;

  const hasStaticChildren = container.children.length > 0;

  const res = await fetch('/data/faq.json');
  const faqs = await res.json();

  const dynamicFaqsHtml = faqs.map((faq, idx) => {
    const itemIndex = hasStaticChildren ? `dynamic-${idx}` : idx;
    return `
      <div class="faq-item reveal" data-id="${itemIndex}">
        <button class="faq-q" aria-expanded="false" aria-controls="faq-ans-${itemIndex}">
          <span>${faq.q}</span>
          <i class="faq-icon ph-bold ph-plus"></i>
        </button>
        <div class="faq-body" id="faq-ans-${itemIndex}">
          <p class="faq-ans">${faq.a}</p>
        </div>
      </div>
    `;
  }).join('');

  // Create dynamic nodes via a temporary element wrapper
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = dynamicFaqsHtml;
  const newItems = Array.from(tempDiv.querySelectorAll('.faq-item'));

  if (!hasStaticChildren) {
    container.innerHTML = '';
  }

  // Append new nodes individually to keep static nodes (and their GSAP states) fully intact
  newItems.forEach(item => {
    container.appendChild(item);

    // Bind GSAP ScrollTrigger reveal animation directly to the new dynamic item
    gsap.fromTo(item, 
      { opacity: 0, y: 32 }, 
      {
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { 
          trigger: item, 
          start: 'top 88%', 
          toggleActions: 'play none none none' 
        }
      }
    );
  });

  // Refresh ScrollTrigger to update heights after load
  ScrollTrigger.refresh();

  const items = container.querySelectorAll('.faq-item');
  items.forEach(item => {
    const trigger = item.querySelector('.faq-q');
    const body = item.querySelector('.faq-body');

    if (trigger.dataset.listenerAttached) return;
    trigger.dataset.listenerAttached = 'true';

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other accordion sections
      items.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          otherItem.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
          otherItem.querySelector('.faq-body').style.maxHeight = '0px';
        }
      });

      // Toggle current accordion state
      if (isOpen) {
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = '0px';
      } else {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = `${body.scrollHeight}px`;
      }

      // Refresh ScrollTrigger to update layouts (timeout matches transition)
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 400);
    });
  });
}
