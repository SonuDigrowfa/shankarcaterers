import { CheckCircle, Leaf, Shield, Users, Clock, Wallet } from 'lucide-react'

const reasons = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We source fresh, quality ingredients daily from trusted suppliers for authentic taste'
  },
  {
    icon: Shield,
    title: 'Hygienic Preparation',
    description: 'Strict food safety standards and hygienic preparation in our certified kitchen'
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Trained chefs and staff with 15+ years of professional catering experience'
  },
  {
    icon: Wallet,
    title: 'Affordable Packages',
    description: 'Flexible pricing options suitable for all budgets and event sizes'
  },
  {
    icon: Clock,
    title: 'On-Time Service',
    description: 'Reliable and punctual service with professional event management'
  },
  {
    icon: CheckCircle,
    title: 'Customer Satisfaction',
    description: '500+ satisfied customers with 5-star ratings and repeat bookings'
  }
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering the best catering experience for your events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4 inline-block p-3 bg-secondary rounded-lg">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-white rounded-xl p-12 border-2 border-primary">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Events Successfully Catered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5⭐</div>
              <p className="text-muted-foreground">Customer Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
