import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, TrendingUp, Code, Zap, ChevronDown, Check, BarChart, Clock, Users, Award, Shield, Settings, Database, FileText, Search, Zap as Lightning } from 'lucide-react';
import GradientText from '../components/GradientText';

const steps = [
  { 
    step: '1', 
    title: 'Assess', 
    desc: 'Comprehensive evaluation of your current AI capabilities', 
    icon: BarChart, 
    color: 'from-blue-500 to-blue-600',
    features: [
      'AI Maturity Assessment',
      'Data Infrastructure Audit',
      'Talent & Skills Gap Analysis',
      'Technology Stack Review',
      'Competitive Benchmarking'
    ],
    duration: '2-3 weeks',
    outcome: 'Detailed readiness report with actionable insights'
  },
  { 
    step: '2', 
    title: 'Strategy', 
    desc: 'Tailored AI roadmap aligned with business goals', 
    icon: TrendingUp, 
    color: 'from-blue-600 to-purple-600',
    features: [
      'Business Case Development',
      'Use Case Prioritization',
      'Implementation Roadmap',
      'ROI Projections',
      'Risk Assessment'
    ],
    duration: '3-4 weeks',
    outcome: 'Custom AI strategy document with 12-24 month plan'
  },
  { 
    step: '3', 
    title: 'Build', 
    desc: 'End-to-end development of AI capabilities', 
    icon: Code, 
    color: 'from-purple-600 to-indigo-600',
    features: [
      'Data Pipeline Development',
      'Model Development & Training',
      'Infrastructure Setup',
      'Talent Upskilling',
      'MVP Development'
    ],
    duration: '8-12 weeks',
    outcome: 'Production-ready AI solutions with documentation'
  },
  { 
    step: '4', 
    title: 'Scale', 
    desc: 'Enterprise-wide AI transformation', 
    icon: Lightning, 
    color: 'from-indigo-600 to-blue-600',
    features: [
      'Pilot Deployment',
      'Performance Monitoring',
      'Process Integration',
      'Scaling Strategy',
      'Continuous Improvement'
    ],
    duration: 'Ongoing',
    outcome: 'Fully integrated AI capabilities driving business value'
  }
];

const stats = [
  { 
    number: '85%', 
    label: 'Success Rate', 
    desc: 'Organizations achieving AI goals with our framework',
    icon: Award
  },
  { 
    number: '6-12', 
    label: 'Weeks', 
    desc: 'Average time to first AI implementation',
    icon: Clock
  },
  { 
    number: '3.2x', 
    label: 'ROI Increase', 
    desc: 'Average return on AI investment in first year',
    icon: TrendingUp
  },
  { 
    number: '500+', 
    label: 'Enterprises', 
    desc: 'Successfully transformed with our expertise',
    icon: Users
  }
];

const features = [
  {
    title: 'Comprehensive Assessment',
    icon: Search,
    description: 'In-depth analysis of your current AI capabilities and readiness across all business units',
    benefits: ['Gap analysis', 'Maturity scoring', 'Benchmarking']
  },
  {
    title: 'Data Strategy',
    icon: Database,
    description: 'End-to-end data management strategy for AI implementation',
    benefits: ['Data quality assessment', 'Integration planning', 'Governance framework']
  },
  {
    title: 'Custom Roadmap',
    icon: FileText,
    description: 'Tailored implementation plan aligned with business objectives',
    benefits: ['Prioritized use cases', 'Timeline', 'Resource allocation']
  },
  {
    title: 'Risk Management',
    icon: Shield,
    description: 'Identify and mitigate potential AI implementation risks',
    benefits: ['Compliance check', 'Ethical guidelines', 'Security protocols']
  },
  {
    title: 'Talent Development',
    icon: Users,
    description: 'Upskill your team for AI success',
    benefits: ['Training programs', 'Hiring strategy', 'Team structure']
  },
  {
    title: 'Implementation Support',
    icon: Settings,
    description: 'End-to-end support for AI deployment',
    benefits: ['Pilot projects', 'Performance monitoring', 'Optimization']
  }
];

