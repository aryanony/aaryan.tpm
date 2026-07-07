export function initCommandPalette() {
  const backdrop = document.getElementById('cmd-palette-backdrop');
  const input = document.getElementById('cmd-search-input');
  const resultsContainer = document.getElementById('cmd-results');
  if (!backdrop || !input || !resultsContainer) return;

  // Set accessibility attributes dynamically
  backdrop.setAttribute('role', 'dialog');
  backdrop.setAttribute('aria-modal', 'true');
  backdrop.setAttribute('aria-label', 'Command Palette');
  backdrop.setAttribute('aria-hidden', 'true');
  
  input.setAttribute('role', 'combobox');
  input.setAttribute('aria-autocomplete', 'list');
  input.setAttribute('aria-expanded', 'false');
  input.setAttribute('aria-controls', 'cmd-results');
  input.setAttribute('aria-label', 'Search and command input');
  
  resultsContainer.setAttribute('role', 'listbox');
  resultsContainer.setAttribute('aria-label', 'Search results');

  const commands = [
    { title: 'Home', action: () => window.scrollTo(0, 0), icon: '🏠' },
    { title: 'View Projects', action: () => document.getElementById('projects')?.scrollIntoView(), icon: '💻' },
    { title: 'View Experience', action: () => document.getElementById('experience')?.scrollIntoView(), icon: '📈' },
    { title: 'Contact Me', action: () => window.location.href = 'mailto:contact@aaaryangupta.com', icon: '✉️' },
    { title: 'Toggle Theme (Dark/Light)', action: () => document.getElementById('theme-toggle')?.click(), icon: '🌓' },
    { title: 'Reduce Motion (Battery Saver)', action: () => document.documentElement.classList.toggle('reduce-motion'), icon: '⚡' }
  ];

  let selectedIndex = 0;

  function renderResults(query = '') {
    resultsContainer.innerHTML = '';
    const filtered = commands.filter(c => c.title.toLowerCase().includes(query.toLowerCase()));
    
    if (filtered.length === 0) {
      resultsContainer.innerHTML = '<div class="cmd-result-item" style="cursor:default" role="option" aria-selected="false">No results found</div>';
      input.removeAttribute('aria-activedescendant');
      return;
    }

    filtered.forEach((cmd, idx) => {
      const el = document.createElement('div');
      const optId = `cmd-opt-${idx}`;
      el.id = optId;
      el.className = `cmd-result-item ${idx === selectedIndex ? 'selected' : ''}`;
      el.setAttribute('role', 'option');
      el.setAttribute('aria-selected', idx === selectedIndex ? 'true' : 'false');
      el.innerHTML = `<span>${cmd.icon}</span> <span>${cmd.title}</span> ${idx === 0 ? '<span class="cmd-kbd">Enter</span>' : ''}`;
      
      el.addEventListener('click', () => {
        cmd.action();
        closePalette();
      });
      
      el.addEventListener('mouseenter', () => {
        selectedIndex = idx;
        renderResults(query);
      });
      
      resultsContainer.appendChild(el);
    });

    // Update activedescendant for screen readers
    input.setAttribute('aria-activedescendant', `cmd-opt-${selectedIndex}`);
  }

  function openPalette() {
    backdrop.classList.add('active');
    backdrop.setAttribute('aria-hidden', 'false');
    input.setAttribute('aria-expanded', 'true');
    input.value = '';
    selectedIndex = 0;
    renderResults();
    setTimeout(() => input.focus(), 100);
  }

  function closePalette() {
    backdrop.classList.remove('active');
    backdrop.setAttribute('aria-hidden', 'true');
    input.setAttribute('aria-expanded', 'false');
    input.removeAttribute('aria-activedescendant');
    input.blur();
  }

  // Keyboard Shortcuts
  window.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      backdrop.classList.contains('active') ? closePalette() : openPalette();
    }
    
    if (!backdrop.classList.contains('active')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closePalette();
    }
    
    // Focus trap: input is the only focusable element in dialog
    if (e.key === 'Tab') {
      e.preventDefault();
      input.focus();
    }

    const filtered = commands.filter(c => c.title.toLowerCase().includes(input.value.toLowerCase()));
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (filtered.length > 0) {
        selectedIndex = (selectedIndex + 1) % filtered.length;
        renderResults(input.value);
      }
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (filtered.length > 0) {
        selectedIndex = (selectedIndex - 1 + filtered.length) % filtered.length;
        renderResults(input.value);
      }
    }
    if (e.key === 'Enter' && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].action();
      closePalette();
    }
  });

  input.addEventListener('input', e => {
    selectedIndex = 0;
    renderResults(e.target.value);
  });

  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closePalette();
  });
}
