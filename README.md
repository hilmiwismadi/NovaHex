# Web Builder - Section Template Selector

A Next.js-based web builder interface that allows users to browse and select from various landing page section templates.

## Features

- 🎨 **13 Section Categories** with 51 total variants
- 🎠 **Interactive Carousel** for browsing section designs
- 💅 **ArachnoVa Design System** - Matching official website styling
- 📱 **Fully Responsive** - Mobile and desktop optimized
- ⚡ **Built with Next.js 15** + TypeScript + Tailwind CSS

## Sections Available

1. **Hero** (4 variants)
2. **About Us** (3 variants)
3. **Services** (5 variants)
4. **Kelebihan** (4 variants)
5. **Gallery** (4 variants)
6. **Portofolio** (2 variants)
7. **Teams** (3 variants)
8. **Pricing** (3 variants)
9. **FAQ** (3 variants)
10. **Reviews** (3 variants)
11. **Our Clients** (3 variants)
12. **CTA** (4 variants)
13. **Location** (3 variants)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
web-builder/
├── app/
│   ├── components/
│   │   └── SectionCarousel.tsx    # Carousel component for section variants
│   ├── data/
│   │   └── sections.ts            # Section data structure
│   ├── globals.css                # Global styles with ArachnoVa theme
│   └── page.tsx                   # Main page
├── public/
│   └── templates/                 # Section preview images
└── package.json
```

## Design System

Based on **ArachnoVa Official Website**:

### Colors
- Primary: `#1AB0C8` (Cyan/Turquoise)
- Neutral Scale: `#FAFDFF` → `#001118`
- Gradients: `from-[#2EC1D9] to-[#179FB5]`

### Typography
- Font sizes use viewport width (vw) units for responsive scaling
- Desktop: `lg:` prefix
- Mobile: default (no prefix)

### Components
- Gradient borders with padding trick
- Smooth transitions (300-500ms)
- Rounded corners and shadows
- Hover effects with transform

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment:** Ready for Vercel/Netlify

## Next Steps

- [ ] Add section selection state management
- [ ] Implement "Add to Preview" functionality
- [ ] Create live preview page
- [ ] Add drag-and-drop section ordering
- [ ] Connect to backend API
- [ ] Implement user authentication
- [ ] Add theme customization (colors, fonts)
- [ ] Export functionality

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

© 2025 ArachnoVa. All rights reserved.
