"use client"

import { services } from "@/data/home"
import { Cpu, Package, Plane, Truck, Users, Warehouse } from "lucide-react"
import { useEffect, useState } from "react"

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
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Trigger animation on mount with faster timing for mobile
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

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
          <div
            className="
    grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 
    gap-3 sm:gap-4 md:gap-0

    [&>*:last-child]:col-span-2
    [&>*:last-child]:justify-self-center

    lg:[&>*:last-child]:col-span-3
    xl:[&>*:last-child]:col-span-1
  "
          >
            {/* items */}
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]
              const isHovered = hoveredIndex === index

              return (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                  onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                  onTouchStart={() => isMobile && setHoveredIndex(index)}
                  onTouchEnd={() => isMobile && setTimeout(() => setHoveredIndex(null), 2000)}
                >
                  {/* Vertical Divider (Hidden on last item) */}
                  {index < services.length - 1 && (
                    <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-cream/20" />
                  )}

                  {/* Service Card - responsive with auto height on mobile */}
                  <div
                    className={`
                      relative p-4 sm:p-6 md:p-8
                      min-h-[200px] sm:min-h-[240px] md:h-[280px]
                      flex flex-col items-center justify-center text-center
                      transition-all duration-500 ease-out cursor-pointer
                      md:hover:bg-white/10
                      border border-cream/10 md:border-0
                      rounded-lg md:rounded-none
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                    `}
                    style={{
                      transitionDelay: isVisible ? `${index * (isMobile ? 50 : 100)}ms` : '0ms',
                      willChange: 'transform, opacity'
                    }}
                  >
                    {/* Icon - responsive sizing with animation */}
                    <div className="mb-3 sm:mb-4 md:mb-5 transition-transform duration-500 ease-in-out group-hover:scale-110">
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" />
                    </div>

                    {/* Title - responsive sizing with animation */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-cream font-heading mb-2 sm:mb-3 transition-all duration-500 group-hover:text-white">
                      {service.title}
                    </h3>

                    {/* Description - Always visible on mobile, fade in on hover/touch on desktop */}
                    <div
                      className={`
                        transition-all duration-500 ease-in-out
                        ${isMobile
                          ? 'max-h-40 opacity-100'
                          : isHovered
                            ? 'max-h-40 opacity-100'
                            : 'max-h-0 opacity-0 overflow-hidden'
                        }
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
    </section >
  )
}
