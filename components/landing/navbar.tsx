"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const servicesDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setAboutDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false)
    }, 300)
  }

  const handleServicesMouseEnter = () => {
    if (servicesDropdownTimeoutRef.current) {
      clearTimeout(servicesDropdownTimeoutRef.current)
    }
    setServicesDropdownOpen(true)
  }

  const handleServicesMouseLeave = () => {
    servicesDropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false)
    }, 300)
  }

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo-navy-cream.png"
              alt="Rolo Fleet"
              width={240}
              height={96}
              className="h-16 md:h-20 w-auto"
              priority
            />
          </Link>



          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/" className="text-sm font-medium text-navy hover:text-navy/70 transition-colors">
              Home
            </Link>
            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-navy hover:text-navy/70 transition-colors">
                About
                <ChevronDown size={16} className={`transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-2">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 transition-colors"
                  >
                    History
                  </Link>
                  <Link
                    href="/about#leaders"
                    className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 transition-colors"
                  >
                    Our Leaders
                  </Link>
                  <Link
                    href="/about#vision"
                    className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 transition-colors"
                  >
                    Vision
                  </Link>
                  <Link
                    href="/about#mission"
                    className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 transition-colors"
                  >
                    Mission & Purpose
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-navy hover:text-navy/70 transition-colors">
                Services
                <ChevronDown size={16} className={`transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-2">
                  <Link
                    href="/#services"
                    className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 transition-colors font-semibold"
                  >
                    All Services
                  </Link>
                  <div className="border-t border-gray-200 my-1"></div>
                  <Link
                    href="/#services"
                    className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 transition-colors"
                  >
                    Surface Transportation
                  </Link>
                  <Link
                    href="/#services"
                    className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 transition-colors"
                  >
                    Air Logistics
                  </Link>
                  <Link
                    href="/#services"
                    className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 transition-colors"
                  >
                    Supply Chain Solutions
                  </Link>
                  <Link
                    href="/#services"
                    className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 transition-colors"
                  >
                    Vendor Management
                  </Link>
                  <Link
                    href="/#services"
                    className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 transition-colors"
                  >
                    Technology Integration
                  </Link>
                  <Link
                    href="/#services"
                    className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 transition-colors"
                  >
                    Warehousing
                  </Link>
                </div>
              )}
            </div>
            <Link href="/partners" className="text-sm font-medium text-navy hover:text-navy/70 transition-colors">
              Partners
            </Link>
            <Link href="/careers" className="text-sm font-medium text-navy hover:text-navy/70 transition-colors">
              Careers
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-navy hover:text-navy/70 transition-colors">
              Contact
            </Link>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                variant="outline"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold rounded-md transition-all"
              >
                <Link href="/#contact">Get a Quote</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 text-navy" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-cream">
          <div className="px-4 sm:px-6 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-sm font-medium text-navy hover:text-navy/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* About Dropdown for Mobile */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-navy hover:text-navy/70"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              >
                About
                <ChevronDown size={16} className={`transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileAboutOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/about"
                    className="block py-2 text-sm text-navy hover:text-navy/70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    History
                  </Link>
                  <Link
                    href="/about#leaders"
                    className="block py-2 text-sm text-navy hover:text-navy/70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Leaders
                  </Link>
                  <Link
                    href="/about#vision"
                    className="block py-2 text-sm text-navy hover:text-navy/70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Vision
                  </Link>
                  <Link
                    href="/about#mission"
                    className="block py-2 text-sm text-navy hover:text-navy/70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mission & Purpose
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown for Mobile */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-navy hover:text-navy/70"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/#services"
                    className="block py-2 text-sm text-navy hover:text-navy/70 font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link
                    href="/#services"
                    className="block py-2 text-sm text-navy hover:text-navy/70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Surface Transportation
                  </Link>
                  <Link
                    href="/#services"
                    className="block py-2 text-sm text-navy hover:text-navy/70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Air Logistics
                  </Link>
                  <Link
                    href="/#services"
                    className="block py-2 text-sm text-navy hover:text-navy/70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Supply Chain Solutions
                  </Link>
                  <Link
                    href="/#services"
                    className="block py-2 text-sm text-navy hover:text-navy/70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Vendor Management
                  </Link>
                  <Link
                    href="/#services"
                    className="block py-2 text-sm text-navy hover:text-navy/70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Technology Integration
                  </Link>
                  <Link
                    href="/#services"
                    className="block py-2 text-sm text-navy hover:text-navy/70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Warehousing
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/partners"
              className="block py-2 text-sm font-medium text-navy hover:text-navy/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partners
            </Link>
            <Link
              href="/#leadership"
              className="block py-2 text-sm font-medium text-navy hover:text-navy/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leadership
            </Link>
            <Link
              href="/careers"
              className="block py-2 text-sm font-medium text-navy hover:text-navy/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/#contact"
              className="block py-2 text-sm font-medium text-navy hover:text-navy/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <Button
                asChild
                variant="outline"
                className="w-full border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold rounded-md"
              >
                <Link href="/#contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
