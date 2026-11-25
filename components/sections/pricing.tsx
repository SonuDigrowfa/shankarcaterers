import { Check, Phone, Sparkles } from 'lucide-react'
import { BUSINESS_INFO, PRICING_PACKAGES } from '@/lib/business-data'

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Transparent Catering Packages
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
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
                className={`rounded-2xl p-7 sm:p-8 flex flex-col border transition-all duration-300 ${
                  isFeatured
                    ? 'bg-secondary/50 border-primary shadow-lg relative'
                    : 'bg-card border-border shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${
                      isFeatured
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-foreground'
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
                  <span className="text-2xl sm:text-3xl font-bold text-primary">
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
                      <Check size={17} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={BUSINESS_INFO.phoneHref}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm transition-all ${
                    isFeatured
                      ? 'bg-primary text-primary-foreground shadow-sm hover:shadow-md'
                      : 'bg-white border-2 border-primary/30 text-foreground hover:border-primary hover:text-primary'
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
