"use client"

import { CircularOrbit } from "@/components/ui/circular-orbit"
import { type FeatureCard } from "@/types/feature-card"

/**
 * Standalone demo of CircularOrbit component
 * Shows how to use it independently with custom data
 */
export function CircularOrbitDemo() {
  const demoCards: FeatureCard[] = [
    {
      id: "1",
      title: "Fast",
      icon: "⚡",
      description: "Lightning speed",
      gradient: { from: "yellow-100", to: "yellow-200" },
    },
    {
      id: "2",
      title: "Secure",
      icon: "🔒",
      description: "End-to-end encryption",
      gradient: { from: "blue-100", to: "blue-200" },
    },
    {
      id: "3",
      title: "Scalable",
      icon: "📈",
      description: "Grows with you",
      gradient: { from: "green-100", to: "green-200" },
    },
    {
      id: "4",
      title: "Reliable",
      icon: "✅",
      description: "99.9% uptime",
      gradient: { from: "purple-100", to: "purple-200" },
    },
  ]

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-4">CircularOrbit Component</h1>
        <p className="text-center text-gray-600 mb-12">
          Feature cards positioned in a perfect circle using trigonometry
        </p>

        <div className="relative w-full h-[650px]">
          <CircularOrbit cards={demoCards} radius={250} globeSize={400}>
            {/* Replace with any central element - Globe is always visible! */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">🌍</div>
                  <div className="text-xl font-bold">Your Content</div>
                  <div className="text-sm opacity-90">Always Visible!</div>
                </div>
              </div>
            </div>
          </CircularOrbit>
        </div>

        <div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">1.</span>
              <span>
                <strong>Trigonometric Positioning:</strong> Cards are positioned using
                cos(angle) and sin(angle) for perfect circular placement
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">2.</span>
              <span>
                <strong>Staggered Animation:</strong> Each card has a unique delay (index × 0.15s)
                for a wave effect
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">3.</span>
              <span>
                <strong>Floating Motion:</strong> 10px up-down animation with 2.5s duration,
                infinitely repeating
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">4.</span>
              <span>
                <strong>Safe Radius:</strong> Automatically ensures cards never overlap the central
                element
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-8 bg-gray-900 text-white rounded-xl p-6 font-mono text-sm overflow-x-auto">
          <div className="text-green-400 mb-2">// Usage Example - Globe Always Visible!</div>
          <pre>{`<div className="relative w-full h-[650px]">
  <CircularOrbit
    cards={yourCards}
    radius={280}
    globeSize={500}
  >
    <div className="relative w-full h-full">
      {/* Your globe or central content */}
      <YourGlobeComponent />
    </div>
  </CircularOrbit>
</div>`}</pre>
        </div>
      </div>
    </div>
  )
}
