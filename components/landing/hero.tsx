"use client"

import Link from "next/link"
import { Button } from "../ui/button"


export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-cream">
      {/* Background Image with Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-navy-blue-logistics-truck-on-highway--minim.jpg"
          alt="Rolo Fleet Logistics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 sm:via-navy/75 to-navy/60 sm:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl">
          <div className="w-16 sm:w-24 h-1 bg-cream mb-6 sm:mb-8 animate-[slideInLeft_0.6s_ease-out]" />

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-cream mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1] tracking-tight font-heading">
            <span className="block animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0 [animation-delay:0.2s]">
              <span className="inline-block bg-gradient-to-r from-cream via-white to-cream bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]">
                Built on 40 years of legacy.
              </span>
            </span>
            <span className="block mt-2 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0 [animation-delay:0.5s]">
              <span className="inline-block text-cream  transition-transform duration-300">
                Powering India's only{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-white font-extrabold">
                    Digital Twin–enabled
                  </span>
                  {/* <span className="absolute inset-0 blur-sm bg-white opacity-20 animate-pulse"></span> */}
                </span>
                {" "}logistics
                <br />and supply chain network.
              </span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-cream/90 mb-3 sm:mb-4 font-semibold leading-snug animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0 [animation-delay:1.1s]">
            Delivering real-time visibility, precision, and
            reliability across every mile.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              variant={'outline'}
              className="hover:text-cream"
            >
              <Link href="/#contact">Get Instant Quote →</Link>
            </Button>
          </div>

          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-cream/80 text-xs sm:text-sm animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0 [animation-delay:1.5s]">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
              <span>95% On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
