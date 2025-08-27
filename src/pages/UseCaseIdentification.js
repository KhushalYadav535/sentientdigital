import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Target, 
  Brain, 
  Zap, 
  TrendingUp, 
  Users, 
  BarChart, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Award,
  Lightbulb,
  Database,
  Shield,
  Globe,
  Smartphone,
  Cloud,
  Code,
  Palette,
  Sparkles,
  Eye,
  Heart,
  Rocket,
  ShoppingBag,
  Settings
} from 'lucide-react';
import GradientText from '../components/GradientText';

const useCaseCategories = [
  {
    id: 'automation',
    title: 'Process Automation',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    description: 'Streamline repetitive tasks and workflows',
    useCases: [
      {
        title: 'Document Processing Automation',
        description: 'Automate invoice processing, form filling, and document classification',
        benefits: ['90% time reduction', 'Error elimination', 'Cost savings'],
        complexity: 'Medium',
        timeline: '4-6 weeks',
        roi: '300%'
      },
      {
        title: 'Customer Service Automation',
        description: 'Implement chatbots and automated response systems',
        benefits: ['24/7 availability', 'Instant responses', 'Scalability'],
        complexity: 'Low',
        timeline: '2-4 weeks',
        roi: '250%'
      },
      {
        title: 'Data Entry Automation',
        description: 'Automate data extraction and entry processes',
        benefits: ['Accuracy improvement', 'Speed increase', 'Resource optimization'],
        complexity: 'Medium',
        timeline: '3-5 weeks',
        roi: '400%'
      }
    ]
  },
  {
    id: 'analytics',
    title: 'Predictive Analytics',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-500',
    description: 'Forecast trends and make data-driven decisions',
    useCases: [
      {
        title: 'Sales Forecasting',
        description: 'Predict future sales trends and optimize inventory',
        benefits: ['Improved accuracy', 'Better planning', 'Reduced waste'],
        complexity: 'High',
        timeline: '6-8 weeks',
        roi: '500%'
      },
      {
        title: 'Customer Churn Prediction',
        description: 'Identify customers likely to leave and take preventive action',
        benefits: ['Retention improvement', 'Revenue protection', 'Proactive engagement'],
        complexity: 'High',
        timeline: '5-7 weeks',
        roi: '450%'
      },
      {
        title: 'Demand Forecasting',
        description: 'Predict product demand and optimize supply chain',
        benefits: ['Inventory optimization', 'Cost reduction', 'Service improvement'],
        complexity: 'Medium',
        timeline: '4-6 weeks',
        roi: '350%'
      }
    ]
  },
  {
    id: 'personalization',
    title: 'Personalization & Recommendations',
    icon: Heart,
    color: 'from-pink-500 to-red-500',
    description: 'Deliver personalized experiences to customers',
    useCases: [
      {
        title: 'Product Recommendations',
        description: 'AI-powered product suggestions based on user behavior',
        benefits: ['Increased sales', 'Better UX', 'Customer satisfaction'],
        complexity: 'Medium',
        timeline: '3-5 weeks',
        roi: '400%'
      },
      {
        title: 'Content Personalization',
        description: 'Tailor content and messaging to individual users',
        benefits: ['Higher engagement', 'Better conversion', 'Brand loyalty'],
        complexity: 'Medium',
        timeline: '4-6 weeks',
        roi: '300%'
      },
      {
        title: 'Dynamic Pricing',
        description: 'Optimize pricing based on demand and customer segments',
        benefits: ['Revenue maximization', 'Competitive advantage', 'Market responsiveness'],
        complexity: 'High',
        timeline: '5-7 weeks',
        roi: '600%'
      }
    ]
  },
  {
    id: 'quality',
    title: 'Quality Assurance',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    description: 'Ensure product quality and compliance',
    useCases: [
      {
        title: 'Visual Quality Inspection',
        description: 'Automated defect detection in manufacturing',
        benefits: ['Zero defects', 'Cost reduction', 'Consistency'],
        complexity: 'High',
        timeline: '6-8 weeks',
        roi: '400%'
      },
      {
        title: 'Code Quality Analysis',
        description: 'Automated code review and bug detection',
        benefits: ['Faster development', 'Better code', 'Reduced bugs'],
        complexity: 'Medium',
        timeline: '2-4 weeks',
        roi: '250%'
      },
      {
        title: 'Compliance Monitoring',
        description: 'Automated regulatory compliance checking',
        benefits: ['Risk reduction', 'Audit readiness', 'Peace of mind'],
        complexity: 'Medium',
        timeline: '4-6 weeks',
        roi: '350%'
      }
    ]
  }
];

