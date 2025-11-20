"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const leaders = [
  {
    name: "Vrushabh Avinash Sonawane",
    title: "Founder & CEO",
    bio: "MBA in International Business; expertise in growth strategy and marketing.",
    image: "/images/teams/vrushabh-sonawane.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Vishal Ramesh Bidve",
    title: "Co-Founder & CTO",
    bio: "IIT Bombay alumnus; specializes in AI, ML & blockchain-enabled logistics.",
    image: "/images/teams/vishal-ramesh-bidve.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Anup Jagganath Gosavi",
    title: "Co-Founder",
    bio: "20+ years in corporate & entrepreneurial experience with expertise in operations and technology.",
    image: "/images/teams/anup-jaggannath-gosavi.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Sandip Vitthal Mandhare",
    title: "Director – Operations",
    bio: "10+ years in operations; ensures process discipline and ground execution excellence.",
    image: "/images/teams/sandip-vitthal-mandhare.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dnyaneshwar Sahebrao Tanpure",
    title: "Director – Supply Chain & Logistics",
    bio: "25+ years in trucking and logistics; drives supply-chain efficiency and reliability.",
    image: "/images/teams/dnyaneshwar-sahebrao-tanpure.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Arvind Dattatray Chavan",
    title: "Director – Vendor Management",
    bio: "20+ years in vendor relations; ensures transparent and dependable partnerships.",
    image: "/images/teams/arvind-dattatrya-chavan.png",
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
            className={`w-12 sm:w-16 h-1 bg-navy mx-auto mb-4 sm:mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-3 sm:mb-4 font-heading transition-all duration-1000 delay-200 px-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Leadership <span className="text-gradient">Team</span>
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg text-navy/70 max-w-2xl mx-auto transition-all duration-1000 delay-300 px-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Experienced leadership combining corporate expertise and technical innovation in logistics
          </p>
        </div>

        {/* Leaders Grid - responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${400 + index * 150}ms`
              }}
            >
              <Card className="bg-white border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group rounded-2xl sm:rounded-3xl h-full">
                {/* Image Container - responsive height */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-navy/5 via-orange/5 to-navy/5">
                  {/* Animated Border on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy via-orange to-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{ padding: '2px' }}>
                    <div className="w-full h-full bg-white" />
                  </div>

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
