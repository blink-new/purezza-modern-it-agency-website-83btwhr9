import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Team from './pages/Team'
import Contact from './pages/Contact'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  const renderPage = () => {
    const pageVariants = {
      initial: { opacity: 0, y: 30, scale: 0.98 },
      animate: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      },
      exit: { 
        opacity: 0, 
        y: -30, 
        scale: 1.02,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    }

    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Home />
          </motion.div>
        )
      case 'about':
        return (
          <motion.div
            key="about"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <About />
          </motion.div>
        )
      case 'services':
        return (
          <motion.div
            key="services"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Services />
          </motion.div>
        )
      case 'portfolio':
        return (
          <motion.div
            key="portfolio"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Portfolio />
          </motion.div>
        )
      case 'team':
        return (
          <motion.div
            key="team"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Team />
          </motion.div>
        )
      case 'contact':
        return (
          <motion.div
            key="contact"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Contact />
          </motion.div>
        )
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <AnimatePresence mode="wait">
              {renderPage()}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App