const fs = require('fs');
const path = require('path');

const faviconRegex = /<!-- Favicons \+ PWA -->[\s\S]*?<link rel="manifest"/;
const newFavicon = `<!-- Favicons + PWA -->
  <link rel="icon" href="/assets/images/icons/favicon.ico" sizes="48x48">
  <link rel="icon" href="/assets/images/icons/favicon.svg" sizes="any" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/images/icons/apple-touch-icon.png">
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
  if (faviconRegex.test(content)) {
    content = content.replace(faviconRegex, newFavicon);
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
  }
});

console.log('HTML files updated with best-practice favicon markup:', count);

// Make sure the favicon.ico exists in public
const sourcePng = path.join(__dirname, 'public/assets/images/icons/icon.png');
const destIco = path.join(__dirname, 'public/assets/images/icons/favicon.ico');
const destIcoRoot = path.join(__dirname, 'public/favicon.ico');

fs.copyFileSync(sourcePng, destIco);
fs.copyFileSync(sourcePng, destIcoRoot);
console.log('Created favicon.ico fallback files');
