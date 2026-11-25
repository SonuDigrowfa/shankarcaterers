import Image from 'next/image'
import { ArrowRight, Phone, Star, MapPin, ShieldCheck, Leaf } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/business-data'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#fff3e0] via-[#fffaf2] to-[#ffe4cc] pt-10 pb-20 lg:pt-16 lg:pb-24"
    >
      {/* Colorful festive ambient glows */}
      <div className="pointer-events-none absolute -top-24 right-0 w-[28rem] h-[28rem] bg-gradient-to-br from-amber-400/25 to-orange-500/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 w-[28rem] h-[28rem] bg-gradient-to-tr from-rose-500/15 to-amber-300/25 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-orange-200 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#9a3412] shadow-xs">
                <MapPin size={14} className="text-[#ea580c] flex-shrink-0" />
                Karkardooma, East Delhi
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 text-white px-3.5 py-1.5 text-xs sm:text-sm font-semibold shadow-xs">
                <Leaf size={14} className="flex-shrink-0" />
                100% Pure Veg &amp; Fresh
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.45rem] font-bold text-balance text-[#23120b] leading-[1.12] tracking-tight">
                Delicious North Indian Catering for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9480f] via-[#e67700] to-[#b91c1c]">
                  Colorful
                </span>{' '}
                Celebrations
              </h1>
              <p className="text-base sm:text-lg text-[#5c4033] leading-relaxed max-w-xl">
                Trusted by East Delhi families for <strong className="text-[#23120b] font-semibold">30+ years</strong>. From grand wedding banquets and live Delhi chaat counters to birthday parties and pure-ghee sweets, we bring authentic festive flavors to every plate.
              </p>
            </div>

            {/* Colorful CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-1">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#d9480f] via-[#e8590c] to-[#d97706] text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                <Phone size={18} />
                Call {BUSINESS_INFO.phone}
              </a>
              <a
                href="#pricing"
                className="flex items-center justify-center gap-2 bg-white border-2 border-[#e8590c]/40 text-[#9a3412] px-7 py-3.5 rounded-full font-semibold hover:bg-orange-50 hover:border-[#e8590c] transition-all shadow-xs"
              >
                View Packages &amp; Prices
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Colorful Trust Stat Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2.5 sm:p-3.5 border border-orange-200/80 shadow-xs text-center sm:text-left">
                <div className="font-serif text-xl sm:text-3xl font-bold text-[#d9480f]">
                  {BUSINESS_INFO.stats.events}
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-[#5c4033]">Events Catered</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2.5 sm:p-3.5 border border-amber-200/80 shadow-xs text-center sm:text-left">
                <div className="font-serif text-xl sm:text-3xl font-bold text-[#d97706]">
                  {BUSINESS_INFO.stats.experience}
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-[#5c4033]">Years Heritage</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2.5 sm:p-3.5 border border-emerald-200/80 shadow-xs text-center sm:text-left">
                <div className="font-serif text-xl sm:text-3xl font-bold text-emerald-700 flex items-center justify-center sm:justify-start gap-1">
                  {BUSINESS_INFO.stats.rating}
                  <Star size={16} className="fill-amber-400 text-amber-500" />
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-[#5c4033]">Local Rating</div>
              </div>
            </div>
          </div>

          {/* Right Real Hero Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl shadow-orange-900/15 border-4 border-white ring-1 ring-orange-200">
              <Image
                src="/images/hero-catering.jpg"
                alt="Shankar Caterers & Sweets luxury North Indian wedding catering buffet spread in East Delhi"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="hidden sm:flex absolute bottom-6 left-6 right-6 flex-wrap items-center justify-between gap-3 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-orange-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
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
                  className="text-xs font-bold text-[#d9480f] hover:underline whitespace-nowrap"
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
