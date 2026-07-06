// assets/js/utils/copy-email.js

export function initCopyEmail() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn-copy-email');
    if (!btn) return;

    e.preventDefault();
    
    // Get email from data attribute or config window state
    const email = btn.dataset.email || (window.AG ? window.AG.contact.email : 'aaryangupta.pm@gmail.com');
    
    navigator.clipboard.writeText(email).then(() => {
      const originalText = btn.textContent;
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('copied');
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy email:', err);
    });
  });
}
