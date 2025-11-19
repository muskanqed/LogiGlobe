"use client"

import { trustedByLogos } from "@/data/home"

export function TrustedBy() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...trustedByLogos, ...trustedByLogos]

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

        <div className="relative overflow-hidden mb-16">
          {/* Autoscroll Banner */}
          <div className="flex gap-12 lg:gap-16 animate-scroll hover:pause-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] sm:min-w-[180px] lg:min-w-[200px] h-24 px-4 transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-full max-w-full w-auto h-auto object-contain filter transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[2px] bg-navy" />
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

        .pause-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
