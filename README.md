# Bailovo Village Website

A modern, bilingual (Bulgarian/English) website for Bailovo village, Bulgaria - the birthplace of the great Bulgarian writer Elin Pelin.

## 🌟 Features

### Core Features
- **Bilingual Support**: Full Bulgarian and English translations using next-intl
- **Modern Design**: Clean, responsive design with pastel green color scheme
- **Mobile Responsive**: Optimized for all device sizes
- **SEO Optimized**: Built with Next.js 14 for excellent performance

### Sections
- **Homepage**: Hero section with village introduction and highlights
- **History**: Detailed timeline of Bailovo's rich history
- **Elin Pelin Museum**: Information about the museum, visiting hours, and exhibits
- **Cultural Center**: Details about community activities and events
- **News**: Latest news and updates (ready for WordPress integration)
- **Events**: Upcoming and past events calendar
- **Language Switcher**: Easy switching between Bulgarian and English

### Technical Features
- **Next.js 14**: Latest version with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Beautiful, consistent icons
- **Internationalization**: next-intl for translations
- **WordPress Ready**: Prepared for headless WordPress CMS integration

## 🎨 Design

The website features a modern design inspired by webiz.team with:
- **Primary Color**: Pastel green theme representing nature and tranquility
- **Typography**: Clean, readable fonts with proper hierarchy
- **Layout**: Card-based design with beautiful shadows and transitions
- **Animations**: Smooth hover effects and page transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or later
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bailovo-website.git
   cd bailovo-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🌐 URL Structure

- `/` - Redirects to `/bg` (Bulgarian by default)
- `/bg` - Bulgarian homepage
- `/en` - English homepage
- `/bg/history` - History page in Bulgarian
- `/en/history` - History page in English
- `/bg/museum` - Museum page in Bulgarian
- `/en/museum` - Museum page in English
- `/bg/news` - News page in Bulgarian
- `/en/news` - News page in English
- `/bg/events` - Events page in Bulgarian
- `/en/events` - Events page in English

## 📝 Content Management

### Current Setup
The website currently uses mock data for news and events. This is designed to be easily replaced with WordPress REST API integration.

### WordPress Integration (Planned)
To integrate with WordPress headless CMS:

1. **Install WordPress REST API plugin**
2. **Update API endpoints** in the following components:
   - `src/components/NewsEventsWidget.tsx`
   - `src/app/[locale]/news/page.tsx`
   - `src/app/[locale]/events/page.tsx`

3. **Example API integration**:
   ```typescript
   // Fetch news from WordPress
   const fetchNews = async () => {
     const response = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/posts');
     return response.json();
   };
   ```

## 🎯 Key Pages

### Homepage (`/`)
- Hero section with village introduction
- About section with village description
- Highlights showcasing main attractions
- News & Events widget
- Call-to-action section

### History (`/history`)
- Timeline of important historical events
- Cultural heritage information
- Detailed content about the village's past

### Museum (`/museum`)
- Information about Elin Pelin Museum
- Visiting hours and contact details
- About Elin Pelin and his works
- Practical visitor information

### News (`/news`)
- Featured news section
- Regular news grid
- Individual news article pages (ready for implementation)

### Events (`/events`)
- Featured events
- Upcoming events calendar
- Past events archive
- Event categories and filtering

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Internationalization**: next-intl
- **Fonts**: Inter (with Cyrillic support)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Color Scheme

```css
/* Primary green palette */
primary-50: #f0fdf4
primary-100: #dcfce7
primary-200: #bbf7d0
primary-300: #86efac
primary-400: #4ade80
primary-500: #22c55e
primary-600: #16a34a
primary-700: #15803d
primary-800: #166534
primary-900: #14532d

/* Pastel green accents */
pastel-green: #a7f3d0
pastel-green-light: #d1fae5
pastel-green-dark: #6ee7b7
```

## 📋 TODO / Future Enhancements

- [ ] WordPress CMS integration
- [ ] Individual news/event detail pages
- [ ] Contact form functionality
- [ ] Image optimization and gallery
- [ ] Search functionality
- [ ] Social media integration
- [ ] Admin dashboard
- [ ] Performance optimization
- [ ] Analytics integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions about this project, please contact:
- Email: info@bailovo.eu
- Website: https://bailovo.eu

## 🙏 Acknowledgments

- Built for the community of Bailovo village
- Dedicated to preserving the legacy of Elin Pelin
