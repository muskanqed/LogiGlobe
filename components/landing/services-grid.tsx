import { Card } from "@/components/ui/card"
import { services } from "@/data/home"
import { Cpu, Package, Plane, Truck, Users, Warehouse } from "lucide-react"

const iconMap = {
  truck: Truck,
  plane: Plane,
  package: Package,
  users: Users,
  cpu: Cpu,
  warehouse: Warehouse,
}

export function ServicesGrid() {
  return (
    <section className="py-24 bg-cream" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <div className="w-16 h-[3px] bg-navy mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-navy font-heading">
            Integrated Logistics <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            End-to-end logistics services with visibility and efficiency across the supply chain
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-2 group cursor-pointer bg-white border border-gray-200 rounded-md"
              >
                <div className="w-16 h-16 rounded-md bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-navy/10 transition-colors">
                  <Icon className="w-8 h-8 text-navy group-hover:text-navy/80 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy group-hover:text-navy/80 transition-colors font-heading">
                  {service.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl font-semibold text-navy font-heading">
            We don't just move goods — we move businesses forward.
          </p>
        </div>
      </div>
    </section>
  )
}
