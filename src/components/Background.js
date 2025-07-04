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
        3000 + delay * 1000,
      )
    }

    // Generate raindrops much more frequently
    const interval = setInterval(generateRaindrop, 600)

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

      {/* Raindrops - More Frequent and Visible */}
      {raindrops.map((drop) => (
        <div key={drop.id}>
          {/* Falling Raindrop */}
          <motion.div
            className="absolute w-1.5 h-10 rounded-full opacity-60"
            style={{
              left: drop.x,
              top: -50,
              background: "linear-gradient(180deg, transparent 0%, #3b82f6 40%, #1e40af 100%)",
              boxShadow: "0 0 4px rgba(59, 130, 246, 0.5)",
            }}
            initial={{ y: -50, opacity: 0.6 }}
            animate={{ y: window.innerHeight + 50, opacity: 0 }}
            transition={{
              duration: 2.2,
              delay: drop.delay,
              ease: "easeIn",
            }}
          />

          {/* Splash Effect */}
          <motion.div
            className="absolute"
            style={{ left: drop.x - 15, top: window.innerHeight - 100 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.8, 0], opacity: [0, 0.8, 0] }}
            transition={{
              duration: 0.7,
              delay: drop.delay + 2.0,
              ease: "easeOut",
            }}
          >
            {/* Splash particles */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"
                style={{
                  top: 0,
                  left: 15,
                  boxShadow: "0 0 3px rgba(59, 130, 246, 0.6)",
                }}
                animate={{
                  x: Math.cos((i * 36 * Math.PI) / 180) * 25,
                  y: Math.sin((i * 36 * Math.PI) / 180) * 25 - 12,
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: drop.delay + 2.0,
                }}
              />
            ))}
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
