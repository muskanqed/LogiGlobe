"use client"

import { trustedByLogos } from "@/data/home"

export function TrustedBy() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...trustedByLogos, ...trustedByLogos]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="w-full h-[2px] bg-navy mb-16" />

        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 text-navy font-heading">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-gray text-lg">Delivering excellence for India's most respected brands</p>
        </div>

        {/* Infinite horizontal scroll banner */}
        <div className="relative w-full overflow-hidden py-8">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex gap-16 animate-scroll hover:pause-animation">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-48 h-24 group transition-transform duration-300 hover:scale-110"
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

        <div className="w-full h-[2px] bg-navy mt-16" />
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
