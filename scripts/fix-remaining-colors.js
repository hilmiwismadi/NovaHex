const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, '..', 'sections-assets', 'sections');

const fixes = [
  // Pricing-1: Button color and borders
  {
    file: 'pricing/pricingVariant1.tsx',
    replacements: [
      ['className="bg-[rgba(66,115,206,1)]', 'className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)]'],
      ['border-b-black', 'border-b-[var(--color-secondary)] border-opacity-20'],
    ]
  },
  // Pricing-2: Get started button and Most Popular
  {
    file: 'pricing/pricingVariant2.tsx',
    replacements: [
      ['bg-blue-600', 'bg-[var(--color-primary)]'],
      ['text-blue-600', 'text-[var(--color-primary)]'],
      ['peer-focus:ring-blue-300', 'peer-focus:ring-[var(--color-primary)] peer-focus:ring-opacity-30'],
      ['peer-checked:bg-blue-600', 'peer-checked:bg-[var(--color-primary)]'],
    ]
  },
  // FAQ-1: Card colors
  {
    file: 'faq/faqVariant1.tsx',
    replacements: [
      ['bg-blue-50', 'bg-[var(--color-primary)] bg-opacity-10'],
      ['text-blue-600', 'text-[var(--color-primary)]'],
    ]
  },
  // FAQ-2: Card colors
  {
    file: 'faq/faqVariant2.tsx',
    replacements: [
      ['bg-blue-50', 'bg-[var(--color-primary)] bg-opacity-10'],
      ['text-blue-600', 'text-[var(--color-primary)]'],
    ]
  },
  // Review-1: Arrow colors
  {
    file: 'riview/riviewVariant1.tsx',
    replacements: [
      ['text-blue-600', 'text-[var(--color-primary)]'],
      ['hover:text-blue-800', 'hover:text-[var(--color-secondary)]'],
    ]
  },
  // Review-2: Arrow colors
  {
    file: 'riview/riviewVariant2.tsx',
    replacements: [
      ['text-blue-600', 'text-[var(--color-primary)]'],
      ['hover:text-blue-800', 'hover:text-[var(--color-secondary)]'],
    ]
  },
  // Review-3: Card border and arrow
  {
    file: 'riview/riviewVariant3.tsx',
    replacements: [
      ['border-blue-500', 'border-[var(--color-primary)]'],
      ['text-blue-600', 'text-[var(--color-primary)]'],
      ['hover:text-blue-800', 'hover:text-[var(--color-secondary)]'],
    ]
  },
  // Location-2: Div colors
  {
    file: 'location/locationVariant2.tsx',
    replacements: [
      ['bg-[#ff1e00]', 'bg-[var(--color-tertiary)]'],
      ['border-[#C9D9FF]', 'border-[var(--color-primary)] border-opacity-30'],
    ]
  },
  // CTA-3: Button colors
  {
    file: 'cta/ctaVariant3.tsx',
    replacements: [
      ['bg-[#593D29]', 'bg-[var(--color-secondary)]'],
    ]
  },
  // Footer-1: Background colors
  {
    file: 'footer/footerVariant1.tsx',
    replacements: [
      ['bg-blue-600', 'bg-[var(--color-primary)]'],
      ['text-blue-600', 'text-[var(--color-primary)]'],
      ['hover:text-blue-400', 'hover:text-[var(--color-secondary)]'],
    ]
  },
  // Footer-2: Secondary colors
  {
    file: 'footer/footerVariant2.tsx',
    replacements: [
      ['bg-blue-600', 'bg-[var(--color-primary)]'],
      ['text-blue-600', 'text-[var(--color-primary)]'],
      ['hover:text-blue-400', 'hover:text-[var(--color-secondary)]'],
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
    if (content.includes(oldStr)) {
      content = content.replace(new RegExp(oldStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newStr);
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
