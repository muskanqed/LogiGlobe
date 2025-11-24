"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { contactFormSchema, type ContactFormData } from "@/lib/validation/contact-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

const RATE_LIMIT_KEY = "contact_form_last_submission"
const RATE_LIMIT_DURATION = 60000 // 1 minute

export function ContactSection() {
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      website: "", // Honeypot field
    },
  })

  // Show validation errors via toast
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstError = Object.values(errors)[0]
      if (firstError?.message) {
        toast({
          title: "Validation Error",
          description: firstError.message,
          variant: "destructive",
        })
      }
    }
  }, [errors, toast])

  const onSubmit = async (data: ContactFormData) => {
    // Check rate limiting
    const lastSubmission = localStorage.getItem(RATE_LIMIT_KEY)
    if (lastSubmission) {
      const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission)
      if (timeSinceLastSubmission < RATE_LIMIT_DURATION) {
        const waitTime = Math.ceil((RATE_LIMIT_DURATION - timeSinceLastSubmission) / 1000)
        toast({
          title: "Please wait",
          description: `You can submit again in ${waitTime} seconds.`,
          variant: "destructive",
        })
        return
      }
    }

    // Check honeypot
    if (data.website) {
      toast({
        title: "Error",
        description: "Invalid submission detected.",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        // Set rate limit
        localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString())

        toast({
          title: "Message sent successfully! ✓",
          description: result.referenceId
            ? `Reference ID: ${result.referenceId}. We'll get back to you within 24-48 hours.`
            : "We'll get back to you as soon as possible.",
        })

        // Reset form
        reset()
      } else {
        throw new Error(result.error || "Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="w-12 sm:w-16 h-1 bg-navy mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-3 sm:mb-4 font-heading px-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-navy/70 max-w-2xl mx-auto px-4">
            Have a question or need a quote? Reach out to us and we'll respond promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy mb-4 sm:mb-6 font-heading">
                Let's Work Together
              </h3>
              <p className="text-sm sm:text-base text-gray leading-relaxed mb-6 sm:mb-8">
                Whether you need surface transportation, air logistics, or complete supply chain solutions,
                our team is ready to help you optimize your logistics operations.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-cream p-4 sm:p-6 md:p-8 rounded-md border border-gray-200">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot field - hidden from users, visible to bots */}
              <div className="hidden" aria-hidden="true">
                <Input
                  {...register("website")}
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-navy">
                    Name *
                  </label>
                  <Input
                    {...register("name")}
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="bg-white border-gray-300 focus:border-navy"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-navy">
                    Email *
                  </label>
                  <Input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white border-gray-300 focus:border-navy"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-navy">
                    Phone *
                  </label>
                  <Input
                    {...register("phone")}
                    id="phone"
                    type="tel"
                    placeholder="+91 1234567890"
                    className="bg-white border-gray-300 focus:border-navy"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-semibold text-navy">
                    Company
                  </label>
                  <Input
                    {...register("company")}
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    className="bg-white border-gray-300 focus:border-navy"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-navy">
                  Message *
                </label>
                <Textarea
                  {...register("message")}
                  id="message"
                  placeholder="Tell us about your logistics needs..."
                  rows={5}
                  className="bg-white border-gray-300 focus:border-navy resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-navy hover:bg-navy/90 text-white font-semibold rounded-sm"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
