const fs = require('fs');
const path = require('path');

const faviconReplacement = `  <!-- Favicons + PWA -->
  <link rel="icon" href="/assets/images/icons/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/assets/images/icons/icon.png" type="image/png">
  <link rel="apple-touch-icon" href="/assets/images/icons/apple-touch-icon.png">`;

const oldFaviconRegex = /<!-- Favicons \+ PWA -->[\s\S]*?<link rel="apple-touch-icon"[^>]*>/;

const navLogoRegex = /<a href="\/?" class="nav__logo">\s*(?:<svg[^>]*>[\s\S]*?<\/svg>|<img[^>]*class="site-logo"[^>]*>)/g;
const newNavLogo = `<a href="/" class="nav__logo">\n        <img src="/assets/images/logo.png" alt="Aaryan Gupta" class="site-logo">`;

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      if (f !== 'node_modules' && f !== 'dist' && f !== '.git') {
        walkDir(dirPath, callback);
      }
    } else {
      if (f.endsWith('.html')) {
        callback(dirPath);
      }
    }
  });
}

let count = 0;
walkDir(__dirname, (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  if (oldFaviconRegex.test(content)) {
    content = content.replace(oldFaviconRegex, faviconReplacement);
    changed = true;
  }
  
  if (navLogoRegex.test(content)) {
    content = content.replace(navLogoRegex, newNavLogo);
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
    console.log('Updated:', filePath);
  }
});

console.log('Total files updated:', count);