const AIReadiness = () => {
  const [expandedStep, setExpandedStep] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const toggleStep = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full backdrop-blur-md border border-blue-400/30 mb-6">
            <Brain className="w-6 h-6 text-white" />
            <span className="font-semibold">Premium AI Readiness Resources</span>
          </div>
          <h2 className="text-5xl font-extrabold mb-6">
            Master Your <GradientText>AI Journey</GradientText>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive resources to assess, plan, and execute your AI transformation with confidence.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-blue-900/50 p-1 border border-blue-400/20">
            {['overview', 'methodology', 'benefits', 'case-studies'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-blue-200 hover:text-white hover:bg-blue-800/50'
                }`}
              >
                {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-8 mb-16"
          >
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-400/20 hover:border-blue-400/40 flex flex-col"
                onClick={() => toggleStep(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${expandedStep === index ? 'bg-blue-600' : 'bg-blue-900/50'}`}>
                    <ChevronDown className={`w-5 h-5 text-white transition-transform duration-300 ${expandedStep === index ? 'rotate-180' : ''}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-blue-100 text-base mb-4">{item.desc}</p>
                
                <AnimatePresence>
                  {expandedStep === index && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-blue-400/20 mt-4">
                        <h4 className="font-semibold text-blue-200 mb-2">Key Features:</h4>
                        <ul className="space-y-2 mb-4">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="w-4 h-4 text-green-400 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-blue-100 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="text-sm text-blue-200">
                          <p><span className="font-medium">Duration:</span> {item.duration}</p>
                          <p><span className="font-medium">Outcome:</span> {item.outcome}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <button 
                  className="mt-4 text-sm font-medium text-blue-300 hover:text-white transition-colors duration-200 text-left"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle learn more action
                  }}
                >
                  Learn more →
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'methodology' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-900/30 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-blue-400/20"
          >
            <h3 className="text-3xl font-bold mb-6 text-center">Our Proven Methodology</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-200">Assessment Phase</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1.5 mr-3 mt-0.5">
                      <Search className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Discovery Workshop</h5>
                      <p className="text-blue-100 text-sm">Understand business objectives and challenges</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1.5 mr-3 mt-0.5">
                      <BarChart className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Data Audit</h5>
                      <p className="text-blue-100 text-sm">Evaluate data quality, availability, and infrastructure</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1.5 mr-3 mt-0.5">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Stakeholder Interviews</h5>
                      <p className="text-blue-100 text-sm">Gather insights from key team members</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-200">Implementation Phase</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-purple-600 rounded-full p-1.5 mr-3 mt-0.5">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Pilot Development</h5>
                      <p className="text-blue-100 text-sm">Build and test minimum viable AI solutions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-600 rounded-full p-1.5 mr-3 mt-0.5">
                      <Settings className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Integration</h5>
                      <p className="text-blue-100 text-sm">Seamlessly integrate AI into existing workflows</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-600 rounded-full p-1.5 mr-3 mt-0.5">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-medium text-white">Scale & Optimize</h5>
                      <p className="text-blue-100 text-sm">Expand successful pilots and optimize performance</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'benefits' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold mb-12 text-center">Why Choose Our AI Readiness Service?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white">{feature.title}</h4>
                  <p className="text-blue-100 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-sm text-blue-100">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'case-studies' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-blue-400/20"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-400/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Retail Giant</h4>
                </div>
                <p className="text-blue-100 mb-4">Increased sales by 27% through AI-powered personalized recommendations and inventory optimization.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-800/50 text-blue-100 text-xs rounded-full">Personalization</span>
                  <span className="px-3 py-1 bg-blue-800/50 text-blue-100 text-xs rounded-full">Inventory Optimization</span>
                  <span className="px-3 py-1 bg-blue-800/50 text-blue-100 text-xs rounded-full">+27% Sales</span>
                </div>
              </div>
              <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-400/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Financial Services</h4>
                </div>
                <p className="text-blue-100 mb-4">Reduced fraud by 68% using advanced AI detection systems and real-time monitoring.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-800/50 text-blue-100 text-xs rounded-full">Fraud Detection</span>
                  <span className="px-3 py-1 bg-blue-800/50 text-blue-100 text-xs rounded-full">Real-time Monitoring</span>
                  <span className="px-3 py-1 bg-blue-800/50 text-blue-100 text-xs rounded-full">-68% Fraud</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

<motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group p-6 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-md border border-blue-400/20 rounded-2xl hover:bg-blue-900/60 transition-all duration-300 hover:border-blue-400/40 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-1 text-white">{stat.label}</div>
              <div className="text-blue-100 text-sm">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-400/30 rounded-2xl p-8 mb-16 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h3>
            <p className="text-xl text-blue-100 mb-8">Schedule a free consultation with our AI experts to assess your organization's readiness and create a customized AI strategy.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                Book a Free Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-300 hover:bg-blue-900/30 hover:text-white font-semibold rounded-lg transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIReadiness;
