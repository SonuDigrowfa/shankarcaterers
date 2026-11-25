import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Phone, MapPin, CheckCircle2, ArrowLeft, HelpCircle } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/sections/footer'
import { ContactSection } from '@/components/sections/contact'
import { BUSINESS_INFO, SITE_URL } from '@/lib/business-data'
import { LANDING_PAGES, getLandingPageBySlug } from '@/lib/landing-pages'

export const dynamicParams = false

export function generateStaticParams() {
  return LANDING_PAGES.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = getLandingPageBySlug(slug)
  if (!page) return {}

  const url = `${SITE_URL}/${page.slug}`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url,
      siteName: BUSINESS_INFO.name,
      title: page.metaTitle,
      description: page.metaDescription,
      images: [
        {
          url: page.image,
          width: 1200,
          height: 675,
          alt: page.imageAlt,
        },
      ],
    },
  }
}

export default async function LocalLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = getLandingPageBySlug(slug)
  if (!page) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Caterer', 'LocalBusiness'],
    name: BUSINESS_INFO.name,
    url: `${SITE_URL}/${page.slug}`,
    telephone: '+91-98180-79174',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.locality,
      addressRegion: BUSINESS_INFO.address.region,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: 'IN',
    },
    areaServed: page.nearbyAreas.map((area) => ({
      '@type': 'Place',
      name: `${area}, Delhi NCR, India`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <main className="w-full overflow-hidden">
        {/* Hero */}
        <section className="bg-gradient-to-b from-secondary/70 via-background to-background py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline mb-6"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>

            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-primary/20 px-4 py-1.5 text-xs font-semibold text-foreground shadow-xs">
                  <MapPin size={14} className="text-primary" />
                  {page.badge}
                </span>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  {page.h1}
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {page.subtitle}
                </p>

                <div className="flex flex-wrap gap-6 py-3 border-y border-border/80">
                  <div>
                    <span className="block text-xs text-muted-foreground">Starting Price</span>
                    <span className="font-serif text-xl font-bold text-primary">
                      {page.startingPrice}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-muted-foreground">Guest Capacity</span>
                    <span className="font-serif text-xl font-bold text-foreground">
                      {page.guestRange}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-muted-foreground">Experience</span>
                    <span className="font-serif text-xl font-bold text-foreground">30+ Years</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    <Phone size={18} />
                    Call {BUSINESS_INFO.phone}
                  </a>
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 bg-white border-2 border-primary/30 text-foreground px-7 py-3.5 rounded-full font-semibold hover:border-primary hover:text-primary transition-all"
                  >
                    Get Custom Quote
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={page.image}
                    alt={page.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights & Nearby Areas */}
        <section className="py-16 bg-white border-t border-border/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            <div className="bg-secondary/30 rounded-2xl p-7 border border-border">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-5">
                Why Choose Shankar Caterers Here
              </h2>
              <ul className="space-y-3.5">
                {page.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary/30 rounded-2xl p-7 border border-border">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-5">
                Nearby Localities We Cover
              </h2>
              <div className="flex flex-wrap gap-2.5 mb-6">
                {page.nearbyAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 bg-white border border-border rounded-full px-3.5 py-1.5 text-sm font-medium"
                  >
                    <MapPin size={14} className="text-primary" />
                    {area}
                  </span>
                ))}
              </div>

              {page.faq.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-border/80">
                  {page.faq.map((f) => (
                    <div key={f.question}>
                      <h3 className="flex items-start gap-2 font-bold text-sm sm:text-base text-foreground mb-1">
                        <HelpCircle size={17} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{f.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground pl-6">{f.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
