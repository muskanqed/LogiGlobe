"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function FleetDetailForm() {
  return (
    <section className="py-20 md:py-24 bg-cream/20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-4 font-heading">
            Fleet Partner Registration
          </h2>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto">
            Register your fleet with us and gain access to consistent business opportunities across
            India's leading logistics network.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-0 bg-white rounded-lg overflow-hidden shadow-md">
          {/* Fleet Partner Name & Organisation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white">
            <div>
              <Label htmlFor="fleet-name" className="text-navy font-semibold mb-2 block">
                Fleet Partner Name *
              </Label>
              <Input
                id="fleet-name"
                type="text"
                required
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
                placeholder="Enter fleet partner name"
              />
            </div>
            <div>
              <Label htmlFor="fleet-org" className="text-navy font-semibold mb-2 block">
                Organisation *
              </Label>
              <Input
                id="fleet-org"
                type="text"
                required
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
                placeholder="Enter organisation name"
              />
            </div>
          </div>

          {/* Fleet Operations Type & Contact No. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-cream/30">
            <div>
              <Label htmlFor="operations-type" className="text-navy font-semibold mb-2 block">
                Fleet Operations Type *
              </Label>
              <Input
                id="operations-type"
                type="text"
                required
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
                placeholder="e.g., Owned, Leased, Attached"
              />
            </div>
            <div>
              <Label htmlFor="fleet-contact" className="text-navy font-semibold mb-2 block">
                Contact No. *
              </Label>
              <Input
                id="fleet-contact"
                type="tel"
                required
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          {/* Email ID */}
          <div className="p-6 bg-white">
            <Label htmlFor="fleet-email" className="text-navy font-semibold mb-2 block">
              Email ID *
            </Label>
            <Input
              id="fleet-email"
              type="email"
              required
              className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
              placeholder="fleet@example.com"
            />
          </div>

          {/* City & State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-cream/30">
            <div>
              <Label htmlFor="city" className="text-navy font-semibold mb-2 block">
                City *
              </Label>
              <Input
                id="city"
                type="text"
                required
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
                placeholder="Enter city"
              />
            </div>
            <div>
              <Label htmlFor="state" className="text-navy font-semibold mb-2 block">
                State *
              </Label>
              <Input
                id="state"
                type="text"
                required
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
                placeholder="Enter state"
              />
            </div>
          </div>

          {/* Count of Vehicles & Vehicle Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white">
            <div>
              <Label htmlFor="vehicle-count" className="text-navy font-semibold mb-2 block">
                Count of Vehicles Owned/Attached *
              </Label>
              <Input
                id="vehicle-count"
                type="number"
                required
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
                placeholder="Enter number of vehicles"
              />
            </div>
            <div>
              <Label htmlFor="vehicle-type" className="text-navy font-semibold mb-2 block">
                Vehicle Type *
              </Label>
              <Input
                id="vehicle-type"
                type="text"
                required
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
                placeholder="e.g., Truck, Trailer, Container"
              />
            </div>
          </div>

          {/* Primary Routes */}
          <div className="p-6 bg-cream/30">
            <Label htmlFor="primary-routes" className="text-navy font-semibold mb-2 block">
              Primary Routes *
            </Label>
            <Input
              id="primary-routes"
              type="text"
              required
              className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
              placeholder="e.g., Mumbai-Delhi, Bangalore-Chennai"
            />
          </div>

          {/* Submit Button */}
          <div className="p-6 bg-white">
            <Button
              type="submit"
              className="w-full md:w-auto bg-navy hover:bg-navy/90 text-cream font-semibold px-16 py-6 text-base rounded-md"
            >
              Submit Now
            </Button>
          </div>
        </form>

        {/* Bottom Note */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <p className="text-base text-navy/70 leading-relaxed">
            Join our extensive network of trusted transport partners and fleet operators. Benefit
            from guaranteed business flow, transparent operations, on-time payment settlements,
            real-time tracking technology, dedicated support, and nationwide accessibility. Grow your
            business with India's leading logistics company.
          </p>
        </div>
      </div>
    </section>
  )
}
