import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Heart,
  Zap,
  Shield,
  Brain,
  Clock
} from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import GradientText from '../components/GradientText';
import { FloatingOrbs, AnimatedGrid, AnimatedTextReveal, PremiumCard, AnimatedDivider, AnimatedCounter } from '../components/PremiumEffects';
import { PremiumBackground } from '../components/EnhancedBackground';
import PremiumButton, { GlowButton, NeonButton } from '../components/PremiumButton';
import PremiumDivider from '../components/PremiumDivider';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      description: 'Visionary leader with 15+ years in tech industry',
      social: { linkedin: '#', twitter: '#' },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Technology expert specializing in AI and cloud solutions',
      social: { linkedin: '#', twitter: '#' },
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'Creative director with passion for user experience',
      social: { linkedin: '#', twitter: '#' },
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'David Kim',
      position: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Full-stack developer with expertise in modern frameworks',
      social: { linkedin: '#', twitter: '#' },
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Lisa Wang',
      position: 'Cybersecurity Specialist',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      description: 'Security expert protecting digital assets',
      social: { linkedin: '#', twitter: '#' },
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Alex Thompson',
      position: 'Business Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      description: 'Strategic thinker bridging business and technology',
      social: { linkedin: '#', twitter: '#' },
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Sentient Digital was established with a vision to transform businesses through technology.',
      icon: Target
    },
    {
      year: '2016',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and delivered a successful e-commerce platform.',
      icon: Award
    },
    {
      year: '2018',
      title: 'AI Division Launch',
      description: 'Launched our AI integration services, becoming pioneers in business automation.',
      icon: Brain
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Expanded operations internationally, serving clients across 15+ countries.',
      icon: Globe
    },
    {
      year: '2022',
      title: 'Cybersecurity Focus',
      description: 'Enhanced our cybersecurity offerings to address growing digital threats.',
      icon: Shield
    },
    {
      year: '2024',
      title: 'Future Ready',
      description: 'Leading the industry with cutting-edge solutions and innovative approaches.',
      icon: Zap
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about technology and its power to transform businesses.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering the highest quality solutions.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaboration to achieve great results.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We constantly innovate and stay ahead of technology trends.',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Projects Completed", color: "from-blue-500 to-cyan-500" },
    { icon: Award, number: "50+", label: "Happy Clients", color: "from-purple-500 to-pink-500" },
    { icon: Clock, number: "10+", label: "Years Experience", color: "from-green-500 to-emerald-500" },
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
        
        <div className="relative z-10 container-custom text-center text-white">
          <AnimatedTextReveal delay={0.2} className="mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-md border border-white/20 mb-6"
            >
              <Users className="w-12 h-12 text-blue-400" />
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              About <GradientText className="text-5xl md:text-7xl lg:text-8xl">Sentient Digital</GradientText>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking IT company dedicated to empowering businesses with innovative technology solutions. Our mission is to transform ideas into digital reality.
            </p>
          </AnimatedTextReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-b from-transparent to-black/20">
        <PremiumDivider variant="gradient" />
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <PremiumCard>
              <div className={`w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6`}>
                <Target className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We strive to be the trusted partner that transforms digital challenges into opportunities.
              </p>
            </PremiumCard>

            {/* Vision */}
            <PremiumCard>
              <div className={`w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6`}>
                <Eye className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the leading technology partner that shapes the future of digital transformation, creating innovative solutions that make a lasting impact on businesses and society.
              </p>
            </PremiumCard>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-r from-black/40 to-transparent">
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <GradientText className="text-4xl md:text-5xl">Values</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The core principles that guide our work and relationships with clients and partners.
            </p>
          </AnimatedTextReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <PremiumCard className="group-hover:scale-105 transition-transform duration-300">
                  <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gradient-to-b from-transparent to-black/20">
        <PremiumDivider variant="neon" />
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <GradientText className="text-4xl md:text-5xl">Journey</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A decade of innovation, growth, and success in the technology industry.
            </p>
          </AnimatedTextReveal>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <PremiumCard>
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                        <item.icon className="text-white" size={20} />
                      </div>
                      <div className="text-2xl font-bold text-blue-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </PremiumCard>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gradient-to-r from-black/40 to-transparent">
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <GradientText className="text-4xl md:text-5xl">Team</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The talented professionals who make our vision a reality through their expertise and dedication.
            </p>
          </AnimatedTextReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <PremiumCard className="text-center group-hover:scale-105 transition-transform duration-300">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white/10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-300 mb-4">{member.description}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                      </svg>
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </a>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <PremiumDivider variant="gradient" />
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-black/20 to-transparent">
        <div className="container-custom text-center">
          <AnimatedTextReveal className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work with <GradientText className="text-4xl md:text-5xl">Us</GradientText>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our innovative IT solutions can drive your business forward. 
              Get in touch today for a free consultation and project quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <GlowButton
                icon={<Zap className="w-5 h-5" />}
                size="lg"
              >
                Start Your Project
              </GlowButton>
              <NeonButton
                icon={<Users className="w-5 h-5" />}
                size="lg"
              >
                Meet Our Team
              </NeonButton>
            </div>
          </AnimatedTextReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
