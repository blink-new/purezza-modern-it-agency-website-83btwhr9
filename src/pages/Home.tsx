import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';
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
  Activity
} from 'lucide-react';

// Modern cursor follower
const CursorFollower = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-purple-500/20 rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
};

// Ultra-modern floating orbs
const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-purple-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-purple-800/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

// Premium bento grid component
const BentoCard = ({ className = "", children, ...props }: any) => (
  <motion.div
    className={`group relative bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 hover:bg-white/60 transition-all duration-500 overflow-hidden ${className}`}
    whileHover={{ y: -5, scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    {...props}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    {children}
  </motion.div>
);

// Modern stats counter with enhanced animation
const StatCounter = ({ end, label, prefix = "", suffix = "", description }: { 
  end: number; 
  label: string; 
  prefix?: string; 
  suffix?: string;
  description?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2500;
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
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-xl font-semibold text-gray-900 mb-2">{label}</div>
      {description && (
        <div className="text-sm text-gray-600">{description}</div>
      )}
    </motion.div>
  );
};

// Premium testimonial card with modern design
const TestimonialCard = ({ quote, author, title, company, rating = 5 }: {
  quote: string;
  author: string;
  title: string;
  company: string;
  rating?: number;
}) => (
  <motion.div
    className="relative bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 hover:bg-white/80 transition-all duration-500 group"
    whileHover={{ y: -8, scale: 1.02 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
    
    <Quote className="w-8 h-8 text-purple-500 mb-6" />
    
    <div className="flex mb-6">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-purple-500 fill-purple-500" />
      ))}
    </div>
    
    <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
      "{quote}"
    </p>
    
    <div className="flex items-center">
      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg mr-4">
        {author.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <div className="font-semibold text-gray-900 text-lg">{author}</div>
        <div className="text-purple-600 font-medium">{title}</div>
        <div className="text-gray-600 text-sm">{company}</div>
      </div>
    </div>
  </motion.div>
);

// Ultra-modern feature showcase
const FeatureShowcase = ({ icon: Icon, title, description, features, gradient }: {
  icon: any;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}) => (
  <BentoCard className="col-span-1">
    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradient} rounded-3xl mb-8 shadow-2xl shadow-purple-500/20`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    
    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-900 transition-colors">
      {title}
    </h3>
    
    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
      {description}
    </p>
    
    <div className="space-y-3">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="flex items-center text-gray-700"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
          <span className="font-medium">{feature}</span>
        </motion.div>
      ))}
    </div>
  </BentoCard>
);

// Modern pricing card
const PricingCard = ({ plan, price, period, features, highlighted = false }: {
  plan: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}) => (
  <motion.div
    className={`relative rounded-3xl p-8 ${
      highlighted 
        ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white border-2 border-purple-500' 
        : 'bg-white/60 backdrop-blur-sm border border-gray-200/50 text-gray-900'
    } transition-all duration-500 group hover:scale-105`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {highlighted && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
          Most Popular
        </span>
      </div>
    )}
    
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold mb-2">{plan}</h3>
      <div className="text-5xl font-bold mb-2">{price}</div>
      <div className={`text-sm ${highlighted ? 'text-purple-200' : 'text-gray-600'}`}>
        {period}
      </div>
    </div>
    
    <div className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <CheckCircle className={`w-5 h-5 mr-3 ${highlighted ? 'text-purple-200' : 'text-purple-500'}`} />
          <span>{feature}</span>
        </div>
      ))}
    </div>
    
    <button className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
      highlighted
        ? 'bg-white text-purple-600 hover:bg-gray-100'
        : 'bg-purple-600 text-white hover:bg-purple-700'
    }`}>
      Get Started
    </button>
  </motion.div>
);

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">
      <CursorFollower />
      <FloatingOrbs />
      
      {/* Ultra-modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-8xl mx-auto text-center"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-purple-50 border border-purple-200/50 text-purple-700 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Introducing the future of development
            </span>
          </motion.div>

          <motion.h1 
            className="text-6xl sm:text-7xl lg:text-9xl font-black text-gray-900 mb-12 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ship at the
            <span className="block bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 bg-clip-text text-transparent">
              speed of thought
            </span>
          </motion.h1>

          <motion.p 
            className="text-2xl lg:text-3xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Purezza provides the developer tools and cloud infrastructure to build, 
            scale, and secure applications that redefine what's possible.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="group bg-black text-white px-10 py-5 rounded-2xl font-bold hover:bg-gray-800 transition-all duration-300 flex items-center text-xl shadow-2xl hover:shadow-3xl hover:scale-105">
              Start Building
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-900 px-10 py-5 rounded-2xl font-bold hover:bg-white hover:shadow-2xl transition-all duration-300 flex items-center text-xl hover:scale-105">
              <Play className="w-6 h-6 mr-3" />
              Watch Demo
            </button>
          </motion.div>

          {/* Enhanced company logos */}
          <motion.div
            className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-50 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {['Microsoft', 'Google', 'Apple', 'Meta', 'Netflix', 'Uber'].map((company) => (
              <div key={company} className="text-gray-400 font-bold text-xl hover:text-purple-600 transition-colors cursor-pointer text-center">
                {company}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced floating elements */}
        <motion.div 
          className="absolute top-32 left-16 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl opacity-20"
          style={{ y: y1 }}
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity }
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full opacity-20"
          style={{ y: y2 }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </section>

      {/* Ultra-modern Bento Grid Features */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-8xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight">
              Built for modern teams
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Every feature is crafted with obsessive attention to detail, 
              designed to accelerate your team's velocity and creativity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <FeatureShowcase
              icon={Rocket}
              title="Lightning Fast Deployment"
              description="Deploy from git in seconds, not minutes. Our edge network ensures your applications are always fast, everywhere."
              features={[
                "Sub-second cold starts",
                "Global edge deployment",
                "Zero-config deployments",
                "Instant rollbacks"
              ]}
              gradient="from-purple-500 to-purple-700"
            />
            
            <FeatureShowcase
              icon={Shield}
              title="Enterprise Security"
              description="Bank-grade security built-in. SOC 2, GDPR, and HIPAA compliance without the complexity."
              features={[
                "End-to-end encryption",
                "Zero-trust architecture",
                "Automated compliance",
                "Advanced threat detection"
              ]}
              gradient="from-blue-500 to-blue-700"
            />
            
            <FeatureShowcase
              icon={Database}
              title="Serverless at Scale"
              description="Auto-scaling infrastructure that grows with your success. Pay only for what you use."
              features={[
                "Automatic scaling",
                "Global database replication",
                "Real-time analytics",
                "Cost optimization"
              ]}
              gradient="from-green-500 to-green-700"
            />
          </div>

          {/* Large feature showcase */}
          <BentoCard className="col-span-full mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl mb-8 shadow-2xl shadow-purple-500/20">
                  <Activity className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-6">
                  Real-time Collaboration
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Work together seamlessly with live cursors, instant updates, and intelligent conflict resolution.
                  Your team moves faster when everyone's in sync.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">10ms</div>
                    <div className="text-sm text-gray-600">Average latency</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime SLA</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-8 border border-purple-200/50">
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-sm text-gray-500">Live Collaboration</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-purple-200 rounded w-3/4"></div>
                      <div className="h-2 bg-purple-200 rounded w-1/2"></div>
                      <div className="h-2 bg-purple-200 rounded w-2/3"></div>
                      <div className="flex items-center space-x-2 mt-4">
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                          <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                          <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="text-sm text-gray-600">3 users editing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full" fill="none">
            <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="white" fillOpacity="0.05"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-black mb-8 tracking-tight">
              Trusted globally
            </h2>
            <p className="text-2xl text-purple-200 max-w-4xl mx-auto font-medium">
              From next-gen startups to Fortune 500 companies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter 
              end={50000} 
              label="Projects Deployed" 
              suffix="+" 
              description="And counting every day"
            />
            <StatCounter 
              end={1200} 
              label="Enterprise Clients" 
              suffix="+" 
              description="Across 80+ countries"
            />
            <StatCounter 
              end={99} 
              label="Uptime SLA" 
              suffix="%" 
              description="Guaranteed reliability"
            />
            <StatCounter 
              end={25} 
              label="Billion Requests" 
              suffix="B" 
              description="Handled monthly"
            />
          </div>
        </div>
      </section>

      {/* Modern Testimonials */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight">
              What leaders say
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
              Don't just take our word for it—hear from the teams who've transformed 
              their development experience with Purezza.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Purezza completely transformed how we deploy and scale our applications. Our development velocity increased by 400% in just three months."
              author="Sarah Chen"
              title="VP of Engineering"
              company="TechFlow Inc."
            />
            <TestimonialCard
              quote="The developer experience is unmatched. We went from deployment anxiety to deployment confidence. Our team actually looks forward to shipping now."
              author="Marcus Rodriguez"
              title="CTO & Co-founder"
              company="InnovateAI"
            />
            <TestimonialCard
              quote="Finally, a platform that understands what developers actually need. The attention to detail and performance is remarkable."
              author="Elena Thompson"
              title="Lead Platform Engineer"
              company="DataSynth"
            />
          </div>
        </div>
      </section>

      {/* Modern Pricing */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
              Start free, scale as you grow. No hidden fees, no vendor lock-in.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <PricingCard
              plan="Starter"
              price="$0"
              period="forever"
              features={[
                "5 projects",
                "1GB bandwidth",
                "Community support",
                "Basic analytics"
              ]}
            />
            <PricingCard
              plan="Pro"
              price="$29"
              period="per month"
              highlighted={true}
              features={[
                "Unlimited projects",
                "100GB bandwidth",
                "Priority support",
                "Advanced analytics",
                "Custom domains",
                "Team collaboration"
              ]}
            />
            <PricingCard
              plan="Enterprise"
              price="Custom"
              period="contact us"
              features={[
                "Everything in Pro",
                "Unlimited bandwidth",
                "24/7 phone support",
                "Custom integrations",
                "SSO & SAML",
                "SLA guarantee"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Ultra-modern CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <svg width="40" height="40" viewBox="0 0 40 40" className="w-full h-full" fill="none">
            <pattern id="triangles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="m0 40l40-40h-40z" fill="white" fillOpacity="0.02"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#triangles)"/>
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl lg:text-8xl font-black mb-8 tracking-tight">
              Ready to ship
              <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                at light speed?
              </span>
            </h2>
            <p className="text-2xl text-gray-300 mb-16 leading-relaxed font-medium max-w-4xl mx-auto">
              Join thousands of teams who trust Purezza to power their most important applications.
              Start building the future today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <button className="group bg-white text-black px-12 py-6 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center text-xl shadow-2xl hover:scale-105">
                Start Building Now
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 text-white px-12 py-6 rounded-2xl font-bold hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-center text-xl hover:scale-105">
                Talk to Sales
                <ChevronRight className="w-6 h-6 ml-3" />
              </button>
            </div>

            <div className="text-sm text-gray-500">
              No credit card required • 14-day free trial • Cancel anytime
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;