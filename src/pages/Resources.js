import React from 'react';
import GradientText from '../components/GradientText';
import { PremiumBackground } from '../components/EnhancedBackground';
import { FloatingOrbs, AnimatedGrid, AnimatedTextReveal, PremiumCard } from '../components/PremiumEffects';

const Resources = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 custom-scrollbar text-white">
    <PremiumBackground />
    <FloatingOrbs />
    <AnimatedGrid />
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 text-center">
      <AnimatedTextReveal>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Free <GradientText>Resources</GradientText></h1>
        <p className="text-gray-300">AI Readiness, ROI Calculator, Industry Playbooks, CEO's Guide.</p>
      </AnimatedTextReveal>
    </section>
    <section className="section-padding">
      <div className="container-custom grid gap-8 md:grid-cols-2">
        {['AI Readiness Assessment','ROI Calculator','Industry AI Playbooks','CEO’s Guide to AI'].map((t)=>(
          <PremiumCard key={t}>{t}</PremiumCard>
        ))}
      </div>
    </section>
  </div>
);

export default Resources;


