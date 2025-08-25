# Sentient Digital Private Limited - Website

A modern, responsive website for Sentient Digital Private Limited, an IT services company. Built with React, TailwindCSS, and Framer Motion for a sleek, futuristic design with smooth animations.

## 🚀 Features

### Design & UI
- **Modern Glassmorphism Design**: Sleek glassmorphism effects with gradient backgrounds
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Gradient Color Scheme**: Blue, Purple, and Indigo gradient combinations
- **Modern Typography**: Poppins, Inter, and Montserrat fonts

### Pages & Sections
- **Home Page**: Hero section with CTA buttons, services preview, stats, and about preview
- **About Us**: Mission, vision, company values, timeline, and team showcase
- **Services**: Detailed service cards with filtering, process steps, and pricing plans
- **Portfolio**: Project showcase with filtering and detailed project modals
- **Contact Us**: Interactive contact form, Google Maps embed, and FAQ section

### Interactive Elements
- **Floating WhatsApp Button**: Direct WhatsApp integration
- **Smooth Scrolling Navigation**: Sticky navbar with glassmorphism effect
- **Project Filtering**: Category-based project filtering
- **Contact Form**: Interactive form with validation and submission feedback
- **Hover Animations**: Card hover effects and micro-interactions

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Styling**: TailwindCSS 3
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sentient-digital-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation component
│   ├── Footer.js       # Footer component
│   └── WhatsAppButton.js # Floating WhatsApp button
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── About.js        # About page
│   ├── Services.js     # Services page
│   ├── Portfolio.js    # Portfolio page
│   └── Contact.js      # Contact page
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Blue shades */ },
  secondary: { /* Purple shades */ },
  indigo: { /* Indigo shades */ }
}
```

### Content
- Update company information in respective page components
- Replace placeholder images with actual project images
- Update contact information and social media links
- Modify service offerings and pricing plans

### Styling
- Custom CSS classes are defined in `src/index.css`
- Glassmorphism effects and gradients can be adjusted
- Animation timings can be modified in component files

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## 📄 Pages Overview

### Home Page (`/`)
- Hero section with tagline and CTA buttons
- Services preview with hover animations
- Company statistics
- About preview section
- Call-to-action section

### About Page (`/about`)
- Mission and vision statements
- Company values
- Timeline of company milestones
- Team member showcase
- Company statistics

### Services Page (`/services`)
- Service category filtering
- Detailed service cards with features
- Development process steps
- Pricing plans
- Call-to-action section

### Portfolio Page (`/portfolio`)
- Project filtering by category
- Project cards with hover effects
- Detailed project modals
- Client testimonials

### Contact Page (`/contact`)
- Contact information cards
- Interactive contact form
- Google Maps integration
- FAQ section
- Office hours

## 🎯 Key Features

### Performance
- Optimized images and assets
- Lazy loading for better performance
- Smooth animations with hardware acceleration

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly

### SEO
- Meta tags and descriptions
- Structured data markup
- Optimized page titles
- Clean URL structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions:
- Email: info@sentientdigital.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ by Sentient Digital Private Limited**
