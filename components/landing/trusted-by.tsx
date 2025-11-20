"use client"

import { trustedByLogos } from "@/data/home"

export function TrustedBy() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...trustedByLogos, ...trustedByLogos]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="w-full h-[2px] bg-navy mb-8 sm:mb-12 md:mb-16" />

        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-2 sm:mb-3 text-navy font-heading px-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-gray text-sm sm:text-base md:text-lg px-4">Delivering excellence for India's most respected brands</p>
        </div>

        {/* Infinite horizontal scroll banner */}
        <div className="relative w-full overflow-hidden py-4 sm:py-6 md:py-8">
          {/* Gradient overlays for fade effect - responsive widths */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling container with responsive gaps and sizes */}
          <div className="flex gap-8 sm:gap-12 md:gap-16 animate-scroll hover:pause-animation">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 group transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-full max-w-full w-auto h-auto object-contain filter transition-all duration-500 opacity-70 hover:opacity-100"
                  title={logo.name}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[2px] bg-navy mt-8 sm:mt-12 md:mt-16" />
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
