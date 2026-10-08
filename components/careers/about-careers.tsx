import { CheckCircle2 } from "lucide-react"

export function AboutCareers() {
  return (
    <section className="py-24 bg-[#F4F5F7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-8 font-heading">
              Careers
            </h2>

            <div className="space-y-6 text-[#1A1A1A] text-lg leading-relaxed">
              <p>
                At LogiGlobe, we believe that our people are our greatest asset. We are committed to
                fostering a culture of innovation, collaboration, and continuous growth. Our team members
                are passionate about transforming the logistics industry and delivering exceptional value
                to our clients.
              </p>

              <p>
                We offer a dynamic work environment where creativity and initiative are encouraged.
                Whether you're an experienced professional or just starting your career, we provide
                opportunities to develop your skills, take on new challenges, and make a meaningful
                impact in the world of logistics and supply chain management.
              </p>

              <p>
                Join us in our mission to revolutionize logistics through technology, sustainability,
                and customer-centric solutions. We're looking for talented individuals who share our
                values and are ready to contribute to our continued success and growth.
              </p>

              <p>
                As part of our team, you'll have access to comprehensive benefits, professional
                development programs, and a supportive environment that values work-life balance and
                personal well-being.
              </p>
            </div>
          </div>

          {/* Right Highlight Card */}
          <div className="flex items-start lg:items-center">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 w-full">
              <h3 className="text-2xl font-bold text-[#005EB8] mb-8">
                Why Choose LogiGlobe?
              </h3>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#F47B20] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">
                      Diverse Service Portfolio Exposure
                    </h4>
                    <p className="text-[#1A1A1A]/70">
                      Work across multiple logistics domains and gain comprehensive industry experience
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#F47B20] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">
                      Global Work Experience
                    </h4>
                    <p className="text-[#1A1A1A]/70">
                      Collaborate with international teams and expand your global perspective
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#F47B20] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">
                      Growth Opportunities for Ambitious Talent
                    </h4>
                    <p className="text-[#1A1A1A]/70">
                      Accelerate your career with mentorship programs and leadership development
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
