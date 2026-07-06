// assets/js/sections/faq-render.js

export async function renderFAQ() {
  const container = document.querySelector('.faq-container');
  if (!container) return;

  const res = await fetch('/data/faq.json');
  const faqs = await res.json();

  container.innerHTML = faqs.map((faq, idx) => {
    return `
      <div class="faq-item" data-id="${idx}">
        <button class="faq-q" aria-expanded="false" aria-controls="faq-ans-${idx}">
          <span>${faq.q}</span>
          <i class="faq-icon ph-bold ph-plus"></i>
        </button>
        <div class="faq-body" id="faq-ans-${idx}">
          <p class="faq-ans">${faq.a}</p>
        </div>
      </div>
    `;
  }).join('');

  const items = container.querySelectorAll('.faq-item');
  items.forEach(item => {
    const trigger = item.querySelector('.faq-q');
    const body = item.querySelector('.faq-body');

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
    });
  });
}
