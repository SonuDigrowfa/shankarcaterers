import { Heart, Users, Briefcase, Sparkles, Gift, UtensilsCrossed } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Wedding & Reception Catering',
    description:
      'Grand North Indian wedding banquets with live tandoor, royal paneer & dal spreads, mithai counters, and full hospitality.',
    iconBg: 'from-rose-500 to-pink-600',
    borderHover: 'hover:border-rose-300',
  },
  {
    icon: Sparkles,
    title: 'Live Delhi Chaat Counter',
    description:
      'Hygienic live stalls for crispy golgappa, desi-ghee aloo tikki, papdi chaat, and dahi bhalla that steal every celebration.',
    iconBg: 'from-orange-500 to-amber-500',
    borderHover: 'hover:border-orange-300',
  },
  {
    icon: Gift,
    title: 'Birthday & Anniversary Parties',
    description:
      'Kid-friendly snacks, chaat platters, and wholesome North Indian dinners tailored for home or banquet birthday parties.',
    iconBg: 'from-purple-500 to-fuchsia-600',
    borderHover: 'hover:border-purple-300',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events & Lunches',
    description:
      'Punctual, neatly packed or buffet-style catering for East Delhi offices, seminars, conferences, and festive team lunches.',
    iconBg: 'from-sky-500 to-indigo-600',
    borderHover: 'hover:border-sky-300',
  },
  {
    icon: Users,
    title: 'Kitty Party & Housewarming',
    description:
      'Curated small-gathering menus for griha pravesh, mata ki chowki, and kitty parties with hassle-free setup and cleanup.',
    iconBg: 'from-emerald-500 to-teal-600',
    borderHover: 'hover:border-emerald-300',
  },
  {
    icon: UtensilsCrossed,
    title: 'Halwai & Pure-Ghee Sweets',
    description:
      'Traditional mithai boxes, festive bhaji, and fresh-made gulab jamun, jalebi, and kaju katli prepared in pure desi ghee.',
    iconBg: 'from-amber-500 to-yellow-600',
    borderHover: 'hover:border-amber-300',
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-[#fff7ed] via-[#fffbf5] to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#d9480f] bg-orange-100 px-3.5 py-1 rounded-full">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Catering Services in East Delhi
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete end-to-end catering solutions—from intimate home pujas to 1,500-guest wedding receptions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-7 shadow-sm border border-orange-100 ${service.borderHover} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div
                  className={`mb-5 inline-flex p-3.5 rounded-2xl bg-gradient-to-br ${service.iconBg} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2.5">{service.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-14 bg-gradient-to-r from-[#7c1d18] via-[#c2410c] to-[#d97706] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
              Planning an upcoming event in East Delhi?
            </h3>
            <p className="text-white/90 text-sm sm:text-base max-w-xl">
              Share your event date and guest count—our team will suggest the ideal menu and per-plate quote within minutes.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white text-[#9a3412] px-8 py-3.5 rounded-full font-bold shadow-md hover:bg-amber-50 hover:scale-105 transition-all"
          >
            Book Your Catering
          </a>
        </div>
      </div>
    </section>
  )
}
