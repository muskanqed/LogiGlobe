import { Eye, Lightbulb, Target } from "lucide-react"

export function VisionSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white" id="vision">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="w-12 sm:w-16 h-1 bg-navy mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-3 sm:mb-4 font-heading px-4">
            Our <span className="text-gradient">Vision</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-navy/70 max-w-2xl mx-auto px-4">
            Building the future of logistics in India
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          {/* Left: Vision Statement */}
          <div className="bg-cream p-6 sm:p-8 md:p-10 rounded-md border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy font-heading">
                India's Most Trusted Logistics Ecosystem
              </h3>
            </div>
            <p className="text-lg text-gray leading-relaxed mb-6">
              To be India's most trusted and organized logistics ecosystem, where transparency,
              technology, and reliability come together to transform how goods move across the nation.
            </p>
            <p className="text-base text-gray leading-relaxed">
              We envision a future where every stakeholder in the supply chain—from vendors to
              end customers—experiences seamless, efficient, and dependable logistics services
              powered by innovation and backed by decades of expertise.
            </p>
          </div>

          {/* Right: Core Values */}
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-2 font-heading">
                  Excellence in Execution
                </h4>
                <p className="text-gray leading-relaxed">
                  We strive for operational excellence in every delivery, ensuring that quality
                  and efficiency are never compromised.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-2 font-heading">
                  Innovation-Driven Growth
                </h4>
                <p className="text-gray leading-relaxed">
                  Leveraging cutting-edge technology and data intelligence to continuously
                  improve and scale our logistics solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-2 font-heading">
                  Transparent Operations
                </h4>
                <p className="text-gray leading-relaxed">
                  Building trust through complete visibility and accountability in every
                  aspect of our service delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