const industries = [
  {
    name: 'Healthcare',
    icon: Heart,
    color: 'from-red-500 to-pink-500',
    useCases: ['Patient Diagnosis', 'Drug Discovery', 'Medical Imaging', 'Predictive Healthcare']
  },
  {
    name: 'Finance',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    useCases: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring']
  },
  {
    name: 'Retail',
    icon: ShoppingBag,
    color: 'from-blue-500 to-purple-500',
    useCases: ['Inventory Management', 'Customer Segmentation', 'Price Optimization', 'Supply Chain']
  },
  {
    name: 'Manufacturing',
    icon: Settings,
    color: 'from-orange-500 to-red-500',
    useCases: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Energy Management']
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Business Analysis',
    description: 'Deep dive into your business processes and pain points',
    icon: Search,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    step: '02',
    title: 'Opportunity Identification',
    description: 'Identify high-impact AI opportunities in your operations',
    icon: Target,
    color: 'from-purple-500 to-pink-500'
  },
  {
    step: '03',
    title: 'Feasibility Assessment',
    description: 'Evaluate technical and business feasibility of each use case',
    icon: Brain,
    color: 'from-green-500 to-emerald-500'
  },
  {
    step: '04',
    title: 'ROI Calculation',
    description: 'Calculate expected return on investment for each use case',
    icon: TrendingUp,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    step: '05',
    title: 'Implementation Roadmap',
    description: 'Create detailed implementation plan with timelines',
    icon: Rocket,
    color: 'from-red-500 to-pink-500'
  }
];

const UseCaseIdentification = () => {
  const [activeCategory, setActiveCategory] = useState('automation');
  const [selectedUseCase, setSelectedUseCase] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-30 blur-sm"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-sm"
        />
        <motion.div
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 3, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-20 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-25 blur-sm"
        />
      </div>

      <div className="relative z-10 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl rounded-full border border-emerald-400/30 mb-8"
            >
              <Sparkles className="w-6 h-6 text-emerald-300" />
              <span className="font-semibold text-emerald-200">AI Use-Case Identification</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl md:text-7xl font-black mb-8 leading-tight"
            >
              Discover Your <GradientText>AI Opportunities</GradientText>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed"
            >
              Identify high-impact AI use cases that can transform your business operations, 
              increase efficiency, and drive significant ROI through our proven methodology.
            </motion.p>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our 5-Step Methodology</h2>
              <p className="text-xl text-slate-300">Proven approach to identify and prioritize AI opportunities</p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-400/20 hover:border-slate-400/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold mb-2 text-white">{step.step}</div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                    <p className="text-slate-300 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Use Case Categories */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">AI Use Case Categories</h2>
              <p className="text-xl text-slate-300">Explore different types of AI applications for your business</p>
            </div>

            {/* Category Navigation */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-lg bg-slate-800/50 p-1 border border-slate-400/20 backdrop-blur-sm">
                {useCaseCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Use Cases Grid */}
            <AnimatePresence mode="wait">
              {useCaseCategories.map((category) => (
                activeCategory === category.id && (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-3 gap-8"
                  >
                    {category.useCases.map((useCase, index) => (
                      <motion.div
                        key={useCase.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-400/20 hover:border-slate-400/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                        onClick={() => setSelectedUseCase(useCase)}
                      >
                        <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <category.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">{useCase.title}</h3>
                        <p className="text-slate-300 mb-6 leading-relaxed">{useCase.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-emerald-300 mb-2">Key Benefits:</h4>
                            <ul className="space-y-1">
                              {useCase.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center text-sm text-slate-300">
                                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-400/20">
                            <div className="text-center">
                              <div className="text-sm text-slate-400">Complexity</div>
                              <div className="font-semibold text-white">{useCase.complexity}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-slate-400">Timeline</div>
                              <div className="font-semibold text-white">{useCase.timeline}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm text-slate-400">ROI</div>
                              <div className="font-semibold text-emerald-400">{useCase.roi}</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Industry Applications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Industry-Specific Applications</h2>
              <p className="text-xl text-slate-300">AI use cases tailored for different industries</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 + index * 0.1, duration: 0.6 }}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-400/20 hover:border-slate-400/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-3"></div>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl border border-emerald-400/30 rounded-3xl p-12">
              <h3 className="text-4xl font-bold mb-6">Ready to Identify Your AI Opportunities?</h3>
              <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto">
                Let our experts analyze your business and identify the most impactful AI use cases for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold text-white hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 flex items-center gap-3">
                  Start Your Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-4 border-2 border-slate-400/30 rounded-full font-semibold text-slate-200 hover:border-slate-300 hover:text-white transition-all duration-300 backdrop-blur-sm">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Use Case Detail Modal */}
      <AnimatePresence>
        {selectedUseCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedUseCase(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 max-w-2xl w-full border border-slate-400/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedUseCase.title}</h2>
                <button
                  onClick={() => setSelectedUseCase(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">{selectedUseCase.description}</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-slate-700/30 rounded-xl">
                  <div className="text-sm text-slate-400">Complexity</div>
                  <div className="text-2xl font-bold text-white">{selectedUseCase.complexity}</div>
                </div>
                <div className="text-center p-4 bg-slate-700/30 rounded-xl">
                  <div className="text-sm text-slate-400">Timeline</div>
                  <div className="text-2xl font-bold text-white">{selectedUseCase.timeline}</div>
                </div>
                <div className="text-center p-4 bg-slate-700/30 rounded-xl">
                  <div className="text-sm text-slate-400">Expected ROI</div>
                  <div className="text-2xl font-bold text-emerald-400">{selectedUseCase.roi}</div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Key Benefits</h3>
                <ul className="space-y-2">
                  {selectedUseCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold text-white hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300">
                  Get Started
                </button>
                <button className="px-6 py-3 border border-slate-400/30 rounded-lg font-semibold text-slate-200 hover:border-slate-300 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default UseCaseIdentification;
