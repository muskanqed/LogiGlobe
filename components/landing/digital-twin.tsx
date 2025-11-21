"use client"

import { World } from "@/components/ui/globe"
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

export function DigitalTwinSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white">
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="max-w-xl space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                India's Only{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Digital-Twin–Enabled
                </span>{" "}
                Logistics Network
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Experience unprecedented visibility and control with our digital twin technology—a virtual replica of your entire supply chain that delivers real-time insights, predictive analytics, and proactive decision-making.
              </p>
            </div>
          </div>

          {/* Right Side - Globe */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Subtle glow behind globe */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-blue-500/5 blur-3xl rounded-full"></div>
                <World data={globeData} globeConfig={globeConfig} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
