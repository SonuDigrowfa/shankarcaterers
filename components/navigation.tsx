'use client'

import { useState } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/business-data'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#menu', label: 'Menu' },
  { href: '#pricing', label: 'Packages' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#areas', label: 'Areas' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top local info bar for trust & local SEO */}
      <div className="bg-gradient-to-r from-[#7c1d18] via-[#b83b14] to-[#d97706] text-white text-xs py-2 px-4 hidden sm:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-amber-300" />
            <span>Karkardooma, East Delhi (110092) &bull; Serving Preet Vihar, Anand Vihar, Laxmi Nagar &amp; Delhi NCR</span>
          </div>
          <a
            href={BUSINESS_INFO.phoneHref}
            className="font-semibold text-amber-200 hover:text-white transition-colors"
          >
            {BUSINESS_INFO.phone} &bull; Open 7 Days
          </a>
        </div>
      </div>

      <nav
        aria-label="Primary Navigation"
        className="bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
                S
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold text-foreground leading-none">
                  Shankar Caterers
                </span>
                <span className="block text-[11px] font-medium tracking-wide uppercase text-primary mt-0.5">
                  &amp; Sweets &bull; Est. East Delhi
                </span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="text-sm font-semibold text-primary hover:text-primary/80 px-3 py-2 transition-colors"
              >
                Get Quote
              </a>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:shadow-md hover:bg-primary/95 transition-all"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-5 pt-2 border-t border-border space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex gap-3">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-full text-sm font-semibold"
                >
                  <Phone size={16} />
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
