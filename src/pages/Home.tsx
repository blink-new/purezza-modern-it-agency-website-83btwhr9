import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Zap, 
  Users, 
  Star,
  Play,
  ChevronRight,
  Sparkles,
  Rocket,
  Database,
  Quote,
  Activity,
  Globe,
  Lock,
  TrendingUp
} from 'lucide-react';

// Simple and elegant animated counter
const AnimatedCounter = ({ end, label, prefix = "", suffix = "" }: { 
  end: number; 
  label: string; 
  prefix?: string; 
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-4xl font-bold text-purple-600 mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 text-sm">{label}</div>
    </motion.div>
  );
};

// Clean testimonial card
const TestimonialCard = ({ quote, author, title, company }: {
  quote: string;
  author: string;
  title: string;
  company: string;
}) => (
  <motion.div
    className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -5 }}
  >
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-purple-500 fill-purple-500" />
      ))}
    </div>
    
    <p className="text-gray-700 mb-6 leading-relaxed">
      "{quote}"
    </p>
    
    <div className="flex items-center">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold mr-4">
        {author.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <div className="font-semibold text-gray-900">{author}</div>
        <div className="text-sm text-gray-600">{title}, {company}</div>
      </div>
    </div>
  </motion.div>
);

// Modern service card
const ServiceCard = ({ icon: Icon, title, description, features }: {
  icon: any;
  title: string;
  description: string;
  features: string[];
}) => (
  <motion.div
    className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -5 }}
  >
    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
      <Icon className="w-8 h-8 text-purple-600 group-hover:text-white" />
    </div>
    
    <h3 className="text-2xl font-bold text-gray-900 mb-4">
      {title}
    </h3>
    
    <p className="text-gray-600 mb-6 leading-relaxed">
      {description}
    </p>
    
    <div className="space-y-3">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
          <span className="text-gray-700">{feature}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, 25]);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
            <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#8B5CF6"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-4 py-2 bg-purple-50 border border-purple-200 text-purple-700 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Trusted by 10,000+ companies worldwide
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build the future with
            <span className="block bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Purezza Technologies
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We help businesses transform digitally with cutting-edge technology solutions, 
            from cloud infrastructure to AI-powered applications that scale.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="group bg-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl hover:scale-105">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-gray-50 text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center border border-gray-200 hover:border-gray-300">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </motion.div>

          {/* Company logos */}
          <motion.div
            className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-40 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {['Microsoft', 'Google', 'Amazon', 'Apple', 'Meta', 'Tesla'].map((company) => (
              <div key={company} className="text-gray-600 font-semibold text-center hover:text-purple-600 transition-colors cursor-pointer">
                {company}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div 
          className="absolute top-32 left-10 w-20 h-20 bg-purple-100 rounded-2xl opacity-50"
          style={{ y: y1 }}
          animate={{ rotate: [0, 360] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
        />
        <motion.div 
          className="absolute bottom-32 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-40"
          style={{ y: y2 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Globe}
              title="Cloud Solutions"
              description="Scalable cloud infrastructure and migration services to modernize your operations."
              features={[
                "AWS & Azure expertise",
                "Migration strategies",
                "24/7 monitoring",
                "Cost optimization"
              ]}
            />
            
            <ServiceCard
              icon={Rocket}
              title="Web Development"
              description="Modern, responsive websites and web applications built with latest technologies."
              features={[
                "React & Next.js",
                "Mobile-first design",
                "SEO optimization",
                "Performance tuning"
              ]}
            />
            
            <ServiceCard
              icon={Shield}
              title="Cybersecurity"
              description="Comprehensive security solutions to protect your digital assets and data."
              features={[
                "Security audits",
                "Threat monitoring",
                "Compliance support",
                "Incident response"
              ]}
            />
            
            <ServiceCard
              icon={Database}
              title="Data Analytics"
              description="Transform raw data into actionable insights with advanced analytics solutions."
              features={[
                "Business intelligence",
                "Custom dashboards",
                "Predictive analytics",
                "Real-time reporting"
              ]}
            />
            
            <ServiceCard
              icon={Users}
              title="Digital Transformation"
              description="End-to-end digital transformation to modernize your business processes."
              features={[
                "Process automation",
                "System integration",
                "Change management",
                "Training & support"
              ]}
            />
            
            <ServiceCard
              icon={TrendingUp}
              title="AI & ML Solutions"
              description="Harness the power of artificial intelligence to gain competitive advantage."
              features={[
                "Machine learning models",
                "Natural language processing",
                "Computer vision",
                "Predictive algorithms"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Trusted Worldwide
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Our track record speaks for itself
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={500} label="Projects Completed" suffix="+" />
            <AnimatedCounter end={150} label="Happy Clients" suffix="+" />
            <AnimatedCounter end={50} label="Countries Served" suffix="+" />
            <AnimatedCounter end={99} label="Success Rate" suffix="%" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Purezza transformed our entire digital infrastructure. Their expertise and dedication are unmatched."
              author="Sarah Johnson"
              title="CTO"
              company="TechFlow Inc"
            />
            <TestimonialCard
              quote="The AI solutions they implemented increased our efficiency by 300%. Absolutely game-changing."
              author="Michael Chen"
              title="CEO"
              company="DataDriven Co"
            />
            <TestimonialCard
              quote="Professional, reliable, and innovative. They delivered exactly what we needed, on time and on budget."
              author="Emily Rodriguez"
              title="COO"
              company="InnovateCorp"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Let's discuss how we can help you achieve your digital transformation goals.
              Get started with a free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-gray-700 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center border border-gray-600 hover:border-gray-500">
                View Our Work
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              No commitment required • Free 30-minute consultation • Get started today
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;