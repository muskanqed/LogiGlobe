"use client"

import { CircularOrbit } from "@/components/ui/circular-orbit"
import { World } from "@/components/ui/globe"
import { globeData } from "@/data/globe-data"
import { FeatureCard } from "@/types/feature-card"
import { motion } from "framer-motion"

const globeConfig = {
  pointSize: 4,
  globeColor: "#1B2735", // Navy
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#1B2735", // Navy
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
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
}
const features: FeatureCard[] = [
  {
    id: "1",
    title: "Real-Time Logistics Twin",
    description: "Live view of every shipment, route & hub",
    icon: "👁️",
    gradient: { from: "blue-100", to: "blue-200" }
  },
  {
    id: "2",
    title: "Scenario Simulation",
    subtitle: "(\"What-If\")",
    description: "Test disruptions before they happen",
    icon: "💡",
    gradient: { from: "purple-100", to: "purple-200" }
  },
  {
    id: "3",
    title: "Route & Network Optimization",
    description: "Plan by cost, SLA, constraints",
    icon: "🔗",
    gradient: { from: "green-100", to: "green-200" }
  },
  {
    id: "4",
    title: "Seamless Integrations",
    description: "ERP, TMS, GPS, telematics, IoT",
    icon: "🔌",
    gradient: { from: "green-100", to: "green-200" }
  },
  {
    id: "5",
    title: "Risk & Delay Monitoring",
    description: "Alerts before failures occur",
    icon: "⚠️",
    gradient: { from: "orange-100", to: "orange-200" }
  },
  {
    id: "6",
    title: "Control Tower Dashboard",
    description: "Unified visibility & KPIs",
    icon: "📊",
    gradient: { from: "cyan-100", to: "cyan-200" }
  },
  {
    id: "7",
    title: "Unified Visibility",
    description: "Real-time tracking & analytics",
    icon: "🎯",
    gradient: { from: "blue-100", to: "blue-200" }
  }
]

export function DigitalTwinSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            The Digital Twin Advantage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Experience the power of a fully connected logistics network.
            Visualize, analyze, and optimize your supply chain in real-time.
          </motion.p>
        </div>

        {/* Desktop View - Circular Orbit */}
        <div className="hidden md:flex relative h-[600px] w-full items-center justify-center">
          <CircularOrbit
            cards={features}
            globeSize={530}
            radius={280}
            cardClassName="bg-white/10 border-white/20 text-white backdrop-blur-md"
          >
            <World globeConfig={globeConfig} data={globeData} />
          </CircularOrbit>
        </div>

        {/* Mobile View - Grid Layout */}
        <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
          {features.map((card) => (
            <div
              key={card.id}
              className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-4 flex items-start gap-3"
            >
              {/* <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-${card.gradient.from} to-${card.gradient.to} flex items-center justify-center shrink-0`}> */}
              <span className="text-lg">{card.icon}</span>
              {/* </div> */}
              <div>
                <h3 className="font-bold text-white text-sm">{card.title}</h3>
                <p className="text-white/60 text-xs mt-1">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
