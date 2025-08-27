import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, Tag, BookOpen, ChevronRight } from 'lucide-react';
import GradientText from '../components/GradientText';
import { PremiumBackground } from '../components/EnhancedBackground';
import { FloatingOrbs, AnimatedGrid, AnimatedTextReveal, PremiumCard } from '../components/PremiumEffects';

const categories = [
  'All Topics',
  'AI Strategy',
  'Case Studies',
  'Industry Trends',
  'How-To Guides',
  'Expert Insights'
];

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Business: 2025 Outlook',
    excerpt: 'Explore how AI is transforming industries and what businesses need to know to stay ahead in the coming year.',
    category: 'Industry Trends',
    date: 'Aug 25, 2025',
    readTime: '8 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1677442135136-760c813d0a99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['AI', 'Business', 'Trends']
  },
  {
    id: 2,
    title: 'How We Increased ROI by 300% with AI Automation',
    excerpt: 'A detailed case study on implementing AI automation in enterprise environments and the impressive results achieved.',
    category: 'Case Studies',
    date: 'Aug 20, 2025',
    readTime: '10 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['ROI', 'Automation', 'Case Study']
  },
  {
    id: 3,
    title: 'Building an AI-First Company: A Complete Guide',
    excerpt: 'Step-by-step guide to transforming your business into an AI-first organization with practical implementation tips.',
    category: 'How-To Guides',
    date: 'Aug 15, 2025',
    readTime: '12 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['AI Strategy', 'Transformation', 'Guide']
  },
  {
    id: 4,
    title: 'The Ethics of AI: Balancing Innovation and Responsibility',
    excerpt: 'Exploring the ethical considerations and responsible AI practices every business should implement.',
    category: 'Expert Insights',
    date: 'Aug 10, 2025',
    readTime: '9 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Ethics', 'Responsible AI', 'Governance']
  },
  {
    id: 5,
    title: 'Machine Learning for Business Leaders: A Non-Technical Guide',
    excerpt: 'Demystifying machine learning concepts for executives and decision-makers looking to leverage AI.',
    category: 'How-To Guides',
    date: 'Aug 5, 2025',
    readTime: '7 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Machine Learning', 'Leadership', 'Guide']
  },
  {
    id: 6,
    title: 'The Future of Work: How AI is Reshaping Careers',
    excerpt: 'Understanding the impact of AI on the workforce and how to prepare for the jobs of tomorrow.',
    category: 'Industry Trends',
    date: 'Jul 28, 2025',
    readTime: '11 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Future of Work', 'Careers', 'Trends']
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Topics');

  const filteredPosts = blogPosts.filter(post => 
    (selectedCategory === 'All Topics' || post.category === selectedCategory) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
     post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <PremiumBackground />
      <FloatingOrbs />
      <AnimatedGrid />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedTextReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights <GradientText>& Stories</GradientText>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Expert analysis, case studies, and thought leadership on AI, automation, and digital transformation.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-blue-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-3 border border-blue-400/30 rounded-full bg-blue-900/50 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </AnimatedTextReveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-blue-900/20 backdrop-blur-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-blue-900/50 text-blue-100 hover:bg-blue-800/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'All Topics' && (
        <section className="py-12">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-2 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mr-3"></span>
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <motion.div 
                  key={post.id}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-64">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-2">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">{post.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-blue-100 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-blue-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-blue-400/20 flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-900/50 text-blue-100 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="text-blue-300 hover:text-white transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="w-2 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mr-3"></span>
            {selectedCategory === 'All Topics' ? 'Latest Articles' : selectedCategory}
          </h2>
          
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <motion.article 
                  key={post.id}
                  className="group bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-xl overflow-hidden border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-blue-300">{post.category}</span>
                      <div className="flex items-center text-xs text-blue-400">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-blue-100 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-blue-400/20">
                      <div className="text-xs text-blue-300">{post.date}</div>
                      <button className="text-blue-300 hover:text-white transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 mx-auto text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-blue-200">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-indigo-900/50">
        <div className="container-custom text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm mb-4">
            <Tag className="w-4 h-4" />
            <span>Stay Updated</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-200 mb-8">Get the latest articles, insights, and resources delivered to your inbox.</p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg bg-blue-900/50 border border-blue-400/30 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;


