import { ArrowRight, Phone } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary via-white to-white pt-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-balance text-foreground leading-tight">
                Delicious North Indian Catering for Every <span className="text-primary">Celebration</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Professional catering services in East Delhi with authentic taste and premium quality. From weddings to corporate events, we bring authentic North Indian flavors to your celebrations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+919818079174"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Book Catering
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Events Catered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">30+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5⭐</div>
                <div className="text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-10"></div>
            <div className="relative h-full flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-8xl mb-4">🍛</div>
                <p className="text-2xl font-bold text-primary mb-2">Premium North Indian Catering</p>
                <p className="text-muted-foreground">Authentic recipes, modern presentation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
