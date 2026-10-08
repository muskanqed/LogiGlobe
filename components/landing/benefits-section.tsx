import { benefits } from "@/data/home"
import { CheckCircle2 } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-navy mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-4 font-heading">
            Why Choose <span className="text-gradient">LogiGlobe</span>
          </h2>
          <p className="text-xl text-navy max-w-2xl mx-auto font-semibold">
            Legacy You Can Trust. Systems You Can Scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative p-8 border border-gray-200 rounded-md hover:border-navy/30 hover:shadow-sm transition-all group bg-cream"
            >
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-black text-xl font-heading shadow-md">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold mb-3 mt-4 text-navy group-hover:text-navy/80 transition-colors font-heading">
                {benefit.title}
              </h3>
              <p className="text-gray mb-6 leading-relaxed">{benefit.description}</p>

              <ul className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
