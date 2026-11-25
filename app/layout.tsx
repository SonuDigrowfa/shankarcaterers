import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SITE_URL, BUSINESS_INFO } from '@/lib/business-data'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#c94a18',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Shankar Caterers & Sweets | Best North Indian Catering in Karkardooma, East Delhi',
    template: '%s | Shankar Caterers & Sweets',
  },
  description:
    'Trusted North Indian & Pure Veg catering in Karkardooma, East Delhi (110092) with 30+ years experience. Wedding catering, live Delhi chaat counters, birthday parties, corporate events & traditional sweets across Preet Vihar, Anand Vihar, Laxmi Nagar & Delhi NCR. Call +91 98180 79174.',
  keywords: [
    'Shankar Caterers & Sweets',
    'caterers near me',
    'caterers in East Delhi',
    'caterers Delhi near me',
    'best caterers in Karkardooma',
    'catering cost for 20 guests',
    'catering cost for 40 guests',
    'caterers near me with price',
    'birthday party caterers East Delhi',
    'wedding caterers East Delhi',
    'caterers in Vivek Vihar Phase II',
    'caterers in Anand Vihar',
    'caterers in Preet Vihar',
    'caterers in Shreshtha Vihar',
    'caterers in Dayanand Vihar',
    'caterers in Surajmal Vihar',
    'caterers in Nirman Vihar',
    'caterers in Laxmi Nagar',
    'caterers in Krishna Nagar',
    'caterers in Jagat Puri',
    'caterers in Vishwas Nagar',
    'caterers in Jhilmil Colony',
    'caterers in Jwala Nagar',
    'caterers in Mansarovar Park',
    'caterers in Bhola Nath Nagar',
    'caterers in Shahdara',
    'caterers in AGCR Enclave',
    'caterers in Hargovind Enclave',
    'caterers in Vaishali Ghaziabad',
    'caterers in Kaushambi Ghaziabad',
    'live chaat counter East Delhi',
    'pure veg catering Delhi NCR',
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  alternates: {
    canonical: '/',
  },
  verification: {
    google: '0fqctcEOqDv7-ZhBiyPTptPZlPzadSlq-fc7EcWPb_w',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: BUSINESS_INFO.name,
    title: 'Shankar Caterers & Sweets | North Indian Catering & Live Chaat in East Delhi',
    description:
      '30+ years of authentic North Indian wedding, birthday, and corporate catering in Karkardooma & East Delhi. 500+ successful events. Call +91 98180 79174.',
    images: [
      {
        url: '/images/hero-catering.jpg',
        width: 1200,
        height: 675,
        alt: 'Shankar Caterers & Sweets - North Indian Wedding & Event Catering Spread in East Delhi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shankar Caterers & Sweets | Best Caterers in East Delhi',
    description:
      'Authentic North Indian catering, live Delhi chaat counters & traditional sweets in Karkardooma, East Delhi.',
    images: ['/images/hero-catering.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: '/apple-icon',
  },
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/15 selection:text-primary">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
