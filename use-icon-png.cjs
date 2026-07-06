const fs = require('fs');
const path = require('path');

const oldFaviconBlock = `  <!-- Favicons + PWA -->
  <link rel="icon" href="/assets/images/icons/favicon.ico" sizes="48x48">
  <link rel="icon" href="/assets/images/icons/favicon.svg" sizes="any" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/images/icons/apple-touch-icon.png">
  <link rel="manifest" href="/manifest.webmanifest">`;

const newFaviconBlock = `  <!-- Favicons + PWA -->
  <link rel="icon" href="/assets/images/icons/icon.png" type="image/png">
  <link rel="icon" href="/assets/images/icons/icon.svg" sizes="any" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/images/icons/apple-touch-icon.png">
  <link rel="manifest" href="/manifest.webmanifest">`;

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      if (f !== 'node_modules' && f !== 'dist' && f !== '.git' && f !== 'public' && f !== 'assets') {
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
  if (content.includes(oldFaviconBlock)) {
    content = content.replace(oldFaviconBlock, newFaviconBlock);
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
  } else {
      // Just in case there are variations in whitespace
      const looseRegex = /<!-- Favicons \+ PWA -->[\s\S]*?<link rel="manifest" href="\/manifest\.webmanifest">/;
      if (looseRegex.test(content)) {
          content = content.replace(looseRegex, newFaviconBlock);
          fs.writeFileSync(filePath, content, 'utf8');
          count++;
      }
  }
});

console.log('HTML files updated with icon.svg/icon.png:', count);
