"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
            <Link href="#about" className="text-sm font-medium text-navy hover:text-navy/70 transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium text-navy hover:text-navy/70 transition-colors">
              Services
            </Link>
            <Link href="#leadership" className="text-sm font-medium text-navy hover:text-navy/70 transition-colors">
              Leadership
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
            <Link
              href="#about"
              className="block py-2 text-sm font-medium text-navy hover:text-navy/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services"
              className="block py-2 text-sm font-medium text-navy hover:text-navy/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#leadership"
              className="block py-2 text-sm font-medium text-navy hover:text-navy/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leadership
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
