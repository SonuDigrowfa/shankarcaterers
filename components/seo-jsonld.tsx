import { BUSINESS_INFO, FAQ_ITEMS, SERVICE_AREAS, SITE_URL } from '@/lib/business-data'

export function SeoJsonLd() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['Caterer', 'FoodEstablishment', 'LocalBusiness'],
    '@id': `${SITE_URL}/#localbusiness`,
    name: BUSINESS_INFO.name,
    description:
      'Authentic North Indian catering services, live Delhi chaat counters, and traditional Indian sweets in Karkardooma, East Delhi with 30+ years of experience.',
    url: SITE_URL,
    telephone: '+91-98180-79174',
    priceRange: '₹₹',
    servesCuisine: ['North Indian', 'Indian Street Food', 'Chaat', 'Mithai', 'Vegetarian'],
    image: [
      `${SITE_URL}/images/hero-catering.jpg`,
      `${SITE_URL}/images/gallery-wedding-buffet.jpg`,
      `${SITE_URL}/images/gallery-live-chaat.jpg`,
      `${SITE_URL}/images/gallery-sweets.jpg`,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.locality,
      addressRegion: BUSINESS_INFO.address.region,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    hasMap: BUSINESS_INFO.googleMapsUrl,
    areaServed: SERVICE_AREAS.map((area) => ({
      '@type': 'Place',
      name: `${area}, Delhi, India`,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '23:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
