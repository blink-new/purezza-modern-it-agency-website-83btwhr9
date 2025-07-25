import React from 'react'
import { motion } from 'framer-motion'
import { Code, Smartphone, Globe, Cloud, Database, Shield, Palette, Zap } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies like React, Next.js, and Node.js.',
      features: ['Custom Web Apps', 'E-commerce Solutions', 'API Development', 'Performance Optimization'],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['Native iOS/Android', 'React Native', 'Flutter Apps', 'App Store Deployment'],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Digital Solutions',
      description: 'Comprehensive digital transformation services to modernize your business processes.',
      features: ['Digital Strategy', 'Process Automation', 'System Integration', 'Digital Marketing'],
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS/Azure Setup', 'Cloud Migration', 'DevOps Services', 'Monitoring & Analytics'],
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Database Solutions',
      description: 'Design, optimize, and manage databases for optimal performance and security.',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup & Recovery'],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that deliver exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Consulting',
      description: 'Strategic technology consulting to help you make informed business decisions.',
      features: ['Technology Strategy', 'Architecture Review', 'Best Practices', 'Training & Support'],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-space font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Comprehensive technology solutions designed to accelerate your business growth 
              and digital transformation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer magnetic"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', description: 'Strategic roadmap and timeline' },
              { step: '03', title: 'Development', description: 'Building your solution with precision' },
              { step: '04', title: 'Delivery', description: 'Launch and ongoing support' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {phase.step}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services