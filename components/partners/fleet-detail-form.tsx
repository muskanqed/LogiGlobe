"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { fleetDetailSchema, type FleetDetailData } from "@/lib/validation/partner-schemas"

const RATE_LIMIT_KEY = "fleet-detail-last-submission"
const RATE_LIMIT_DURATION = 60000 // 60 seconds

export function FleetDetailForm() {
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FleetDetailData>({
    resolver: zodResolver(fleetDetailSchema),
    defaultValues: {
      fleetName: "",
      organisation: "",
      operationsType: "",
      phone: "",
      email: "",
      city: "",
      state: "",
      vehicleCount: 0,
      vehicleType: "",
      primaryRoutes: "",
      website: "", // Honeypot field
    },
  })

  const onSubmit = async (data: FleetDetailData) => {
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
          formType: "fleet",
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
        title: "Fleet Registration Submitted!",
        description: "Thank you for registering. Our team will contact you within 24-48 hours.",
      })

      // Reset form
      reset()
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-0 bg-white rounded-lg overflow-hidden shadow-md">
          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            {...register("website")}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Fleet Partner Name & Organisation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white">
            <div>
              <Label htmlFor="fleetName" className="text-navy font-semibold mb-2 block">
                Fleet Partner Name *
              </Label>
              <Input
                id="fleetName"
                type="text"
                {...register("fleetName")}
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
                placeholder="Enter fleet partner name"
              />
              {errors.fleetName && (
                <p className="text-red-500 text-sm mt-1">{errors.fleetName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="organisation" className="text-navy font-semibold mb-2 block">
                Organisation *
              </Label>
              <Input
                id="organisation"
                type="text"
                {...register("organisation")}
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
                placeholder="Enter organisation name"
              />
              {errors.organisation && (
                <p className="text-red-500 text-sm mt-1">{errors.organisation.message}</p>
              )}
            </div>
          </div>

          {/* Fleet Operations Type & Contact No. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-cream/30">
            <div>
              <Label htmlFor="operationsType" className="text-navy font-semibold mb-2 block">
                Fleet Operations Type *
              </Label>
              <Input
                id="operationsType"
                type="text"
                {...register("operationsType")}
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
                placeholder="e.g., Owned, Leased, Attached"
              />
              {errors.operationsType && (
                <p className="text-red-500 text-sm mt-1">{errors.operationsType.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone" className="text-navy font-semibold mb-2 block">
                Contact No. *
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
                placeholder="+91 98765 43210"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Email ID */}
          <div className="p-6 bg-white">
            <Label htmlFor="email" className="text-navy font-semibold mb-2 block">
              Email ID *
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
              placeholder="fleet@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
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
                {...register("city")}
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
                placeholder="Enter city"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="state" className="text-navy font-semibold mb-2 block">
                State *
              </Label>
              <Input
                id="state"
                type="text"
                {...register("state")}
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
                placeholder="Enter state"
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
              )}
            </div>
          </div>

          {/* Count of Vehicles & Vehicle Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white">
            <div>
              <Label htmlFor="vehicleCount" className="text-navy font-semibold mb-2 block">
                Count of Vehicles Owned/Attached *
              </Label>
              <Input
                id="vehicleCount"
                type="number"
                {...register("vehicleCount", { valueAsNumber: true })}
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
                placeholder="Enter number of vehicles"
              />
              {errors.vehicleCount && (
                <p className="text-red-500 text-sm mt-1">{errors.vehicleCount.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="vehicleType" className="text-navy font-semibold mb-2 block">
                Vehicle Type *
              </Label>
              <Input
                id="vehicleType"
                type="text"
                {...register("vehicleType")}
                className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
                placeholder="e.g., Truck, Trailer, Container"
              />
              {errors.vehicleType && (
                <p className="text-red-500 text-sm mt-1">{errors.vehicleType.message}</p>
              )}
            </div>
          </div>

          {/* Primary Routes */}
          <div className="p-6 bg-cream/30">
            <Label htmlFor="primaryRoutes" className="text-navy font-semibold mb-2 block">
              Primary Routes *
            </Label>
            <Input
              id="primaryRoutes"
              type="text"
              {...register("primaryRoutes")}
              className="w-full border-gray-300 focus:border-navy focus:ring-navy bg-white h-11"
              placeholder="e.g., Mumbai-Delhi, Bangalore-Chennai"
            />
            {errors.primaryRoutes && (
              <p className="text-red-500 text-sm mt-1">{errors.primaryRoutes.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="p-6 bg-white">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-navy hover:bg-navy/90 text-cream font-semibold px-16 py-6 text-base rounded-md disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Now"}
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
