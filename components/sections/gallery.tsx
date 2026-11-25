import Image from 'next/image'
import { GALLERY_ITEMS } from '@/lib/business-data'

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Visual Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Our Catering &amp; Event Gallery
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our wedding buffets, live Delhi chaat counters, pure-ghee mithai, and hygienic kitchen
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <figure
              key={index}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-sm border border-border bg-secondary"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {item.category}
              </span>

              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-white/85 text-xs sm:text-sm leading-snug">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 bg-secondary/50 rounded-2xl p-8 text-center border border-border">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
            Want to See Sample Menus &amp; Event Packages?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm sm:text-base">
            Get in touch with us for customized wedding, birthday, or corporate catering menus tailored to your venue in East Delhi.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold shadow-sm hover:shadow-md transition-all"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  )
}
