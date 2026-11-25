import Image from 'next/image'
import { Phone } from 'lucide-react'
import { BUSINESS_INFO, MENU_ITEMS } from '@/lib/business-data'

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Authentic Flavors
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Our Signature Catering Menu
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafted fresh for every event—featuring Delhi&apos;s favorite live chaat, rich North Indian curries, and tandoori breads
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {MENU_ITEMS.map((item, index) => (
            <article
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {item.category}
                </span>
                {'badge' in item && item.badge && (
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 bg-gradient-to-r from-primary to-primary/85 rounded-2xl p-8 sm:p-10 text-center text-primary-foreground shadow-lg">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            100% Customizable Event Menus
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Need Jain / no-onion-garlic food, live jalebi &amp; rabri, or a custom multi-course wedding menu? Call us to build your personalized catering menu.
          </p>
          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-full font-semibold shadow-sm hover:shadow-md hover:scale-105 transition-all"
          >
            <Phone size={18} />
            Discuss Your Menu ({BUSINESS_INFO.phone})
          </a>
        </div>
      </div>
    </section>
  )
}
