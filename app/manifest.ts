import type { MetadataRoute } from 'next'
import { BUSINESS_INFO } from '@/lib/business-data'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS_INFO.name,
    short_name: BUSINESS_INFO.shortName,
    description: BUSINESS_INFO.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: '#fdfaf5',
    theme_color: '#c94a18',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
