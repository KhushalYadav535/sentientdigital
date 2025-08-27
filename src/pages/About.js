import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Target, 
  Heart, 
  Brain, 
  Sparkles, 
  Shield, 
  Search, 
  Award, 
  Users, 
  UserCheck, 
  Clock, 
  Star,
  ArrowRight
} from 'lucide-react';
import GradientText from '../components/GradientText';

const values = [
  {
    icon: Shield,
    title: 'Fairness',
    description: 'We shall be fair to all our associates; be it Customers, Partners, Vendors and Employees.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Brain,
    title: 'Thoughtfulness',
    description: 'We are committed to be considerate, diligent, and sensible in all our actions and activities.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Heart,
    title: 'Empathy',
    description: 'We shall be compassionate to needs, requirements and feeling of all our stakeholders.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Search,
    title: 'Explore',
    description: 'We shall always explore new and better ways to do things.',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Award,
    title: 'Recognition',
    description: 'We shall always appreciate the efforts, struggles, challenges, and attempts.',
    color: 'from-amber-500 to-amber-600'
  }
];

const philosophy = [
  'We are Perceptive!',
  'We are Responsive!',
  'We are Sensitive!',
  'We are Conscious!',
  'We are Cognizant!',
  'We are Mindful!',
  'We are Aware!',
  'We are Receptive!',
  'We are Observant!',
  'We are Alive!'
];

const stats = [
  { number: '500+', label: 'Happy Clients', icon: UserCheck },
  { number: '50+', label: 'Team Members', icon: Users },
  { number: '10+', label: 'Years Experience', icon: Clock },
  { number: '99%', label: 'Client Satisfaction', icon: Star }
];

const About = () => {
  const [activeSection, setActiveSection] = useState('vision');

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
              <span className="font-semibold text-emerald-200">About Sentient Digital</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl md:text-7xl font-black mb-8 leading-tight"
            >
              We Are <GradientText>Sentient Digital</GradientText>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed"
            >
              Pioneering perceptive IT services that enhance customer experiences through 
              innovative technology solutions and unwavering commitment to excellence.
            </motion.p>
          </motion.div>

          {/* Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex rounded-lg bg-slate-800/50 p-1 border border-slate-400/20 backdrop-blur-sm">
              {[
                { id: 'vision', label: 'Vision & Mission', icon: Eye },
                { id: 'values', label: 'Our Values', icon: Heart },
                { id: 'philosophy', label: 'Philosophy', icon: Brain }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeSection === tab.id
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content Sections */}
          <AnimatePresence mode="wait">
            {activeSection === 'vision' && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="space-y-16"
              >
                {/* Vision */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-400/20">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-2xl text-slate-200 leading-relaxed">
                    To be recognized as a leader in providing perceptive IT services for enhanced customer experiences.
                  </p>
                </div>

                {/* Mission */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-400/20">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-2xl text-slate-200 leading-relaxed">
                    To demystify the Technology Myth; and provide exemplary service quality to each and every customer, 
                    irrespective of size of the business; at sensible prices.
                  </p>
                </div>

                {/* Thumb */}
                <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl p-12 border border-emerald-400/30">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-6 text-emerald-300">Welfare and Happiness for all!!</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'values' && (
              <motion.div
                key="values"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
                  <p className="text-xl text-slate-300">The principles that guide everything we do</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-400/20 hover:border-slate-400/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === 'philosophy' && (
              <motion.div
                key="philosophy"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">Our Philosophy</h2>
                  <p className="text-xl text-slate-300">We are Sentient Digital</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-400/20 mb-16">
                  <div className="grid md:grid-cols-2 gap-8">
                    {philosophy.map((statement, index) => (
                      <motion.div
                        key={statement}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-700/30 to-slate-800/30 rounded-xl border border-slate-400/20 hover:border-slate-400/40 transition-all duration-300"
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                        <span className="text-lg font-semibold text-white">{statement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-400/20 rounded-2xl p-8 hover:border-slate-400/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <stat.icon className="w-8 h-8 text-emerald-300" />
                  </motion.div>
                  <div className="text-4xl font-black mb-3 bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-white">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl border border-emerald-400/30 rounded-3xl p-12">
              <h3 className="text-4xl font-bold mb-6">Ready to Experience Sentient Digital?</h3>
              <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto">
                Join us in our mission to demystify technology and create exceptional customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold text-white hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 flex items-center gap-3">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-4 border-2 border-slate-400/30 rounded-full font-semibold text-slate-200 hover:border-slate-300 hover:text-white transition-all duration-300 backdrop-blur-sm">
                  Contact Our Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
