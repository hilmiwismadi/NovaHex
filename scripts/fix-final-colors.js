const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, '..', 'sections-assets', 'sections');

const fixes = [
  // Navbar-3: Add hover effects and fix colors
  {
    file: 'navbar/navbarVariant3.tsx',
    replacements: [
      ['hover:text-blue-600', 'hover:text-[var(--color-primary)]'],
      ['bg-blue-600', 'bg-[var(--color-primary)]'],
      ['hover:bg-blue-700', 'hover:bg-[var(--color-secondary)]'],
      ['text-blue-600', 'text-[var(--color-primary)]'],
    ]
  },
  // Navbar-4: Fix colors
  {
    file: 'navbar/navbarVariant4.tsx',
    replacements: [
      ['hover:text-blue-600', 'hover:text-[var(--color-primary)]'],
      ['bg-blue-600', 'bg-[var(--color-primary)]'],
      ['hover:bg-blue-700', 'hover:bg-[var(--color-secondary)]'],
      ['text-blue-600', 'text-[var(--color-primary)]'],
    ]
  },
  // Hero-3: Fix transparent button
  {
    file: 'hero/heroVariant3.tsx',
    replacements: [
      ['bg-transparent border-2 border-white', 'bg-[var(--color-primary)] border-2 border-[var(--color-primary)]'],
    ]
  },
  // Service-3: Fix Learn More and pagination
  {
    file: 'services/serviceVariant3.tsx',
    replacements: [
      ['text-blue-600', 'text-[var(--color-primary)]'],
      ['hover:text-blue-700', 'hover:text-[var(--color-tertiary)]'],
    ]
  },
  // Service-5: Card border
  {
    file: 'services/serviceVariant5.tsx',
    replacements: [
      ['border-gray-200', 'border-[var(--color-primary)] border-opacity-20'],
    ]
  },
  // Pricing-1: Fix black borders
  {
    file: 'pricing/pricingVariant1.tsx',
    replacements: [
      ['border-black', 'border-[var(--color-secondary)] border-opacity-30'],
    ]
  },
  // FAQ-2: Add card border
  {
    file: 'faq/faqVariant2.tsx',
    replacements: [
      ['rounded-lg', 'rounded-lg border-2 border-[var(--color-primary)] border-opacity-20'],
    ]
  },
  // Review-1: Add card border
  {
    file: 'riview/riviewVariant1.tsx',
    replacements: [
      ['shadow-lg rounded-lg', 'shadow-lg rounded-lg border-2 border-[var(--color-primary)] border-opacity-20'],
    ]
  },
  // Review-2: Add card border
  {
    file: 'riview/riviewVariant2.tsx',
    replacements: [
      ['object-fill', 'object-fill border-2 border-[var(--color-primary)] border-opacity-20 rounded-lg'],
    ]
  },
  // Review-3: Add card border and fix arrow
  {
    file: 'riview/riviewVariant3.tsx',
    replacements: [
      ['border-gray-200', 'border-[var(--color-primary)] border-opacity-30'],
      ['text-gray-600', 'text-[var(--color-primary)]'],
      ['hover:text-gray-900', 'hover:text-[var(--color-primary)]'],
    ]
  },
  // CTA-3: Primary default, tertiary hover
  {
    file: 'cta/ctaVariant3.tsx',
    replacements: [
      ['bg-[var(--color-secondary)]', 'bg-[var(--color-primary)] hover:bg-[var(--color-tertiary)]'],
    ]
  },
  // Footer-1: Primary bg color
  {
    file: 'footer/footerVariant1.tsx',
    replacements: [
      ['bg-gray-900', 'bg-[var(--color-primary)]'],
      ['bg-gray-800', 'bg-[var(--color-secondary)]'],
    ]
  },
  // Footer-2: Primary bg color
  {
    file: 'footer/footerVariant2.tsx',
    replacements: [
      ['bg-gray-900', 'bg-[var(--color-primary)]'],
      ['bg-gray-800', 'bg-[var(--color-secondary)]'],
    ]
  },
];

let totalFixed = 0;

fixes.forEach(fix => {
  const filePath = path.join(sectionsDir, fix.file);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${fix.file}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  fix.replacements.forEach(([oldStr, newStr]) => {
    const regex = new RegExp(oldStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (content.match(regex)) {
      content = content.replace(regex, newStr);
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed: ${fix.file}`);
    totalFixed++;
  }
});

console.log(`\n✅ Complete! Fixed ${totalFixed} files.`);
