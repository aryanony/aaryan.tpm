export function initCommandPalette() {
  const backdrop = document.getElementById('cmd-palette-backdrop');
  const input = document.getElementById('cmd-search-input');
  const resultsContainer = document.getElementById('cmd-results');
  if (!backdrop || !input) return;

  const commands = [
    { title: 'Home', action: () => window.scrollTo(0, 0), icon: '🏠' },
    { title: 'View Projects', action: () => document.getElementById('projects').scrollIntoView(), icon: '💻' },
    { title: 'View Experience', action: () => document.getElementById('experience').scrollIntoView(), icon: '📈' },
    { title: 'Contact Me', action: () => window.location.href = 'mailto:contact@aaaryangupta.com', icon: '✉️' },
    { title: 'Toggle Theme (Dark/Light)', action: () => document.getElementById('theme-toggle')?.click(), icon: '🌓' },
    { title: 'Reduce Motion (Battery Saver)', action: () => document.documentElement.classList.toggle('reduce-motion'), icon: '⚡' }
  ];

  let selectedIndex = 0;

  function renderResults(query = '') {
    resultsContainer.innerHTML = '';
    const filtered = commands.filter(c => c.title.toLowerCase().includes(query.toLowerCase()));
    
    if (filtered.length === 0) {
      resultsContainer.innerHTML = '<div class="cmd-result-item" style="cursor:default">No results found</div>';
      return;
    }

    filtered.forEach((cmd, idx) => {
      const el = document.createElement('div');
      el.className = `cmd-result-item ${idx === selectedIndex ? 'selected' : ''}`;
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
  }

  function openPalette() {
    backdrop.classList.add('active');
    input.value = '';
    selectedIndex = 0;
    renderResults();
    setTimeout(() => input.focus(), 100);
  }

  function closePalette() {
    backdrop.classList.remove('active');
    input.blur();
  }

  // Keyboard Shortcuts
  window.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      backdrop.classList.contains('active') ? closePalette() : openPalette();
    }
    
    if (!backdrop.classList.contains('active')) return;

    if (e.key === 'Escape') closePalette();
    
    const filtered = commands.filter(c => c.title.toLowerCase().includes(input.value.toLowerCase()));
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % filtered.length;
      renderResults(input.value);
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + filtered.length) % filtered.length;
      renderResults(input.value);
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
