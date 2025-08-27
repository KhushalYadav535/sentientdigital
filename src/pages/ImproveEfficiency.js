import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Timer, Zap, MessageCircle, Workflow, Eye, CheckCircle, Star, BarChart3, Brain, Rocket, Award, TrendingUp, Clock, Shield, Users, Target } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import GradientText from '../components/GradientText';
import { FloatingOrbs, AnimatedGrid, AnimatedTextReveal, PremiumCard, AnimatedCounter } from '../components/PremiumEffects';
import { PremiumBackground } from '../components/EnhancedBackground';
import { GlowButton, NeonButton } from '../components/PremiumButton';
import PremiumDivider from '../components/PremiumDivider';

const ImproveEfficiency = () => {
  const [activeTab, setActiveTab] = useState('customer-service');

  const solutions = [
    {
      id: 'customer-service',
      title: 'AI-Powered Customer Service',
      icon: MessageCircle,
      outcome: '80% faster response times, 24/7 availability',
      technology: 'Intelligent chatbots + human handoff',
      roi: 'Handle 5x more customer inquiries with same team',
      features: [
        '24/7 automated customer support',
        'Intelligent query routing',
        'Multi-language support',
        'Sentiment analysis',
        'Seamless human handoff',
        'Performance analytics dashboard'
      ],
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
    },
    {
      id: 'workflow-orchestration',
      title: 'Smart Workflow Orchestration',
      icon: Workflow,
      outcome: '70% reduction in process completion time',
      technology: 'n8n + AI decision routing',
      roi: 'Onboard new clients in 2 hours instead of 2 weeks',
      features: [
        'End-to-end process automation',
        'AI-powered decision making',
        'Real-time workflow monitoring',
        'Dynamic process optimization',
        'Integration with existing systems',
        'Comprehensive audit trails'
      ],
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
    },
    {
      id: 'quality-control',
      title: 'Intelligent Quality Control',
      icon: Eye,
      outcome: '95% accuracy with 50% less manual inspection',
      technology: 'Computer vision + automated reporting',
      roi: 'Detect defects instantly, reduce waste by 40%',
      features: [
        'Real-time defect detection',
        'Automated quality scoring',
        'Predictive quality analysis',
        'Comprehensive reporting',
        'Integration with production systems',
        'Continuous learning algorithms'
      ],
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
    }
  ];

  const stats = [
    { icon: TrendingUp, number: "10x", label: "Operations Speed", color: "from-blue-500 to-cyan-500" },
    { icon: Clock, number: "80%", label: "Faster Response", color: "from-green-500 to-emerald-500" },
    { icon: Users, number: "5x", label: "Capacity Increase", color: "from-purple-500 to-pink-500" },
    { icon: Shield, number: "95%", label: "Quality Accuracy", color: "from-yellow-500 to-orange-500" }
  ];

  const processSteps = [
    { icon: Brain, title: 'Efficiency Analysis', desc: 'Comprehensive analysis of current processes and bottlenecks' },
    { icon: Target, title: 'Solution Design', desc: 'Custom efficiency optimization strategy development' },
    { icon: Rocket, title: 'Implementation', desc: 'Rapid deployment with minimal business disruption' },
    { icon: Award, title: 'Optimization', desc: 'Continuous improvement to maximize efficiency gains' }
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
      <PremiumBackground />
      <FloatingOrbs />
      <AnimatedGrid />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <ParticleBackground />
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        <div className="relative z-10 container-custom text-center text-white">
          <AnimatedTextReveal className="mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="inline-block p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-md border border-white/20 mb-6"
            >
              <Timer className="w-12 h-12 text-blue-400" />
            </motion.div>
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6">
              Accelerate Your Operations 10x with <GradientText>Intelligent Automation</GradientText>
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your business processes with AI-powered automation that delivers unprecedented speed, accuracy, and efficiency. See measurable improvements within 90 days.
            </p>
          </AnimatedTextReveal>
          <div className="mt-8 flex justify-center">
            <GlowButton icon={<ArrowRight className="w-5 h-5" />}>Optimize Processes</GlowButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-black/40 to-transparent">
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
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
              >
                <div className={`p-6 rounded-2xl bg-gradient-to-r ${stat.color} bg-opacity-20 backdrop-blur-md border border-white/10 group-hover:scale-105 transition-transform duration-300 mb-4`}>
                  <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
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

      {/* Solutions Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-black/20">
        <PremiumDivider variant="gradient" />
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Efficiency <GradientText className="text-4xl md:text-5xl">Solutions</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the solution that best fits your operational needs and start seeing dramatic efficiency improvements within 90 days
            </p>
          </AnimatedTextReveal>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {solutions.map((solution) => (
              <motion.button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-md border ${
                  activeTab === solution.id
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-white/20 shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border-white/10 hover:border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <solution.icon size={20} />
                <span>{solution.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Solution Details */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {solutions.filter(s => s.id === activeTab).map((solution) => (
              <React.Fragment key={solution.id}>
                <div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                    <solution.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{solution.title}</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="text-green-400" size={20} />
                      <span className="text-gray-300"><strong className="text-white">Outcome:</strong> {solution.outcome}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Brain className="text-blue-400" size={20} />
                      <span className="text-gray-300"><strong className="text-white">Technology:</strong> {solution.technology}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="text-yellow-400" size={20} />
                      <span className="text-gray-300"><strong className="text-white">Impact:</strong> {solution.roi}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-400" size={16} />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <PremiumCard className="overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-64 object-cover rounded-t-xl"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-white mb-4">Implementation Timeline</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Week 1-2</span>
                          <span className="text-white font-medium">Analysis & Strategy</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Week 3-6</span>
                          <span className="text-white font-medium">Development & Testing</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Week 7-8</span>
                          <span className="text-white font-medium">Deployment & Training</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Week 9-12</span>
                          <span className="text-white font-medium">Optimization & Results</span>
                        </div>
                      </div>
                    </div>
                  </PremiumCard>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-r from-black/40 to-transparent">
        <PremiumDivider variant="neon" />
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <GradientText className="text-4xl md:text-5xl">Process</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology to deliver measurable efficiency improvements
            </p>
          </AnimatedTextReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center relative group"
              >
                <PremiumCard className="group-hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.desc}</p>
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <PremiumDivider variant="gradient" />
        <div className="container-custom text-center">
          <AnimatedTextReveal className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your <GradientText className="text-4xl md:text-5xl">Processes</GradientText>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our AI-powered automation can dramatically improve your operational efficiency and productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <GlowButton
                icon={<ArrowRight className="w-5 h-5" />}
                size="lg"
              >
                Optimize Processes
              </GlowButton>
              <NeonButton
                icon={<ArrowRight className="w-5 h-5" />}
                size="lg"
              >
                Book Strategy Call
              </NeonButton>
            </div>
          </AnimatedTextReveal>
        </div>
      </section>
    </div>
  );
};

export default ImproveEfficiency;


