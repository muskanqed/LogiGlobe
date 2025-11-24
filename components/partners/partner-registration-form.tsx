"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { partnerRegistrationSchema, type PartnerRegistrationData } from "@/lib/validation/partner-schemas"

const RATE_LIMIT_KEY = "partner-registration-last-submission"
const RATE_LIMIT_DURATION = 60000 // 60 seconds

export function PartnerRegistrationForm() {
  const { toast } = useToast()
  const [msmeValue, setMsmeValue] = useState("no")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PartnerRegistrationData>({
    resolver: zodResolver(partnerRegistrationSchema),
    defaultValues: {
      name: "",
      organisation: "",
      email: "",
      phone: "",
      msme: "no",
      website: "", // Honeypot field
    },
  })

  const onSubmit = async (data: PartnerRegistrationData) => {
    try {
      // Rate limiting check
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

      // Add form type to identify which form is being submitted
      const response = await fetch("/api/partners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          formType: "partner",
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form")
      }

      // Update rate limit timestamp
      localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString())

      // Show success message
      toast({
        title: "Partnership Inquiry Submitted!",
        description: "Thank you for your interest. We'll get back to you within 24-48 hours.",
      })

      // Reset form
      reset()
      setMsmeValue("no")
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            {...register("website")}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center bg-cream/30 p-6 rounded-lg">
            <Label htmlFor="name" className="text-navy font-semibold md:text-right">
              Name *
            </Label>
            <div className="md:col-span-3">
              <Input
                id="name"
                type="text"
                {...register("name")}
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-12"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
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
                {...register("organisation")}
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-12"
                placeholder="Enter organisation name"
              />
              {errors.organisation && (
                <p className="text-red-500 text-sm mt-1">{errors.organisation.message}</p>
              )}
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
                {...register("email")}
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-12"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Contact No. */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center bg-white p-6 rounded-lg">
            <Label htmlFor="phone" className="text-navy font-semibold md:text-right">
              Contact No. *
            </Label>
            <div className="md:col-span-3">
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-12"
                placeholder="+91 98765 43210"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* MSME Act 2006 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center bg-cream/30 p-6 rounded-lg">
            <Label className="text-navy font-semibold md:text-right">
              MSME Act 2006 *
            </Label>
            <div className="md:col-span-3">
              <RadioGroup
                value={msmeValue}
                onValueChange={(value) => {
                  setMsmeValue(value)
                  register("msme").onChange({ target: { value, name: "msme" } })
                }}
                className="flex gap-8"
              >
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
              {errors.msme && (
                <p className="text-red-500 text-sm mt-1">{errors.msme.message}</p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-navy hover:bg-navy/90 text-cream font-semibold px-16 py-6 text-base rounded-md disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Now"}
          </Button>
        </form>
      </div>
    </section>
  )
}
