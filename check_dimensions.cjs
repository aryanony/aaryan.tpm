const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      if (f !== 'node_modules' && f !== 'dist' && f !== '.git') {
        walkDir(dirPath, callback);
      }
    } else {
      if (f.endsWith('.svg')) {
        callback(dirPath);
      }
    }
  });
}

walkDir('c:/Users/aryn1/Documents/Portfolio/PortfolioIDE', (filePath) => {
  const relPath = path.relative('c:/Users/aryn1/Documents/Portfolio/PortfolioIDE', filePath);
  const size = fs.statSync(filePath).size;
  console.log(`${relPath} (${size} bytes)`);
});
