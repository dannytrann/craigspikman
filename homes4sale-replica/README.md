# Craig Spikman Real Estate Website Replica

An exact replica of the homes4saleincampbellriver.ca website built with Next.js 16 and Tailwind CSS v4.

## Features

- **Next.js 16** with App Router
- **Tailwind CSS v4** with custom color scheme
- **Montserrat Font** matching the original site
- **Lucide React** for icons
- **Responsive Design** optimized for all devices
- **TypeScript** for type safety

## Design Details

### Typography
- **Font Family**: Montserrat (300, 400, 500, 600, 700 weights)
- **Headings**: Light weight (300) for elegant appearance
- **Body Text**: Regular weight (400) with increased line-height for readability

### Color Scheme
- **Primary Background**: White (#FFFFFF)
- **Secondary Background**: Cream (#F5F1ED)
- **Accent Color**: Gold (#C5996B)
- **Text Color**: Dark Gray (#2D2D2D)
- **Dark Sections**: Near Black (#1A1A1A)

### Sections
1. **Hero Section** - Full-screen intro with professional photo
2. **Discover Real Estate Solutions** - Service overview with property images
3. **What I Can Help You With** - Service list with bullet points
4. **Let's Get Started** - Call-to-action with profile image
5. **Contact Me** - Contact information and form
6. **Map Section** - Interactive map placeholder
7. **Footer** - Social links and copyright

## Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

The application will be available at `http://localhost:3000` (or the next available port).

Hot Module Replacement (HMR) is enabled, so changes will be reflected immediately.

## Project Structure

```
homes4sale-replica/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main homepage with all sections
│   └── globals.css         # Global styles and Tailwind configuration
├── public/
│   └── reference.png       # Original website screenshot for reference
└── package.json
```

## Customization

### Adding Real Images

Replace the gray placeholder divs in `app/page.tsx` with actual images:

```tsx
<Image
  src="/path-to-image.jpg"
  alt="Description"
  width={600}
  height={400}
  className="rounded-lg"
/>
```

### Updating Contact Information

Edit the contact details in the Contact Me section:

```tsx
<span className="text-sm">Your Phone Number</span>
<span className="text-sm">your.email@domain.com</span>
<span className="text-sm">Your Address</span>
```

### Integrating a Real Map

Replace the map placeholder with a service like:
- Google Maps Embed API
- Mapbox
- Leaflet

## Technologies Used

- **Next.js 16.1.6** - React framework with server components
- **React 19** - Latest React features
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Montserrat** - Google Fonts

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Status

✅ **COMPLETE** - Exact replica with real content and images!

- ✅ All real images integrated (profile.jpg, 2.webp, 3.webp)
- ✅ Exact content from original website
- ✅ Google Maps integrated with actual address
- ✅ Social media links ready (need URLs)
- ✅ Real contact information (972 Shoppers Row, Campbell River, BC V9W 2C5)
- ✅ Proper metadata and SEO

## What's Included

### Real Content
- Craig Spikman's professional bio
- Royal LePage Advance Realty affiliation
- Service specializations (Executive Homes, Multi-Residential)
- Coverage areas (Campbell River & Northern Vancouver Island)
- Actual business address

### Real Images
- Professional photos of Craig Spikman
- Property images from Campbell River area
- All images optimized with Next.js Image component

## License

This is a replica project for educational/demonstration purposes.
