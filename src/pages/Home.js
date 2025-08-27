import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award, 
  Clock, 
  Star,
  Zap,
  Shield,
  Globe,
  Brain,
  Smartphone,
  Cloud,
  Bot
} from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import GradientText from '../components/GradientText';
import { FloatingOrbs, AnimatedGrid, AnimatedTextReveal, PremiumCard, AnimatedDivider, AnimatedCounter } from '../components/PremiumEffects';
import { PremiumBackground } from '../components/EnhancedBackground';
import PremiumButton, { GlowButton, NeonButton } from '../components/PremiumButton';
import PremiumDivider from '../components/PremiumDivider';

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites with cutting-edge technologies",
      features: ["React/Next.js", "SEO Optimized", "Mobile First"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "React Native", "Flutter"]
    },
    {
      icon: Cloud,
      title: "Cloud & Hosting",
      description: "Scalable cloud solutions and reliable hosting",
      features: ["AWS/Azure", "24/7 Support", "Auto Scaling"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions for your business",
      features: ["Penetration Testing", "Security Audits", "Compliance"]
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Intelligent automation and AI-powered solutions",
      features: ["Machine Learning", "Chatbots", "Data Analytics"]
    },
    {
      icon: Bot,
      title: "Automation",
      description: "Streamline operations with smart automation",
      features: ["Process Automation", "Workflow Optimization", "Integration"]
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
    { icon: Award, number: "50+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
    { icon: Clock, number: "5+", label: "Years Experience", color: "from-green-500 to-emerald-500" },
    { icon: Star, number: "99%", label: "Client Satisfaction", color: "from-yellow-500 to-orange-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 custom-scrollbar">
      {/* Premium Background Effects */}
      <PremiumBackground />
      <FloatingOrbs />
      <AnimatedGrid />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        
        {/* Enhanced floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
        />
        
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
        
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-premium"
          >
            <AnimatedTextReveal delay={0.2} className="mb-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-block p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-md border border-white/20 mb-6"
              >
                <Zap className="w-12 h-12 text-blue-400" />
              </motion.div>
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Transform Your Business Operations with{' '}
                <GradientText className="text-5xl md:text-7xl lg:text-8xl">AI That Delivers Measurable Results</GradientText>
              </motion.h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                From revenue growth to cost reduction, we build AI solutions that drive outcomes you can measure within 90 days.
              </p>
            </AnimatedTextReveal>

            <AnimatedTextReveal delay={0.4} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/roi-calculator">
                <GlowButton
                  icon={<ArrowRight className="w-5 h-5" />}
                  size="lg"
                >
                  See Your ROI Potential
                </GlowButton>
              </Link>
              <Link to="/contact">
                <NeonButton
                  icon={<ArrowRight className="w-5 h-5" />}
                  size="lg"
                >
                  Book Strategy Call
                </NeonButton>
              </Link>
            </AnimatedTextReveal>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-black/20">
        <PremiumDivider variant="gradient" />
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <GradientText className="text-4xl md:text-5xl">Premium Services</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation
            </p>
          </AnimatedTextReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid-premium"
          >
            {services.map((service, index) => (
              <PremiumCard key={service.title} delay={index * 0.1} className="group">
                <div className="flex items-start space-x-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-500/20 to-purple-500/20' : 'from-purple-500/20 to-pink-500/20'} border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </PremiumCard>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium group"
              >
                <span className="flex items-center gap-2">
                  View All Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-black/40 to-transparent">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by <GradientText className="text-4xl md:text-5xl">500+ Companies</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself. Join hundreds of satisfied clients who have transformed their businesses with us.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
              >
                <div className={`p-6 rounded-2xl bg-gradient-to-r ${stat.color} bg-opacity-20 backdrop-blur-md border border-white/10 group-hover:scale-105 transition-transform duration-300 mb-4`}>
                  <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={parseInt(stat.number)} className="text-3xl md:text-4xl font-bold text-white" />
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-black/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <GradientText className="text-4xl md:text-5xl">Sentient Digital</GradientText>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that not only meet your current needs but also scale with your future growth.
              </p>
              
              <div className="space-y-6">
                {[
                  "Expert team with 5+ years of experience",
                  "Cutting-edge technology stack",
                  "24/7 support and maintenance",
                  "Scalable and future-proof solutions",
                  "Competitive pricing and transparent billing",
                  "Proven track record of success"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-premium group"
                  >
                    <span className="flex items-center gap-2">
                      Learn More About Us
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Zap, title: "Fast", value: "99.9%", desc: "Uptime" },
                      { icon: Shield, title: "Secure", value: "100%", desc: "Protected" },
                      { icon: Globe, title: "Global", value: "24/7", desc: "Support" },
                      { icon: Brain, title: "Smart", value: "AI", desc: "Powered" }
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{item.value}</div>
                        <div className="text-sm text-gray-300">{item.title}</div>
                        <div className="text-xs text-gray-400">{item.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-black/20 to-transparent">
        <PremiumDivider variant="neon" />
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <GradientText className="text-4xl md:text-5xl">Clients Say</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Sentient Digital.
            </p>
          </AnimatedTextReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                position: "CEO, TechStart Inc.",
                content: "Sentient Digital transformed our business with their innovative AI solutions. The results exceeded our expectations and our revenue increased by 300% in just 6 months.",
                rating: 5,
                avatar: "👩‍💼"
              },
              {
                name: "Michael Chen",
                position: "CTO, Global Solutions",
                content: "The team at Sentient Digital is incredibly professional and skilled. They delivered our mobile app ahead of schedule and it's been a huge success with our users.",
                rating: 5,
                avatar: "👨‍💻"
              },
              {
                name: "Emily Rodriguez",
                position: "Marketing Director, InnovateCorp",
                content: "Working with Sentient Digital was a game-changer for our digital presence. Their website development and SEO optimization helped us reach new markets effectively.",
                rating: 5,
                avatar: "👩‍🎨"
              }
            ].map((testimonial, index) => (
              <PremiumCard key={testimonial.name} delay={index * 0.2} className="text-center">
                <div className="mb-6">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container-custom text-center">
          <AnimatedTextReveal className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <GradientText className="text-4xl md:text-5xl">Business</GradientText>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our innovative IT solutions can drive your business forward. 
              Get in touch today for a free consultation and project quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <GlowButton
                  icon={<ArrowRight className="w-5 h-5" />}
                  size="lg"
                >
                  Start Your Project
                </GlowButton>
              </Link>
              <Link to="/portfolio">
                <NeonButton
                  icon={<ArrowRight className="w-5 h-5" />}
                  size="lg"
                >
                  View Our Work
                </NeonButton>
              </Link>
            </div>
          </AnimatedTextReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
