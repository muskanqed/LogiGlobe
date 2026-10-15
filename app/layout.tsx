import { Footer } from "@/components/landing/footer"
import { Navbar } from "@/components/landing/navbar"
import { FloatingSupport } from "@/components/partners/floating-support"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import type React from "react"
import { Toaster } from "sonner"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "XYZ Logistics | Logistics & Fleet Solutions",
  description:
    "A trusted logistics provider offering air, surface, and supply chain logistics solutions with transparency and technology integration.",
  keywords:
    "logistics, fleet management, trucking, air logistics, supply chain solutions, transport services, XYZ Logistics",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "XYZ Logistics - Trusted Logistics Provider",
    description: "Technology-integrated logistics and supply chain solutions",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-body antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <FloatingSupport />
        <Analytics />
        <Toaster richColors />
      </body>
    </html>
  )
}
