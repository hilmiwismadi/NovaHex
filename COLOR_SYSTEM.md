# Web Builder Color System

## Overview
This document defines the color customization system for all 51 section variants across 15 section types.

## Color Variables

The system uses three customizable color variables:

- **Primary Color** (`--color-primary`): Main brand color for buttons, links, and primary accents
  - Default: `#1AB0C8` (ArachnoVa Cyan)
  - Used in: CTA buttons, navigation links, primary headings, active states

- **Secondary Color** (`--color-secondary`): Supporting color for backgrounds and secondary elements
  - Default: `#4273CE` (Blue)
  - Used in: Section backgrounds, cards, secondary buttons, icons

- **Tertiary Color** (`--color-tertiary`): Accent color for highlights and special elements
  - Default: `#F65050` (Red/Accent)
  - Used in: Hover states, badges, notifications, special highlights

## Color Mapping by Section Type

### 1. **Navbar (4 variants)**
- **Primary**: Logo accent, active menu items, CTA buttons
- **Secondary**: Navigation background, dropdown backgrounds
- **Tertiary**: Hover states, notification badges

### 2. **Hero (4 variants)**
- **Primary**: Main CTA buttons, headline accents
- **Secondary**: Background overlays, secondary buttons
- **Tertiary**: Feature highlights, badge colors

### 3. **About Us (3 variants)**
- **Primary**: Section titles, "Learn More" buttons
- **Secondary**: Card backgrounds, icon containers
- **Tertiary**: Stats highlights, achievement badges

### 4. **Services (5 variants)**
- **Primary**: Service card icons, "View Details" links
- **Secondary**: Card backgrounds, hover states
- **Tertiary**: Price tags, "New" badges

### 5. **Kelebihan/Features (4 variants)**
- **Primary**: Feature icons, titles
- **Secondary**: Card backgrounds
- **Tertiary**: Checkmarks, highlights

### 6. **Gallery (4 variants)**
- **Primary**: "View More" buttons, active filters
- **Secondary**: Image overlays
- **Tertiary**: Image borders on hover

### 7. **Portofolio (2 variants)**
- **Primary**: Project titles, "View Project" links
- **Secondary**: Card backgrounds, category tags
- **Tertiary**: "Featured" badges

### 8. **Teams (3 variants)**
- **Primary**: Name titles, social media icons
- **Secondary**: Card backgrounds, role tags
- **Tertiary**: Online status indicators

### 9. **Pricing (3 variants)**
- **Primary**: "Choose Plan" buttons, featured plan borders
- **Secondary**: Card backgrounds, plan headers
- **Tertiary**: "Most Popular" badges, price highlights

### 10. **FAQ (3 variants)**
- **Primary**: Question titles, expand icons
- **Secondary**: Answer backgrounds
- **Tertiary**: Active question highlights

### 11. **Reviews/Testimonials (3 variants)**
- **Primary**: Star ratings, reviewer names
- **Secondary**: Card backgrounds, quote icons
- **Tertiary**: Verified badges

### 12. **Clients (3 variants)**
- **Primary**: Active client logos
- **Secondary**: Logo backgrounds
- **Tertiary**: Hover effects

### 13. **CTA (4 variants)**
- **Primary**: Main action buttons
- **Secondary**: Background sections
- **Tertiary**: Urgency indicators ("Limited Time")

### 14. **Location (3 variants)**
- **Primary**: "Get Directions" buttons, map markers
- **Secondary**: Card backgrounds
- **Tertiary**: Active location highlights

### 15. **Footer (3 variants)**
- **Primary**: Links, social media icons
- **Secondary**: Footer background sections
- **Tertiary**: Newsletter button, scroll-to-top button

## Usage in Components

To use the color system in components, reference the CSS variables:

```css
/* Primary Color */
background-color: var(--color-primary);
color: var(--color-primary);
border-color: var(--color-primary);

/* Secondary Color */
background-color: var(--color-secondary);
color: var(--color-secondary);

/* Tertiary Color */
background-color: var(--color-tertiary);
color: var(--color-tertiary);
```

In Tailwind (via arbitrary values):

```html
<button className="bg-[var(--color-primary)] text-white">
  Primary Button
</button>

<div className="bg-[var(--color-secondary)]">
  Secondary Background
</div>

<span className="text-[var(--color-tertiary)]">
  Tertiary Text
</span>
```

## Color Application Flow

1. **Step 1**: User selects sections in the web builder
2. **Step 2**: User chooses colors (preset or custom)
3. **Build**: Colors are passed as URL parameters
4. **Render**: CSS variables are set on `document.documentElement`
5. **Components**: Automatically use the custom colors

## Preset Themes

The system includes 5 preset themes:

1. **ArachnoVa (Default)**
   - Primary: `#1AB0C8`
   - Secondary: `#4273CE`
   - Tertiary: `#F65050`

2. **Ocean Blue**
   - Primary: `#246BFD`
   - Secondary: `#407BFF`
   - Tertiary: `#6236FF`

3. **Forest Green**
   - Primary: `#2ECC71`
   - Secondary: `#27AE60`
   - Tertiary: `#F39C12`

4. **Sunset Orange**
   - Primary: `#E74C3C`
   - Secondary: `#C77B2C`
   - Tertiary: `#593D29`

5. **Purple Dreams**
   - Primary: `#9B59B6`
   - Secondary: `#8E44AD`
   - Tertiary: `#3498DB`

## Implementation Notes

- Colors are stored in BuilderContext
- Applied dynamically via CSS custom properties
- No component code changes needed for color updates
- Backward compatible with default colors

## Future Enhancements

- [ ] Add gradient support
- [ ] Add dark mode variants
- [ ] Add accessibility contrast checking
- [ ] Export color palette for design tools
