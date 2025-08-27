import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../components/GradientText';
import { PremiumBackground } from '../components/EnhancedBackground';
import { FloatingOrbs, AnimatedGrid, AnimatedTextReveal, PremiumCard } from '../components/PremiumEffects';

const OurApproach = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 custom-scrollbar">
    <PremiumBackground />
    <FloatingOrbs />
    <AnimatedGrid />

    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 text-center text-white">
      <AnimatedTextReveal>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <GradientText>Approach</GradientText></h1>
        <p className="text-gray-300 max-w-3xl mx-auto">Strategy → Pilot → Scale → Optimize. Measurable results in 90 days or money back.</p>
      </AnimatedTextReveal>
    </section>

    <section className="section-padding">
      <div className="container-custom grid gap-8 md:grid-cols-4">
        {['Strategy','Pilot','Scale','Optimize'].map((step) => (
          <PremiumCard key={step} className="text-white text-center">{step}</PremiumCard>
        ))}
      </div>
    </section>
  </div>
);

export default OurApproach;


