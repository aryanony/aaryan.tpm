const fs = require('fs');
const path = require('path');

// Read the desired footer from index.html
const indexHtml = fs.readFileSync('index.html', 'utf8');
const footerMatch = indexHtml.match(/(<!-- FOOTER -->\s*<footer class="footer"[^>]*>[\s\S]*?<\/footer>)/);

if (!footerMatch) {
  console.error("Could not find footer in index.html");
  process.exit(1);
}

const newFooterHtml = footerMatch[1];
console.log("Found old footer HTML, length:", newFooterHtml.length);

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
  if (filePath.endsWith('index.html') && filePath === path.join(__dirname, 'index.html')) {
    return; // skip index.html as it already has the correct footer
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the existing footer
  const existingFooterRegex = /<!-- FOOTER -->\s*<footer class="footer"[^>]*>[\s\S]*?<\/footer>/;
  
  if (existingFooterRegex.test(content)) {
    content = content.replace(existingFooterRegex, newFooterHtml);
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
    console.log('Updated footer in:', filePath);
  }
});

console.log('Total files updated:', count);
