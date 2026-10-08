import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CareersFooter() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* About the Company */}
          <div className="lg:col-span-2">
            <Image src="/logiglobe-light.svg" alt="LogiGlobe" width={200} height={200} className="h-14 w-auto mb-6" />
            <p className="text-cream/70 mb-6 max-w-md leading-relaxed text-sm">
              LogiGlobe – Wheels of Trust. Over 40 years of legacy in logistics, now powered by
              modern technology and transparent operations. Leading the way in supply chain innovation
              and excellence.
            </p>
            <div className="space-y-3">
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
                <a
                  href="tel:+919307921926"
                  className="text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  +91 93079 21926
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cream" />
                <a
                  href="mailto:support@logiglobe.com"
                  className="text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  support@logiglobe.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-cream font-heading">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#services"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Surface Transportation
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Air Logistics
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Supply Chain Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Vendor Management
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Technology Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Warehousing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-cream font-heading">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Investor Relations */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-cream font-heading">Investor Relations</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Financial Reports
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Investor News
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Corporate Governance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Shareholder Info
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  Annual Reports
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-cream/50">
              © 2025 LogiGlobe Pvt. Ltd. All Rights Reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-cream/50 hover:text-cream transition-colors text-sm"
                aria-label="LinkedIn"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="text-cream/50 hover:text-cream transition-colors text-sm"
                aria-label="Instagram"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-cream/50 hover:text-cream transition-colors text-sm"
                aria-label="YouTube"
              >
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
