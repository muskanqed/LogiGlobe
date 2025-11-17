import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { StatsSection } from "@/components/landing/stats-section"
import { AdvantageSection } from "@/components/landing/advantage-section"
import { LogisticsVideoSection } from "@/components/landing/logistics-video-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { LeadershipSection } from "@/components/landing/leadership-section"
import { TrustedBy } from "@/components/landing/trusted-by"
import { CTABanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />
      <AdvantageSection />
      <LogisticsVideoSection />
      <BenefitsSection />
      <LeadershipSection />
      <TrustedBy />
      <CTABanner />
      <Footer />
    </main>
  )
}
