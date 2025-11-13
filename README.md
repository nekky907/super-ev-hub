# SUPER EV HUB - React Website

## 🚗⚡ Project Overview

A modern, responsive React website for SUPER EV HUB - an electric vehicle charging station service in Chiang Mai, Thailand. The website features a dark theme with gold accents, animated charger visualizations, and comprehensive information about EV charging services.

## 🎨 Features

- **Hero Section**: Animated EV charger visualization with power levels
- **Service Information**: Location and service details
- **Feature Cards**: Highlighting FAST charge, Easy pay, and Huawei technology
- **6-Step Charging Process**: Interactive step-by-step guide
- **Contact Section**: Contact form, info, and social media links
- **Fully Responsive**: Works on all devices
- **Animations**: Smooth scroll animations and hover effects
- **Bilingual Ready**: Thai content with structure for multi-language support

## 🛠️ Technologies Used

- React 18.2.0
- CSS3 with animations
- JavaScript ES6+
- Google Fonts (Kanit)

## 📦 Installation

1. **Clone or download the project**
   ```bash
   cd super-ev-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
super-ev-hub/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.js
│   │   ├── InfoSection.js
│   │   ├── Features.js
│   │   ├── HowToCharge.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── styles/
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Hero.css
│   │   ├── InfoSection.css
│   │   ├── Features.css
│   │   ├── HowToCharge.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🎯 Component Breakdown

### Hero Component
- Logo and branding
- Main title with animation
- 3 animated charger units with energy flow
- Power level displays (120kW, 350kW, 175kW)

### InfoSection Component
- Location information
- Service description
- Reservation button

### Features Component
- 3 feature cards with hover effects
- FAST Charge (720kW Ultra Fast)
- Easy Pay (QR Code, Credit Cards)
- Huawei Technology

### HowToCharge Component
- 6 interactive steps
- Progress line animation
- Click to highlight steps
- Icons and descriptions

### Contact Component
- Contact form with validation
- Contact information display
- Social media links
- Google Maps placeholder

### Footer Component
- Copyright information
- Branding

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📱 Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small Mobile: < 480px

## 🎨 Color Scheme

- Primary: `#FDB913` (Gold/Yellow)
- Secondary: `#FF6B00` (Orange)
- Background: `#000000` (Black)
- Dark Gray: `#1a1a1a`
- Text: `#FFFFFF` (White)
- Muted: `#999999` (Gray)

## 🔧 Customization

### Changing Content
- Edit component files in `src/components/`
- Text content is directly in the component files
- Easy to add multi-language support

### Styling
- Global styles: `src/styles/index.css`
- Component-specific styles in respective CSS files
- Color variables can be added for easier theming

### Adding Features
- Create new components in `src/components/`
- Import and use in `App.js`
- Add corresponding CSS in `src/styles/`

## 📄 License

This project is created for SUPER EV HUB. All rights reserved.

## 👥 Contact

For any questions or support, contact:
- Email: info@superevhub.com
- Phone: 086-123-4567

---

**Built with ❤️ for sustainable transportation in Thailand**
