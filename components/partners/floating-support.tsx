"use client"

import { MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

export function FloatingSupport() {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/919307921926"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </Link>

      {/* Call Button */}
      <Link
        href="tel:+919307921926"
        className="w-14 h-14 bg-navy hover:bg-navy/90 text-cream rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Call Us"
      >
        <Phone className="w-7 h-7" />
      </Link>
    </div>
  )
}
