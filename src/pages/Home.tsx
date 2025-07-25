import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Code, Smartphone, Globe, Zap, Users, Star, CheckCircle } from 'lucide-react'

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const stats = [
    { number: '500+', label: 'Projects Completed', suffix: '' },
    { number: '50+', label: 'Happy Clients', suffix: '' },
    { number: '5+', label: 'Years Experience', suffix: '' },
    { number: '24', label: 'Support Available', suffix: '/7' },
  ]

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies and modern frameworks',
      features: ['React & Next.js', 'Node.js Backend', 'Database Design']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences',
      features: ['iOS & Android', 'React Native', 'Flutter Development']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Digital Solutions',
      description: 'Complete digital transformation services to modernize your business operations',
      features: ['Digital Strategy', 'UI/UX Design', 'Brand Identity']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions for modern applications',
      features: ['AWS & Azure', 'DevOps & CI/CD', 'Microservices']
    },
  ]

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-20 overflow-hidden">
      {/* Ultra-Modern Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ y: yBackground }}
        >
          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute top-20 left-[10%] w-32 h-32 border-2 border-primary/20 rounded-full"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          <motion.div
            className="absolute top-40 right-[15%] w-24 h-24 bg-primary/10 rounded-2xl"
            animate={{ 
              rotate: [0, 45, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div
            className="absolute bottom-32 left-[20%] w-16 h-16 border-2 border-primary/30"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            animate={{ 
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute top-1/2 right-[8%] w-20 h-20 border border-primary/25 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div 
          className="container mx-auto px-6 text-center z-10"
          style={{ y: yText, opacity }}
        >
          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {/* Hero Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Leading IT Solutions Provider</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.span 
                className="gradient-text-purple block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              >
                Innovation
              </motion.span>
              <motion.span 
                className="text-foreground block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Meets
              </motion.span>
              <motion.span 
                className="text-primary block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Excellence
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              We craft cutting-edge digital solutions that transform your vision 
              into reality. Experience the future of technology with our innovative 
              approach and unparalleled expertise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.button
                className="px-10 py-5 bg-primary text-primary-foreground rounded-full font-semibold text-lg magnetic-strong purple-glow hover:purple-glow-intense transition-all duration-500 flex items-center gap-3 btn-modern"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                className="px-10 py-5 border-2 border-primary text-primary rounded-full font-semibold text-lg magnetic hover:bg-primary hover:text-primary-foreground transition-all duration-500 btn-modern"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Ultra-Modern Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-12 border-2 border-primary rounded-full flex justify-center relative overflow-hidden">
            <motion.div
              className="w-1.5 h-4 bg-primary rounded-full mt-2"
              animate={{ 
                y: [0, 16, 0],
                opacity: [1, 0.3, 1] 
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Ultra-Modern Stats Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-primary/5 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center reveal"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.h3
                    className="text-5xl md:text-6xl font-display font-bold text-primary mb-3 relative"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                    <span className="text-2xl">{stat.suffix}</span>
                    <motion.div
                      className="absolute -inset-4 bg-primary/10 rounded-full blur-xl"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </motion.h3>
                  <p className="text-muted-foreground font-medium text-lg">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ultra-Modern Services Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20 reveal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our <span className="gradient-text-purple">Services</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We offer comprehensive digital solutions designed to elevate your business 
              and drive innovation in the modern technological landscape.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group p-10 glass-card rounded-3xl hover:bg-primary/5 transition-all duration-700 cursor-pointer card-hover reveal"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Service Icon */}
                <motion.div
                  className="mb-8 text-primary group-hover:text-primary group-hover:scale-110 transition-all duration-500"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
                    {service.icon}
                  </div>
                </motion.div>

                {/* Service Content */}
                <motion.h3 
                  className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors duration-500"
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground leading-relaxed mb-6 text-lg"
                >
                  {service.description}
                </motion.p>

                {/* Service Features */}
                <motion.div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Hover Arrow */}
                <motion.div
                  className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <ArrowRight className="w-6 h-6 text-primary" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra-Modern CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 border border-primary/20 rounded-full"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ rotate: { duration: 30, repeat: Infinity }, scale: { duration: 8, repeat: Infinity } }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-28 h-28 bg-primary/10 rounded-2xl"
            animate={{ rotate: [0, 45, 0], y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            className="reveal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-display font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to <span className="gradient-text-purple">Transform</span>
              <br />Your Business?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's collaborate to create something extraordinary. Our team is ready 
              to bring your vision to life with cutting-edge technology and innovative solutions.
            </motion.p>
            
            <motion.button
              className="px-12 py-6 bg-primary text-primary-foreground rounded-full font-semibold text-xl magnetic-strong purple-glow-strong hover:purple-glow-intense transition-all duration-500 flex items-center gap-3 mx-auto btn-modern"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home