import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTABanner() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-navy via-[#141E27] to-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center">
        <div className="w-12 sm:w-16 h-1 bg-cream mx-auto mb-6 sm:mb-8" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-cream mb-4 sm:mb-6 leading-tight font-heading px-4">
          Ready to Transform Your
          <br className="hidden sm:block" />
          <span className="sm:block"> </span>
          <span className="text-cream/80">Logistics Operations?</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-cream/70 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
          Join industry leaders who trust LogiGlobe for reliable, transparent, and technology-driven logistics
          solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-cream hover:bg-cream/90 text-navy font-semibold text-base px-10 rounded-sm"
          >
            <Link href="/#contact">
              Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
