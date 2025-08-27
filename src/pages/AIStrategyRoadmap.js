import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, BarChart, Layers, Zap, Clock, TrendingUp, 
  Check, ArrowRight, Play, Brain, Rocket, Award, 
  Users, Shield, Code, Database, FileText, Star, 
  ChevronDown, Lightbulb, PieChart, GitBranch, 
  Settings, Cpu, BarChart2, GitMerge, GitPullRequest,
  ClipboardCheck, Calendar, Flag, Award as Trophy, 
  BarChart3, LineChart, BarChart4, PieChart as ChartPie,
  ArrowRightCircle, ChevronRight, CheckCircle
} from 'lucide-react';
import GradientText from '../components/GradientText';

const phases = [
  {
    id: 1,
    title: 'Discovery & Assessment',
    icon: Lightbulb,
    color: 'from-emerald-400 to-cyan-500',
    bgColor: 'from-emerald-500/20 to-cyan-500/20',
    duration: '2-4 Weeks',
    deliverables: [
      'Current State Analysis',
      'Stakeholder Interviews',
      'Competitive Benchmarking',
      'Readiness Assessment'
    ],
    description: 'Comprehensive evaluation of your organization\'s current AI capabilities, data infrastructure, and strategic alignment.'
  },
  {
    id: 2,
    title: 'Strategy Development',
    icon: Target,
    color: 'from-purple-400 to-pink-500',
    bgColor: 'from-purple-500/20 to-pink-500/20',
    duration: '3-5 Weeks',
    deliverables: [
      'AI Vision & Objectives',
      'Use Case Prioritization',
      'Implementation Roadmap',
      'ROI Framework'
    ],
    description: 'Crafting a tailored AI strategy aligned with your business goals and competitive landscape.'
  },
  {
    id: 3,
    title: 'Execution Planning',
    icon: GitBranch,
    color: 'from-blue-400 to-indigo-500',
    bgColor: 'from-blue-500/20 to-indigo-500/20',
    duration: '4-6 Weeks',
    deliverables: [
      'Technical Architecture',
      'Talent Strategy',
      'Change Management Plan',
      'Governance Framework'
    ],
    description: 'Detailed planning for implementation, including technical requirements and organizational changes.'
  },
  {
    id: 4,
    title: 'Implementation & Scaling',
    icon: Rocket,
    color: 'from-orange-400 to-red-500',
    bgColor: 'from-orange-500/20 to-red-500/20',
    duration: 'Ongoing',
    deliverables: [
      'Pilot Programs',
      'Performance Monitoring',
      'Scale Strategy',
      'Continuous Improvement'
    ],
    description: 'Guided execution with continuous optimization and scaling of AI initiatives.'
  }
];

const features = [
  {
    title: 'Custom AI Roadmap',
    icon: GitPullRequest,
    description: 'Tailored implementation plan with clear milestones and success metrics',
    benefits: ['90-day action plan', 'Quarterly milestones', 'Resource allocation']
  },
  {
    title: 'ROI Analysis',
    icon: BarChart3,
    description: 'Comprehensive financial modeling to predict and track AI investment returns',
    benefits: ['Cost-benefit analysis', 'Break-even point', 'Long-term value']
  },
  {
    title: 'Talent Strategy',
    icon: Users,
    description: 'Workforce planning and upskilling for AI adoption',
    benefits: ['Skills gap analysis', 'Training programs', 'Hiring strategy']
  },
  {
    title: 'Technology Stack',
    icon: Cpu,
    description: 'Optimal AI/ML tools and platforms for your needs',
    benefits: ['Vendor evaluation', 'Integration planning', 'Total cost of ownership']
  },
  {
    title: 'Risk Management',
    icon: Shield,
    description: 'Identify and mitigate potential AI implementation risks',
    benefits: ['Compliance check', 'Ethical guidelines', 'Security protocols']
  },
  {
    title: 'Performance Tracking',
    icon: LineChart,
    description: 'Metrics and KPIs to measure AI initiative success',
    benefits: ['Custom dashboards', 'Progress reports', 'Success metrics']
  }
];

const stats = [
  { number: '6-9', label: 'Months', desc: 'Average time to AI implementation', icon: Clock },
  { number: '3.8x', label: 'ROI', desc: 'Average return on AI investment', icon: TrendingUp },
  { number: '89%', label: 'Success Rate', desc: 'Of AI initiatives meeting goals', icon: Award },
  { number: '500+', label: 'Enterprises', desc: 'Transformed with our framework', icon: Users }
];

const testimonials = [
  {
    name: "Michael Chen",
    role: "CDO, TechNova Solutions",
    content: "The AI roadmap provided clear direction and helped us achieve 4.2x ROI in the first year. The phased approach made implementation manageable.",
    rating: 5,
    result: "4.2x ROI in first year"
  },
  {
    name: "Sarah Johnson",
    role: "VP of Innovation, FinEdge",
    content: "Their strategic framework transformed how we approach AI. We've automated 40% of manual processes and improved decision-making accuracy by 65%.",
    rating: 5,
    result: "65% better decisions"
  }
];

