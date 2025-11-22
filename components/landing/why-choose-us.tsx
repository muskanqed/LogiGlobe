"use client"

import { motion } from "framer-motion";
import { BadgePercent, BarChart3, Boxes, Gauge } from "lucide-react";


interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const Feature = ({ icon, title, description, index }: FeatureProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  const iconVariants = {
    hover: {
      scale: 1.15,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        scale: {
          type: "spring" as const,
          stiffness: 400,
          damping: 10,
        },
        rotate: {
          duration: 0.5,
          ease: "easeInOut" as const,
        },
      },
    },
  }

  const glowVariants = {
    hover: {
      boxShadow: [
        "0 0 20px rgba(255,255,255,0.2)",
        "0 0 40px rgba(255,255,255,0.4)",
        "0 0 20px rgba(255,255,255,0.2)",
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: index * 0.2,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover="hover"
      className="group relative flex flex-col items-center text-center"
    >
      {/* Outer Circle Ring */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="relative"
      >
        {/* Background Glow Circle */}
        <motion.div
          variants={glowVariants}
          className="absolute inset-0 rounded-full bg-white/5 blur-xl scale-110"
        />

        {/* Main Icon Circle - responsive sizing */}
        <motion.div
          variants={iconVariants}
          className="relative mb-3 sm:mb-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border-2 border-white/30 flex items-center justify-center shadow-2xl group-hover:border-white/50 transition-all duration-500"
        >
          {/* Inner circle glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent" />

          {/* Animated pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          />

          <div className="relative text-white w-8 h-8 sm:w-10 sm:h-10 z-10">{icon}</div>
        </motion.div>
      </motion.div>

      <motion.h3
        className="text-base sm:text-lg font-bold text-white mb-2 font-heading group-hover:scale-105 transition-all duration-300"
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-[280px] sm:max-w-[240px] px-2 sm:px-0 group-hover:text-white/95 transition-colors duration-300"
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

interface CTACardProps {
  href?: string
}

export function WhyChooseUs({ ctaHref }: { ctaHref?: string }) {

  const features = [
    {
      icon: <Gauge className="w-full h-full" />,
      title: "Digital-Twin Accuracy",
      description: "Predict delays. Avoid downtime. Deliver with precision.",
    },
    {
      icon: <BadgePercent className="w-full h-full" />,
      title: "Smart, Transparent Pricing",
      description: "Fair, data-driven rates — zero surprises.",
    },
    {
      icon: <Boxes className="w-full h-full" />,
      title: "Total Supply Chain Control",
      description: "One dashboard. Every shipment. Full visibility.",
    },
    {
      icon: <BarChart3 className="w-full h-full" />,
      title: "Measurable Performance",
      description: "Real-time on-time %, route insights, and cost metrics.",
    },
  ];


  return (
    <section className="relative py-10 sm:py-12 md:py-16 bg-gradient-to-br from-surface-dark via-navy to-surface-dark overflow-hidden">
      {/* Top Separator Line */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-cream/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      {/* Diagonal lines pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255,255,255,0.1) 35px,
            rgba(255,255,255,0.1) 70px
          )`,
        }}
      />

      {/* Animated circular pattern background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(232,213,183,0.3) 2px, transparent 2px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Large decorative circles with cream tint */}
      <motion.div
        className="absolute top-10 left-10 w-48 h-48 rounded-full bg-cream/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-cream/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Gradient overlays with more contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-transparent to-surface-dark/40" />

      {/* Additional diagonal gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cream/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black mb-2 text-white font-heading px-4">
            Why Choose <span className="text-gradient-light">ROLO FLEETS</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto font-semibold px-4">
            Legacy You Can Trust. Systems You Can Scale.
          </p>
        </motion.div>

        {/* Features Grid - responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5 lg:gap-5">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom Separator Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </section>
  )
}
