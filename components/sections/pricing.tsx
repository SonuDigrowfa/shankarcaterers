import { Check, Phone, Sparkles } from 'lucide-react'
import { BUSINESS_INFO, PRICING_PACKAGES } from '@/lib/business-data'

const cardAccents = [
  'border-t-4 border-t-emerald-500',
  'border-t-4 border-t-orange-500 ring-2 ring-orange-400/30',
  'border-t-4 border-t-rose-600',
]

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-[#fffaf2] to-[#fff3e0]/60 border-t border-orange-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9a3412] bg-amber-100 px-3.5 py-1 rounded-full">
            Transparent Catering Packages
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Catering Packages &amp; Per-Plate Cost in East Delhi
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you are hosting a small 20-guest home party or a 500-guest wedding, our per-plate packages are flexible and 100% customizable
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-7">
          {PRICING_PACKAGES.map((pkg, idx) => {
            const isFeatured = idx === 1
            return (
              <div
                key={pkg.title}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col border bg-white transition-all duration-300 ${
                  cardAccents[idx] || ''
                } ${isFeatured ? 'shadow-xl scale-[1.01]' : 'border-orange-100 shadow-sm hover:shadow-lg'}`}
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${
                      isFeatured
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xs'
                        : idx === 0
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {isFeatured && <Sparkles size={12} />}
                    {pkg.badge}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {pkg.guests}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {pkg.title}
                </h3>
                <div className="mb-1">
                  <span className="text-2xl sm:text-3xl font-bold text-[#d9480f]">
                    {pkg.priceRange}
                  </span>
                </div>
                <p className="text-xs font-medium text-muted-foreground mb-4">
                  {pkg.totalEstimate} (Customizable per menu)
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check size={17} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={BUSINESS_INFO.phoneHref}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm transition-all ${
                    isFeatured
                      ? 'bg-gradient-to-r from-[#d9480f] to-[#d97706] text-white shadow-md hover:shadow-lg'
                      : 'bg-orange-50 border border-orange-200 text-[#9a3412] hover:bg-orange-100'
                  }`}
                >
                  <Phone size={16} />
                  Get Exact Quote
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
