import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function PartnersFooter() {
  return (
    <footer className="relative bg-navy text-cream overflow-hidden">
      {/* World Map Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&h=1080&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* About */}
          <div className="lg:col-span-2">
            <Image
              src="/logo-navy-cream.png"
              alt="Rolo Fleet"
              width={200}
              height={80}
              className="h-14 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-cream/80 mb-6 max-w-md leading-relaxed text-sm">
              ROLO Fleets – Wheels of Trust. Over 40 years of legacy in logistics, now powered by
              modern technology and transparent operations. Join our partner network and grow your
              business nationwide.
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
                  className="text-sm text-cream/70 hover:text-cream transition-colors hover:underline"
                >
                  +91 93079 21926
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cream" />
                <a
                  href="mailto:support@rolofleets.com"
                  className="text-sm text-cream/70 hover:text-cream transition-colors hover:underline"
                >
                  support@rolofleets.com
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
                  href="#services"
                  className="text-cream/70 hover:text-cream transition-colors text-sm hover:underline"
                >
                  Surface Transportation
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-cream/70 hover:text-cream transition-colors text-sm hover:underline"
                >
                  Air Logistics
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-cream/70 hover:text-cream transition-colors text-sm hover:underline"
                >
                  Supply Chain Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-cream/70 hover:text-cream transition-colors text-sm hover:underline"
                >
                  Vendor Management
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-cream/70 hover:text-cream transition-colors text-sm hover:underline"
                >
                  Technology Integration
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
                  className="text-cream/70 hover:text-cream transition-colors text-sm hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-cream/70 hover:text-cream transition-colors text-sm hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-cream/70 hover:text-cream transition-colors text-sm hover:underline"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-cream/70 hover:text-cream transition-colors text-sm hover:underline"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/track"
                  className="text-cream/70 hover:text-cream transition-colors text-sm hover:underline"
                >
                  Track Shipment
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
                  className="text-cream/70 hover:text-cream transition-colors text-sm hover:underline"
                >
                  Financial Reports
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream/70 hover:text-cream transition-colors text-sm hover:underline"
                >
                  Investor News
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream/70 hover:text-cream transition-colors text-sm hover:underline"
                >
                  Corporate Governance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream/70 hover:text-cream transition-colors text-sm hover:underline"
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
            <p className="text-sm text-cream/60">
              © 2025 ROLO Fleets Pvt. Ltd. All Rights Reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream hover:text-navy flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream hover:text-navy flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream hover:text-navy flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream hover:text-navy flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream hover:text-navy flex items-center justify-center transition-colors"
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
