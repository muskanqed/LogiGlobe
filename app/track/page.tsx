import { Footer } from "@/components/landing/footer"
import { Navbar } from "@/components/landing/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function TrackPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#E53935] mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-black mb-4">
              Track Your <span className="text-[#E53935]">Shipment</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Enter your tracking number to get real-time updates on your shipment
            </p>
          </div>

          <div className="bg-card border-2 border-border rounded-lg p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="tracking" className="block text-sm font-semibold mb-2">
                  Tracking Number
                </label>
                <div className="flex gap-2">
                  <Input id="tracking" type="text" placeholder="Enter your tracking number" className="flex-1" />
                  <Button type="submit" className="bg-[#E53935] hover:bg-[#D32F2F] text-white">
                    <Search className="w-5 h-5 mr-2" />
                    Track
                  </Button>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold mb-3">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our support team for assistance with tracking or shipment inquiries.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+919307921926" className="text-sm font-medium text-[#E53935] hover:underline">
                    Call: +91 93079 21926
                  </a>
                  <span className="hidden sm:inline text-muted-foreground">|</span>
                  <a href="mailto:support@rolofleets.com" className="text-sm font-medium text-[#E53935] hover:underline">
                    Email: support@rolofleets.com
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
