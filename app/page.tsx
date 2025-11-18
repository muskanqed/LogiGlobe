import { ContactSection } from "@/components/landing/contact-section"
import { CTABanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"
import { Hero } from "@/components/landing/hero"
import { LogisticsVideoSection } from "@/components/landing/logistics-video-section"
import { Navbar } from "@/components/landing/navbar"
import { StatsSection } from "@/components/landing/stats-section"
import { TrustedBy } from "@/components/landing/trusted-by"
import { WhyChooseUs } from "@/components/landing/why-choose-us"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />
      <WhyChooseUs ctaHref="#contact" />
      <LogisticsVideoSection />
      {/* <Leader/shipSection /> */}
      <TrustedBy />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  )
}
