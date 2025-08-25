import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle,
  User,
  Building,
  Zap,
  Users,
  Star,
  Award
} from 'lucide-react';
import Notification from '../components/Notification';
import ParticleBackground from '../components/ParticleBackground';
import GradientText from '../components/GradientText';
import { FloatingOrbs, AnimatedGrid, AnimatedTextReveal, PremiumCard, AnimatedDivider, AnimatedCounter } from '../components/PremiumEffects';
import { PremiumBackground } from '../components/EnhancedBackground';
import PremiumButton, { GlowButton, NeonButton } from '../components/PremiumButton';
import PremiumDivider from '../components/PremiumDivider';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setNotification({
        message: 'Please fill in all required fields',
        type: 'error'
      });
      return;
    }
    
    if (!formData.email.includes('@')) {
      setNotification({
        message: 'Please enter a valid email address',
        type: 'error'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      setNotification({
        message: 'Message sent successfully! We\'ll get back to you soon.',
        type: 'success'
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      setNotification({
        message: 'Something went wrong. Please try again.',
        type: 'error'
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@sentientdigital.com', 'support@sentientdigital.com'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Tech Street', 'Digital City, DC 12345'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const services = [
    'Website Development',
    'Mobile App Development',
    'Cloud & Hosting',
    'Cybersecurity',
    'IT Consultancy',
    'AI Integration',
    'Other'
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
    { icon: Award, number: "50+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
    { icon: Clock, number: "5+", label: "Years Experience", color: "from-green-500 to-emerald-500" },
    { icon: Star, number: "99%", label: "Client Satisfaction", color: "from-yellow-500 to-orange-500" }
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
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      
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
              <Mail className="w-12 h-12 text-blue-400" />
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Get In <GradientText className="text-5xl md:text-7xl lg:text-8xl">Touch</GradientText>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to start your project? Let's discuss how we can help transform your business with innovative technology solutions.
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

      {/* Contact Information */}
      <section className="section-padding bg-gradient-to-b from-transparent to-black/20">
        <PremiumDivider variant="gradient" />
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact <GradientText className="text-4xl md:text-5xl">Information</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Reach out to us through any of these channels. We're here to help you succeed.
            </p>
          </AnimatedTextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <PremiumCard className="group-hover:scale-105 transition-transform duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <info.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-300">{detail}</p>
                    ))}
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gradient-to-r from-black/40 to-transparent">
        <PremiumDivider variant="neon" />
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <PremiumCard>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Send Us a <GradientText className="text-3xl md:text-4xl">Message</GradientText>
                </h2>
                <p className="text-gray-300 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-md"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-md"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-md"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-md"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white backdrop-blur-md"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-3 text-gray-400" size={20} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400 backdrop-blur-md"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting || isSubmitted
                        ? 'bg-green-500 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        <span>Message Sent Successfully!</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </PremiumCard>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <PremiumCard>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Find Us <GradientText className="text-3xl md:text-4xl">Here</GradientText>
                </h2>
                <p className="text-gray-300 mb-8">
                  Visit our office or get in touch with us for a face-to-face discussion about your project.
                </p>
              </PremiumCard>

              {/* Google Maps Embed */}
              <PremiumCard className="overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5!2d-77.0369!3d38.9072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU0JzI2LjAiTiA3N8KwMDInMTIuOSJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sentient Digital Office Location"
                ></iframe>
              </PremiumCard>

              {/* Office Hours */}
              <PremiumCard>
                <h3 className="text-xl font-semibold mb-4 text-white">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="font-medium text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="font-medium text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="font-medium text-white">Closed</span>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-black/20">
        <PremiumDivider variant="gradient" />
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <GradientText className="text-4xl md:text-5xl">Questions</GradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our services and process.
            </p>
          </AnimatedTextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary depending on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We\'ll provide a detailed timeline during our initial consultation.'
              },
              {
                question: 'What is your development process?',
                answer: 'We follow an agile methodology: Discovery → Design → Development → Testing → Deployment. We maintain regular communication and provide progress updates throughout the project.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes, we offer various support packages including maintenance, updates, and technical support. We can customize a support plan that fits your specific needs.'
              },
              {
                question: 'What technologies do you use?',
                answer: 'We use modern, industry-standard technologies including React, Node.js, Python, AWS, and more. We choose the best technology stack based on your project requirements.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PremiumCard>
                  <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <PremiumDivider variant="neon" />
        <div className="container-custom text-center">
          <AnimatedTextReveal className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get <GradientText className="text-4xl md:text-5xl">Started</GradientText>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss your project and create something amazing together. Contact us today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <GlowButton
                icon={<Zap className="w-5 h-5" />}
                size="lg"
              >
                Start Your Project
              </GlowButton>
              <NeonButton
                icon={<Users className="w-5 h-5" />}
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

export default Contact;
