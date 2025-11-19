import { FloatingSupport } from "@/components/partners/floating-support"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import type React from "react"
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
  title: "ROLO Fleets Pvt. Ltd. | Logistics & Fleet Solutions in India",
  description:
    "Trusted logistics partner with 40+ years of legacy. Offering air, surface, and supply chain logistics solutions with transparency and technology integration.",
  keywords:
    "logistics India, fleet management, trucking, air logistics, supply chain solutions, transport services, ROLO Fleets",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "ROLO Fleets - Wheels of Trust",
    description: "40+ years of logistics legacy with modern technology integration",
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
        {children}
        <FloatingSupport />
        <Analytics />
      </body>
    </html>
  )
}
