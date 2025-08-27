import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Calculator,
  LineChart,
  Workflow,
  ClipboardCheck,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Gauge,
  DollarSign,
  PieChart,
  Layers
} from 'lucide-react';
import GradientText from '../components/GradientText';
import { PremiumBackground } from '../components/EnhancedBackground';
import ParticleBackground from '../components/ParticleBackground';
import PremiumDivider from '../components/PremiumDivider';
import PremiumButton, { GlowButton, NeonButton } from '../components/PremiumButton';
import { FloatingOrbs, AnimatedGrid, AnimatedTextReveal, PremiumCard, AnimatedCounter } from '../components/PremiumEffects';
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

const ProjectScopingROI = () => {
  const benefits = [
    { icon: ClipboardCheck, title: 'Crystal-Clear Scope', desc: 'Eliminate ambiguity with a structured, milestone-based scope' },
    { icon: Gauge, title: 'Faster Time-to-Value', desc: 'Prioritize quick wins that deliver measurable business outcomes' },
    { icon: ShieldCheck, title: 'Reduced Project Risk', desc: 'Mitigate delivery, adoption, and technical risks upfront' },
    { icon: DollarSign, title: 'ROI-First Roadmap', desc: 'Tie every feature to revenue growth or cost savings' }
  ];

  const steps = [
    { icon: Target, title: 'Discovery & Alignment', desc: 'Define success metrics, constraints, and key stakeholders', color: 'from-blue-500 to-cyan-500' },
    { icon: Workflow, title: 'Solution Blueprint', desc: 'Design architecture, user journeys, and delivery milestones', color: 'from-purple-500 to-pink-500' },
    { icon: Calculator, title: 'ROI Modeling', desc: 'Quantify benefits, costs, and payback period with sensitivity', color: 'from-emerald-500 to-green-600' }
  ];

  const roiMetrics = [
    { icon: LineChart, label: 'Projected Uplift', value: 38 },
    { icon: PieChart, label: 'Cost Reduction', value: 27 },
    { icon: Layers, label: 'Adoption Rate', value: 82 }
  ];

  const deliverables = [
    'Executive-ready scope document and timeline',
    'Feature-by-feature ROI mapping',
    'Risk register with mitigation plan',
    'T-shirt sizing and effort estimates',
    'Phased rollout plan aligned to value',
    'KPIs and analytics instrumentation plan'
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
              <Sparkles className="w-12 h-12 text-blue-300" />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Project Scoping <GradientText className="text-4xl md:text-6xl lg:text-7xl">& ROI</GradientText>
            </motion.h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Premium consulting to turn ideas into a crisp, risk-aware plan with a quantified business case.
            </p>
          </AnimatedTextReveal>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/get-started">
              <GlowButton icon={<ArrowRight className="w-5 h-5" />}>Book Discovery Call</GlowButton>
            </Link>
            <Link to="/roi-calculator">
              <NeonButton icon={<Calculator className="w-5 h-5" />}>Try ROI Calculator</NeonButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gradient-to-r from-black/40 to-transparent">
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why This Engagement</h2>
            <p className="text-lg text-gray-300">Designed to deliver clarity, confidence, and value alignment from day one.</p>
          </AnimatedTextReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((b, i) => (
              <motion.div key={b.title} variants={itemVariants}>
                <PremiumCard className="h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-white/10 backdrop-blur-md flex items-center justify-center mb-4">
                    <b.icon className="text-white" size={26} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-gray-300 text-sm">{b.desc}</p>
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gradient-to-b from-transparent to-black/20">
        <PremiumDivider variant="gradient" />
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Three-Week Premium Sprint</h2>
            <p className="text-lg text-gray-300">Move from idea to board-ready plan in 15 business days.</p>
          </AnimatedTextReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {steps.map((s, idx) => (
              <motion.div key={s.title} variants={itemVariants} className="relative">
                <PremiumCard className="h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${s.color} rounded-full flex items-center justify-center mb-4`}>
                    <s.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-300 text-sm">{s.desc}</p>
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ROI Snapshot */}
      <section className="section-padding bg-gradient-to-r from-black/40 to-transparent">
        <PremiumDivider variant="neon" />
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">ROI Snapshot</h2>
            <p className="text-lg text-gray-300">We quantify outcomes, not just outputs.</p>
          </AnimatedTextReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {roiMetrics.map((m) => (
              <motion.div key={m.label} variants={itemVariants} className="text-center">
                <PremiumCard>
                  <m.icon className="w-10 h-10 text-white mx-auto mb-4" />
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

      {/* Deliverables */}
      <section className="section-padding bg-gradient-to-b from-transparent to-black/20">
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What You Get</h2>
            <p className="text-lg text-gray-300">Premium artifacts you can execute and present immediately.</p>
          </AnimatedTextReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {deliverables.map((d, i) => (
              <motion.div key={i} variants={itemVariants}>
                <PremiumCard>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-400 mt-0.5" size={18} />
                    <span className="text-gray-200">{d}</span>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <PremiumDivider variant="gradient" />
        <div className="container-custom text-center">
          <AnimatedTextReveal className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Scope with Confidence?</h2>
            <p className="text-lg text-gray-300 mb-8">Speak to our consultants and get a premium scoping & ROI plan tailored to your goals.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/get-started">
                <GlowButton icon={<ArrowRight className="w-5 h-5" />} size="lg">Start Your Engagement</GlowButton>
              </Link>
              <Link to="/roi-calculator">
                <NeonButton icon={<Calculator className="w-5 h-5" />} size="lg">Estimate ROI</NeonButton>
              </Link>
            </div>
          </AnimatedTextReveal>
        </div>
      </section>
    </div>
  );
};

export default ProjectScopingROI;


