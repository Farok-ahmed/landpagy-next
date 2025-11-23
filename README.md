# Landpagy Next - SaaS & Software Landing Page Template

A modern, professional Next.js landing page template for SaaS and software products. Built with Next.js 15, React 19, Bootstrap 5, and GSAP animations.

![Landpagy Next](public/images/logo.svg)

## 🚀 Features

- ✨ **11+ Homepage Variations** - Multiple pre-built demo pages for different use cases
- 🎨 **Modern Design** - Clean, contemporary UI with smooth animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ⚡ **Next.js 15** - Built with the latest Next.js App Router
- 🎭 **GSAP Animations** - Smooth scroll-triggered animations
- 🎯 **SEO Optimized** - Includes sitemap, robots.txt, and proper meta tags
- ♿ **Accessible** - WCAG compliant with proper ARIA attributes
- 🔧 **Easy Customization** - Well-organized component structure
- 📦 **Bootstrap 5** - Responsive grid and UI components
- 🎪 **Multiple Page Types** - Blog, Career, Services, Pricing, Contact pages

## 📋 Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

## 🛠️ Installation

1. **Extract the files** to your desired location

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
landpagy-next/
├── public/
│   └── images/          # Static images and assets
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── (auth)/      # Authentication pages
│   │   ├── (blog)/      # Blog pages
│   │   ├── (career)/    # Career/job pages
│   │   ├── (elements)/  # UI elements showcase
│   │   ├── (home)/      # Homepage variations
│   │   ├── (pages)/     # Other pages
│   │   ├── layout.js    # Root layout
│   │   ├── page.js      # Homepage
│   │   ├── robots.js    # SEO robots file
│   │   └── sitemap.js   # SEO sitemap
│   ├── assets/
│   │   ├── css/         # Stylesheets
│   │   └── scss/        # SCSS source files
│   ├── components/      # React components
│   │   ├── About/
│   │   ├── Blog/
│   │   ├── Career/
│   │   ├── Features/
│   │   ├── HeroBanner/
│   │   ├── Layout/
│   │   ├── Testimonial/
│   │   └── ...
│   ├── hooks/           # Custom React hooks
│   │   └── useGsapReveal.js
│   └── utils/           # Utility functions and data
├── .eslintrc.json       # ESLint configuration
├── .prettierrc          # Prettier configuration
├── jsconfig.json        # Path aliases configuration
├── next.config.mjs      # Next.js configuration
└── package.json         # Dependencies
```

## 🎨 Customization

### Update Site Information

Edit `src/app/layout.js` to update metadata:

```javascript
export const metadata = {
  title: "Your Site Title",
  description: "Your site description",
  icons: {
    icon: "/images/favicon.ico",
  },
};
```

### Update Colors

Modify SCSS variables in `src/assets/scss/_variables.scss`

### Update Logo

Replace the logo file in:
- `public/images/logo.svg` - Main logo
- `public/images/favicon.ico` - Favicon

### Add New Pages

1. Create a new folder in `src/app/`
2. Add a `page.js` file
3. Update `src/app/sitemap.js` to include the new page

## 🌐 Homepage Variations

1. **Default Home** - `/` - Main SaaS landing page
2. **App Landing** - `/home-app` - Mobile app showcase
3. **Billing Software** - `/home-billing` - Billing solution
4. **Cloud Service** - `/home-cloud` - Cloud services
5. **Help Center** - `/home-help-center` - Support platform
6. **HRM Software** - `/home-hrm` - HR management
7. **Payment Gateway** - `/home-payment` - Payment solution
8. **POS System** - `/home-pos` - Point of sale
9. **Prototype Tool** - `/home-prototype` - Design tools
10. **Supply Chain** - `/home-sc` - Logistics software
11. **Supply Chain 2** - `/home-sc-two` - Alternative layout

## 📄 Available Pages

### Main Pages
- About One - `/about-one`
- About Two - `/about-two`
- Services - `/services`
- Product - `/product`
- Contact One - `/contact-one`
- Contact Two - `/contact-two`

### Blog
- Blog - `/blog`
- Blog Grid - `/blog-grid`

### Career
- Career - `/career`
- Jobs - `/jobs`
- Job Details - `/job-details`

## 🔧 Development

### Build for Production

```bash
npm run build
npm run start
```

### Lint Code

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

## 🌍 SEO Configuration

### Update Sitemap

Edit `src/app/sitemap.js` and update the base URL:

```javascript
const baseUrl = 'https://www.yourdomain.com'
```

### Update Robots.txt

Edit `src/app/robots.js` and update the sitemap URL

## 🎭 Animations

The template uses GSAP for scroll-triggered animations. Custom hook available:

```javascript
import { useGsapReveal } from '@/hooks/useGsapReveal'

const ref = useGsapReveal({ 
  animation: 'fadeInUp', 
  delay: 0.2 
})

return <div ref={ref}>Animated content</div>
```

## 📦 Dependencies

- Next.js 15.5.6
- React 19.2.0
- Bootstrap 5.3.8
- GSAP 3.13.0
- Swiper 11.2.10
- Sass 1.94.2

## 🐛 Troubleshooting

### Port Already in Use

```bash
npm run dev -- -p 3001
```

### Build Errors

```bash
rm -rf .next
npm run build
```

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📚 Credits

- **Icons:** Elegant Icons, Font Awesome
- **Animations:** GSAP (GreenSock Animation Platform)
- **Framework:** Next.js by Vercel
- **UI Components:** Bootstrap 5
- **Sliders:** Swiper.js, React Slick

---

**Thank you for using Landpagy Next!** 🎉

