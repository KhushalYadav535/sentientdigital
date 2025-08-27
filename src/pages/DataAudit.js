import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Search, Shield, BarChart, AlertTriangle, 
  CheckCircle, Clock, Zap, BarChart2, PieChart, 
  BarChart3, LineChart, FileText, ChevronDown, 
  ArrowRight, Play, Award, Users, Code, 
  ClipboardCheck, Calendar, Check, Star
} from 'lucide-react';
import GradientText from '../components/GradientText';

const auditFeatures = [
  {
    title: 'Data Quality Assessment',
    icon: Database,
    description: 'Comprehensive evaluation of data accuracy, completeness, and consistency',
    benefits: [
      'Identify data quality issues',
      'Measure data accuracy metrics',
      'Assess data completeness'
    ]
  },
  {
    title: 'Data Governance Review',
    icon: Shield,
    description: 'Evaluation of data management policies and compliance standards',
    benefits: [
      'Compliance with regulations',
      'Data security assessment',
      'Access control review'
    ]
  },
  {
    title: 'Data Flow Analysis',
    icon: BarChart2,
    description: 'Mapping and analysis of data movement across systems',
    benefits: [
      'Data lineage visualization',
      'Bottleneck identification',
      'Optimization opportunities'
    ]
  },
  {
    title: 'Data Quality Scorecard',
    icon: PieChart,
    description: 'Quantitative assessment of data quality metrics',
    benefits: [
      'Custom scoring system',
      'Benchmarking against standards',
      'Trend analysis over time'
    ]
  },
  {
    title: 'Anomaly Detection',
    icon: AlertTriangle,
    description: 'Identification of unusual patterns and outliers in data',
    benefits: [
      'Automated anomaly detection',
      'Real-time alerts',
      'Root cause analysis'
    ]
  },
  {
    title: 'Data Cataloging',
    icon: FileText,
    description: 'Comprehensive inventory of data assets',
    benefits: [
      'Metadata management',
      'Data dictionary',
      'Business glossary'
    ]
  }
];

const stats = [
  { number: '87%', label: 'Organizations', desc: 'with data quality issues', icon: Database },
  { number: '3.5x', label: 'Faster', desc: 'decision making with clean data', icon: Zap },
  { number: '95%', label: 'Accuracy', desc: 'in data after remediation', icon: CheckCircle },
  { number: '2-4', label: 'Weeks', desc: 'average audit duration', icon: Clock }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CDO, FinTech Solutions",
    content: "The data audit revealed critical gaps in our data governance that we weren't aware of. The insights helped us improve data quality by 78%.",
    rating: 5,
    result: "78% data quality improvement"
  },
  {
    name: "Michael Chen",
    role: "Head of Analytics, HealthPlus",
    content: "The detailed data quality scorecard helped us prioritize our data cleanup efforts and improve reporting accuracy significantly.",
    rating: 5,
    result: "62% faster reporting"
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

const DataAudit = () => {
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
              <Database className="w-6 h-6 text-purple-300" />
              <span className="font-semibold text-purple-200">Data Excellence</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl md:text-7xl font-black mb-8 leading-tight"
            >
              Data Audit & <GradientText>Quality Assessment</GradientText>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-2xl text-slate-200 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Uncover hidden insights in your data with our comprehensive audit services. 
              Identify quality issues, improve governance, and unlock the true potential of your data assets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3">
                <Play className="w-5 h-5" />
                Request Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-slate-400/30 rounded-full font-semibold text-slate-200 hover:border-slate-300 hover:text-white transition-all duration-300 backdrop-blur-sm">
                Download Brochure
              </button>
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Comprehensive Data Audit Services</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our end-to-end data audit process ensures your data is accurate, consistent, and ready for AI/ML initiatives
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {auditFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 ${
                    expandedFeature === index ? 'ring-2 ring-purple-500/30' : ''
                  }`}
                  onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${
                      index % 2 === 0 ? 'from-purple-500/20 to-pink-500/20' : 'from-blue-500/20 to-cyan-500/20'
                    } flex items-center justify-center flex-shrink-0`}>
                      {React.createElement(feature.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <button className="p-1 hover:bg-white/10 rounded-full transition-colors">
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${
                        expandedFeature === index ? 'rotate-180' : ''
                      }`} />
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
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
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
            transition={{ delay: 1.9, duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                See how leading companies transformed their data management with our audit services
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.1 + index * 0.2, duration: 0.5 }}
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
            transition={{ delay: 2.3, duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12">
              <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Data?</h3>
              <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto">
                Schedule a free consultation with our data experts to start your data audit journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                  Get Started with Data Audit
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

export default DataAudit;
