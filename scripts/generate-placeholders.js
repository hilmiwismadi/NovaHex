// Simple script to generate placeholder thumbnails for navbar and footer
const fs = require('fs');
const path = require('path');

// Create simple SVG placeholders
const createNavbarSVG = (optionLabel, colorIndex) => {
  const colors = ['#1AB0C8', '#2EC1D9', '#179FB5', '#76BDE4'];
  const color = colors[colorIndex];

  return `<svg width="400" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="100" fill="${color}"/>
  <text x="200" y="55" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle">
    Navbar ${optionLabel}
  </text>
</svg>`;
};

const createFooterSVG = (optionLabel, colorIndex) => {
  const colors = ['#001118', '#4E5F66', '#75868D'];
  const color = colors[colorIndex];

  return `<svg width="400" height="150" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="150" fill="${color}"/>
  <text x="200" y="85" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle">
    Footer ${optionLabel}
  </text>
</svg>`;
};

const outputDir = path.join(__dirname, '..', 'public', 'templates');

// Generate navbar placeholders
['A', 'B', 'C', 'D'].forEach((label, index) => {
  const svg = createNavbarSVG(label, index);
  const filename = `placeholder-navbar-${index + 1}.svg`;
  fs.writeFileSync(path.join(outputDir, filename), svg);
  console.log(`Created ${filename}`);
});

// Generate footer placeholders
['A', 'B', 'C'].forEach((label, index) => {
  const svg = createFooterSVG(label, index);
  const filename = `placeholder-footer-${index + 1}.svg`;
  fs.writeFileSync(path.join(outputDir, filename), svg);
  console.log(`Created ${filename}`);
});

console.log('\nPlaceholder thumbnails created successfully!');
console.log('Note: These are temporary placeholders. Replace with actual component screenshots later.');
