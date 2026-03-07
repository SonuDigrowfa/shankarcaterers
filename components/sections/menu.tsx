const menuItems = [
  {
    name: 'Golgappa',
    emoji: '🥟',
    description: 'Crispy pani puri with spicy potato and chickpea filling'
  },
  {
    name: 'Papdi Chaat',
    emoji: '🥗',
    description: 'Crunchy papdis topped with potatoes, yogurt, and tamarind chutney'
  },
  {
    name: 'Aloo Tikki',
    emoji: '🥔',
    description: 'Golden fried potato patties with mint chutney'
  },
  {
    name: 'Dahi Bhalla',
    emoji: '🍲',
    description: 'Soft lentil dumplings in sweetened yogurt with spice'
  },
  {
    name: 'Chole Bhature',
    emoji: '🍽️',
    description: 'Fluffy bhature with spiced chickpea curry'
  },
  {
    name: 'Paneer Dishes',
    emoji: '🧀',
    description: 'Butter paneer, shahi paneer, and paneer makhani'
  },
  {
    name: 'Dal Makhani',
    emoji: '🍲',
    description: 'Creamy black lentils with butter and spices'
  },
  {
    name: 'Butter Naan',
    emoji: '🍞',
    description: 'Soft, fluffy naan brushed with fresh butter'
  },
  {
    name: 'North Indian Thali',
    emoji: '🥘',
    description: 'Complete meal with curry, dal, naan, and sides'
  }
]

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Special Menu</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Authentic North Indian dishes prepared with the finest ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-secondary/50 rounded-xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">Custom Menu Available</h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            We can customize our menu based on your preferences, dietary requirements, and event type. Contact us for personalized catering options.
          </p>
          <a
            href="tel:+919818079174"
            className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Discuss Your Menu
          </a>
        </div>
      </div>
    </section>
  )
}
