"use client"

import { services } from "@/data/home"
import { Cpu, Package, Plane, Truck, Users, Warehouse } from "lucide-react"
import { useState } from "react"

const iconMap = {
  truck: Truck,
  plane: Plane,
  package: Package,
  users: Users,
  cpu: Cpu,
  warehouse: Warehouse,
}

export function LogisticsVideoSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden" id="services">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/warehouse.jpg')"
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy/85 sm:bg-navy/80" />

      {/* Content */}
      <div className="relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6">
          <div className="w-12 sm:w-16 h-1 bg-cream mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 text-cream font-heading">
            Integrated Logistics <span className="text-gradient-light">Services</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-cream/80 max-w-2xl mx-auto">
            End-to-end logistics services with visibility and efficiency across the supply chain
          </p>
        </div>

        {/* Services Grid - Horizontal on Desktop, Vertical on Mobile */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-0">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]
              const isHovered = hoveredIndex === index

              return (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Vertical Divider (Hidden on last item) */}
                  {index < services.length - 1 && (
                    <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-cream/20" />
                  )}

                  {/* Service Card - responsive */}
                  <div
                    className={`
                      relative p-4 sm:p-6 md:p-8 h-[220px] sm:h-[240px] md:h-[280px] flex flex-col items-center justify-center text-center
                      transition-all duration-500 ease-in-out cursor-pointer
                      ${isHovered ? 'bg-white/10' : 'bg-transparent'}
                      border border-cream/10 sm:border-cream/10 md:border-0
                      rounded-lg md:rounded-none
                    `}
                  >
                    {/* Icon - responsive sizing */}
                    <div
                      className={`
                        mb-3 sm:mb-4 md:mb-5 transition-transform duration-500 ease-in-out
                        ${isHovered ? 'scale-110' : 'scale-100'}
                      `}
                    >
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" />
                    </div>

                    {/* Title - responsive sizing */}
                    <h3
                      className={`
                        text-base sm:text-lg md:text-xl font-bold text-cream font-heading mb-2 sm:mb-3
                        transition-all duration-500
                        ${isHovered ? 'text-white' : 'text-cream'}
                      `}
                    >
                      {service.title}
                    </h3>

                    {/* Description - Fade in on hover or always visible on mobile */}
                    <div
                      className={`
                        overflow-hidden transition-all duration-500 ease-in-out
                        ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 sm:max-h-40 opacity-0 sm:opacity-60'}
                      `}
                    >
                      <p className="text-xs sm:text-sm text-cream/90 leading-relaxed px-1 sm:px-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Tagline - responsive */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16 px-4 sm:px-6">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-cream font-heading">
            We don't just move goods — we move businesses forward.
          </p>
        </div>
      </div>
    </section>
  )
}
