export function GallerySection() {
  const galleryItems = [
    { emoji: '🍛', title: 'Delicious Curries', description: 'Authentic North Indian curries' },
    { emoji: '👨‍🍳', title: 'Expert Chefs', description: 'Professional preparation' },
    { emoji: '🥘', title: 'Fresh Preparation', description: 'Quality ingredients daily' },
    { emoji: '🎉', title: 'Event Setup', description: 'Professional service' },
    { emoji: '🥗', title: 'Variety Menu', description: 'Multiple dishes' },
    { emoji: '⭐', title: 'Premium Quality', description: 'Highest standards' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See our catering setups, food preparations, and happy customer events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="text-6xl mb-3">{item.emoji}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-secondary to-white rounded-xl p-8 text-center border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">See More of Our Work</h3>
          <p className="text-muted-foreground mb-6">
            Check out our portfolio and past events. We pride ourselves on delivering exceptional catering experiences.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            View More or Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
