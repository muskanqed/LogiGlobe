"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function PartnerRegistrationForm() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-4 font-heading uppercase">
            Join Us for a Host of Business Benefits...
          </h2>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto">
            Become part of our trusted partner network and unlock opportunities for growth,
            stability, and success in the logistics industry.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center bg-cream/30 p-6 rounded-lg">
            <Label htmlFor="name" className="text-navy font-semibold md:text-right">
              Name *
            </Label>
            <div className="md:col-span-3">
              <Input
                id="name"
                type="text"
                required
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-12"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          {/* Organisation */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center bg-white p-6 rounded-lg">
            <Label htmlFor="organisation" className="text-navy font-semibold md:text-right">
              Organisation *
            </Label>
            <div className="md:col-span-3">
              <Input
                id="organisation"
                type="text"
                required
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-12"
                placeholder="Enter organisation name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center bg-cream/30 p-6 rounded-lg">
            <Label htmlFor="email" className="text-navy font-semibold md:text-right">
              Email *
            </Label>
            <div className="md:col-span-3">
              <Input
                id="email"
                type="email"
                required
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-12"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Contact No. */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center bg-white p-6 rounded-lg">
            <Label htmlFor="contact" className="text-navy font-semibold md:text-right">
              Contact No. *
            </Label>
            <div className="md:col-span-3">
              <Input
                id="contact"
                type="tel"
                required
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-12"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          {/* MSME Act 2006 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center bg-cream/30 p-6 rounded-lg">
            <Label className="text-navy font-semibold md:text-right">
              MSME Act 2006 *
            </Label>
            <div className="md:col-span-3">
              <RadioGroup defaultValue="no" className="flex gap-8">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="yes" id="msme-yes" />
                  <Label htmlFor="msme-yes" className="font-normal cursor-pointer text-navy">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="no" id="msme-no" />
                  <Label htmlFor="msme-no" className="font-normal cursor-pointer text-navy">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
