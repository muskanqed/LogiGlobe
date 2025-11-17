"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo-navy-cream.png" alt="Rolo Fleet" width={200} height={80} className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-navy hover:text-navy/70 transition-colors">
                About
                <ChevronDown size={16} className={`transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-2">
                  <Link
                    href="#history"
                    className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 transition-colors"
                  >
                    History
                  </Link>
                  <Link
                    href="#leaders"
                    className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 transition-colors"
                  >
                    Our Leaders
                  </Link>
                  <Link
                    href="#vision"
                    className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 transition-colors"
                  >
                    Vision
                  </Link>
                  <Link
                    href="#mission"
                    className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 transition-colors"
                  >
                    Mission & Purpose
                  </Link>
                </div>
              )}
            </div>

            <Link href="#services" className="text-sm font-medium text-navy hover:text-navy/70 transition-colors">
              Services
            </Link>
            <Link href="/partners" className="text-sm font-medium text-navy hover:text-navy/70 transition-colors">
              Partners
            </Link>
            <Link href="#leadership" className="text-sm font-medium text-navy hover:text-navy/70 transition-colors">
              Leadership
            </Link>
            <Link href="/careers" className="text-sm font-medium text-navy hover:text-navy/70 transition-colors">
              Careers
            </Link>
            <Link href="#contact" className="text-sm font-medium text-navy hover:text-navy/70 transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-navy hover:bg-navy/90 text-white font-semibold rounded-sm">
              <Link href="/track">Track Shipment</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-navy" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-cream">
          <div className="px-6 py-4 space-y-3">
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
                    href="#history"
                    className="block py-2 text-sm text-navy hover:text-navy/70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    HISTORY
                  </Link>
                  <Link
                    href="#leaders"
                    className="block py-2 text-sm text-navy hover:text-navy/70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    OUR LEADERS
                  </Link>
                  <Link
                    href="#vision"
                    className="block py-2 text-sm text-navy hover:text-navy/70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    VISION
                  </Link>
                  <Link
                    href="#mission"
                    className="block py-2 text-sm text-navy hover:text-navy/70"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mission & Purpose
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="#services"
              className="block py-2 text-sm font-medium text-navy hover:text-navy/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/partners"
              className="block py-2 text-sm font-medium text-navy hover:text-navy/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partners
            </Link>
            <Link
              href="#leadership"
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
              href="#contact"
              className="block py-2 text-sm font-medium text-navy hover:text-navy/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-navy hover:bg-navy/90 text-white rounded-sm">
              <Link href="/track">Track Shipment</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
