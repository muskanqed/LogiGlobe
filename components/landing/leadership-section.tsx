"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const leaders = [
  {
    name: "Maya Desai",
    title: "Chief Executive Officer",
    bio: "Sets the company’s strategic direction and builds partnerships that strengthen global supply chains.",
    image: "/business-executive-portrait.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Rohan Mehta",
    title: "Chief Operating Officer",
    bio: "Leads day-to-day operations with a focus on reliable service, safety, and continuous improvement.",
    image: "/operations-director-portrait.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Priya Nair",
    title: "Head of Global Logistics",
    bio: "Coordinates international freight networks and helps customers move goods smoothly across borders.",
    image: "/logistics-director-portrait.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Kabir Shah",
    title: "VP of Operations",
    bio: "Oversees regional teams and develops practical processes for consistent, on-time delivery.",
    image: "/senior-business-executive-portrait.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Leena Kapoor",
    title: "Head of Technology",
    bio: "Guides digital tools that give customers and operations teams clearer, more timely shipment insights.",
    image: "/tech-executive-portrait-cto.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Arjun Malhotra",
    title: "Head of Customer Experience",
    bio: "Shapes responsive support and service standards around the changing needs of logistics customers.",
    image: "/vendor-management-executive-portrait.jpg",
    linkedin: "https://linkedin.com",
  },
]

export function LeadershipSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-cream relative overflow-hidden" id="leadership">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-navy/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-orange/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div
            className={`w-12 sm:w-16 h-1 bg-navy mx-auto mb-4 sm:mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
          />
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-3 sm:mb-4 font-heading transition-all duration-1000 delay-200 px-4 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Leadership <span className="text-gradient">Team</span>
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg text-navy/70 max-w-2xl mx-auto transition-all duration-1000 delay-300 px-4 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Illustrative fictional profiles for demonstration only; these are not actual LogiGlobe employees.
          </p>
        </div>

        {/* Leaders Grid - responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
                }`}
              style={{
                transitionDelay: `${400 + index * 150}ms`
              }}
            >
              <Card className="bg-white border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group rounded-2xl sm:rounded-3xl h-full py-0">
                {/* Image Container - responsive height */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-navy/5 via-orange/5 to-navy/5">
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out filter group-hover:brightness-105"
                    />
                  </div>

                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Container - responsive padding */}
                <div className="p-4 sm:p-5 md:p-6 bg-white relative">
                  {/* Decorative Element */}
                  <div className="absolute top-0 left-4 sm:left-6 w-10 sm:w-12 h-1 bg-gradient-to-r from-navy to-orange transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="space-y-2 sm:space-y-3">
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-black text-navy leading-tight mb-1 sm:mb-2 font-heading group-hover:text-gradient transition-all duration-300">
                        {leader.name}
                      </h3>
                      <div className="text-xs sm:text-sm font-bold text-orange tracking-wide uppercase">
                        {leader.title}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-navy/70 leading-relaxed group-hover:text-navy/90 transition-colors duration-300">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}
