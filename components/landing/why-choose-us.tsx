"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, Shield, FileText } from "lucide-react"
import Link from "next/link"

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const Feature = ({ icon, title, description, index }: FeatureProps) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const iconVariants = {
    hover: {
      scale: 1.12,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      className="group relative flex flex-col items-center text-center"
    >
      <motion.div
        variants={iconVariants}
        className="relative mb-6 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-shadow duration-300"
      >
        <div className="text-white w-10 h-10">{icon}</div>
      </motion.div>

      <motion.h3
        className="text-xl font-bold text-white mb-3 font-heading group-hover:brightness-110 transition-all duration-300"
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-sm text-white/80 leading-relaxed max-w-[240px] group-hover:text-white transition-colors duration-300"
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

interface CTACardProps {
  href?: string
}

const CTACard = ({ href = "#contact" }: CTACardProps) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  const cardVariants = {
    hover: {
      y: -8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  const pulseVariants = {
    pulse: {
      boxShadow: [
        "0 0 0 0 rgba(255, 255, 255, 0.4)",
        "0 0 0 20px rgba(255, 255, 255, 0)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 6,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      className="group relative flex flex-col items-center text-center"
    >
      <motion.div
        variants={cardVariants}
        className="relative w-full max-w-[280px] p-8 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/30 shadow-xl group-hover:border-white/50 transition-all duration-300"
      >
        {/* Gradient border on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <motion.div
          className="relative mb-6 w-20 h-20 mx-auto rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg"
        >
          <FileText className="text-white w-9 h-9" />
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-4 font-heading">
          Get Detailed Quote
        </h3>

        <p className="text-sm text-white/90 mb-6 leading-relaxed">
          Request a comprehensive quote tailored to your logistics needs
        </p>

        <Link href={href}>
          <motion.button
            variants={buttonVariants}
            animate="pulse"
            className="relative w-full px-6 py-3 rounded-lg bg-white text-navy font-bold text-sm hover:bg-white/95 transition-colors duration-200 shadow-lg"
          >
            <motion.div variants={pulseVariants} animate="pulse" className="absolute inset-0 rounded-lg" />
            <span className="relative">Click here</span>
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export function WhyChooseUs({ ctaHref }: { ctaHref?: string }) {
  const features = [
    {
      icon: <Clock className="w-full h-full" />,
      title: "On Time Delivery",
      description: "99% on-time delivery rate with real-time status updates",
    },
    {
      icon: <MapPin className="w-full h-full" />,
      title: "Live Tracking",
      description: "Track your shipments in real-time across the entire journey",
    },
    {
      icon: <Shield className="w-full h-full" />,
      title: "Highly Secure",
      description: "Advanced security measures to protect your valuable cargo",
    },
  ]

  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      {/* World map dotted pattern background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/50 via-transparent to-navy/30" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-[3px] bg-white/80 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-white font-heading">
            Why Choose <span className="text-gradient-light">ROLO FLEETS</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-semibold">
            Legacy You Can Trust. Systems You Can Scale.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}

          <CTACard href={ctaHref} />
        </div>
      </div>
    </section>
  )
}
