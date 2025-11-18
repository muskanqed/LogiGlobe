import { Compass, Zap, Shield, Users } from "lucide-react"

export function MissionSection() {
  return (
    <section className="py-24 bg-cream" id="mission">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <div className="w-16 h-[3px] bg-navy mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-4 font-heading">
            Mission & <span className="text-navy/70">Purpose</span>
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Bridging tradition with innovation to transform Indian logistics
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white p-10 rounded-md border border-gray-200 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
              <Compass className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy font-heading mb-2">
                Our Mission
              </h3>
              <p className="text-lg text-navy/70">
                To bridge traditional logistics with modern intelligence
              </p>
            </div>
          </div>
          <p className="text-lg text-gray leading-relaxed">
            We are committed to transforming the logistics landscape by combining four decades of
            industry expertise with cutting-edge technology. Our mission is to create a transparent,
            efficient, and reliable logistics ecosystem that addresses real-world challenges and
            delivers measurable value to every stakeholder.
          </p>
        </div>

        {/* Purpose */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-navy mb-6 font-heading text-center">
            Our Purpose
          </h3>
          <p className="text-lg text-gray leading-relaxed text-center mb-8">
            We've studied the majority of real-world use cases, loopholes, and inefficiencies across
            the logistics industry — and we're committed to bridging those gaps through innovation,
            organization, and accountability.
          </p>
        </div>

        {/* Core Commitments */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-md border border-gray-200 hover:border-navy/30 hover:shadow-sm transition-all">
            <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-navy" />
            </div>
            <h4 className="text-lg font-bold text-navy mb-2 font-heading">
              Innovation First
            </h4>
            <p className="text-sm text-gray leading-relaxed">
              Leveraging AI, ML, and blockchain to build intelligent logistics solutions
            </p>
          </div>

          <div className="bg-white p-6 rounded-md border border-gray-200 hover:border-navy/30 hover:shadow-sm transition-all">
            <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-navy" />
            </div>
            <h4 className="text-lg font-bold text-navy mb-2 font-heading">
              Transparency
            </h4>
            <p className="text-sm text-gray leading-relaxed">
              Complete visibility and accountability in every shipment and transaction
            </p>
          </div>

          <div className="bg-white p-6 rounded-md border border-gray-200 hover:border-navy/30 hover:shadow-sm transition-all">
            <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-navy" />
            </div>
            <h4 className="text-lg font-bold text-navy mb-2 font-heading">
              Partnership
            </h4>
            <p className="text-sm text-gray leading-relaxed">
              Building lasting relationships with vendors and clients based on trust
            </p>
          </div>

          <div className="bg-white p-6 rounded-md border border-gray-200 hover:border-navy/30 hover:shadow-sm transition-all">
            <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-4">
              <Compass className="w-6 h-6 text-navy" />
            </div>
            <h4 className="text-lg font-bold text-navy mb-2 font-heading">
              Excellence
            </h4>
            <p className="text-sm text-gray leading-relaxed">
              Maintaining highest standards in operations, safety, and service delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
