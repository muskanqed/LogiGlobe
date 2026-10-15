import { HeroBanner } from "@/components/partners/hero-banner"
import { PartnerRegistrationForm } from "@/components/partners/partner-registration-form"
import { FleetDetailForm } from "@/components/partners/fleet-detail-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Partner With Us - Fleet Registration | XYZ Logistics",
  description: "Join our trusted logistics network. Register your fleet and partner with XYZ Logistics for steady business, transparent operations, and on-time payments.",
}

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <PartnerRegistrationForm />
      <FleetDetailForm />
    </main>
  )
}
