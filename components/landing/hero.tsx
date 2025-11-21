"use client"

import { Button } from "@/components/ui/button"
import { CircularOrbit } from "@/components/ui/circular-orbit"
import { World } from "@/components/ui/globe"
import { featureCards } from "@/data/feature-cards"
import { globeData } from "@/data/globe-data"

const globeConfig = {
  pointSize: 4,
  globeColor: "#0a1f3d",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.5937, lng: 78.9629 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
}

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="max-w-xl lg:max-w-2xl space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-gray-900 leading-[1.15] tracking-tight">
                <span className="inline-block">40 Years of Legacy.</span>{" "}
                <span className="inline-block">Now India's Only</span>{" "}
                <span className="inline-block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Digital-Twin–Enabled
                </span>{" "}
                <span className="inline-block">Logistics Supply Chain Network.</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-light max-w-lg">
                From a family-run transport business to a technology-driven logistics organization, ROLO Fleets blends tradition, innovation, and transparency to redefine how goods move across India and beyond.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Button
                variant="default"
                size="lg"
              >
                Get Instant Quote
              </Button>
            </div>
          </div>

          {/* Right Side - Globe with floating cards */}
          <div className="hidden lg:block relative w-full h-[650px] animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            <CircularOrbit cards={featureCards} radius={280} globeSize={650}>
              {/* Globe with glow effect */}
              <div className="relative w-full h-full">
                {/* Subtle glow behind globe */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 blur-3xl rounded-full -z-10"></div>
                <World data={globeData} globeConfig={globeConfig} />
              </div>
            </CircularOrbit>
          </div>

          {/* Mobile/Tablet - Just Globe without cards */}
          <div className="lg:hidden relative w-full h-[400px] sm:h-[500px] animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-[450px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 blur-3xl rounded-full"></div>
                <World data={globeData} globeConfig={globeConfig} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
