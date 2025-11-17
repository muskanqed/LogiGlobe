"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Upload } from "lucide-react"
import { useState } from "react"

export function CareersContentForm() {
  const [fileName, setFileName] = useState<string>("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      qualification: formData.get('qualification'),
      experience: formData.get('experience'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      resume: formData.get('resume'),
    }

    // TODO: Send to backend API
    console.log("Form submitted:", data)

    // Show success message (implement with toast/alert)
    alert("Application submitted successfully! We'll get back to you soon.")
  }

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 font-heading">
                Build Your Career
              </h2>

              <div className="space-y-5 text-navy/80 text-base leading-relaxed">
                <p>
                  At Rolo Fleet, we believe in empowering our people to drive innovation in India's
                  logistics landscape. With over 40 years of industry leadership, we combine traditional
                  values with cutting-edge technology to create a workplace where excellence thrives.
                </p>

                <p>
                  Our commitment to professional development, transparent operations, and sustainable
                  growth creates an environment where ambitious professionals can build meaningful careers.
                  We invest in our team members through continuous learning opportunities, competitive
                  compensation, and a culture that values work-life balance.
                </p>

                <p>
                  Join a diverse team of logistics professionals, technology innovators, and industry
                  experts working together to transform supply chain solutions across the nation. Whether
                  you're starting your career or seeking new challenges, Rolo Fleet offers the platform
                  to achieve your professional aspirations.
                </p>
              </div>
            </div>

            {/* Benefits Card */}
            <Card className="bg-cream border-none shadow-md p-8">
              <h3 className="text-2xl font-bold text-navy mb-6 font-heading">
                Why Join Rolo Fleet?
              </h3>

              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy mb-1">
                      Industry-Leading Expertise
                    </h4>
                    <p className="text-navy/70 text-sm">
                      Gain exposure to diverse logistics operations and build specialized skills
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy mb-1">
                      Professional Growth Programs
                    </h4>
                    <p className="text-navy/70 text-sm">
                      Access mentorship, training, and leadership development opportunities
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy mb-1">
                      Competitive Benefits Package
                    </h4>
                    <p className="text-navy/70 text-sm">
                      Comprehensive health coverage, performance incentives, and work-life balance
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy mb-1">
                      Innovation & Technology Focus
                    </h4>
                    <p className="text-navy/70 text-sm">
                      Work with modern tools, AI-powered systems, and digital solutions
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy mb-1">
                      Nationwide Network Access
                    </h4>
                    <p className="text-navy/70 text-sm">
                      Collaborate across multiple locations and expand your professional network
                    </p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>

          {/* Right Form */}
          <div>
            <Card className="border-2 border-navy/10 shadow-xl p-8 md:p-10">
              <h3 className="text-3xl font-black text-navy mb-2 font-heading">
                Apply Now
              </h3>
              <p className="text-navy/60 mb-8">
                Submit your application and join our team of professionals
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* First Name */}
                <div>
                  <Label htmlFor="firstName" className="text-navy font-semibold mb-2 block text-sm">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                    placeholder="Enter first name"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <Label htmlFor="lastName" className="text-navy font-semibold mb-2 block text-sm">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                    placeholder="Enter last name"
                  />
                </div>

                {/* Qualification */}
                <div>
                  <Label htmlFor="qualification" className="text-navy font-semibold mb-2 block text-sm">
                    Qualification *
                  </Label>
                  <Input
                    id="qualification"
                    name="qualification"
                    type="text"
                    required
                    className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                    placeholder="e.g., MBA, B.Tech, BBA"
                  />
                </div>

                {/* Work Experience */}
                <div>
                  <Label htmlFor="experience" className="text-navy font-semibold mb-2 block text-sm">
                    Work Experience *
                  </Label>
                  <Input
                    id="experience"
                    name="experience"
                    type="text"
                    required
                    className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                    placeholder="e.g., 5 years in logistics"
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-navy font-semibold mb-2 block text-sm">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <Label htmlFor="phone" className="text-navy font-semibold mb-2 block text-sm">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-navy font-semibold mb-2 block text-sm">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border-gray-300 focus:border-navy focus:ring-navy resize-none"
                    placeholder="Tell us about yourself and why you'd like to join..."
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <Label htmlFor="resume" className="text-navy font-semibold mb-2 block text-sm">
                    Resume Upload *
                  </Label>
                  <div className="relative">
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className="flex items-center justify-center gap-3 w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-navy transition-colors bg-cream/30 hover:bg-cream/50"
                    >
                      <Upload className="w-5 h-5 text-navy" />
                      <span className="text-navy text-sm">
                        {fileName || "Choose file (PDF, DOC, DOCX)"}
                      </span>
                    </label>
                  </div>
                </div>

                {/* reCAPTCHA Placeholder */}
                <div>
                  <div className="border-2 border-gray-300 rounded-md p-4 bg-cream/20 flex items-center justify-center">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-navy rounded"></div>
                      <span className="text-sm text-navy/70">I'm not a robot</span>
                    </div>
                  </div>
                  <p className="text-xs text-navy/50 mt-2">reCAPTCHA verification (to be implemented)</p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-navy hover:bg-navy/90 text-cream font-semibold py-6 rounded-md text-base transition-colors shadow-md"
                >
                  Submit Application
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
