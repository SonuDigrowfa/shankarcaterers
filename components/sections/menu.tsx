import Image from 'next/image'
import { Phone } from 'lucide-react'
import { BUSINESS_INFO, MENU_ITEMS } from '@/lib/business-data'

const categoryColors: Record<string, string> = {
  'Live Chaat': 'bg-gradient-to-r from-orange-500 to-amber-500 text-white',
  'Main Course': 'bg-gradient-to-r from-rose-600 to-red-600 text-white',
  Breads: 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white',
  'Complete Meal': 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white',
}

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full">
            100% Pure Veg &bull; Authentic Flavors
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
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
              className="bg-gradient-to-b from-white to-[#fffaf2] rounded-2xl overflow-hidden border border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-65" />
                <span
                  className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full shadow-md ${
                    categoryColors[item.category] || 'bg-primary text-white'
                  }`}
                >
                  {item.category}
                </span>
                {'badge' in item && item.badge && (
                  <span className="absolute top-3 right-3 bg-white/95 text-[#9a3412] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    ★ {item.badge}
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  {/* Pure Veg Symbol */}
                  <span
                    title="Pure Vegetarian"
                    className="w-4 h-4 rounded-xs border-2 border-emerald-600 flex items-center justify-center flex-shrink-0"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  </span>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-[#d9480f] transition-colors">
                    {item.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 bg-gradient-to-r from-[#9e2a2b] via-[#c94a18] to-[#e07a16] rounded-3xl p-8 sm:p-10 text-center text-white shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            100% Customizable Event Menus
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Need Jain / no-onion-garlic food, live jalebi &amp; rabri, or a custom multi-course wedding menu? Call us to build your personalized catering menu.
          </p>
          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex items-center gap-2 bg-white text-[#9a3412] px-8 py-3.5 rounded-full font-bold shadow-md hover:bg-amber-50 hover:scale-105 transition-all"
          >
            <Phone size={18} />
            Discuss Your Menu ({BUSINESS_INFO.phone})
          </a>
        </div>
      </div>
    </section>
  )
}
