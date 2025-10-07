const fs = require('fs');
const path = require('path');
const colorMapping = require('./color-mapping.json');

const sectionsDir = path.join(__dirname, '..', 'sections-assets', 'sections');

// Color replacements
const replacements = colorMapping.replacements;

function replaceColorsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Replace each color pattern
  for (const [oldColor, newColor] of Object.entries(replacements)) {
    if (content.includes(oldColor)) {
      const regex = new RegExp(oldColor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      content = content.replace(regex, newColor);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  let filesChanged = 0;

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      filesChanged += processDirectory(fullPath);
    } else if (item.endsWith('.tsx')) {
      if (replaceColorsInFile(fullPath)) {
        filesChanged++;
        console.log(`✓ Updated: ${path.relative(sectionsDir, fullPath)}`);
      }
    }
  });

  return filesChanged;
}

console.log('Starting color replacement across all 51 variants...\n');
const totalChanged = processDirectory(sectionsDir);
console.log(`\n✅ Complete! Updated ${totalChanged} files with CSS variable colors.`);
