import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-navy text-cream" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image src="/dark-logo.png" alt="Rolo Fleet" width={200} height={80} className="h-14 w-auto mb-6" />
            <p className="text-cream/70 mb-6 max-w-md leading-relaxed">
              ROLO Fleets – Wheels of Trust. Over 40 years of legacy in logistics, now powered by modern technology and
              transparent operations.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cream flex-shrink-0 mt-0.5" />
                <div className="text-sm text-cream/70">
                  1st Floor, VVT Avenue, Indira Nagar,
                  <br />
                  Nashik, Maharashtra, India - 422009
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cream" />
                <a href="tel:+919307921926" className="text-sm text-cream/70 hover:text-cream transition-colors">
                  +91 93079 21926
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cream" />
                <a
                  href="mailto:support@rolofleets.com"
                  className="text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  support@rolofleets.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-cream font-heading">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="text-cream/70 hover:text-cream transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-cream/70 hover:text-cream transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#leadership" className="text-cream/70 hover:text-cream transition-colors text-sm">
                  Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-cream font-heading">Services</h3>
            <ul className="space-y-3">
              <li className="text-cream/70 text-sm">Surface Transportation</li>
              <li className="text-cream/70 text-sm">Air Logistics</li>
              <li className="text-cream/70 text-sm">Supply Chain Solutions</li>
              <li className="text-cream/70 text-sm">Vendor Management</li>
              <li className="text-cream/70 text-sm">Technology Integration</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-cream/50">© 2025 ROLO Fleets Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-cream/50 hover:text-cream transition-colors text-sm">
              LinkedIn
            </Link>
            <Link href="#" className="text-cream/50 hover:text-cream transition-colors text-sm">
              Instagram
            </Link>
            <Link href="#" className="text-cream/50 hover:text-cream transition-colors text-sm">
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
