# Customization Guide

## Quick Reference for Common Updates

### Update Social Media Links

In `app/page.tsx`, find the social media section and update the URLs:

```tsx
// Hero Section - Around line 23
<a href="YOUR_FACEBOOK_URL" target="_blank" rel="noopener noreferrer">
  <Facebook size={20} />
</a>
<a href="YOUR_INSTAGRAM_URL" target="_blank" rel="noopener noreferrer">
  <Instagram size={20} />
</a>
<a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer">
  <Linkedin size={20} />
</a>

// Footer Section - Around line 199
// Same pattern, update the href attributes
```

### Update Contact Information

In `app/page.tsx`, Contact Me section (around line 160):

```tsx
<div className="flex items-center justify-center gap-3 text-gray-700">
  <MapPin size={18} className="text-gold" />
  <span className="text-sm">YOUR ADDRESS HERE</span>
</div>
```

### Add Phone Number or Email

Add these to the Contact Me section:

```tsx
<div className="flex items-center justify-center gap-3 text-gray-700">
  <Phone size={18} className="text-gold" />
  <span className="text-sm">YOUR PHONE NUMBER</span>
</div>
<div className="flex items-center justify-center gap-3 text-gray-700">
  <Mail size={18} className="text-gold" />
  <span className="text-sm">YOUR EMAIL</span>
</div>
```

### Update Google Maps

In `app/page.tsx`, Map section (around line 188):

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the current iframe src with your new embed URL

### Change Colors

In `app/globals.css`:

```css
:root {
  --background: #ffffff;     /* Main background */
  --foreground: #2d2d2d;     /* Text color */
  --cream: #f5f1ed;          /* Cream sections */
  --gold: #c5996b;           /* Accent color */
  --dark: #1a1a1a;           /* Dark sections */
}
```

### Add More Property Images

1. Add images to the `public/` folder
2. In `app/page.tsx`, replace or add new Image components:

```tsx
<Image
  src="/your-new-image.jpg"
  alt="Description"
  fill
  className="object-cover rounded-lg"
/>
```

### Update Page Title & Description

In `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Your Custom Title",
  description: "Your custom description for SEO",
};
```

### Add New Sections

Follow this pattern in `app/page.tsx`:

```tsx
<section id="new-section" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-8">
    <h2 className="text-3xl md:text-4xl font-light text-center mb-3 text-foreground">
      Section Title
    </h2>
    <div className="w-12 h-0.5 bg-gold mx-auto mb-12"></div>

    {/* Your content here */}
  </div>
</section>
```

### Update Button Text

Find buttons in `app/page.tsx` and change the text:

```tsx
<button className="bg-dark text-white px-8 py-3.5 text-sm font-normal tracking-wider hover:bg-gray-800 transition-all uppercase">
  Your Button Text
</button>
```

### Change Font

In `app/layout.tsx`, replace Montserrat with another Google Font:

```tsx
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
```

Then update `app/globals.css`:

```css
@theme inline {
  --font-sans: var(--font-your-font);
}
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Adding Contact Form

To add a working contact form, you'll need:

1. A backend service (Formspree, EmailJS, or custom API)
2. Form state management
3. Validation
4. Error handling

Example with Formspree:

```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Other Platforms

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

All support Next.js out of the box!

## Performance Optimization

Already implemented:
- ✅ Image optimization with Next.js Image
- ✅ Font optimization with next/font
- ✅ Automatic code splitting
- ✅ Static generation where possible

Optional enhancements:
- Add sitemap.xml
- Add robots.txt
- Implement Analytics (Google Analytics, Plausible)
- Add Open Graph images
- Set up monitoring (Sentry, LogRocket)

## Support

For Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
For Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Current Status**: Fully functional replica running on http://localhost:3001
