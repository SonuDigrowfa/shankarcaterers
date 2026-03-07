import { Phone, MapPin, Clock } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shankar Caterers</h3>
            <p className="text-sm opacity-90">
              Premium North Indian catering services in East Delhi with 30+ years of experience.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#services" className="hover:opacity-100 transition">Wedding Catering</a></li>
              <li><a href="#services" className="hover:opacity-100 transition">Birthday Catering</a></li>
              <li><a href="#services" className="hover:opacity-100 transition">Corporate Events</a></li>
              <li><a href="#services" className="hover:opacity-100 transition">Chaat Counter</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#home" className="hover:opacity-100 transition">Home</a></li>
              <li><a href="#menu" className="hover:opacity-100 transition">Menu</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition">Contact</a></li>
              <li><a href="tel:+919818079174" className="hover:opacity-100 transition">Call Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+919818079174" className="hover:opacity-100 transition">+91 98180 79174</a>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Karkardooma, East Delhi</span>
              </div>
              <div className="flex gap-2">
                <Clock size={16} className="flex-shrink-0 mt-0.5" />
                <span>Open 7 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; {currentYear} Shankar Caterers & Sweets. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-100 transition">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
