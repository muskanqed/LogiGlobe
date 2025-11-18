"use client";

import { stats } from "@/data/home";
import { globeConfig, globeData } from "@/data/globe-data";
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

export function StatsSection() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <div className="w-16 h-[3px] bg-cream mx-auto mb-4" />
          <h2 className="text-4xl font-black text-cream mb-4 font-heading">OUR SCALE & REACH</h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
            Numbers that reflect our commitment to excellence and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Stats Grid - Left Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="relative group text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-cream opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="pt-4">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <TrendingUp className="text-cream w-6 h-6" />
                    <div className="text-5xl lg:text-6xl font-black text-cream font-heading">{stat.value}</div>
                  </div>
                  <div className="text-xl font-semibold text-cream/90 mb-2">{stat.label}</div>
                  <div className="text-sm text-cream/50">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Globe - Right Side */}
          <div className="relative w-full h-[500px] lg:h-[600px]">
            <World globeConfig={globeConfig} data={globeData} />
          </div>
        </div>
      </div>
    </section>
  )
}
