"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-cream">
      {/* Background Image with Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-navy-blue-logistics-truck-on-highway--minim.jpg"
          alt="Rolo Fleet Logistics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-3xl">
          <div className="w-24 h-[3px] bg-cream mb-8" />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-cream mb-6 leading-tight tracking-tight font-heading">
            40 YEARS OF LEGACY.
            <br />
            <span className="text-cream/80">ONE VISION FOR THE FUTURE.</span>
          </h1>

          <p className="text-lg sm:text-xl text-cream/70 mb-10 max-w-2xl leading-relaxed">
            From a family-run transport business to a technology-driven logistics organization, ROLO Fleets blends
            tradition, innovation, and transparency to redefine how goods move across India and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-cream hover:bg-cream/90 text-navy font-semibold text-base px-10 rounded-sm"
            >
              <Link href="/#services">Explore Our Services</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-cream text-cream hover:bg-cream hover:text-navy font-semibold text-base px-10 bg-transparent rounded-sm transition-all"
            >
              <Link href="/track">Track Shipment</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
