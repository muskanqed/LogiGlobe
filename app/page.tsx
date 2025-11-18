import { BenefitsSection } from "@/components/landing/benefits-section"
import { ContactSection } from "@/components/landing/contact-section"
import { CTABanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"
import { Hero } from "@/components/landing/hero"
import { LogisticsVideoSection } from "@/components/landing/logistics-video-section"
import { Navbar } from "@/components/landing/navbar"
import { StatsSection } from "@/components/landing/stats-section"
import { TrustedBy } from "@/components/landing/trusted-by"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />
      <BenefitsSection />
      <LogisticsVideoSection />
      {/* <Leader/shipSection /> */}
      <TrustedBy />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  )
}
