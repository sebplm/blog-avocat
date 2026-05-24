import { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';
import { getAllPillars } from '@/lib/pillars';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles().map((article) => ({
    url: `${SITE.url}/blog/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const pillars = getAllPillars().map((pillar) => ({
    url: `${SITE.url}/${pillar.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE.url}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/contactez-meilleur-avocat-toulouse`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    ...pillars,
    ...articles,
  ];
}
