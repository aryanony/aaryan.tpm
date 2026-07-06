const fs = require('fs');
const path = require('path');

const scrollMarkup = `
  <!-- Scroll to top button -->
  <div class="footer__scroll-top" aria-label="Scroll to top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
    <i class="ph-bold ph-caret-up"></i>
  </div>`;

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
  if (content.includes('class="footer__scroll-top"')) return;
  
  const footerRegex = /(<footer class="footer"[^>]*>)/;
  if (footerRegex.test(content)) {
    content = content.replace(footerRegex, '$1' + scrollMarkup);
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
  }
});

console.log('HTML files updated with scroll-to-top button:', count);
