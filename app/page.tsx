import { Hero } from "@/components/landing/hero"
import { Navbar } from "@/components/landing/navbar"
// import { StatsSection } from "@/components/landing/stats-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { CTABanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"
import { LeadershipSection } from "@/components/landing/leadership-section"
import { LogisticsVideoSection } from "@/components/landing/logistics-video-section"
import { TrustedBy } from "@/components/landing/trusted-by"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <StatsSection /> */}
      <LogisticsVideoSection />
      <BenefitsSection />
      <LeadershipSection />
      <TrustedBy />
      <CTABanner />
      <Footer />
    </main>
  )
}
