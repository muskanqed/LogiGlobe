"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload } from "lucide-react"
import { useState } from "react"

export function ApplicationForm() {
  const [fileName, setFileName] = useState<string>("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl ml-auto">
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4 font-heading">
            Apply Now
          </h2>
          <p className="text-lg text-[#1A1A1A]/70 mb-12">
            Take the first step towards an exciting career with LogiGlobe. Fill out the form below
            and we'll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name */}
            <div>
              <Label htmlFor="firstName" className="text-[#1A1A1A] font-semibold mb-2 block">
                First Name *
              </Label>
              <Input
                id="firstName"
                type="text"
                required
                className="w-full border-[#D1D5DB] focus:border-[#005EB8] focus:ring-[#005EB8]"
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name */}
            <div>
              <Label htmlFor="lastName" className="text-[#1A1A1A] font-semibold mb-2 block">
                Last Name *
              </Label>
              <Input
                id="lastName"
                type="text"
                required
                className="w-full border-[#D1D5DB] focus:border-[#005EB8] focus:ring-[#005EB8]"
                placeholder="Enter your last name"
              />
            </div>

            {/* Qualification */}
            <div>
              <Label htmlFor="qualification" className="text-[#1A1A1A] font-semibold mb-2 block">
                Qualification *
              </Label>
              <Input
                id="qualification"
                type="text"
                required
                className="w-full border-[#D1D5DB] focus:border-[#005EB8] focus:ring-[#005EB8]"
                placeholder="e.g., Bachelor's in Business Administration"
              />
            </div>

            {/* Work Experience */}
            <div>
              <Label htmlFor="experience" className="text-[#1A1A1A] font-semibold mb-2 block">
                Work Experience *
              </Label>
              <Input
                id="experience"
                type="text"
                required
                className="w-full border-[#D1D5DB] focus:border-[#005EB8] focus:ring-[#005EB8]"
                placeholder="e.g., 5 years in logistics management"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-[#1A1A1A] font-semibold mb-2 block">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                required
                className="w-full border-[#D1D5DB] focus:border-[#005EB8] focus:ring-[#005EB8]"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone Number */}
            <div>
              <Label htmlFor="phone" className="text-[#1A1A1A] font-semibold mb-2 block">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                className="w-full border-[#D1D5DB] focus:border-[#005EB8] focus:ring-[#005EB8]"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message" className="text-[#1A1A1A] font-semibold mb-2 block">
                Message
              </Label>
              <Textarea
                id="message"
                rows={5}
                className="w-full border-[#D1D5DB] focus:border-[#005EB8] focus:ring-[#005EB8] resize-none"
                placeholder="Tell us why you'd like to join LogiGlobe..."
              />
            </div>

            {/* Resume Upload */}
            <div>
              <Label htmlFor="resume" className="text-[#1A1A1A] font-semibold mb-2 block">
                Resume Upload *
              </Label>
              <div className="relative">
                <input
                  id="resume"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="resume"
                  className="flex items-center justify-center gap-3 w-full px-4 py-3 border-2 border-dashed border-[#D1D5DB] rounded-md cursor-pointer hover:border-[#005EB8] transition-colors bg-[#F4F5F7] hover:bg-[#F4F5F7]/70"
                >
                  <Upload className="w-5 h-5 text-[#005EB8]" />
                  <span className="text-[#1A1A1A]">
                    {fileName || "Choose file (PDF, DOC, DOCX)"}
                  </span>
                </label>
              </div>
            </div>

            {/* Captcha Placeholder */}
            <div>
              <Label className="text-[#1A1A1A] font-semibold mb-2 block">
                Verification *
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#005EB8] hover:bg-[#003764] text-white font-semibold py-6 rounded-lg text-lg transition-colors"
            >
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
