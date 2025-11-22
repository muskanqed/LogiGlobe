"use client"

import { type FeatureCard } from "@/types/feature-card"
import { motion } from "framer-motion"

interface CircularOrbitProps {
  cards: FeatureCard[]
  radius?: number
  globeSize?: number
  children: React.ReactNode
  className?: string
  cardClassName?: string
}

/**
 * CircularOrbit positions cards in a perfect circle around a central element
 * using trigonometric calculations. Globe is always visible with proper z-index layering.
 *
 * Z-index layers:
 * - Globe container: z-10 (always visible in center)
 * - Cards: z-20 (float above globe but positioned around it)
 */
export function CircularOrbit({
  cards,
  radius = 280,
  globeSize = 500,
  children,
  className = "",
  cardClassName = "bg-white/95 border-gray-200/50 text-gray-900",
}: CircularOrbitProps) {
  // Calculate position for each card using polar coordinates
  const getCardPosition = (index: number, total: number) => {
    // Start from top (-90 degrees) and distribute evenly clockwise
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2

    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      angle: (angle * 180) / Math.PI,
    }
  }

  // Map gradient presets to actual Tailwind classes
  const gradientMap: Record<string, string> = {
    "yellow-100_yellow-200": "bg-gradient-to-br from-yellow-100 to-yellow-200",
    "blue-100_blue-200": "bg-gradient-to-br from-blue-100 to-blue-200",
    "cyan-100_cyan-200": "bg-gradient-to-br from-cyan-100 to-cyan-200",
    "purple-100_purple-200": "bg-gradient-to-br from-purple-100 to-purple-200",
    "orange-100_orange-200": "bg-gradient-to-br from-orange-100 to-orange-200",
    "green-100_green-200": "bg-gradient-to-br from-green-100 to-green-200",
    "indigo-100_indigo-200": "bg-gradient-to-br from-indigo-100 to-indigo-200",
  }

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {/* Central globe - Fixed size, centered, z-10 to ensure visibility */}
      <div
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
      >
        <div
          className="relative pointer-events-auto"
          style={{
            width: `${globeSize}px`,
            height: `${globeSize}px`,
          }}
        >
          {children}
        </div>
      </div>

      {/* Connecting lines - z-15 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-15">
        <svg className="w-full h-full absolute overflow-visible">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
          {cards.map((_, index) => {
            const { x, y } = getCardPosition(index, cards.length)
            // Calculate start point (center of globe) and end point (center of card)
            // Since we are in a centered 1x1 container, we need to offset by center coordinates
            // But simpler: use a centered group in SVG
            return (
              <motion.line
                key={`line-${index}`}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${x}px)`}
                y2={`calc(50% + ${y}px)`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.15 + 0.5 }}
              />
            )
          })}
        </svg>
      </div>

      {/* Circular orbit of cards - z-20 so they float above but don't hide globe */}
      <div className="absolute inset-0 flex right-52 -top-10 items-center justify-center">
        <div className="relative" style={{ width: '1px', height: '1px' }}>
          {cards.map((card, index) => {
            const { x, y } = getCardPosition(index, cards.length)
            const gradientKey = `${card.gradient.from}_${card.gradient.to}`
            const gradientClass = gradientMap[gradientKey] || "bg-gradient-to-br from-gray-100 to-gray-200"

            return (
              <motion.div
                key={card.id}
                className="absolute z-20"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0], // Floating effect: 10px up and down
                }}
                transition={{
                  opacity: { duration: 0.6, delay: index * 0.15 },
                  scale: { duration: 0.6, delay: index * 0.15 },
                  y: {
                    duration: 2.5,
                    delay: index * 0.15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <div className={`backdrop-blur-md rounded-xl px-3.5 py-2.5 shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${cardClassName}`}>
                  <div className="flex items-start gap-2">
                    <div className={`w-7 h-7 rounded-lg ${gradientClass} flex items-center justify-center shrink-0`}>
                      <span className="text-base">{card.icon}</span>
                    </div>
                    <div className="text-[11px] space-y-0.5 whitespace-nowrap">
                      <div className="font-bold text-inherit">{card.title}</div>
                      {card.subtitle && (
                        <div className="text-inherit opacity-80 font-medium">{card.subtitle}</div>
                      )}
                      <div className="text-inherit opacity-60 text-[9px]">{card.description}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
