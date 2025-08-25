import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Shield, 
  Users, 
  Brain,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Code,
  Palette,
  Server
} from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 'web',
      icon: Globe,
      title: 'Website Development',
      shortDesc: 'Modern, responsive websites that drive results',
      description: 'We create stunning, high-performance websites that not only look great but also convert visitors into customers. Our websites are built with the latest technologies and best practices.',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Content Management System',
        'E-commerce Integration',
        'Performance Optimization',
        'Security Implementation'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'WordPress', 'Shopify'],
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile App Development',
      shortDesc: 'Native and cross-platform mobile applications',
      description: 'We develop cutting-edge mobile applications for iOS and Android platforms. Our apps are user-friendly, scalable, and designed to provide exceptional user experiences.',
      features: [
        'Native iOS & Android Development',
        'Cross-platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud & Hosting',
      shortDesc: 'Scalable cloud solutions and reliable hosting',
      description: 'We provide comprehensive cloud solutions and hosting services that ensure your applications are always available, secure, and performing at their best.',
      features: [
        'Cloud Migration',
        'Server Management',
        'Load Balancing',
        'Auto-scaling',
        'Backup & Recovery',
        '24/7 Monitoring'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Cybersecurity',
      shortDesc: 'Comprehensive security solutions',
      description: 'Protect your digital assets with our advanced cybersecurity solutions. We implement robust security measures to safeguard your business from evolving threats.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Firewall Configuration',
        'Data Encryption',
        'Incident Response',
        'Security Training'
      ],
      technologies: ['SSL/TLS', 'VPN', 'SIEM', 'WAF', 'EDR'],
      color: 'from-red-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop'
    },
    {
      id: 'consulting',
      icon: Users,
      title: 'IT Consultancy',
      shortDesc: 'Strategic IT consulting services',
      description: 'Our expert consultants help you make informed technology decisions and optimize your IT infrastructure for maximum efficiency and ROI.',
      features: [
        'Technology Assessment',
        'Digital Transformation',
        'Process Optimization',
        'Vendor Selection',
        'Project Management',
        'Training & Support'
      ],
      technologies: ['Agile', 'DevOps', 'ITIL', 'COBIT', 'PMBOK'],
      color: 'from-indigo-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    },
    {
      id: 'ai',
      icon: Brain,
      title: 'AI Integration',
      shortDesc: 'Cutting-edge AI and automation solutions',
      description: 'Leverage the power of artificial intelligence to automate processes, gain insights, and create intelligent solutions that transform your business operations.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Chatbot Development',
        'Process Automation'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Azure AI', 'AWS ML'],
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
    }
  ];

  const processSteps = [
    {
      icon: Target,
      title: 'Discovery',
      description: 'We analyze your requirements and understand your business goals'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Create wireframes and design mockups for your approval'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Build your solution using the latest technologies and best practices'
    },
    {
      icon: Zap,
      title: 'Testing',
      description: 'Rigorous testing to ensure quality and performance'
    },
    {
      icon: Server,
      title: 'Deployment',
      description: 'Deploy your solution with proper monitoring and support'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      duration: 'per project',
      features: [
        'Basic Website/App',
        'Responsive Design',
        'SEO Optimization',
        '3 Months Support',
        'Basic Analytics',
        'Content Management'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$7,999',
      duration: 'per project',
      features: [
        'Advanced Features',
        'Custom Design',
        'E-commerce Integration',
        '6 Months Support',
        'Advanced Analytics',
        'API Integration',
        'Performance Optimization'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      duration: 'per project',
      features: [
        'Custom Development',
        'Scalable Architecture',
        'Advanced Security',
        '12 Months Support',
        'Dedicated Team',
        'Custom Integrations',
        'Performance Monitoring',
        '24/7 Support'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const filteredServices = activeTab === 'all' ? services : services.filter(service => service.id === activeTab);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Choose Your <span className="gradient-text">Service</span>
            </h2>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'web', label: 'Web Development' },
              { id: 'mobile', label: 'Mobile Apps' },
              { id: 'cloud', label: 'Cloud & Hosting' },
              { id: 'security', label: 'Cybersecurity' },
              { id: 'consulting', label: 'Consulting' },
              { id: 'ai', label: 'AI Integration' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group"
              >
                <div className="glass-effect rounded-2xl overflow-hidden card-hover">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                      <service.icon className="text-white" size={24} />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="text-green-500" size={16} />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="btn-primary w-full">
                      Learn More
                      <ArrowRight className="ml-2 inline" size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results for every project.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pricing <span className="gradient-text">Plans</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan that fits your business needs and budget.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="glass-effect rounded-2xl p-8 h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.duration}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="text-green-500" size={20} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your project requirements and create a custom solution that perfectly fits your business needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Start Your Project
              <ArrowRight className="ml-2 inline" size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
