'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-primary">
              Shankar Caterers
            </a>
            <p className="text-xs text-muted-foreground">& Sweets</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition">Home</a>
            <a href="#services" className="text-foreground hover:text-primary transition">Services</a>
            <a href="#menu" className="text-foreground hover:text-primary transition">Menu</a>
            <a href="#contact" className="text-foreground hover:text-primary transition">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+919818079174"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full hover:shadow-lg transition"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block py-2 text-foreground hover:text-primary">Home</a>
            <a href="#services" className="block py-2 text-foreground hover:text-primary">Services</a>
            <a href="#menu" className="block py-2 text-foreground hover:text-primary">Menu</a>
            <a href="#contact" className="block py-2 text-foreground hover:text-primary">Contact</a>
            <a 
              href="tel:+919818079174"
              className="block mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-center hover:shadow-lg transition"
            >
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
