import { Navigation } from '@/components/navigation'
import { SeoJsonLd } from '@/components/seo-jsonld'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ServicesSection } from '@/components/sections/services'
import { MenuSection } from '@/components/sections/menu'
import { PricingSection } from '@/components/sections/pricing'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us'
import { GallerySection } from '@/components/sections/gallery'
import { LocalAreasSection } from '@/components/sections/local-areas'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { MobileActionBar } from '@/components/mobile-action-bar'

export default function Home() {
  return (
    <>
      <SeoJsonLd />
      <Navigation />
      <main className="w-full overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MenuSection />
        <PricingSection />
        <WhyChooseUsSection />
        <GallerySection />
        <LocalAreasSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  )
}
