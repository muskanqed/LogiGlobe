import { AdvantageSection } from "@/components/landing/advantage-section"
import { LeadershipSection } from "@/components/landing/leadership-section"
import { VisionSection } from "@/components/landing/vision-section"
import { MissionSection } from "@/components/landing/mission-section"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AdvantageSection />
      <div id="leaders">
        <LeadershipSection />
      </div>
      <VisionSection />
      <MissionSection />
      <Footer />
    </main>
  )
}
