"use client"

import { trustedByLogos } from "@/data/home"
import { useEffect, useState } from "react"

export function TrustedBy() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const logosPerSlide = 8
  const totalSlides = Math.ceil(trustedByLogos.length / logosPerSlide)

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [totalSlides])

  const getCurrentLogos = () => {
    const start = currentSlide * logosPerSlide
    return trustedByLogos.slice(start, start + logosPerSlide)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="w-full h-[2px] bg-navy mb-16" />

        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 text-navy font-heading">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-gray text-lg">Delivering excellence for India's most respected brands</p>
        </div>

        <div className="relative overflow-hidden mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center transition-all duration-500 ease-in-out">
            {getCurrentLogos().map((logo, index) => (
              <div
                key={`${currentSlide}-${index}`}
                className="flex items-center justify-center w-full h-28 p-4 transition-all duration-300 hover:scale-110 animate-in fade-in slide-in-from-right-4"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={logo.image || "/placeholder.svg"}
                  alt={logo.name}
                  className="max-h-full max-w-full w-auto h-auto object-contain filter transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 mb-16">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide ? "w-12 bg-navy" : "w-8 bg-navy/30 hover:bg-navy/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="w-full h-[2px] bg-navy" />
      </div>
    </section>
  )
}
