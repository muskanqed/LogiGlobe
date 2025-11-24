"use client"

import { trustedByLogos } from "@/data/home"
import { motion, useAnimationControls } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function TrustedBy() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...trustedByLogos, ...trustedByLogos]
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const controls = useAnimationControls()
  const containerRef = useRef<HTMLDivElement>(null)

  // Start infinite scroll animation
  useEffect(() => {
    if (!isDragging && !isHovered) {
      controls.start({
        x: [0, "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      })
    } else {
      controls.stop()
    }
  }, [isDragging, isHovered, controls])

  // Container variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Item variants for individual logos
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-[2px] bg-navy mb-8 sm:mb-12 md:mb-16 origin-left"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black mb-2 sm:mb-3 text-navy font-heading px-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-gray text-sm sm:text-base md:text-lg px-4">
            Delivering excellence for India's most respected brands
          </p>
        </motion.div>

        {/* Infinite horizontal scroll banner */}
        <div className="relative w-full overflow-hidden py-4 sm:py-6 md:py-8" ref={containerRef}>
          {/* Gradient overlays for fade effect - responsive widths */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling container with Framer Motion - now with drag support */}
          <motion.div
            className="flex gap-5 cursor-grab active:cursor-grabbing"
            animate={controls}
            drag="x"
            dragConstraints={{ left: -1000, right: 100 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            whileTap={{ cursor: "grabbing" }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`logo-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 group select-none"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-full max-w-full w-auto h-auto object-contain filter aspect-video pointer-events-none"
                  title={logo.name}
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  draggable={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="w-full h-[2px] bg-navy mt-8 sm:mt-12 md:mt-16 origin-right"
        />
      </div>
    </section>
  )
}
