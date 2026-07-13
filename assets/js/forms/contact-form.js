// assets/js/forms/contact-form.js

export function initContactForm(config) {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Clear errors
    form.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-error'));
    if (status) {
      status.style.display = 'none';
      status.className = 'form-status';
    }

    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');
    let hasError = false;

    if (!name || !name.value.trim()) {
      name?.closest('.form-group').classList.add('has-error');
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !email.value.trim() || !emailRegex.test(email.value)) {
      email?.closest('.form-group').classList.add('has-error');
      hasError = true;
    }

    if (!message || !message.value.trim()) {
      message?.closest('.form-group').classList.add('has-error');
      hasError = true;
    }

    if (hasError) return;

    const emailTarget = config?.contact?.email || 'aaryangupta.pm@gmail.com';
    const mailto = `mailto:${emailTarget}?subject=Project Inquiry from ${encodeURIComponent(name.value)}&body=${encodeURIComponent(message.value)}%0A%0AReply to: ${encodeURIComponent(email.value)}`;
    
    // Push conversion tracking event to dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'contact_form_submit',
      form_name: 'contact-form',
      user_name: name.value,
      user_email: email.value
    });
    console.log('[AG-Analytics] Tracked Contact Form Submission:', name.value);

    window.location.href = mailto;

    if (status) {
      status.textContent = "Opening your email client...";
      status.classList.add('success');
      form.reset();
    }
  });
}
