import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  BarChart2,
  TrendingUp,
  Globe2,
  Search,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle,
  Database,
  Radar,
  PieChart,
  CalendarClock
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
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const FutureMarketInsights = () => {
  const highlights = [
    { icon: TrendingUp, title: 'Actionable Forecasts', desc: 'Executive-ready projections mapped to revenue, CAC, and LTV' },
    { icon: Radar, title: 'Signals & Inflections', desc: 'Detect market shifts early with trend and sentiment analysis' },
    { icon: Layers, title: 'Segment Deep-Dives', desc: 'Granular views by geo, ICP, channel, and product lines' },
    { icon: Database, title: 'Data-Rich Methodology', desc: 'Blend primary research, third-party data, and your telemetry' }
  ];

  const modules = [
    { icon: Search, title: 'Market Landscape', desc: 'TAM/SAM/SOM, competitor plays, whitespaces', color: 'from-blue-500 to-cyan-500' },
    { icon: LineChart, title: 'Growth Scenarios', desc: 'Base, bull, and bear trajectories with drivers', color: 'from-purple-500 to-pink-500' },
    { icon: PieChart, title: 'Segment Prioritization', desc: 'Attractiveness vs. fit matrix with scoring', color: 'from-emerald-500 to-green-600' },
    { icon: BarChart2, title: 'Go-To-Market Levers', desc: 'Pricing, packaging, channels, partnerships', color: 'from-yellow-500 to-orange-500' }
  ];

  const impactStats = [
    { icon: TrendingUp, label: 'Opportunity Uplift', value: 42 },
    { icon: CalendarClock, label: 'Faster GTM Decisions', value: 3 },
    { icon: Globe2, label: 'New Markets Identified', value: 6 }
  ];

  const deliverables = [
    'Executive insights deck with narratives and visuals',
    'Data appendix with sources and assumptions',
    'Prioritized market-entry and expansion roadmap',
    'Forecast model with adjustable assumptions',
    'Competitor battlecards and positioning guidance'
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
              Future <GradientText className="text-4xl md:text-6xl lg:text-7xl">Market Insights</GradientText>
            </motion.h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Premium research and foresight to inform bold, defensible bets across products and markets.
            </p>
          </AnimatedTextReveal>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/get-started">
              <GlowButton icon={<ArrowRight className="w-5 h-5" />}>Book Strategy Session</GlowButton>
            </Link>
            <Link to="/portfolio">
              <NeonButton icon={<ArrowRight className="w-5 h-5" />}>View Case Studies</NeonButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-gradient-to-r from-black/40 to-transparent">
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What Makes It Premium</h2>
            <p className="text-lg text-gray-300">Insight-rich, visually compelling, decision-ready.</p>
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

      {/* Modules */}
      <section className="section-padding bg-gradient-to-b from-transparent to-black/20">
        <PremiumDivider variant="gradient" />
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Engagement Modules</h2>
            <p className="text-lg text-gray-300">Pick-and-play or run as a cohesive premium sprint.</p>
          </AnimatedTextReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {modules.map((m) => (
              <motion.div key={m.title} variants={itemVariants}>
                <PremiumCard className="h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${m.color} rounded-full flex items-center justify-center mb-4`}>
                    <m.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{m.title}</h3>
                  <p className="text-gray-300 text-sm">{m.desc}</p>
                </PremiumCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-gradient-to-r from-black/40 to-transparent">
        <PremiumDivider variant="neon" />
        <div className="container-custom">
          <AnimatedTextReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Measured Impact</h2>
            <p className="text-lg text-gray-300">Grounded, quantified, and board-ready.</p>
          </AnimatedTextReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {impactStats.map((s) => (
              <motion.div key={s.label} variants={itemVariants} className="text-center">
                <PremiumCard>
                  <s.icon className="w-10 h-10 text-white mx-auto mb-4" />
                  <div className="text-4xl font-extrabold text-white mb-2">
                    <AnimatedCounter end={s.value} />{s.label === 'Faster GTM Decisions' ? 'x' : '%'}
                  </div>
                  <div className="text-gray-300">{s.label}</div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What You Receive</h2>
            <p className="text-lg text-gray-300">Artifacts that unlock clarity and speed.</p>
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

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <PremiumDivider variant="gradient" />
        <div className="container-custom text-center">
          <AnimatedTextReveal className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Make Your Next Move With Confidence</h2>
            <p className="text-lg text-gray-300 mb-8">Turn uncertainty into a competitive edge with future-focused insights.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/get-started">
                <GlowButton icon={<ArrowRight className="w-5 h-5" />} size="lg">Start Engagement</GlowButton>
              </Link>
              <Link to="/contact">
                <NeonButton icon={<ArrowRight className="w-5 h-5" />} size="lg">Talk to an Expert</NeonButton>
              </Link>
            </div>
          </AnimatedTextReveal>
        </div>
      </section>
    </div>
  );
};

export default FutureMarketInsights;


