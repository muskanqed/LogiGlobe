import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/careers/hero-section"
import { CareersContentForm } from "@/components/careers/careers-content-form"
import { CareersFooter } from "@/components/careers/careers-footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers - Join Our Team | Rolo Fleet",
  description: "Build a future with us in logistics and innovation. Explore career opportunities at Rolo Fleet and join a team dedicated to excellence.",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CareersContentForm />
      <CareersFooter />
    </main>
  )
}
