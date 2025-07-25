import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Visionary leader with 15+ years in tech innovation',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#',
      },
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Technical architect specializing in scalable solutions',
      social: {
        linkedin: '#',
        github: '#',
        email: '#',
      },
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Creative designer passionate about user experience',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#',
      },
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack developer with expertise in modern frameworks',
      social: {
        linkedin: '#',
        github: '#',
        email: '#',
      },
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face',
      bio: 'Agile expert ensuring smooth project delivery',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#',
      },
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Cloud infrastructure and automation specialist',
      social: {
        linkedin: '#',
        github: '#',
        email: '#',
      },
    },
  ]

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />
      case 'twitter':
        return <Twitter className="w-5 h-5" />
      case 'github':
        return <Github className="w-5 h-5" />
      case 'email':
        return <Mail className="w-5 h-5" />
      default:
        return null
    }
  }

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
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              The brilliant minds behind our innovative solutions. Together, we create 
              exceptional digital experiences that drive success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 magnetic"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex gap-3">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <motion.a
                          key={platform}
                          href={url}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {getSocialIcon(platform)}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
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
              Why Choose <span className="text-primary">Us</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team combines technical expertise with creative vision to deliver outstanding results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Industry veterans with proven track records',
                stat: '15+',
                label: 'Years Experience',
              },
              {
                title: 'Client Success',
                description: 'Dedicated to delivering exceptional results',
                stat: '98%',
                label: 'Client Satisfaction',
              },
              {
                title: 'Innovation',
                description: 'Always exploring the latest technologies',
                stat: '50+',
                label: 'Projects Delivered',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-8 bg-card rounded-2xl border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-4xl font-space font-bold text-primary mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.stat}
                </motion.h3>
                <p className="text-sm text-muted-foreground mb-4">{item.label}</p>
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
              Join Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals to join our growing team.
            </p>
            <motion.button
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg magnetic purple-glow hover:purple-glow-strong transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Team