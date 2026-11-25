import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/business-data'
import { LANDING_PAGES } from '@/lib/landing-pages'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...LANDING_PAGES.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
  ]
}
