import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CareersFooter() {
  return (
    <footer className="bg-[#003764] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* About the Company */}
          <div className="lg:col-span-2">
            <Image src="/logo-navy-cream.png" alt="Rolo Fleet" width={200} height={80} className="h-14 w-auto mb-6" />
            <p className="text-white/80 mb-6 max-w-md leading-relaxed text-sm">
              ROLO Fleets – Wheels of Trust. Over 40 years of legacy in logistics, now powered by
              modern technology and transparent operations. Leading the way in supply chain innovation
              and excellence.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F47B20] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-white/70">
                  1st Floor, VVT Avenue, Indira Nagar,
                  <br />
                  Nashik, Maharashtra, India
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F47B20]" />
                <a
                  href="tel:+919307921926"
                  className="text-sm text-white/70 hover:text-white transition-colors hover:underline"
                >
                  +91 93079 21926
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F47B20]" />
                <a
                  href="mailto:info@rolofleets.com"
                  className="text-sm text-white/70 hover:text-white transition-colors hover:underline"
                >
                  info@rolofleets.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white font-heading">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                >
                  Surface Transportation
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                >
                  Air Logistics
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                >
                  Supply Chain Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                >
                  Vendor Management
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                >
                  Technology Integration
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                >
                  Warehousing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white font-heading">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#history"
                  className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/track"
                  className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                >
                  Track Shipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Investor Relations */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white font-heading">Investor Relations</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                >
                  Financial Reports
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                >
                  Investor News
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                >
                  Corporate Governance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                >
                  Shareholder Info
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                >
                  Annual Reports
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-white/60">
              © 2025 ROLO Fleets Pvt. Ltd. All Rights Reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F47B20] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F47B20] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F47B20] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F47B20] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F47B20] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
