import { Navbar } from "@/components/landing/navbar"
import { HeroBanner } from "@/components/partners/hero-banner"
import { IntroSection } from "@/components/partners/intro-section"
import { PartnerRegistrationForm } from "@/components/partners/partner-registration-form"
import { ReachingOutSection } from "@/components/partners/reaching-out-section"
import { FleetDetailForm } from "@/components/partners/fleet-detail-form"
import { PartnersFooter } from "@/components/partners/partners-footer"
import { FloatingSupport } from "@/components/partners/floating-support"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Partner With Us - Fleet Registration | Rolo Fleet",
  description: "Join India's most trusted logistics network. Register your fleet and partner with Rolo Fleet for steady business, transparent operations, and on-time payments.",
}

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <IntroSection />
      <PartnerRegistrationForm />
      <ReachingOutSection />
      <FleetDetailForm />
      <PartnersFooter />
      <FloatingSupport />
    </main>
  )
}
