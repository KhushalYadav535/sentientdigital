import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Search, Filter, BarChart2, TrendingUp, PieChart, LineChart } from 'lucide-react';
import GradientText from '../components/GradientText';

const reports = [
  {
    id: 1,
    title: 'Global AI in Healthcare Market Analysis 2025',
    category: 'Healthcare',
    date: 'August 2025',
    pages: '45',
    downloads: '1.2k',
    preview: 'Comprehensive analysis of AI applications in healthcare, market trends, and growth opportunities.',
    tags: ['Healthcare', 'Market Analysis', 'AI Adoption'],
    featured: true,
    icon: BarChart2,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'AI in Financial Services: Trends & Forecast',
    category: 'Finance',
    date: 'July 2025',
    pages: '38',
    downloads: '980',
    preview: 'In-depth report on AI transformation in banking, insurance, and financial services.',
    tags: ['Finance', 'Banking', 'Forecast'],
    featured: true,
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 3,
    title: 'Retail AI: Personalization & Automation',
    category: 'Retail',
    date: 'June 2025',
    pages: '32',
    downloads: '850',
    preview: 'How AI is revolutionizing customer experience and operations in retail.',
    tags: ['Retail', 'E-commerce', 'Automation'],
    featured: false,
    icon: PieChart,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 4,
    title: 'Manufacturing 4.0: AI & IoT Integration',
    category: 'Manufacturing',
    date: 'May 2025',
    pages: '41',
    downloads: '720',
    preview: 'The future of smart manufacturing with AI and IoT technologies.',
    tags: ['Manufacturing', 'IoT', 'Industry 4.0'],
    featured: true,
    icon: LineChart,
    color: 'from-orange-500 to-amber-600'
  },
  {
    id: 5,
    title: 'AI in Education: Global Market Insights',
    category: 'Education',
    date: 'April 2025',
    pages: '36',
    downloads: '650',
    preview: 'Transforming education through AI-powered learning solutions.',
    tags: ['Education', 'EdTech', 'E-Learning'],
    featured: false,
    icon: BarChart2,
    color: 'from-rose-500 to-pink-600'
  },
  {
    id: 6,
    title: 'AI in Agriculture: Smart Farming Solutions',
    category: 'Agriculture',
    date: 'March 2025',
    pages: '29',
    downloads: '580',
    preview: 'How AI is enabling precision agriculture and sustainable farming.',
    tags: ['Agriculture', 'Sustainability', 'Precision Farming'],
    featured: false,
    icon: TrendingUp,
    color: 'from-emerald-500 to-teal-600'
  }
];

const categories = [
  'All Industries',
  'Healthcare',
  'Finance',
  'Retail',
  'Manufacturing',
  'Education',
  'Agriculture',
  'Technology'
];

const IndustryReports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Industries');
  const [sortBy, setSortBy] = useState('latest');

  const filteredReports = reports
    .filter(report => 
      (selectedCategory === 'All Industries' || report.category === selectedCategory) &&
      (report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       report.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === 'popular') {
        return parseInt(b.downloads) - parseInt(a.downloads);
      }
      return 0;
    });

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full backdrop-blur-md border border-blue-400/30 mb-6">
            <FileText className="w-6 h-6 text-white" />
            <span className="font-semibold">Industry Insights</span>
          </div>
          <h2 className="text-5xl font-extrabold mb-6">
            <GradientText>Industry Reports</GradientText> & Analysis
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Access in-depth research and analysis on AI adoption across various industries.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 bg-blue-900/30 backdrop-blur-md rounded-2xl p-6 border border-blue-400/20"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1 max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-blue-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-blue-400/30 rounded-lg bg-blue-900/50 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search reports by title or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-blue-400" />
                </div>
                <select
                  className="appearance-none pl-10 pr-8 py-3 border border-blue-400/30 rounded-lg bg-blue-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <select
                className="px-4 py-3 border border-blue-400/30 rounded-lg bg-blue-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="latest">Sort by: Latest</option>
                <option value="popular">Sort by: Most Popular</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Reports Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredReports.map((report) => (
            <motion.div
              key={report.id}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-2xl overflow-hidden border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 ${
                report.featured ? 'ring-2 ring-blue-500/50' : ''
              }`}
            >
              {report.featured && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-4 py-1 text-center">
                  Featured Report
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${report.color} mb-4`}>
                    <report.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900/50 text-blue-100">
                    {report.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white line-clamp-2">
                  {report.title}
                </h3>
                <p className="text-blue-100 text-sm mb-4 line-clamp-2">
                  {report.preview}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {report.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/50 text-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-blue-300">
                  <span>{report.date} • {report.pages} pages</span>
                  <span className="flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    {report.downloads}
                  </span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Report
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredReports.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <FileText className="w-16 h-16 mx-auto text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No reports found</h3>
            <p className="text-blue-200">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default IndustryReports;
