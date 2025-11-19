"use client"

import { Card } from "@/components/ui/card"

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
    title: "Co-Founder & COO",
    bio: "MBA in International Business with 11+ years of operational excellence and business development expertise.",
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
    title: "Director – Supply Chain",
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
  return (
    <section className="py-20 bg-cream" id="leadership">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <div className="w-16 h-0.5 bg-navy mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-4 font-heading">
            Leadership <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Experienced leadership combining corporate expertise and technical innovation in logistics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {leaders.map((leader, index) => (
            <Card
              key={index}
              className="bg-white border-none shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group rounded-2xl py-0"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-black text-navy leading-tight mb-1 font-heading">
                      {leader.name}
                    </h3>
                    <div className="text-sm font-medium text-navy/50 tracking-wide">{leader.title}</div>
                  </div>
                  {/* <Link
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-navy/10 hover:bg-[#0077B5] hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                    aria-label={`${leader.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Link> */}
                </div>
                <p className="text-sm text-navy/60 leading-relaxed">{leader.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
