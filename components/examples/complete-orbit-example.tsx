"use client"

import { motion } from "framer-motion"

/**
 * COMPLETE STANDALONE EXAMPLE
 *
 * This is a fully self-contained React + Tailwind + Framer Motion component
 * that demonstrates circular card positioning around a central globe.
 *
 * ✅ Globe is ALWAYS visible, centered, never hidden
 * ✅ Fixed-size globe wrapper (500px)
 * ✅ Cards orbit outside globe boundary using trigonometry
 * ✅ Proper z-index layering (globe: z-10, cards: z-20)
 * ✅ Staggered floating animations
 * ✅ Responsive and centered in viewport
 */

// Card data interface
interface Card {
  id: string
  title: string
  subtitle?: string
  icon: string
  bgColor: string
}

// Sample card array
const sampleCards: Card[] = [
  { id: "1", title: "Digital Twin", icon: "😊", bgColor: "bg-yellow-200" },
  { id: "2", title: "Scenario Simulation", subtitle: '("What-If")', icon: "💡", bgColor: "bg-blue-200" },
  { id: "3", title: "Route Optimization", icon: "🔗", bgColor: "bg-cyan-200" },
  { id: "4", title: "Integrations", icon: "🔌", bgColor: "bg-purple-200" },
  { id: "5", title: "Risk Monitoring", icon: "⚠️", bgColor: "bg-orange-200" },
  { id: "6", title: "Control Tower", icon: "📊", bgColor: "bg-green-200" },
  { id: "7", title: "Real-Time Twin", icon: "👁️", bgColor: "bg-indigo-200" },
]

export function CompleteOrbitExample() {
  // Configuration
  const GLOBE_SIZE = 500 // Fixed globe size in pixels
  const ORBIT_RADIUS = 280 // Distance from center to cards

  // Calculate card position using trigonometry
  const getCardPosition = (index: number, total: number) => {
    // Start from top (-90°) and distribute evenly
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2
    return {
      x: Math.cos(angle) * ORBIT_RADIUS,
      y: Math.sin(angle) * ORBIT_RADIUS,
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 p-8">
      {/* Main container - relative positioning for absolute children */}
      <div className="relative w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Globe Always Visible Example
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Perfect circular orbit with guaranteed globe visibility
        </p>

        {/* Orbit container - Fixed height, centered */}
        <div className="relative w-full h-[650px] flex items-center justify-center">

          {/* Layer 1: GLOBE - z-10, always visible, fixed size */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div
              className="relative pointer-events-auto"
              style={{ width: `${GLOBE_SIZE}px`, height: `${GLOBE_SIZE}px` }}
            >
              {/* Your actual globe component goes here */}
              <div className="relative w-full h-full">
                {/* Glow effect behind globe */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl rounded-full -z-10" />

                {/* Globe placeholder - Replace with your <World /> component */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
                  <div className="text-white text-center">
                    <div className="text-7xl mb-4">🌍</div>
                    <div className="text-2xl font-bold">Your Globe</div>
                    <div className="text-sm opacity-90 mt-2">Always Visible!</div>
                    <div className="text-xs opacity-75 mt-1">500px × 500px</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Layer 2: ORBITING CARDS - z-20, positioned with trigonometry */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Invisible 1px center point for absolute positioning */}
            <div className="relative" style={{ width: '1px', height: '1px' }}>
              {sampleCards.map((card, index) => {
                const { x, y } = getCardPosition(index, sampleCards.length)

                return (
                  <motion.div
                    key={card.id}
                    className="absolute z-20"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    // Entry animation
                    initial={{ opacity: 0, scale: 0.8, y: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -10, 0], // Floating: 10px up and down
                    }}
                    transition={{
                      // Fade in
                      opacity: { duration: 0.6, delay: index * 0.15 },
                      // Scale up
                      scale: { duration: 0.6, delay: index * 0.15 },
                      // Continuous float
                      y: {
                        duration: 2.5,
                        delay: index * 0.15, // Staggered start
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    {/* Card UI */}
                    <div className="bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="flex items-start gap-2.5">
                        {/* Icon */}
                        <div className={`w-8 h-8 rounded-lg ${card.bgColor} flex items-center justify-center shrink-0`}>
                          <span className="text-lg">{card.icon}</span>
                        </div>
                        {/* Text */}
                        <div className="text-xs whitespace-nowrap">
                          <div className="font-bold text-gray-900">{card.title}</div>
                          {card.subtitle && (
                            <div className="text-gray-600 font-medium text-[10px]">{card.subtitle}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-bold text-lg mb-2">Z-Index Layers</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Globe: z-10 (always visible)</li>
              <li>• Cards: z-20 (float above)</li>
              <li>• No overlap conflicts</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl mb-3">📐</div>
            <h3 className="font-bold text-lg mb-2">Trigonometry</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• x = cos(angle) × radius</li>
              <li>• y = sin(angle) × radius</li>
              <li>• Perfect circular spacing</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-bold text-lg mb-2">Animations</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 10px float motion</li>
              <li>• Staggered delays (×0.15s)</li>
              <li>• Infinite smooth loop</li>
            </ul>
          </div>
        </div>

        {/* Code snippet */}
        <div className="mt-8 bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto">
          <div className="text-green-400 font-bold mb-3">// Key Implementation Points:</div>
          <pre className="text-sm leading-relaxed">
{`// 1. Globe container - Fixed size, centered, z-10
<div className="z-10" style={{ width: '500px', height: '500px' }}>
  <YourGlobeComponent />
</div>

// 2. Card positioning - Trigonometry
const x = Math.cos(angle) * radius
const y = Math.sin(angle) * radius

// 3. Floating animation
animate={{ y: [0, -10, 0] }}
transition={{ duration: 2.5, repeat: Infinity }}

// 4. Staggered delays
delay: index * 0.15`}
          </pre>
        </div>
      </div>
    </div>
  )
}
