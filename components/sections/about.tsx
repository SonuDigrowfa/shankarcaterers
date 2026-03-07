export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-white rounded-2xl border border-border"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-4">👨‍🍳</div>
                <p className="text-lg font-semibold text-foreground">Expert Chefs Team</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">About Shankar Caterers & Sweets</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 15 years of experience in authentic North Indian catering, Shankar Caterers & Sweets has been serving families, businesses, and event organizers across East Delhi with premium quality food and exceptional service.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why We're Different</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-foreground">Authentic recipes passed down through generations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-foreground">Fresh ingredients sourced daily from trusted suppliers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-foreground">Hygienic preparation and food safety standards</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="text-foreground">Experienced team with attention to detail</span>
                </li>
              </ul>
            </div>

            <a
              href="tel:+919818079174"
              className="inline-block mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get in Touch Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
