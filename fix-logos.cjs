const fs = require('fs');
const path = require('path');

// Replace footer SVG with PNG
const footerLogoRegex = /<a href="\/?" class="footer__logo">\s*(?:<svg[^>]*>[\s\S]*?<\/svg>|<img[^>]*class="site-logo"[^>]*>)/g;
const newFooterLogo = `<a href="/" class="footer__logo">\n            <img src="/assets/images/logo.png" alt="Aaryan Gupta" class="site-logo">`;

// Replace favicon
const faviconRegex = /<!-- Favicons \+ PWA -->[\s\S]*?<link rel="manifest"/;
const newFavicon = `<!-- Favicons + PWA -->
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon.png" type="image/png">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="manifest"`;

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
  
  if (footerLogoRegex.test(content)) {
    content = content.replace(footerLogoRegex, newFooterLogo);
    changed = true;
  }
  
  if (faviconRegex.test(content)) {
    content = content.replace(faviconRegex, newFavicon);
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
  }
});

console.log('Total HTML files updated with new logos and favicons:', count);

// Copy favicons to public root
fs.copyFileSync(path.join(__dirname, 'public/assets/images/icons/icon.png'), path.join(__dirname, 'public/favicon.png'));
fs.copyFileSync(path.join(__dirname, 'public/assets/images/icons/favicon.svg'), path.join(__dirname, 'public/favicon.svg'));
fs.copyFileSync(path.join(__dirname, 'public/assets/images/icons/apple-touch-icon.png'), path.join(__dirname, 'public/apple-touch-icon.png'));
console.log('Favicons copied to root of public directory.');
