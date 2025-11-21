"use client";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { globeConfig, globeData } from "@/data/globe-data";
import { stats } from "@/data/home";
import { TrendingUp } from "lucide-react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-cream/50">Loading globe...</div>
    </div>
  ),
});

// Helper function to parse stat values
function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (match) {
    return {
      number: parseInt(match[1]),
      suffix: match[2] || "",
    };
  }
  return { number: 0, suffix: value };
}

export function StatsSection() {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="w-12 sm:w-16 h-1 bg-cream mx-auto mb-3 sm:mb-4" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-cream mb-3 sm:mb-4 font-heading px-4">OUR SCALE & REACH</h2>
          <p className="text-cream/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Numbers that reflect our commitment to excellence and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Stats Grid - Left Side */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {stats.map((stat, index) => {
              const { number, suffix } = parseStatValue(stat.value);

              return (
                <div key={index} className="relative group text-center">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-cream opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="pt-4">
                    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                      <TrendingUp className="text-cream w-5 h-5 sm:w-6 sm:h-6 animate-pulse flex-shrink-0" />
                      <AnimatedCounter
                        end={number}
                        suffix={suffix}
                        duration={2500}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-cream font-heading"
                      />
                    </div>
                    <div className="text-base sm:text-lg md:text-xl font-semibold text-cream/90 mb-1 sm:mb-2">{stat.label}</div>
                    <div className="text-xs sm:text-sm text-cream/50 px-2">{stat.sublabel}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Globe - Right Side - responsive height */}
          <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] mt-8 lg:mt-0">
            <World globeConfig={globeConfig} data={globeData} />
          </div>
        </div>
      </div>
    </section>
  )
}
