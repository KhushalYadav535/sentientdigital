import React, { useState } from 'react';
import GradientText from '../components/GradientText';
import { PremiumBackground } from '../components/EnhancedBackground';
import { FloatingOrbs, AnimatedGrid, AnimatedTextReveal, PremiumCard } from '../components/PremiumEffects';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({ employees: '', salary: '', automation: 50 });
  const savings = inputs.employees && inputs.salary ? (inputs.employees * inputs.salary * (inputs.automation/100)).toFixed(0) : 0;
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 custom-scrollbar text-white">
      <PremiumBackground />
      <FloatingOrbs />
      <AnimatedGrid />
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 text-center">
        <AnimatedTextReveal>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI <GradientText>ROI Calculator</GradientText></h1>
          <p className="text-gray-300">Estimate potential savings and revenue impact.</p>
        </AnimatedTextReveal>
      </section>
      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          <PremiumCard>
            <div className="space-y-4">
              <label className="block">Employees doing manual work
                <input className="w-full mt-2 bg-white/5 border border-white/10 rounded px-3 py-2" type="number" value={inputs.employees} onChange={e=>setInputs({...inputs, employees: Number(e.target.value)})} />
              </label>
              <label className="block">Avg annual salary per employee ($)
                <input className="w-full mt-2 bg-white/5 border border-white/10 rounded px-3 py-2" type="number" value={inputs.salary} onChange={e=>setInputs({...inputs, salary: Number(e.target.value)})} />
              </label>
              <label className="block">Automation potential (%)
                <input className="w-full mt-2" type="range" min="0" max="100" value={inputs.automation} onChange={e=>setInputs({...inputs, automation: Number(e.target.value)})} />
              </label>
            </div>
          </PremiumCard>
          <PremiumCard>
            <h3 className="text-xl font-semibold mb-2">Estimated Annual Savings</h3>
            <div className="text-4xl font-bold">${savings.toLocaleString()}</div>
          </PremiumCard>
        </div>
      </section>
    </div>
  );
};

export default ROICalculator;


