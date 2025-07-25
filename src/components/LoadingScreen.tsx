import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  }

  const logoVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  }

  const dotVariants = {
    initial: { scale: 0 },
    animate: { 
      scale: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div
      className="fixed inset-0 bg-background flex items-center justify-center z-50"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-primary/10 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-primary/5 rounded-2xl"
          animate={{ 
            rotate: [0, 45, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-32 w-16 h-16 border border-primary/15"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="text-center z-10">
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-display font-bold gradient-text-purple"
            animate={{ 
              textShadow: [
                "0 0 0px rgba(139, 92, 246, 0)",
                "0 0 20px rgba(139, 92, 246, 0.3)",
                "0 0 0px rgba(139, 92, 246, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Purezza
          </motion.h1>
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-lg text-muted-foreground mb-12 font-medium"
        >
          Creating something extraordinary...
        </motion.p>

        {/* Animated Loading Dots */}
        <motion.div 
          className="flex justify-center items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-primary rounded-full"
              variants={dotVariants}
              initial="initial"
              animate="animate"
              transition={{
                ...dotVariants.animate.transition,
                delay: index * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-64 h-1 bg-primary/20 rounded-full mx-auto mt-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary/50 to-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2.5, 
              delay: 1.2,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen