const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('dist') && !file.includes('.git')) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.html')) {
      results.push(file);
    }
  });
  return results;
}

const htmlFiles = walk('.');
console.log(htmlFiles.length + ' HTML files found.');

let modifications = 0;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Fontshare optimization
  const fontRegex = /<link rel="preload" href="(https:\/\/api\.fontshare\.com[^"]+)" as="style">/g;
  if (fontRegex.test(content)) {
    content = content.replace(fontRegex, '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">\n  <noscript><link rel="stylesheet" href="$1"></noscript>');
    changed = true;
  }

  // JetBrains Mono optimization
  const jbRegex = /<link rel="preload" href="(https:\/\/fonts\.googleapis\.com[^"]+)" as="style">/g;
  if (jbRegex.test(content)) {
    content = content.replace(jbRegex, '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">\n  <noscript><link rel="stylesheet" href="$1"></noscript>');
    changed = true;
  }

  // Image lazy loading
  const imgRegex = /<img(?![^>]*loading=)(?![^>]*class="[^"]*hero[^"]*")[^>]*>/g;
  content = content.replace(imgRegex, (match) => {
    changed = true;
    return match.replace('<img ', '<img loading="lazy" decoding="async" ');
  });

  // Hero image high priority
  const heroImgRegex = /<img([^>]*class="[^"]*hero[^"]*"[^>]*)>/g;
  content = content.replace(heroImgRegex, (match, p1) => {
    if (!p1.includes('fetchpriority=')) {
      changed = true;
      return '<img fetchpriority="high" ' + p1 + '>';
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(file, content);
    modifications++;
  }
});

console.log('Modified ' + modifications + ' files.');
