"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function PartnerRegistrationForm() {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h3 className="text-3xl font-black text-navy mb-8 font-heading">
          Primary Partner Registration
        </h3>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <Label htmlFor="name" className="text-navy font-semibold mb-2 block">
              Name *
            </Label>
            <Input
              id="name"
              type="text"
              required
              className="w-full border-gray-300 focus:border-navy focus:ring-navy"
              placeholder="Enter your full name"
            />
          </div>

          {/* Organisation */}
          <div>
            <Label htmlFor="organisation" className="text-navy font-semibold mb-2 block">
              Organisation *
            </Label>
            <Input
              id="organisation"
              type="text"
              required
              className="w-full border-gray-300 focus:border-navy focus:ring-navy"
              placeholder="Enter organisation name"
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-navy font-semibold mb-2 block">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              required
              className="w-full border-gray-300 focus:border-navy focus:ring-navy"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Contact No. */}
          <div>
            <Label htmlFor="contact" className="text-navy font-semibold mb-2 block">
              Contact No. *
            </Label>
            <Input
              id="contact"
              type="tel"
              required
              className="w-full border-gray-300 focus:border-navy focus:ring-navy"
              placeholder="+91 98765 43210"
            />
          </div>

          {/* MSME Act */}
          <div className="md:col-span-2">
            <Label className="text-navy font-semibold mb-3 block">
              Registered under MSME Act *
            </Label>
            <RadioGroup defaultValue="no" className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="msme-yes" />
                <Label htmlFor="msme-yes" className="font-normal cursor-pointer">
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="msme-no" />
                <Label htmlFor="msme-no" className="font-normal cursor-pointer">
                  No
                </Label>
              </div>
            </RadioGroup>
          </div>
        </form>
      </div>
    </section>
  )
}
