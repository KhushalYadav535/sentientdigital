import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Calendar, 
  Tag, 
  Globe, 
  Smartphone, 
  Cloud, 
  Shield, 
  Brain, 
  CheckCircle,
  Zap,
  Star,
  Award,
  Clock
} from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import GradientText from '../components/GradientText';
import { FloatingOrbs, AnimatedGrid, AnimatedTextReveal, PremiumCard, AnimatedDivider, AnimatedCounter } from '../components/PremiumEffects';
import { PremiumBackground } from '../components/EnhancedBackground';
import PremiumButton, { GlowButton, NeonButton } from '../components/PremiumButton';
import PremiumDivider from '../components/PremiumDivider';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      client: 'TechMart Inc.',
      duration: '3 months',
      team: '5 developers',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      description: 'A modern e-commerce platform with AI-powered recommendations and real-time inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      results: { revenue: '300% increase', users: '50,000+ active users' },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      client: 'HealthCare Plus',
      duration: '4 months',
      team: '6 developers',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      description: 'Comprehensive healthcare mobile application connecting patients with doctors.',
      technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
      results: { users: '100,000+ downloads', rating: '4.8/5 stars' },
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Cloud Migration Solution',
      category: 'cloud',
      client: 'Global Enterprises',
      duration: '6 months',
      team: '8 developers',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      description: 'Complete cloud migration solution for multinational corporation.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      results: { cost: '40% cost reduction', performance: '60% improvement' },
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Cybersecurity Platform',
      category: 'security',
      client: 'SecureNet Solutions',
      duration: '5 months',
      team: '7 developers',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      description: 'Advanced cybersecurity platform with threat detection and incident response.',
      technologies: ['Python', 'Elasticsearch', 'Kafka', 'React'],
      results: { threats: '99.9% detection rate', incidents: '80% reduction' },
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 5,
      title: 'AI-Powered Analytics',
      category: 'ai',
      client: 'DataInsight Corp',
      duration: '4 months',
      team: '6 developers',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      description: 'Intelligent analytics platform using machine learning for predictive insights.',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      results: { insights: '500% more insights', accuracy: '95% prediction accuracy' },
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 6,
      title: 'Digital Transformation',
      category: 'consulting',
      client: 'Legacy Industries',
      duration: '8 months',
      team: '10 consultants',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      description: 'Comprehensive digital transformation for traditional manufacturing company.',
      technologies: ['SAP', 'IoT', 'Cloud Computing', 'AI/ML'],
      results: { efficiency: '45% improvement', cost: '30% reduction' },
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'web', label: 'Web Development', icon: Globe },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'cloud', label: 'Cloud & Hosting', icon: Cloud },
    { id: 'security', label: 'Cybersecurity', icon: Shield },
    { id: 'ai', label: 'AI Integration', icon: Brain },
    { id: 'consulting', label: 'Consulting', icon: Users }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
    { icon: Award, number: "50+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
    { icon: Clock, number: "5+", label: "Years Experience", color: "from-green-500 to-emerald-500" },
    { icon: Star, number: "99%", label: "Client Satisfaction", color: "from-yellow-500 to-orange-500" }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              <Award className="w-12 h-12 text-blue-400" />
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Our <GradientText className="text-5xl md:text-7xl lg:text-8xl">Portfolio</GradientText>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our successful projects and case studies that demonstrate our expertise in delivering innovative solutions.
            </p>
          </AnimatedTextReveal>
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

      {/* Filter Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-black/20">
        <PremiumDivider variant="gradient" />
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Filter by <GradientText className="text-4xl md:text-5xl">Category</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our projects by category to find examples that match your needs
            </p>
          </AnimatedTextReveal>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-md border ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-white/20 shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border-white/10 hover:border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <filter.icon size={20} />
                <span>{filter.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={itemVariants}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <PremiumCard className="overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center`}>
                        <Zap className="text-white" size={20} />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <span className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{project.duration}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Users size={16} />
                          <span>{project.team}</span>
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs backdrop-blur-md border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </PremiumCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-t-3xl" />
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors">×</button>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-white">{selectedProject.title}</h2>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Tag className="text-blue-400" size={20} />
                        <span className="text-gray-300"><strong className="text-white">Client:</strong> {selectedProject.client}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="text-blue-400" size={20} />
                        <span className="text-gray-300"><strong className="text-white">Duration:</strong> {selectedProject.duration}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="text-blue-400" size={20} />
                        <span className="text-gray-300"><strong className="text-white">Team:</strong> {selectedProject.team}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Key Results</h3>
                    <div className="space-y-3">
                      {Object.entries(selectedProject.results).map(([key, value]) => (
                        <div key={key} className="flex items-center space-x-3">
                          <CheckCircle className="text-green-400" size={20} />
                          <span className="text-gray-300"><strong className="text-white">{key}:</strong> {value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm backdrop-blur-md border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <PremiumDivider variant="neon" />
        <div className="container-custom text-center">
          <AnimatedTextReveal className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your <GradientText className="text-4xl md:text-5xl">Project</GradientText>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's create something amazing together. Contact us to discuss your project requirements and get started on your next big idea.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <GlowButton
                icon={<ArrowRight className="w-5 h-5" />}
                size="lg"
              >
                Start Your Project
              </GlowButton>
              <NeonButton
                icon={<ArrowRight className="w-5 h-5" />}
                size="lg"
              >
                View Our Services
              </NeonButton>
            </div>
          </AnimatedTextReveal>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
