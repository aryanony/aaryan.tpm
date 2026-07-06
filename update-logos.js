const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== 'dist' && f !== '.git') {
        walkDir(dirPath, callback);
      }
    } else {
      if (f.endsWith('.html')) {
        callback(path.join(dirPath));
      }
    }
  });
}

const logoSvgStr = '<svg viewBox="0 0 256 256"><polygon points="128 32 224 80 224 176 128 224 32 176 32 80 128 32"/></svg>';
const logoImgStr = '<img src="/assets/images/logo.png" alt="Aaryan Gupta" class="site-logo">';

const oldFaviconBlock = `  <!-- Favicons + PWA -->
  <link rel="icon" href="/assets/images/icons/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/images/icons/apple-touch-icon.png">
  <link rel="manifest" href="/manifest.webmanifest">`;

const newFaviconBlock = `  <!-- Favicons + PWA -->
  <link rel="icon" href="/assets/images/icons/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/assets/images/icons/icon.png" type="image/png">
  <link rel="apple-touch-icon" href="/assets/images/icons/apple-touch-icon.png">
  <link rel="manifest" href="/manifest.webmanifest">`;

let modifiedCount = 0;

walkDir(__dirname, function(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;

  if (content.includes(logoSvgStr)) {
    // Replace all occurrences of the SVG with the IMG tag
    content = content.split(logoSvgStr).join(logoImgStr);
    hasChanges = true;
  }

  if (content.includes(oldFaviconBlock)) {
    content = content.split(oldFaviconBlock).join(newFaviconBlock);
    hasChanges = true;
  }

  if (hasChanges) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log('Updated:', filePath);
  }
});

console.log('Total HTML files updated:', modifiedCount);
