'use client'

import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ServicesSection } from '@/components/sections/services'
import { MenuSection } from '@/components/sections/menu'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us'
import { GallerySection } from '@/components/sections/gallery'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { Navigation } from '@/components/navigation'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MenuSection />
      <WhyChooseUsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
