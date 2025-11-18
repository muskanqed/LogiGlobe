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
    <section className="relative w-full py-24 md:py-32 overflow-hidden" id="services">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/warehouse.jpg')"
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy/80" />

      {/* Content */}
      <div className="relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 px-6">
          <div className="w-16 h-[3px] bg-cream mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-cream font-heading">
            Integrated Logistics <span className="text-gradient-light">Services</span>
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            End-to-end logistics services with visibility and efficiency across the supply chain
          </p>
        </div>

        {/* Services Grid - Horizontal on Desktop, Vertical on Mobile */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-0">
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

                  {/* Service Card */}
                  <div
                    className={`
                      relative p-8 h-[280px] flex flex-col items-center justify-center text-center
                      transition-all duration-500 ease-in-out cursor-pointer
                      ${isHovered ? 'bg-white/10' : 'bg-transparent'}
                      border border-cream/10 md:border-0
                      rounded-lg md:rounded-none
                    `}
                  >
                    {/* Icon */}
                    <div
                      className={`
                        mb-5 transition-transform duration-500 ease-in-out
                        ${isHovered ? 'scale-110' : 'scale-100'}
                      `}
                    >
                      <Icon className="w-12 h-12 md:w-14 md:h-14 text-white" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`
                        text-lg md:text-xl font-bold text-cream font-heading mb-3
                        transition-all duration-500
                        ${isHovered ? 'text-white' : 'text-cream'}
                      `}
                    >
                      {service.title}
                    </h3>

                    {/* Description - Fade in on hover */}
                    <div
                      className={`
                        overflow-hidden transition-all duration-500 ease-in-out
                        ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                      `}
                    >
                      <p className="text-sm text-cream/90 leading-relaxed px-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-16 px-6">
          <p className="text-xl md:text-2xl font-semibold text-cream font-heading">
            We don't just move goods — we move businesses forward.
          </p>
        </div>
      </div>
    </section>
  )
}
