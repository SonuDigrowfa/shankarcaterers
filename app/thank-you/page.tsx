import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Phone, MessageCircle, ArrowLeft, Clock, Utensils } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/sections/footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { BUSINESS_INFO } from '@/lib/business-data'

export const metadata: Metadata = {
  title: 'Thank You for Your Catering Inquiry | Shankar Caterers & Sweets',
  description:
    'We have received your catering booking request. Our team from Karkardooma, East Delhi will contact you shortly.',
  robots: {
    index: false,
    follow: true,
  },
}

const EVENT_LABELS: Record<string, string> = {
  wedding: 'Wedding / Reception',
  birthday: 'Birthday Party',
  corporate: 'Corporate Event',
  'chaat-counter': 'Live Chaat Counter',
  'puja-kitty': 'Puja / Housewarming / Kitty Party',
  other: 'Custom Celebration',
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{
    name?: string
    event?: string
    date?: string
    guests?: string
  }>
}) {
  const params = await searchParams
  const guestName = params.name?.trim()
  const eventLabel = params.event ? EVENT_LABELS[params.event] || params.event : undefined
  const eventDate = params.date?.trim()
  const guestCount = params.guests?.trim()

  return (
    <>
      <Navigation />
      <main className="min-h-[75vh] bg-gradient-to-br from-[#fff3e0] via-[#fffaf2] to-[#ffe4cc] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl mx-auto w-full bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-orange-200 text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <CheckCircle2 size={40} />
          </div>

          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full mb-3">
            Booking Request Received
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {guestName ? `Namaste ${guestName}!` : 'Namaste & Thank You!'}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
            Your catering inquiry has been sent to{' '}
            <strong className="text-foreground">{BUSINESS_INFO.name}</strong>. We have also sent a confirmation email to your inbox.
          </p>

          {(eventLabel || eventDate || guestCount) && (
            <div className="bg-secondary/40 border border-orange-200/80 rounded-2xl p-5 mb-8 text-left grid sm:grid-cols-3 gap-4">
              {eventLabel && (
                <div>
                  <span className="block text-xs text-muted-foreground">Event Type</span>
                  <span className="text-sm font-bold text-foreground">{eventLabel}</span>
                </div>
              )}
              {eventDate && (
                <div>
                  <span className="block text-xs text-muted-foreground">Event Date</span>
                  <span className="text-sm font-bold text-foreground">{eventDate}</span>
                </div>
              )}
              {guestCount && (
                <div>
                  <span className="block text-xs text-muted-foreground">Guest Count</span>
                  <span className="text-sm font-bold text-foreground">{guestCount} Guests</span>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center justify-center gap-2 text-sm text-[#5c4033] bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-8">
            <Clock size={17} className="text-[#d97706] flex-shrink-0" />
            <span>Our team will call you shortly to discuss menu options and per-plate pricing.</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#d9480f] to-[#d97706] text-white px-7 py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <Phone size={18} />
              Call {BUSINESS_INFO.phone}
            </a>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#1a8f48] text-white px-7 py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="pt-4 border-t border-border flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-primary hover:underline"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <Link
              href="/#menu"
              className="inline-flex items-center gap-1.5 text-foreground hover:text-primary"
            >
              <Utensils size={16} /> Explore Signature Menu
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <MobileActionBar />
    </>
  )
}
