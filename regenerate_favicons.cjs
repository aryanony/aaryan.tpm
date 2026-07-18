const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetSVGs = [
  'public/favicon.svg',
  'public/assets/images/icons/icon.svg',
  'public/assets/images/icons/favicon.svg'
];

const pngOutputs = [
  { file: 'public/assets/images/icons/icon.png', size: 48 },
  { file: 'public/assets/images/icons/icon-192.png', size: 192 },
  { file: 'public/assets/images/icons/icon-512.png', size: 512 },
  { file: 'public/assets/images/icons/apple-touch-icon.png', size: 180 },
  { file: 'public/favicon.png', size: 48 },
  { file: 'public/apple-touch-icon.png', size: 180 },
  { file: 'public/favicon.ico', size: 48 } // We keep it as a clean PNG but named .ico for compatibility
];

async function run() {
  console.log('1. Reading corrected SVG source...');
  let correctedSVGContent = '';
  
  // We read the main icon SVG which has been updated with the centered viewBox
  const mainSvgPath = path.join(__dirname, 'public/assets/images/icons/icon.svg');
  if (fs.existsSync(mainSvgPath)) {
    correctedSVGContent = fs.readFileSync(mainSvgPath, 'utf8');
    console.log(`Successfully loaded: public/assets/images/icons/icon.svg`);
  } else {
    // Fallback to check other paths
    for (const svgFile of targetSVGs) {
      const filePath = path.join(__dirname, svgFile);
      if (fs.existsSync(filePath)) {
        correctedSVGContent = fs.readFileSync(filePath, 'utf8');
        console.log(`Successfully loaded fallback: ${svgFile}`);
        break;
      }
    }
  }

  if (!correctedSVGContent) {
    console.error('Error: Could not find any source SVG to read!');
    return;
  }

  console.log('\n2. Regenerating PNG/ICO files using sharp...');
  const viewBoxSize = 1182.7; // The size of our new viewBox width/height
  for (const out of pngOutputs) {
    const outputPath = path.join(__dirname, out.file);
    try {
      // Calculate appropriate density to render SVG sharply at target size.
      // We ensure density is at least 72 (default) to avoid blurry renders on small icons.
      const density = Math.max(72, Math.round(72 * (out.size / viewBoxSize)));
      await sharp(Buffer.from(correctedSVGContent), { density: density })
        .resize(out.size, out.size)
        .png()
        .toFile(outputPath);
      console.log(`Generated: ${out.file} (${out.size}x${out.size})`);
    } catch (e) {
      console.error(`Error generating ${out.file}:`, e);
    }
  }

  // Also make sure public/assets/images/icons/favicon.ico is generated/copied
  const favIcoDest = path.join(__dirname, 'public/assets/images/icons/favicon.ico');
  const favIcoSrc = path.join(__dirname, 'public/favicon.ico');
  try {
    fs.copyFileSync(favIcoSrc, favIcoDest);
    console.log(`Copied public/favicon.ico to public/assets/images/icons/favicon.ico`);
  } catch (e) {
    console.error('Error copying favicon.ico:', e);
  }
}

run();