const FloatingElement = ({ children, delay = 0, duration = 3 }) => (
  <motion.div
    animate={{
      y: [-10, 10, -10],
      rotate: [0, 5, 0]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute"
  >
    {children}
  </motion.div>
);

const AIStrategyRoadmap = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement delay={0} className="top-20 left-10">
          <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-30 blur-sm"></div>
        </FloatingElement>
        <FloatingElement delay={1} className="top-40 right-20">
          <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-sm"></div>
        </FloatingElement>
        <FloatingElement delay={2} className="bottom-40 left-20">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-25 blur-sm"></div>
        </FloatingElement>
        <FloatingElement delay={0.5} className="bottom-20 right-10">
          <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 blur-sm"></div>
        </FloatingElement>
      </div>

      <div className="relative z-10 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-full border border-purple-400/30 mb-8 hover:border-purple-400/50 transition-all duration-300"
            >
              <Rocket className="w-6 h-6 text-purple-300" />
              <span className="font-semibold text-purple-200">Strategic AI Transformation</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl md:text-7xl font-black mb-8 leading-tight"
            >
              AI Strategy & <GradientText>Roadmap</GradientText>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-2xl text-slate-200 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Transform your business with a comprehensive, actionable AI strategy and implementation roadmap tailored to your unique goals and challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3">
                <Play className="w-5 h-5" />
                Book Strategy Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-slate-400/30 rounded-full font-semibold text-slate-200 hover:border-slate-300 hover:text-white transition-all duration-300 backdrop-blur-sm">
                Download Brochure
              </button>
            </motion.div>
          </motion.div>

          {/* Phases Section */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Proven 4-Phase Approach</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">A structured methodology to ensure successful AI adoption and implementation</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  className={`relative cursor-pointer group ${activePhase === index ? 'lg:scale-110 z-10' : 'opacity-80 hover:opacity-100'}`}
                  onClick={() => setActivePhase(index)}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${phase.color} rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-300 ${activePhase === index ? 'opacity-50' : ''}`}></div>
                  <div className={`relative bg-gradient-to-br ${phase.bgColor} backdrop-blur-xl rounded-2xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300 ${activePhase === index ? 'border-purple-400/50 shadow-2xl shadow-purple-500/20' : ''}`}>
                    <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-r ${phase.color} shadow-lg`}>
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                      <span className="text-sm bg-white/10 px-3 py-1 rounded-full">{phase.duration}</span>
                    </div>
                    <p className="text-slate-300 mb-6">{phase.description}</p>
                    <div className="space-y-2">
                      {phase.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-sm text-slate-400">Phase 0{phase.id}</span>
                      <button className="text-sm font-medium text-purple-300 hover:text-white flex items-center gap-1">
                        Learn more <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Phase Details */}
            <motion.div 
              key={activePhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${phases[activePhase].color} flex items-center justify-center`}>
                      {React.createElement(phases[activePhase].icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <span className="text-sm text-slate-400">Phase 0{phases[activePhase].id}</span>
                      <h3 className="text-2xl font-bold text-white">{phases[activePhase].title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-6">{phases[activePhase].description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5">
                      <div className="text-sm text-slate-400 mb-1">Duration</div>
                      <div className="font-medium">{phases[activePhase].duration}</div>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5">
                      <div className="text-sm text-slate-400 mb-1">Key Deliverables</div>
                      <div className="font-medium">{phases[activePhase].deliverables.length}+</div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium text-white hover:opacity-90 transition-opacity">
                    Get Started with Phase {activePhase + 1}
                  </button>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-6 border border-white/5">
                  <h4 className="font-semibold text-lg mb-4">Key Activities</h4>
                  <ul className="space-y-4">
                    {phases[activePhase].deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-medium text-purple-300">{idx + 1}</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-white">{item}</h5>
                          <p className="text-sm text-slate-400 mt-1">Detailed description of {item.toLowerCase()} process and expected outcomes.</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Comprehensive AI Strategy Framework</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">Everything you need to develop and execute a successful AI strategy</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 ${expandedFeature === index ? 'ring-2 ring-purple-500/30' : ''}`}
                  onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${index % 2 === 0 ? 'from-purple-500/20 to-pink-500/20' : 'from-blue-500/20 to-cyan-500/20'} flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <button className="p-1 hover:bg-white/10 rounded-full transition-colors">
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedFeature === index ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold mt-6 mb-3 text-white">{feature.title}</h3>
                  <p className="text-slate-300 mb-4">{feature.description}</p>
                  
                  <AnimatePresence>
                    {expandedFeature === index && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-white/10">
                          <h4 className="text-sm font-semibold text-slate-300 mb-3">Key Benefits:</h4>
                          <ul className="space-y-2">
                            {feature.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-slate-300">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                          <button className="mt-4 text-sm font-medium text-purple-300 hover:text-white flex items-center gap-1 transition-colors">
                            Learn more <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.1 + index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-300">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">See how leading companies transformed their business with our AI strategy framework</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5 + index * 0.2 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-slate-200 italic mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}</div>
                    </div>
                    <div className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-full text-sm font-medium">
                      {testimonial.result}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12">
              <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h3>
              <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto">
                Schedule a free consultation with our AI strategy experts to create a customized roadmap for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                  Book Free Consultation
                </button>
                <button className="px-10 py-4 border-2 border-slate-400/30 rounded-full font-semibold text-slate-200 hover:border-slate-300 hover:text-white transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIStrategyRoadmap;
