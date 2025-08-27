import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap, DollarSign, Users, Target, CheckCircle, Star, BarChart3, Brain, Rocket, Award } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import GradientText from '../components/GradientText';
import { FloatingOrbs, AnimatedGrid, AnimatedTextReveal, PremiumCard, AnimatedCounter } from '../components/PremiumEffects';
import { PremiumBackground } from '../components/EnhancedBackground';
import { GlowButton, NeonButton } from '../components/PremiumButton';
import PremiumDivider from '../components/PremiumDivider';

const IncreaseRevenue = () => {
  const [activeTab, setActiveTab] = useState('ai-sales');

  const solutions = [
    {
      id: 'ai-sales',
      title: 'AI Sales Assistant',
      icon: Users,
      outcome: '30% increase in lead conversion',
      technology: 'n8n + OpenAI + CRM integration',
      roi: '$50K investment → $200K additional revenue',
      features: [
        '24/7 lead qualification and scoring',
        'Personalized follow-up sequences',
        'Real-time sales opportunity alerts',
        'Automated proposal generation',
        'Predictive lead scoring',
        'Multi-channel engagement tracking'
      ],
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
    },
    {
      id: 'dynamic-pricing',
      title: 'Dynamic Pricing Optimization',
      icon: DollarSign,
      outcome: '15-25% margin improvement',
      technology: 'Predictive analytics + real-time pricing',
      roi: 'E-commerce client increased profits by $180K annually',
      features: [
        'Real-time market analysis',
        'Competitor price monitoring',
        'Demand forecasting algorithms',
        'Seasonal pricing optimization',
        'Customer segment pricing',
        'A/B testing for price sensitivity'
      ],
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
    },
    {
      id: 'clv-maximization',
      title: 'Customer Lifetime Value Maximization',
      icon: Target,
      outcome: '35% improvement in customer retention',
      technology: 'AI-powered personalization + recommendation engines',
      features: [
        'Behavioral pattern analysis',
        'Personalized product recommendations',
        'Churn prediction and prevention',
        'Loyalty program optimization',
        'Cross-selling and upselling automation',
        'Customer journey optimization'
      ],
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
    }
  ];

  const stats = [
    { icon: TrendingUp, number: "25-40%", label: "Revenue Growth", color: "from-blue-500 to-cyan-500" },
    { icon: DollarSign, number: "$200K+", label: "Additional Revenue", color: "from-green-500 to-emerald-500" },
    { icon: Users, number: "30%", label: "Lead Conversion", color: "from-purple-500 to-pink-500" },
    { icon: Star, number: "35%", label: "Customer Retention", color: "from-yellow-500 to-orange-500" }
  ];

  const processSteps = [
    { icon: Brain, title: 'AI Analysis', desc: 'Deep analysis of your sales data and customer behavior' },
    { icon: Target, title: 'Strategy Design', desc: 'Custom revenue optimization strategy development' },
    { icon: Rocket, title: 'Implementation', desc: 'Rapid deployment with continuous optimization' },
    { icon: Award, title: 'Results', desc: 'Measurable revenue growth within 90 days' }
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
          <AnimatedTextReveal delay={0.2} className="mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="inline-block p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-md border border-white/20 mb-6"
            >
              <TrendingUp className="w-12 h-12 text-blue-400" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Boost Your Revenue by 25-40% with <GradientText>AI-Powered Growth</GradientText>
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your business with intelligent AI solutions that drive measurable revenue growth. From lead conversion to customer lifetime value, we deliver results that impact your bottom line.
            </p>
          </AnimatedTextReveal>

          <div className="mt-8 flex justify-center">
            <GlowButton icon={<ArrowRight className="w-5 h-5" />}>Calculate Your Revenue Potential</GlowButton>
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
              Revenue-Driving <GradientText className="text-4xl md:text-5xl">Solutions</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the solution that best fits your business needs and start seeing results within 90 days
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
                      <Target className="text-green-400" size={20} />
                      <span className="text-gray-300"><strong className="text-white">Outcome:</strong> {solution.outcome}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Brain className="text-blue-400" size={20} />
                      <span className="text-gray-300"><strong className="text-white">Technology:</strong> {solution.technology}</span>
                    </div>
                    {solution.roi && (
                      <div className="flex items-center space-x-3">
                        <DollarSign className="text-yellow-400" size={20} />
                        <span className="text-gray-300"><strong className="text-white">ROI Example:</strong> {solution.roi}</span>
                      </div>
                    )}
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
              A proven methodology to deliver measurable revenue growth
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
              Ready to Boost Your <GradientText className="text-4xl md:text-5xl">Revenue</GradientText>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our AI-powered solutions can drive measurable revenue growth for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <GlowButton
                icon={<ArrowRight className="w-5 h-5" />}
                size="lg"
              >
                Calculate Your Revenue Potential
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

export default IncreaseRevenue;


