"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function FleetDetailForm() {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <Card className="p-8 md:p-12 border-2 border-navy/10 shadow-lg">
          <h3 className="text-3xl font-black text-navy mb-8 font-heading">
            Fleet Partner Details
          </h3>

          <form className="space-y-6">
            {/* Two Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Fleet Partner Name */}
              <div>
                <Label htmlFor="fleet-name" className="text-navy font-semibold mb-2 block">
                  Fleet Partner Name *
                </Label>
                <Input
                  id="fleet-name"
                  type="text"
                  required
                  className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                  placeholder="Enter fleet partner name"
                />
              </div>

              {/* Organisation */}
              <div>
                <Label htmlFor="fleet-org" className="text-navy font-semibold mb-2 block">
                  Organisation *
                </Label>
                <Input
                  id="fleet-org"
                  type="text"
                  required
                  className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                  placeholder="Enter organisation name"
                />
              </div>

              {/* Fleet Operations Type */}
              <div>
                <Label htmlFor="operations-type" className="text-navy font-semibold mb-2 block">
                  Fleet Operations Type *
                </Label>
                <Input
                  id="operations-type"
                  type="text"
                  required
                  className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                  placeholder="e.g., Owned, Leased, Attached"
                />
              </div>

              {/* Contact No. */}
              <div>
                <Label htmlFor="fleet-contact" className="text-navy font-semibold mb-2 block">
                  Contact No. *
                </Label>
                <Input
                  id="fleet-contact"
                  type="tel"
                  required
                  className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Email ID */}
              <div>
                <Label htmlFor="fleet-email" className="text-navy font-semibold mb-2 block">
                  Email ID *
                </Label>
                <Input
                  id="fleet-email"
                  type="email"
                  required
                  className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                  placeholder="fleet@example.com"
                />
              </div>

              {/* City */}
              <div>
                <Label htmlFor="city" className="text-navy font-semibold mb-2 block">
                  City *
                </Label>
                <Input
                  id="city"
                  type="text"
                  required
                  className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                  placeholder="Enter city"
                />
              </div>

              {/* State */}
              <div>
                <Label htmlFor="state" className="text-navy font-semibold mb-2 block">
                  State *
                </Label>
                <Input
                  id="state"
                  type="text"
                  required
                  className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                  placeholder="Enter state"
                />
              </div>

              {/* Count of Vehicles */}
              <div>
                <Label htmlFor="vehicle-count" className="text-navy font-semibold mb-2 block">
                  Count of Vehicles Owned/Attached *
                </Label>
                <Input
                  id="vehicle-count"
                  type="number"
                  required
                  className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                  placeholder="Enter number of vehicles"
                />
              </div>

              {/* Vehicle Type */}
              <div>
                <Label htmlFor="vehicle-type" className="text-navy font-semibold mb-2 block">
                  Vehicle Type *
                </Label>
                <Input
                  id="vehicle-type"
                  type="text"
                  required
                  className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                  placeholder="e.g., Truck, Trailer, Container"
                />
              </div>

              {/* Primary Routes */}
              <div className="md:col-span-2">
                <Label htmlFor="primary-routes" className="text-navy font-semibold mb-2 block">
                  Primary Routes *
                </Label>
                <Input
                  id="primary-routes"
                  type="text"
                  required
                  className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                  placeholder="e.g., Mumbai-Delhi, Bangalore-Chennai"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                className="w-full md:w-auto bg-navy hover:bg-navy/90 text-cream font-semibold px-12 py-6 text-lg rounded-md"
              >
                Submit Registration
              </Button>
            </div>
          </form>
        </Card>

        {/* Bottom Note */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-sm text-navy/60 leading-relaxed">
            Our partner network enjoys guaranteed business flow, transparent operations, on-time
            payment settlements, real-time tracking technology, dedicated support team, and
            nationwide accessibility. Join thousands of satisfied transport partners who have grown
            their business with us.
          </p>
        </div>
      </div>
    </section>
  )
}
