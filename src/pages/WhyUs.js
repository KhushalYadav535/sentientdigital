import React from 'react';
import GradientText from '../components/GradientText';
import { PremiumBackground } from '../components/EnhancedBackground';
import { FloatingOrbs, AnimatedGrid, AnimatedTextReveal, PremiumCard } from '../components/PremiumEffects';

const WhyUs = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 custom-scrollbar">
    <PremiumBackground />
    <FloatingOrbs />
    <AnimatedGrid />
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 text-center text-white">
      <AnimatedTextReveal>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Why <GradientText>Choose Us</GradientText></h1>
        <p className="text-gray-300 max-w-3xl mx-auto">India advantage pricing, 5x speed, certified experts, aligned incentives.</p>
      </AnimatedTextReveal>
    </section>
    <section className="section-padding">
      <div className="container-custom grid gap-8 md:grid-cols-2">
        {['Cost Advantage','Speed Advantage','Expertise Advantage','Partnership Advantage'].map((t) => (
          <PremiumCard key={t} className="text-white">{t}</PremiumCard>
        ))}
      </div>
    </section>
  </div>
);

export default WhyUs;


