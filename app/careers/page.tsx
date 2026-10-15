import { HeroSection } from "@/components/careers/hero-section"
import { CareersContentForm } from "@/components/careers/careers-content-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers - Join Our Team | XYZ Logistics",
  description: "Build a future with us in logistics and innovation. Explore career opportunities at XYZ Logistics and join a team dedicated to excellence.",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CareersContentForm />
    </main>
  )
}
