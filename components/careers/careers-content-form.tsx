"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle2, Upload } from "lucide-react"
import { careersApplicationSchema, validateResumeFile, type CareersApplicationData } from "@/lib/validation/careers-schema"

const RATE_LIMIT_KEY = "careers-application-last-submission"
const RATE_LIMIT_DURATION = 120000 // 120 seconds (2 minutes) - longer for job applications

export function CareersContentForm() {
  const { toast } = useToast()
  const [fileName, setFileName] = useState<string>("")
  const [resumeFile, setResumeFile] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareersApplicationData>({
    resolver: zodResolver(careersApplicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      qualification: "",
      experience: "",
      email: "",
      phone: "",
      message: "",
      website: "", // Honeypot field
    },
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file
      const validation = validateResumeFile(file)
      if (!validation.valid) {
        toast({
          title: "Invalid File",
          description: validation.error,
          variant: "destructive",
        })
        e.target.value = "" // Clear the input
        setFileName("")
        setResumeFile(null)
        return
      }

      setFileName(file.name)
      setResumeFile(file)
    }
  }

  const onSubmit = async (data: CareersApplicationData) => {
    try {
      // Check if resume is uploaded
      if (!resumeFile) {
        toast({
          title: "Resume Required",
          description: "Please upload your resume (PDF, DOC, or DOCX)",
          variant: "destructive",
        })
        return
      }

      // Rate limiting check
      const lastSubmission = localStorage.getItem(RATE_LIMIT_KEY)
      if (lastSubmission) {
        const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission)
        if (timeSinceLastSubmission < RATE_LIMIT_DURATION) {
          const waitTime = Math.ceil((RATE_LIMIT_DURATION - timeSinceLastSubmission) / 1000)
          toast({
            title: "Please wait",
            description: `You can submit another application in ${waitTime} seconds.`,
            variant: "destructive",
          })
          return
        }
      }

      // Create FormData for file upload
      const formData = new FormData()
      formData.append("firstName", data.firstName)
      formData.append("lastName", data.lastName)
      formData.append("qualification", data.qualification)
      formData.append("experience", data.experience)
      formData.append("email", data.email)
      formData.append("phone", data.phone)
      formData.append("message", data.message || "")
      formData.append("website", data.website || "") // Honeypot
      formData.append("resume", resumeFile)

      // Submit to API
      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit application")
      }

      // Update rate limit timestamp
      localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString())

      // Show success message
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying. We'll review your application and get back to you within 3-5 business days.",
      })

      // Reset form
      reset()
      setFileName("")
      setResumeFile(null)
      // Clear file input
      const fileInput = document.getElementById("resume") as HTMLInputElement
      if (fileInput) fileInput.value = ""
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
    }
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

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  {...register("website")}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* First Name */}
                <div>
                  <Label htmlFor="firstName" className="text-navy font-semibold mb-2 block text-sm">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    {...register("firstName")}
                    className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                    placeholder="Enter first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <Label htmlFor="lastName" className="text-navy font-semibold mb-2 block text-sm">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    {...register("lastName")}
                    className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                    placeholder="Enter last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>

                {/* Qualification */}
                <div>
                  <Label htmlFor="qualification" className="text-navy font-semibold mb-2 block text-sm">
                    Qualification *
                  </Label>
                  <Input
                    id="qualification"
                    type="text"
                    {...register("qualification")}
                    className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                    placeholder="e.g., MBA, B.Tech, BBA"
                  />
                  {errors.qualification && (
                    <p className="text-red-500 text-sm mt-1">{errors.qualification.message}</p>
                  )}
                </div>

                {/* Work Experience */}
                <div>
                  <Label htmlFor="experience" className="text-navy font-semibold mb-2 block text-sm">
                    Work Experience *
                  </Label>
                  <Input
                    id="experience"
                    type="text"
                    {...register("experience")}
                    className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                    placeholder="e.g., 5 years in logistics"
                  />
                  {errors.experience && (
                    <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-navy font-semibold mb-2 block text-sm">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <Label htmlFor="phone" className="text-navy font-semibold mb-2 block text-sm">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="w-full border-gray-300 focus:border-navy focus:ring-navy"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-navy font-semibold mb-2 block text-sm">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    rows={4}
                    className="w-full border-gray-300 focus:border-navy focus:ring-navy resize-none"
                    placeholder="Tell us about yourself and why you'd like to join..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Resume Upload */}
                <div>
                  <Label htmlFor="resume" className="text-navy font-semibold mb-2 block text-sm">
                    Resume Upload *
                  </Label>
                  <div className="relative">
                    <input
                      id="resume"
                      type="file"
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
                        {fileName || "Choose file (PDF, DOC, DOCX - Max 5MB)"}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy hover:bg-navy/90 text-cream font-semibold py-6 rounded-md text-base transition-colors shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
