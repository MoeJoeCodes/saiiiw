import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saiiiw.co.za';

  const routes = [
    '',
    '/about',
    '/career-counselling',
    '/contact',
    '/couples-counselling',
    '/family-counselling',
    '/individual-counselling',
    '/pre-post-marital-counselling',
    '/services'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
