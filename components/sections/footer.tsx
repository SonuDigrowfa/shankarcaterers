import { Phone, MapPin, Clock } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/business-data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-[#2b0f0e] to-[#1a0908] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-3 text-white">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-sm text-background/80 leading-relaxed">
              Authentic North Indian catering, live Delhi chaat counters, and traditional sweets in East Delhi with 30+ years of trusted service.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Catering Services</h4>
            <ul className="space-y-2.5 text-sm text-background/80">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Wedding Catering in East Delhi
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Live Delhi Chaat Counter
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Birthday &amp; Housewarming
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Corporate Event Catering
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Explore</h4>
            <ul className="space-y-2.5 text-sm text-background/80">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-accent transition-colors">
                  Signature Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-accent transition-colors">
                  Event Gallery
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-accent transition-colors">
                  Areas Served
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Book Catering
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info (NAP) */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex gap-2.5">
                <Phone size={16} className="flex-shrink-0 mt-0.5 text-accent" />
                <a href={BUSINESS_INFO.phoneHref} className="hover:text-accent transition-colors font-medium">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex gap-2.5">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-accent" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex gap-2.5">
                <Clock size={16} className="flex-shrink-0 mt-0.5 text-accent" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-background/70">
          <p>&copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p>Serving Karkardooma, Preet Vihar, Anand Vihar, Laxmi Nagar, Mayur Vihar &amp; East Delhi</p>
        </div>
      </div>
    </footer>
  )
}
