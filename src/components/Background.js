"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function FuturisticBackground() {
  const [raindrops, setRaindrops] = useState([])

  // Generate raindrops
  useEffect(() => {
    const generateRaindrop = () => {
      const id = Math.random()
      const x = Math.random() * window.innerWidth
      const delay = Math.random() * 1.5

      setRaindrops((prev) => [...prev, { id, x, delay }])

      // Remove raindrop after animation
      setTimeout(
        () => {
          setRaindrops((prev) => prev.filter((drop) => drop.id !== id))
        },
        5000 + delay * 1000,
      )
    }

    // Generate raindrops
    const interval = setInterval(generateRaindrop, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* White Background Base */}
      <div className="absolute inset-0 bg-white" />

      {/* Large Light Grid Background */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          className="w-full h-full"
          animate={{
            backgroundPosition: ["0px 0px", "200px 200px", "0px 0px"],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 2px, transparent 2px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 2px, transparent 2px)
            `,
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      {/* Medium Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-full h-full"
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px", "0px 0px"],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Fine Grid Pattern */}
      <div className="absolute inset-0 opacity-8">
        <motion.div
          className="w-full h-full"
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.2) 0.5px, transparent 0.5px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.2) 0.5px, transparent 0.5px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30" />

      {/* Enhanced Realistic Raindrops */}
      {raindrops.map((drop) => (
        <div key={drop.id}>
          {/* Falling Raindrop */}
          <motion.div
            className="absolute w-3 h-12 rounded-full"
            style={{
              left: drop.x,
              top: -60,
              background:
                "linear-gradient(180deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.8) 40%, rgba(30, 64, 175, 0.9) 100%)",
              boxShadow: "0 0 8px rgba(59, 130, 246, 0.4), inset 0 0 4px rgba(255, 255, 255, 0.3)",
              filter: "blur(0.5px)",
            }}
            initial={{ y: -60, opacity: 0.8, scaleY: 1 }}
            animate={{
              y: window.innerHeight + 60,
              opacity: 0,
              scaleY: [1, 1.3, 1],
            }}
            transition={{
              duration: 2.8,
              delay: drop.delay,
              ease: "easeIn",
            }}
          />

          {/* Aceternity-Style Visible Splash Effect */}
          <motion.div
            className="absolute"
            style={{
              left: drop.x - 20,
              top: window.innerHeight - 120,
              filter: "blur(0.5px)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.8, 0],
              opacity: [0, 1, 0.6, 0],
            }}
            transition={{
              duration: 0.8,
              delay: drop.delay + 2.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Primary Ripple Ring */}
            <motion.div
              className="absolute rounded-full border-2"
              style={{
                width: "16px",
                height: "16px",
                top: "12px",
                left: "12px",
                borderColor: "rgba(59, 130, 246, 0.8)",
                background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
                boxShadow: "0 0 12px rgba(59, 130, 246, 0.4), inset 0 0 8px rgba(59, 130, 246, 0.2)",
              }}
              animate={{
                scale: [0, 2.5, 3.5, 0],
                opacity: [0, 0.9, 0.4, 0],
                borderWidth: ["2px", "1px", "0px"],
              }}
              transition={{
                duration: 0.7,
                delay: drop.delay + 2.6,
                ease: "easeOut",
              }}
            />

            {/* Secondary Ripple Ring */}
            <motion.div
              className="absolute rounded-full border"
              style={{
                width: "12px",
                height: "12px",
                top: "14px",
                left: "14px",
                borderColor: "rgba(99, 202, 210, 0.6)",
                background: "radial-gradient(circle, rgba(99, 202, 210, 0.15) 0%, transparent 60%)",
              }}
              animate={{
                scale: [0, 1.8, 2.8, 0],
                opacity: [0, 0.7, 0.3, 0],
              }}
              transition={{
                duration: 0.6,
                delay: drop.delay + 2.65,
                ease: "easeOut",
              }}
            />

            {/* Impact Center Dot */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: "4px",
                height: "4px",
                top: "18px",
                left: "18px",
                background: "radial-gradient(circle, rgba(59, 130, 246, 0.9) 0%, rgba(59, 130, 246, 0.4) 100%)",
                boxShadow: "0 0 8px rgba(59, 130, 246, 0.6)",
              }}
              animate={{
                scale: [0, 1.5, 1, 0],
                opacity: [0, 1, 0.8, 0],
              }}
              transition={{
                duration: 0.5,
                delay: drop.delay + 2.6,
                ease: "easeOut",
              }}
            />

            {/* Splash Droplets */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: "2px",
                  height: "2px",
                  top: "19px",
                  left: "19px",
                  background: "rgba(59, 130, 246, 0.8)",
                  boxShadow: "0 0 4px rgba(59, 130, 246, 0.5)",
                }}
                animate={{
                  x: Math.cos((i * 45 * Math.PI) / 180) * (15 + Math.random() * 8),
                  y: Math.sin((i * 45 * Math.PI) / 180) * (15 + Math.random() * 8) - 8,
                  opacity: [0, 0.9, 0.5, 0],
                  scale: [0.5, 1.2, 0.8, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: drop.delay + 2.6 + i * 0.02,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />
            ))}

            {/* Outer Glow Ring */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: "24px",
                height: "24px",
                top: "8px",
                left: "8px",
                background: "radial-gradient(circle, transparent 40%, rgba(59, 130, 246, 0.1) 60%, transparent 100%)",
                filter: "blur(2px)",
              }}
              animate={{
                scale: [0, 3, 4, 0],
                opacity: [0, 0.6, 0.2, 0],
              }}
              transition={{
                duration: 0.9,
                delay: drop.delay + 2.6,
                ease: "easeOut",
              }}
            />
          </motion.div>
        </div>
      ))}

      {/* Floating Light Orbs */}
<div className="absolute inset-0">
  {[...Array(6)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-32 h-32 rounded-full opacity-5"
      style={{
        background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
        left: `${20 + i * 15}%`,
        top: `${10 + i * 12}%`,
      }}
      animate={{
        x: [0, 50, 0],
        y: [0, -30, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 8 + i * 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: i * 1.5,
      }}
    />
  ))}
</div>

    </div>
  )
}