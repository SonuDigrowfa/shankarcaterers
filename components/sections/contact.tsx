'use client'

import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { BUSINESS_INFO } from '@/lib/business-data'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          guestCount: '',
          message: '',
        })
        setTimeout(() => setSubmitStatus('idle'), 4000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 4000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 4000)
    } finally {
      setIsLoading(false)
    }
  }

  const buildWhatsAppBookingUrl = () => {
    const lines = [
      'Hello Shankar Caterers & Sweets, I want to book catering:',
      formData.name ? `Name: ${formData.name}` : '',
      formData.phone ? `Phone: ${formData.phone}` : '',
      formData.eventType ? `Event: ${formData.eventType}` : '',
      formData.eventDate ? `Date: ${formData.eventDate}` : '',
      formData.guestCount ? `Guests: ${formData.guestCount}` : '',
      formData.message ? `Details: ${formData.message}` : '',
    ].filter(Boolean)
    return `https://wa.me/919818079174?text=${encodeURIComponent(lines.join('\n'))}`
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Book Your Date
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Contact Shankar Caterers &amp; Sweets
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our Karkardooma shop, call us directly, or send your event details for a customized catering quote
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-secondary/40 rounded-2xl p-7 sm:p-8 border border-border">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Visit or Call Us
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-border flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Shop Address</h4>
                    <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                      Shop No 115, Street No 13
                      <br />
                      Near Shiv Mandir, Karkardooma
                      <br />
                      East Delhi, Delhi 110092
                    </address>
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline mt-1.5"
                    >
                      Get Directions on Google Maps <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-border flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone &amp; Bookings</h4>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="text-primary hover:underline font-bold text-lg"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Direct call for instant menu &amp; pricing inquiry
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-border flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                    <p className="text-sm text-muted-foreground">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Call & WhatsApp Buttons */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 px-6 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all"
              >
                <Phone size={18} />
                Call {BUSINESS_INFO.phone}
              </a>
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1a8f48] text-white py-3.5 px-6 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Custom Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-border p-7 sm:p-8">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              Book Your Event
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Fill out your event details and we will get back to you promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground text-sm"
                    placeholder="+91 98180 79174"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-1.5">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground text-sm"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding / Reception</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="chaat-counter">Live Chaat Counter</option>
                    <option value="puja-kitty">Puja / Housewarming / Kitty Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-1.5">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="guestCount" className="block text-sm font-medium text-foreground mb-1.5">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground text-sm"
                    placeholder="e.g. 150"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Location &amp; Menu Preferences
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground text-sm resize-none"
                  placeholder="Share your venue area (e.g. Preet Vihar, Karkardooma) and preferred dishes..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-3.5 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm font-medium">
                  Thank you! Your booking request has been sent. We will call you shortly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-900 text-sm space-y-2.5">
                  <p className="font-medium">
                    Email server is temporarily unavailable. Send your details directly on WhatsApp or call {BUSINESS_INFO.phone}:
                  </p>
                  <a
                    href={buildWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1a8f48] text-white px-4 py-2 rounded-lg font-semibold text-xs hover:bg-[#157a3d] transition-colors"
                  >
                    <MessageCircle size={15} />
                    Send This Inquiry on WhatsApp
                  </a>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending Request...' : 'Send Booking Request'}
                </button>
                <a
                  href={buildWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#1a8f48] text-white py-3.5 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all"
                >
                  <MessageCircle size={18} />
                  Book via WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mt-14 bg-white rounded-2xl overflow-hidden shadow-sm border border-border h-96">
          <iframe
            title="Shankar Caterers & Sweets Location in Karkardooma, East Delhi"
            src={BUSINESS_INFO.googleMapsEmbedUrl}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
