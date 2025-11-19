import { ContactSection } from "@/components/landing/contact-section"
import { CTABanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"
import { Hero } from "@/components/landing/hero"
import { LeadershipSection } from "@/components/landing/leadership-section"
import { LogisticsVideoSection } from "@/components/landing/logistics-video-section"
import { Navbar } from "@/components/landing/navbar"
import { StatsSection } from "@/components/landing/stats-section"
import { TrustedBy } from "@/components/landing/trusted-by"
import { WhyChooseUs } from "@/components/landing/why-choose-us"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* 1. Hero - Strong first impression with clear value proposition */}
      <Hero />

      {/* 2. Trusted By - Immediate social proof builds credibility */}
      <TrustedBy />

      {/* 3. Stats - Quantifiable credibility reinforces trust */}
      <StatsSection />

      {/* 6. Video - Deeper engagement for interested users */}
      <LogisticsVideoSection />

      {/* 5. Why Choose Us - Differentiation and unique value */}
      <WhyChooseUs ctaHref="#contact" />


      {/* 7. Leadership - Authority and expertise validation */}
      <LeadershipSection />

      {/* 8. CTA Banner - Mid-funnel conversion opportunity */}
      <CTABanner />

      {/* 9. Contact - Final conversion point */}
      <ContactSection />

      {/* 10. Footer - Additional information and links */}
      <Footer />
    </main>
  )
}
