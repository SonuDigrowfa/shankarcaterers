import { Heart, Users, Briefcase, Sparkles, Gift } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Wedding Catering',
    description: 'Make your special day memorable with our authentic North Indian cuisine and premium service'
  },
  {
    icon: Gift,
    title: 'Birthday Catering',
    description: 'Celebrate with delicious food and perfect presentation for your birthday party'
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Professional catering solutions for corporate meetings, seminars, and team events'
  },
  {
    icon: Sparkles,
    title: 'Chaat Counter',
    description: 'Live chaat counter service with fresh golgappa, papdi chaat, and more'
  },
  {
    icon: Users,
    title: 'Kitty Party',
    description: 'Fun and delicious catering for kitty parties with varied menu options'
  },
  {
    icon: Heart,
    title: 'Party Catering',
    description: 'Full catering services for any type of celebration or gathering'
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Catering Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive catering solutions for all types of celebrations and events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary transition-all duration-300 group"
              >
                <div className="mb-4 inline-block p-3 bg-secondary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon size={24} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 border-2 border-primary">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to book your event?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your catering needs. Our team will help you plan the perfect menu for your celebration.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Book Your Catering
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
