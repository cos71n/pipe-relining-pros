# Mobile Services Website Template

A high-performance, mobile-first website template for mobile service businesses (mobile mechanics, groomers, cleaners, etc.) built with Next.js 15, optimized for security, SEO, and Cloudflare deployment.

## 🚀 Features

- **Mobile-First Design**: Optimized for mobile users and service businesses
- **Next.js 15**: Latest framework with App Router and React 19
- **Security-First**: Comprehensive XSS protection, input sanitization, and security headers
- **SEO Optimized**: Technical SEO foundation for local business ranking
- **Cloudflare Ready**: Optimized for Cloudflare Pages deployment
- **shadcn/ui + 21st.dev**: Modern component library with enhanced mobile components
- **TypeScript**: Full type safety throughout the application
- **Performance**: 95+ Lighthouse scores and Core Web Vitals optimization

## 🛡️ Security Features

- Content Security Policy (CSP) headers
- XSS and injection attack prevention
- Input validation and sanitization with Zod
- Rate limiting and bot protection
- Secure form handling for customer data
- HTTPS enforcement and secure headers

## 📱 Mobile Service Business Features

- Hero section with location-based messaging
- Service showcase with clear CTAs
- Customer testimonials and reviews
- Contact forms with validation
- Service area mapping
- Emergency service options
- Business hours and contact info

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd mobile-services-template

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the template.

## 🔧 Configuration

### Environment Variables

Create `.env.local` and configure:

```env
# Security
NEXTAUTH_SECRET=your-super-secure-secret-key-here-min-32-characters

# Business Information
BUSINESS_NAME="Your Mobile Service Business"
BUSINESS_PHONE="+1-555-123-4567"
BUSINESS_EMAIL="contact@yourbusiness.com"
SERVICE_AREA="Your City and surrounding areas"

# Email Service (choose one)
SENDGRID_API_KEY=your-sendgrid-api-key
RESEND_API_KEY=your-resend-api-key

# SEO
SITE_URL=https://yourbusiness.com
SITE_NAME="Your Mobile Service Business"
SITE_DESCRIPTION="Professional mobile services in your area"

# Cloudflare (optional)
CLOUDFLARE_API_TOKEN=your-cloudflare-api-token
CLOUDFLARE_ZONE_ID=your-cloudflare-zone-id
```

### Customization

1. **Brand Colors**: Update `tailwind.config.ts` with your brand colors
2. **Business Info**: Configure business details in environment variables
3. **Services**: Modify service types in `src/lib/security.ts` validation schemas
4. **Content**: Update homepage content in `src/app/page.tsx`

## 🌐 Cloudflare Pages Deployment

### Option 1: GitHub Integration

1. Push your code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Output directory**: `out`
   - **Node.js version**: `18.x`
5. Add environment variables in Cloudflare dashboard
6. Deploy!

### Option 2: Direct Upload

```bash
# Build the project
npm run build

# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy to Cloudflare Pages
wrangler pages deploy out --project-name your-site-name
```

### Build Configuration

The project includes optimized build settings:

- Static export for maximum performance
- Image optimization for mobile devices
- Security headers pre-configured
- SEO metadata included

## 🔒 Security Best Practices

### Form Security
- All inputs are validated and sanitized
- Rate limiting prevents spam/abuse
- CSRF protection on sensitive endpoints
- XSS prevention throughout

### Data Protection
- No sensitive data in client-side code
- Secure environment variable handling
- Encrypted data transmission (HTTPS only)
- Privacy-compliant contact forms

### Cloudflare Security
- Web Application Firewall (WAF)
- DDoS protection included
- Bot management and filtering
- SSL/TLS encryption

## 📊 Performance Optimization

### Core Web Vitals
- **LCP**: <2.5s (Largest Contentful Paint)
- **FID**: <100ms (First Input Delay)
- **CLS**: <0.1 (Cumulative Layout Shift)

### Optimization Features
- Next.js Image optimization
- Font optimization with `next/font`
- Mobile-first responsive design
- Lazy loading for images and components
- Cloudflare CDN for global performance

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   └── mobile-services/ # Business-specific components
├── lib/                # Utilities and configurations
│   ├── security.ts     # Security utilities and validation
│   └── utils.ts        # General utilities
├── hooks/              # Custom React hooks
└── types/              # TypeScript type definitions
```

## 🎨 Component Library

### shadcn/ui Components
- Button, Card, Form, Input (installed)
- Additional components available via `npx shadcn@latest add [component]`

### 21st.dev Components
Enhanced components for mobile services:
- Modern hero sections
- Testimonial layouts
- Contact forms
- Service cards

Install with: `npx shadcn add "https://21st.dev/[component-url]"`

## 🚑 Mobile Service Types

The template is pre-configured for:

### Mobile Mechanic
- Vehicle information forms
- Diagnostic request forms
- Emergency service options

### Mobile Pet Grooming
- Pet information and service selection
- Appointment scheduling
- Special care requirements

### Mobile Cleaning
- Service area selection
- Cleaning type preferences
- Frequency scheduling

### Generic Mobile Services
- Customizable service forms
- Location-based messaging
- Service area mapping

## 🔍 SEO Features

### Technical SEO
- Structured data for local businesses
- Dynamic sitemap generation
- Mobile-first indexing ready
- Core Web Vitals optimized

### Local SEO
- LocalBusiness schema markup
- Service area definition
- Contact information optimization
- Review and testimonial integration

## 📞 Support

For issues and questions:

1. Check the [documentation](./docs/)
2. Review [security guidelines](./SECURITY.md)
3. Submit issues via GitHub

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

**Built with ❤️ for mobile service businesses**
