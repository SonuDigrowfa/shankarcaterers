import Link from 'next/link'
import { MapPin, HelpCircle, ArrowRight } from 'lucide-react'
import { AREA_GROUPS, FAQ_ITEMS } from '@/lib/business-data'
import { LANDING_PAGES } from '@/lib/landing-pages'

export function LocalAreasSection() {
  return (
    <section id="areas" className="py-20 bg-secondary/30 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Local Areas Served */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Hyper-Local Service Coverage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              Caterers Near You Across East Delhi, Shahdara &amp; Vaishali
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              From our Karkardooma kitchen (110092), we deliver hot North Indian catering, live chaat counters, and party packages across all nearby colonies, enclaves, and Ghaziabad border areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {AREA_GROUPS.map((group) => (
              <div
                key={group.zone}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-border shadow-xs"
              >
                <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-primary flex-shrink-0" />
                  <span>{group.zone}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.areas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center bg-secondary/60 border border-border/80 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium text-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Dedicated Local & Event SEO Pages */}
          <div className="mt-10 bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-xs">
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">
              Explore Dedicated Local &amp; Event Catering Pages
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {LANDING_PAGES.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="flex items-center justify-between gap-2 rounded-xl border border-border/80 bg-secondary/30 px-4 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <span>{page.title}</span>
                  <ArrowRight size={15} className="flex-shrink-0 text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Local FAQs for Users & Search Rich Snippets */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Catering Cost &amp; Booking FAQs
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Common questions about per-plate prices, small parties, wedding catering, and East Delhi delivery
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-border shadow-xs"
              >
                <h4 className="flex items-start gap-2.5 text-base sm:text-lg font-bold text-foreground mb-2">
                  <HelpCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
