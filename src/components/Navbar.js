import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      children: [
        {
          name: 'Consulting',
          children: [
            { name: 'AI Strategy & Roadmap', path: '/resources/ai-strategy-roadmap' },
            { name: 'AI Readiness Assessment', path: '/resources/ai-readiness' },
            { name: 'Data Audit', path: '/services/consulting/data-audit' },
            { name: 'Use-case Identification', path: '/services/consulting/use-cases' },
            { name: 'Project Scoping & ROI', path: '/services/consulting/scoping-roi' },
            { name: 'Future Market Insights', path: '/services/consulting/future-market-insights' }
          ]
        },
        {
          name: 'Development',
          children: [
            { name: 'Custom Chatbots/Agents', path: '/services/dev/chatbots' },
            { name: 'Workflow Automation', path: '/services/dev/automation' },
            { name: 'Intelligent Document Processing', path: '/services/dev/idp' },
            { name: 'Generative AI App Integration', path: '/services/dev/genai' },
            { name: 'AI Powered Web/Mobile Apps', path: '/services/dev/apps' },
            { name: 'API Integration', path: '/services/dev/api-integration' }
          ]
        },
        {
          name: 'Training',
          children: [
            { name: 'Training & Certification', path: '/services/training/certifications' },
            { name: 'AI Tooling Support', path: '/services/training/tooling' },
            { name: 'Prompt Engineering', path: '/services/training/prompt-engineering' },
            { name: 'MLOps & Governance', path: '/services/training/mlops' }
          ]
        }
      ]
    },
    {
      name: 'Business Outcomes',
      children: [
        { name: 'Increase Revenue', path: '/increase-revenue' },
        { name: 'Reduce Costs', path: '/reduce-costs' },
        { name: 'Improve Efficiency', path: '/improve-efficiency' },
        { name: 'Enhance Customer Experience', path: '/enhance-customer-experience' },
        { name: 'Accelerate Decision Making', path: '/accelerate-decisions' }
      ]
    },
    {
      name: 'Knowledge Center',
      children: [
        {
          name: 'Free Resources',
          children: [
            { name: 'AI Readiness', path: '/resources/ai-readiness' },
            { name: 'ROI Calculator', path: '/roi-calculator' },
            { name: 'Industry Benchmarking', path: '/resources/benchmarking' },
            { name: 'Industry Reports', path: '/resources/industry-reports' }
          ]
        },
        { name: 'Blogs', path: '/blog' }
      ]
    },
    { name: 'Solution Portfolio', path: '/case-studies' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-card-dark neon-glow backdrop-blur-xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-white/20 group-hover:border-white/40 transition-all duration-300"
            >
              <Zap className="w-8 h-8 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                Sentient Digital
              </h1>
              <p className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Next-Gen IT Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {item.children ? (
                  <div className="relative">
                    <button className="nav-link-premium relative px-4 py-2 text-sm font-medium text-white group-hover:text-blue-400 transition-all duration-300">
                      {item.name}
                    </button>
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 mt-2 min-w-[260px] bg-gray-900/95 border border-white/10 rounded-xl shadow-xl p-3 z-50">
                      {item.children.map((child) => (
                        <div key={child.name} className="relative">
                          {child.children ? (
                            <div className="group/sub">
                              <div className="px-3 py-2 text-gray-300 font-semibold">{child.name}</div>
                              <div className="pl-2">
                                {child.children.map((leaf) => (
                                  <Link key={leaf.name} to={leaf.path} className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10">
                                    {leaf.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link to={child.path} className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10">
                              {child.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`nav-link-premium relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-blue-400'
                        : 'text-white hover:text-blue-400'
                    }`}
                  >
                    {item.name}
                    {item.path && isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-white/20"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden md:block"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium text-sm px-6 py-2"
              >
                <span>Get Started</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4 border-t border-white/10">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {item.children ? (
                      <div className="px-4">
                        <div className="text-gray-300 font-semibold mb-2">{item.name}</div>
                        <div className="space-y-1">
                          {item.children.map((child) => (
                            <div key={child.name} className="mb-2">
                              {child.children ? (
                                <>
                                  <div className="text-gray-400 text-sm mb-1">{child.name}</div>
                                  <div className="pl-2 space-y-1">
                                    {child.children.map((leaf) => (
                                      <Link key={leaf.name} to={leaf.path} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base rounded-lg text-white/90 hover:bg-white/10">
                                        {leaf.name}
                                      </Link>
                                    ))}
                                  </div>
                                </>
                              ) : (
                                <Link to={child.path} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base rounded-lg text-white/90 hover:bg-white/10">
                                  {child.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                          item.path && isActive(item.path)
                            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-white/20'
                            : 'text-white hover:bg-white/10 hover:text-blue-400'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-premium"
                    >
                      <span>Get Started</span>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
