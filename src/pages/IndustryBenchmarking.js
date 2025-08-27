import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp, Target, Award, PieChart, LineChart } from 'lucide-react';
import GradientText from '../components/GradientText';

const industries = [
  { 
    name: 'Healthcare', 
    aiAdoption: 'High',
    keyMetrics: ['Patient Care', 'Diagnostics', 'Drug Discovery'],
    growth: '32%',
    icon: BarChart2
  },
  { 
    name: 'Finance', 
    aiAdoption: 'Very High',
    keyMetrics: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading'],
    growth: '45%',
    icon: TrendingUp
  },
  { 
    name: 'Retail', 
    aiAdoption: 'Moderate',
    keyMetrics: ['Demand Forecasting', 'Personalization', 'Inventory Management'],
    growth: '28%',
    icon: PieChart
  },
  { 
    name: 'Manufacturing', 
    aiAdoption: 'Growing',
    keyMetrics: ['Predictive Maintenance', 'Quality Control', 'Supply Chain'],
    growth: '38%',
    icon: Target
  }
];

const benchmarks = [
  { metric: 'AI Investment as % of Revenue', average: '2.5%', topPerformers: '5-7%' },
  { metric: 'AI Talent Density', average: '3.2%', topPerformers: '8-12%' },
  { metric: 'AI Project Success Rate', average: '35%', topPerformers: '70-85%' },
  { metric: 'Time to AI Implementation', average: '9-12 months', topPerformers: '3-6 months' },
  { metric: 'ROI from AI Initiatives', average: '2.5x', topPerformers: '5-8x' },
];

const IndustryBenchmarking = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full backdrop-blur-md border border-blue-400/30 mb-6">
            <BarChart2 className="w-6 h-6 text-white" />
            <span className="font-semibold">Industry Benchmarking</span>
          </div>
          <h2 className="text-5xl font-extrabold mb-6">
            AI Maturity <GradientText>Across Industries</GradientText>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Compare your organization's AI adoption and performance against industry benchmarks and leaders.
          </p>
        </motion.div>

        {/* Industry Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-400" />
            Industry AI Adoption Overview
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{industry.name}</h4>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    industry.aiAdoption === 'Very High' ? 'bg-green-500/20 text-green-300' :
                    industry.aiAdoption === 'High' ? 'bg-blue-500/20 text-blue-300' :
                    industry.aiAdoption === 'Moderate' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-purple-500/20 text-purple-300'
                  }`}>
                    {industry.aiAdoption} Adoption
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-blue-100">
                    <LineChart className="w-4 h-4" />
                    <span className="text-sm">{industry.growth} YOY Growth</span>
                  </div>
                  <div className="mt-4">
                    <h5 className="text-sm font-medium text-blue-200 mb-2">Key Metrics:</h5>
                    <div className="flex flex-wrap gap-2">
                      {industry.keyMetrics.map((metric, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-900/50 text-blue-100 rounded-full text-xs">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benchmarking Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-400" />
            AI Performance Benchmarks
          </h3>
          <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl overflow-hidden border border-blue-400/20">
            <div className="grid grid-cols-3 bg-blue-900/40 px-6 py-4 font-semibold text-blue-100">
              <div>Metric</div>
              <div className="text-center">Industry Average</div>
              <div className="text-center">Top Performers</div>
            </div>
            {benchmarks.map((benchmark, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 px-6 py-4 ${
                  index % 2 === 0 ? 'bg-blue-900/10' : 'bg-transparent'
                }`}
              >
                <div className="font-medium">{benchmark.metric}</div>
                <div className="text-center">{benchmark.average}</div>
                <div className="text-center text-blue-300 font-medium">{benchmark.topPerformers}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-400/20"
        >
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-400" />
            Key Insights
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-100">Adoption Gap</h4>
                  <p className="text-blue-200 text-sm">Top performers invest 2-3x more in AI as a percentage of revenue compared to industry average.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-100">Implementation Speed</h4>
                  <p className="text-blue-200 text-sm">Leading organizations deploy AI solutions 2x faster than their peers.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-100">ROI Focus</h4>
                  <p className="text-blue-200 text-sm">Top performers achieve 2-3x higher ROI by focusing on high-impact use cases.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-100">Talent Strategy</h4>
                  <p className="text-blue-200 text-sm">Leading companies have 2-4x more AI talent per employee than average.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryBenchmarking;
