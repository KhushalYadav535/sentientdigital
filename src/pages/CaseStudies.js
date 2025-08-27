import React from 'react';
import GradientText from '../components/GradientText';
import { PremiumBackground } from '../components/EnhancedBackground';
import { FloatingOrbs, AnimatedGrid, AnimatedTextReveal, PremiumCard } from '../components/PremiumEffects';

const CaseStudies = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 custom-scrollbar text-white">
    <PremiumBackground />
    <FloatingOrbs />
    <AnimatedGrid />
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 text-center">
      <AnimatedTextReveal>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Solution <GradientText>Portfolio</GradientText></h1>
        <p className="text-gray-300">Revenue growth, cost reduction, efficiency, and experience wins.</p>
      </AnimatedTextReveal>
    </section>
    <section className="section-padding">
      <div className="container-custom grid gap-8 md:grid-cols-3">
        {['Revenue Growth Stories','Cost Reduction Wins','Efficiency Transformations'].map((t)=>(
          <PremiumCard key={t}>{t}</PremiumCard>
        ))}
      </div>
    </section>
  </div>
);

export default CaseStudies;


