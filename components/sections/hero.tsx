import Image from 'next/image'
import { ArrowRight, Phone, Star, MapPin, ShieldCheck } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/business-data'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-secondary/80 via-background to-background pt-10 pb-20 lg:pt-16 lg:pb-24"
    >
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-white border border-primary/20 px-4 py-1.5 text-xs sm:text-sm font-medium text-foreground shadow-sm">
              <MapPin size={15} className="text-primary flex-shrink-0" />
              <span>Karkardooma, East Delhi &bull; Serving Delhi NCR</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-balance text-foreground leading-[1.12] tracking-tight">
                Authentic North Indian Catering for{' '}
                <span className="text-primary">Unforgettable</span> Celebrations
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Trusted by East Delhi families for <strong className="text-foreground font-semibold">30+ years</strong>. From grand wedding banquets and live Delhi chaat counters to corporate events and traditional pure-ghee sweets, we craft every plate with warmth and hygiene.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-1">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-primary/95 transition-all"
              >
                <Phone size={18} />
                Call {BUSINESS_INFO.phone}
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-white border-2 border-primary/30 text-foreground px-7 py-3.5 rounded-full font-semibold hover:border-primary hover:text-primary transition-all"
              >
                Book Catering Quote
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/80">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                  {BUSINESS_INFO.stats.events}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Events Catered</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                  {BUSINESS_INFO.stats.experience}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-primary flex items-center gap-1">
                  {BUSINESS_INFO.stats.rating}
                  <Star size={20} className="fill-accent text-accent" />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Local Rating</div>
              </div>
            </div>
          </div>

          {/* Right Real Hero Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/hero-catering.jpg"
                alt="Shankar Caterers & Sweets luxury North Indian wedding catering buffet spread in East Delhi"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      100% Hygienic &amp; Fresh Preparation
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Pure Veg Menus &bull; Live Chaat &bull; Custom Packages
                    </p>
                  </div>
                </div>
                <a
                  href="#menu"
                  className="text-xs font-semibold text-primary hover:underline whitespace-nowrap"
                >
                  Explore Menu &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
