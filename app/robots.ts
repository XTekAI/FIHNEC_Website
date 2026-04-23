// ============================================
// ARCHIVO: /app/robots.ts
// ============================================
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://fihnec-nj-phl.org'; // TODO: reemplazar con URL real

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
