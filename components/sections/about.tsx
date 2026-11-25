import Image from 'next/image'
import { CheckCircle2, Phone } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/business-data'

const highlights = [
  'Authentic family recipes perfected over 30+ years in East Delhi',
  'Fresh vegetables, pure desi ghee, and daily-sourced dairy & spices',
  'Spotless, hygienic kitchen with uniformed, courteous serving staff',
  'Flexible per-plate packages for 30 to 1,500+ guests',
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Real Chef Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border">
              <Image
                src="/images/about-chefs.jpg"
                alt="Experienced North Indian catering chefs at Shankar Caterers & Sweets preparing fresh food"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Experience Callout Card */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:right-6 bg-foreground text-background rounded-2xl px-6 py-4 shadow-xl">
              <p className="font-serif text-3xl font-bold text-accent">30+ Years</p>
              <p className="text-xs text-background/80">
                Serving Karkardooma &amp; East Delhi
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Our Heritage &amp; Kitchen
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
                About Shankar Caterers &amp; Sweets
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Located in the heart of <strong className="text-foreground font-medium">Karkardooma, East Delhi</strong>, Shankar Caterers &amp; Sweets has been the trusted culinary partner for weddings, family pujas, and corporate gatherings for over three decades.
              </p>
            </div>

            <ul className="space-y-3.5">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold shadow-sm hover:shadow-md transition-all"
              >
                <Phone size={18} />
                Speak with Our Team
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border bg-secondary/50 text-foreground px-7 py-3.5 rounded-full font-semibold hover:border-primary hover:text-primary transition-all"
              >
                Request Tasting / Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
