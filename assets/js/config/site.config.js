export async function loadConfig() {
  const res = await fetch('/data/site.config.json');
  const config = await res.json();
  window.AG = config;
  injectDOM(config);
  return config;
}

function injectDOM(config) {
  // Text: <span data-cfg="contact.email"></span>
  document.querySelectorAll('[data-cfg]').forEach(el => {
    const val = resolve(config, el.dataset.cfg);
    if (val !== undefined) el.textContent = val;
  });
  // Href: <a data-cfg-href="social.linkedin">
  document.querySelectorAll('[data-cfg-href]').forEach(el => {
    const val = resolve(config, el.dataset.cfgHref);
    if (val) el.href = val;
  });
}

function resolve(obj, path) {
  return path.split('.').reduce((acc, k) => acc?.[k], obj);
}
