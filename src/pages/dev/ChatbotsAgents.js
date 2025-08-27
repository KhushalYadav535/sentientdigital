import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Workflow, MessageSquare, Cpu, ShieldCheck, ArrowRight, CheckCircle, Gauge } from 'lucide-react';
import GradientText from '../../components/GradientText';
import { PremiumBackground } from '../../components/EnhancedBackground';
import ParticleBackground from '../../components/ParticleBackground';
import PremiumDivider from '../../components/PremiumDivider';
import PremiumButton, { GlowButton, NeonButton } from '../../components/PremiumButton';
import { FloatingOrbs, AnimatedGrid, AnimatedTextReveal, PremiumCard, AnimatedCounter } from '../../components/PremiumEffects';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const ChatbotsAgents = () => {
  const highlights = [
    { icon: MessageSquare, title: 'Omnichannel Chatbots', desc: 'Web, WhatsApp, Instagram, Slack, and more' },
    { icon: Workflow, title: 'Agentic Workflows', desc: 'Tools, memory, and multi-step reasoning' },
    { icon: Cpu, title: 'Enterprise-Grade LLMs', desc: 'OpenAI, Claude, local models, and guardrails' },
    { icon: ShieldCheck, title: 'Secure by Design', desc: 'RBAC, audit logs, and data privacy controls' }
  ];

  const useCases = [
    { title: 'Customer Support', desc: '24/7 automated assistance with human handoff', color: 'from-blue-500 to-cyan-500' },
    { title: 'Lead Qualification', desc: 'Qualify, route, and book meetings instantly', color: 'from-purple-500 to-pink-500' },
    { title: 'Knowledge Assistant', desc: 'QA over your docs, wikis, and data', color: 'from-emerald-500 to-green-600' },
    { title: 'Internal Ops Agent', desc: 'Automate SOPs across tools and APIs', color: 'from-amber-500 to-orange-600' }
  ];

  const metrics = [
    { label: 'Deflection Rate', value: 65 },
    { label: 'CSAT Uplift', value: 22 },
    { label: 'First Response Time', value: 90 }
  ];

  const stack = [
    'Retrieval-Augmented Generation (RAG)',
    'Vector search (Pinecone/FAISS/Weaviate)',
    'Tool use & function calling',
    'Memory & user profiles',
    'Multimodal inputs (text, voice, images)',
    'Observability & evaluation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <PremiumBackground />
      <FloatingOrbs />
      <AnimatedGrid />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-24 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-pattern opacity-20"></div>

        <div className="relative z-10 container-custom text-center">
          <AnimatedTextReveal className="mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="inline-block p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-md border border-white/20 mb-6"
            >
              <Bot className="w-12 h-12 text-blue-300" />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Custom <GradientText className="text-4xl md:text-6xl lg:text-7xl">Chatbots & Agents</GradientText>
            </motion.h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Premium, brand-aligned conversational AI that solves real problems across support, sales, and ops.
            </p>
          </AnimatedTextReveal>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/get-started">
              <GlowButton icon={<ArrowRight className="w-5 h-5" />}>Book Demo</GlowButton>
            </Link>
            <Link to="/contact">
              <NeonButton icon={<Sparkles className="w-5 h-5" />}>Get a Proposal</NeonButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-gradient-to-r from-black/40 to-transparent">
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Our Bots Win</h2>
            <p className="text-lg text-gray-300">Engineered for accuracy, security, and delightful UX.</p>
          </AnimatedTextReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((h) => (
              <motion.div key={h.title} variants={itemVariants}>
                <PremiumCard className="h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-white/10 backdrop-blur-md flex items-center justify-center mb-4">
                    <h.icon className="text-white" size={26} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{h.title}</h3>
                  <p className="text-gray-300 text-sm">{h.desc}</p>
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-gradient-to-b from-transparent to-black/20">
        <PremiumDivider variant="gradient" />
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">High-Impact Use Cases</h2>
            <p className="text-lg text-gray-300">Proven patterns that deliver ROI fast.</p>
          </AnimatedTextReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {useCases.map((u) => (
              <motion.div key={u.title} variants={itemVariants} className="relative">
                <PremiumCard className="h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${u.color} rounded-full flex items-center justify-center mb-4`}>
                    <Sparkles className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{u.title}</h3>
                  <p className="text-gray-300 text-sm">{u.desc}</p>
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding bg-gradient-to-r from-black/40 to-transparent">
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Outcomes That Matter</h2>
            <p className="text-lg text-gray-300">We ship results, not just models.</p>
          </AnimatedTextReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {metrics.map((m) => (
              <motion.div key={m.label} variants={itemVariants} className="text-center">
                <PremiumCard>
                  <Gauge className="w-10 h-10 text-white mx-auto mb-4" />
                  <div className="text-4xl font-extrabold text-white mb-2">
                    <AnimatedCounter end={m.value} />%
                  </div>
                  <div className="text-gray-300">{m.label}</div>
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="section-padding bg-gradient-to-b from-transparent to-black/20">
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Built the Right Way</h2>
            <p className="text-lg text-gray-300">Modern agent architecture with best practices.</p>
          </AnimatedTextReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {stack.map((s, i) => (
              <motion.div key={i} variants={itemVariants}>
                <PremiumCard>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-400 mt-0.5" size={18} />
                    <span className="text-gray-200">{s}</span>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <PremiumDivider variant="neon" />
        <div className="container-custom text-center">
          <AnimatedTextReveal className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Launch Your Agent?</h2>
            <p className="text-lg text-gray-300 mb-8">We’ll scope, build, and integrate a premium chatbot/agent tailored to your workflows.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/get-started">
                <GlowButton icon={<ArrowRight className="w-5 h-5" />} size="lg">Start Your Build</GlowButton>
              </Link>
              <Link to="/contact">
                <NeonButton icon={<Sparkles className="w-5 h-5" />} size="lg">Talk to an Expert</NeonButton>
              </Link>
            </div>
          </AnimatedTextReveal>
        </div>
      </section>
    </div>
  );
};

export default ChatbotsAgents;


