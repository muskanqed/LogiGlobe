"use client"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Linkedin } from "lucide-react"
import Link from "next/link"

const leaders = [
  {
    name: "Vrushabh Avinash Sonawane",
    title: "Founder & CEO",
    bio: "MBA in International Business; expertise in growth strategy and marketing.",
    image: "/business-executive-portrait.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Vishal Ramesh Bidve",
    title: "Co-Founder & CTO",
    bio: "IIT Bombay alumnus; specializes in AI, ML & blockchain-enabled logistics.",
    image: "/technology-executive-portrait.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Anup Jagganath Gosavi",
    title: "Co-founder & COO",
    bio: "MBA in International Business; 11+ years of expertise in growth strategy and marketing.",
    image: "/senior-business-leader-portrait.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Sandip Vitthal Mandhare",
    title: "Director – Operations",
    bio: "10+ years in operations; ensures process discipline and ground execution excellence.",
    image: "/operations-director-portrait.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dnyaneshwar Sahebrao Tanpure",
    title: "Director – Supply Chain",
    bio: "25+ years in trucking and logistics; drives supply-chain efficiency and reliability.",
    image: "/logistics-director-portrait.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Arvind Dattatray Chavan",
    title: "Director – Vendor Management",
    bio: "20+ years in vendor relations; ensures transparent and dependable partnerships.",
    image: "/vendor-management-executive-portrait.jpg",
    linkedin: "https://linkedin.com",
  },
]

export function LeadershipSection() {
  return (
    <section className="py-24 bg-cream" id="leadership">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <div className="w-16 h-[3px] bg-navy mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-4 font-heading">
            Leadership <span className="text-navy/70">Team</span>
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Experienced leadership combining corporate expertise and technical innovation in logistics
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {leaders.map((leader, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white border-gray-200 hover:border-navy/30 hover:shadow-lg transition-all overflow-hidden group rounded-md h-full">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-xl font-bold text-navy group-hover:text-navy/80 transition-colors font-heading">
                        {leader.name}
                      </h3>
                      <Link
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 p-1.5 rounded-full bg-navy/5 hover:bg-navy hover:text-white transition-all"
                        aria-label={`${leader.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="text-sm font-semibold text-navy/70 mb-3">{leader.title}</div>
                    <p className="text-sm text-gray leading-relaxed">{leader.bio}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 bg-white border-navy/20 hover:bg-navy hover:text-white hover:border-navy" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-12 bg-white border-navy/20 hover:bg-navy hover:text-white hover:border-navy" />
        </Carousel>
      </div>
    </section>
  )
}
