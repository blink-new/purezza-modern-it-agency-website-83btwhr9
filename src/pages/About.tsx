import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Award } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission',
      description: 'To deliver innovative technology solutions that drive business growth and digital transformation.',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Vision',
      description: 'To be the leading IT agency recognized for excellence, innovation, and client success.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Values',
      description: 'Integrity, innovation, excellence, and client-centric approach in everything we do.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality solutions with attention to detail.',
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
              About <span className="text-primary">Purezza</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Pioneering digital innovation since our inception, we transform ideas into 
              exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between technology and business success, 
                Purezza Technologies has grown from a small startup to a trusted partner for 
                businesses worldwide.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe in the power of innovation, the importance of quality, and the 
                value of lasting partnerships. Our team of dedicated professionals works 
                tirelessly to deliver solutions that not only meet but exceed expectations.
              </p>
              <motion.button
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold magnetic"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-background rounded-2xl flex items-center justify-center">
                <motion.div
                  className="text-8xl font-space font-bold text-primary/30"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  P
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide us in delivering exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 magnetic"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="mb-6 text-primary flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About