import { AdvantageSection } from "@/components/landing/advantage-section"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AdvantageSection />
      <Footer />
    </main>
  )
}
