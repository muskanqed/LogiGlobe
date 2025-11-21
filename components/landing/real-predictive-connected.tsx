"use client";

import { motion } from "framer-motion";

export function RealPredictiveConnected() {
  // Container animation - slides up from below with fade
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1], // Smooth easing
        staggerChildren: 0.2, // 200ms stagger between words
      },
    },
  };

  // Individual word animation with rotation and scale
  const wordVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 30,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Hover animation for each word with enhanced effects
  const wordHoverVariants = {
    rest: {
      scale: 1,
      y: 0,
      filter: "drop-shadow(0 0 0px rgba(19, 33, 68, 0))",
    },
    hover: {
      scale: 1.05,
      y: -5,
      filter: "drop-shadow(0 8px 20px rgba(19, 33, 68, 0.3))",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-heading flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4">
            {/* Word 1: Real - Navy with continuous floating animation */}
            <motion.span
              className="inline-block text-navy cursor-default relative"
              variants={wordVariants}
              initial="rest"
              whileHover="hover"
              animate={{
                y: [0, -8, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.span
                variants={wordHoverVariants}
                className="relative inline-block"
              >
                Real
                <motion.span
                  className="absolute -inset-2 bg-navy/5 rounded-lg -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.span>
            </motion.span>

            {/* Word 2: Predictive - Navy with continuous floating animation */}
            <motion.span
              className="inline-block text-navy/80 cursor-default relative"
              variants={wordVariants}
              initial="rest"
              whileHover="hover"
              animate={{
                y: [0, -8, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                },
              }}
            >
              <motion.span
                variants={wordHoverVariants}
                className="relative inline-block"
              >
                Predictive
                <motion.span
                  className="absolute -inset-2 bg-navy/5 rounded-lg -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                />
              </motion.span>
            </motion.span>

            {/* Word 3: Connected - Animated gradient with continuous floating */}
            <motion.span
              className="inline-block cursor-default relative"
              variants={wordVariants}
              initial="rest"
              whileHover="hover"
              animate={{
                y: [0, -8, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
            >
              <motion.span
                variants={wordHoverVariants}
                className="relative inline-block"
              >
                <motion.span
                  className="bg-gradient-to-r from-navy via-navy/90 to-navy/70 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Connected
                </motion.span>
                <motion.span
                  className="absolute -inset-2 bg-gradient-to-r from-navy/5 via-navy/10 to-navy/5 rounded-lg -z-10"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                />
              </motion.span>
            </motion.span>
          </div>

          {/* Optional subtle description */}
          <motion.p
            className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-navy/60 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Experience logistics powered by real-time data, predictive intelligence, and seamless connectivity.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
