import { Card } from "@/components/ui/card"

const leaders = [
  {
    name: "Vrushabh Avinash Sonawane",
    title: "Founder & CEO",
    bio: "MBA in International Business; expertise in growth strategy and marketing.",
    image: "/business-executive-portrait.png",
  },
  {
    name: "Vishal Ramesh Bidve",
    title: "Co-Founder & CTO",
    bio: "IIT Bombay alumnus; specializes in AI, ML & blockchain-enabled logistics.",
    image: "/technology-executive-portrait.jpg",
  },
  {
    name: "Anup Jagganath Gosavi",
    title: "Co-founder & COO",
    bio: "MBA in International Business; 11+ years of expertise in growth strategy and marketing.",
    image: "/senior-business-leader-portrait.jpg",
  },
  {
    name: "Sandip Vitthal Mandhare",
    title: "Director – Operations",
    bio: "10+ years in operations; ensures process discipline and ground execution excellence.",
    image: "/operations-director-portrait.jpg",
  },
  {
    name: "Dnyaneshwar Sahebrao Tanpure",
    title: "Director – Supply Chain",
    bio: "25+ years in trucking and logistics; drives supply-chain efficiency and reliability.",
    image: "/logistics-director-portrait.jpg",
  },
  {
    name: "Arvind Dattatray Chavan",
    title: "Director – Vendor Management",
    bio: "20+ years in vendor relations; ensures transparent and dependable partnerships.",
    image: "/vendor-management-executive-portrait.jpg",
  },
]

export function LeadershipSection() {
  return (
    <section className="py-24 bg-navy" id="leadership">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <div className="w-16 h-[3px] bg-cream mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-cream mb-4 font-heading">
            Leadership <span className="text-cream/70">Team</span>
          </h2>
          <p className="text-lg text-cream/70 max-w-2xl mx-auto">
            Experienced leadership combining corporate expertise and technical innovation in logistics
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 hover:border-cream/50 hover:shadow-lg transition-all overflow-hidden group rounded-md"
            >
              <div className="aspect-square overflow-hidden bg-cream">
                <img
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-1 group-hover:text-navy/80 transition-colors font-heading">
                  {leader.name}
                </h3>
                <div className="text-sm font-semibold text-navy/70 mb-3">{leader.title}</div>
                <p className="text-sm text-gray leading-relaxed">{leader.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
