import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bailovo.eu';
  const locales = ['bg', 'en'];
  
  // Define all static routes
  const routes = [
    '',           // home
    '/history',
    '/culture',
    '/museum',
    '/church',
    '/chapel',
    '/nature',
    '/tourism',
    '/news',
    '/events',
    '/mayoralty',
    '/gallery',
    '/contact',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Generate entries for each locale and route
  locales.forEach((locale) => {
    routes.forEach((route) => {
      const url = `${baseUrl}/${locale}${route}`;
      
      // Set priority based on page importance
      let priority = 0.7;
      if (route === '') priority = 1.0;  // Home page
      if (route === '/museum' || route === '/tourism') priority = 0.9;
      if (route === '/history' || route === '/culture') priority = 0.8;
      if (route === '/news' || route === '/events') priority = 0.8;
      
      // Set change frequency based on content type
      let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly';
      if (route === '/news' || route === '/events') changeFrequency = 'weekly';
      if (route === '') changeFrequency = 'weekly';
      
      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    });
  });

  return sitemap;
}

