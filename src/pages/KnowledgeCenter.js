import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  FileText, 
  Video, 
  Download, 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ArrowRight,
  Filter,
  Star,
  Bookmark,
  Share2,
  Play,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Book,
  Lightbulb,
  TrendingUp,
  Award,
  Users,
  Globe,
  Code,
  Database,
  Shield,
  Zap,
  Brain,
  CheckCircle,
  Settings,
  BarChart3,
  X
} from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import GradientText from '../components/GradientText';
import { FloatingOrbs, AnimatedGrid, AnimatedTextReveal, PremiumCard, AnimatedDivider, AnimatedCounter } from '../components/PremiumEffects';
import { PremiumBackground } from '../components/EnhancedBackground';
import PremiumButton, { GlowButton, NeonButton } from '../components/PremiumButton';
import PremiumDivider from '../components/PremiumDivider';

const KnowledgeCenter = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('latest');
  const [displayCount, setDisplayCount] = useState(9);
  const [selectedTags, setSelectedTags] = useState([]);

  const categories = [
    { id: 'all', label: 'All Resources', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
    { id: 'ai-readiness', label: 'AI Readiness', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'guides', label: 'Guides & Tutorials', icon: Book, color: 'from-green-500 to-emerald-500' },
    { id: 'case-studies', label: 'Case Studies', icon: TrendingUp, color: 'from-yellow-500 to-orange-500' },
    { id: 'whitepapers', label: 'Whitepapers', icon: FileText, color: 'from-red-500 to-pink-500' },
    { id: 'videos', label: 'Video Content', icon: Video, color: 'from-indigo-500 to-purple-500' },
    { id: 'webinars', label: 'Webinars', icon: Users, color: 'from-teal-500 to-cyan-500' },
    { id: 'tools', label: 'Tools & Templates', icon: Code, color: 'from-amber-500 to-orange-500' },
    { id: 'research', label: 'Research Reports', icon: Database, color: 'from-blue-500 to-purple-500' }
  ];

  const articles = [
    // AI Readiness
    {
      id: 1,
      title: 'AI Readiness Assessment: Complete Enterprise Guide',
      category: 'ai-readiness',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-25',
      readTime: '15 min read',
      tags: ['AI Readiness', 'Assessment', 'Enterprise', 'Strategy'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      excerpt: 'Comprehensive guide to assess your organization\'s AI readiness across technology, data, people, and processes. Includes detailed assessment framework and action plan.',
      featured: true,
      downloads: 18750,
      rating: 4.9,
      type: 'assessment-guide'
    },
    {
      id: 2,
      title: 'AI Maturity Model: From Beginner to Advanced',
      category: 'ai-readiness',
      author: 'AI Strategy Team',
      date: '2024-01-23',
      readTime: '12 min read',
      tags: ['AI Maturity', 'Framework', 'Transformation', 'Roadmap'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      excerpt: 'Detailed AI maturity model with 5 levels of progression. Learn where your organization stands and how to advance to the next level.',
      featured: true,
      downloads: 14230,
      rating: 4.8,
      type: 'maturity-model'
    },
    {
      id: 3,
      title: 'Data Readiness for AI: Foundation to Success',
      category: 'ai-readiness',
      author: 'Data Science Team',
      date: '2024-01-20',
      readTime: '18 min read',
      tags: ['Data Readiness', 'Data Quality', 'AI Foundation', 'Data Strategy'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
      excerpt: 'Essential guide to preparing your data infrastructure for AI success. Covers data quality, governance, and infrastructure requirements.',
      featured: true,
      downloads: 16540,
      rating: 4.9,
      type: 'data-guide'
    },
    {
      id: 4,
      title: 'AI Talent Acquisition: Building Your Dream Team',
      category: 'ai-readiness',
      author: 'HR & AI Team',
      date: '2024-01-18',
      readTime: '14 min read',
      tags: ['AI Talent', 'Recruitment', 'Team Building', 'Skills'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop',
      excerpt: 'Strategic guide to building and retaining top AI talent. Includes role definitions, skill requirements, and retention strategies.',
      featured: false,
      downloads: 9870,
      rating: 4.7,
      type: 'talent-guide'
    },
    {
      id: 5,
      title: 'AI Ethics Framework: Responsible Implementation',
      category: 'ai-readiness',
      author: 'AI Ethics Committee',
      date: '2024-01-15',
      readTime: '20 min read',
      tags: ['AI Ethics', 'Responsible AI', 'Governance', 'Compliance'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
      excerpt: 'Comprehensive framework for implementing responsible AI practices. Covers bias detection, transparency, and ethical decision-making.',
      featured: true,
      downloads: 12340,
      rating: 4.9,
      type: 'ethics-framework'
    },
    {
      id: 6,
      title: 'AI Infrastructure Planning: Scalable Architecture',
      category: 'ai-readiness',
      author: 'Infrastructure Team',
      date: '2024-01-12',
      readTime: '16 min read',
      tags: ['AI Infrastructure', 'Cloud Computing', 'Scalability', 'Architecture'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      excerpt: 'Strategic planning guide for building scalable AI infrastructure. Covers cloud platforms, GPU requirements, and cost optimization.',
      featured: false,
      downloads: 8760,
      rating: 4.6,
      type: 'infrastructure-guide'
    },
    {
      id: 7,
      title: 'AI ROI Calculator: Measuring Success',
      category: 'ai-readiness',
      author: 'Business Analytics Team',
      date: '2024-01-10',
      readTime: '10 min read',
      tags: ['AI ROI', 'Metrics', 'Success Measurement', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      excerpt: 'Interactive calculator and framework for measuring AI project ROI. Includes KPIs, benchmarks, and success metrics.',
      featured: false,
      downloads: 6540,
      rating: 4.5,
      type: 'roi-calculator'
    },
    {
      id: 8,
      title: 'AI Change Management: Leading Transformation',
      category: 'ai-readiness',
      author: 'Change Management Team',
      date: '2024-01-08',
      readTime: '13 min read',
      tags: ['Change Management', 'Leadership', 'Transformation', 'Culture'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop',
      excerpt: 'Proven strategies for leading AI transformation and managing organizational change. Includes stakeholder engagement and communication plans.',
      featured: false,
      downloads: 5430,
      rating: 4.4,
      type: 'change-management'
    },

    // Guides & Tutorials
    {
      id: 9,
      title: 'Complete Guide to Digital Transformation in 2024',
      category: 'guides',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '12 min read',
      tags: ['Digital Transformation', 'Strategy', 'Technology'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      excerpt: 'Comprehensive guide covering the latest trends, strategies, and best practices for successful digital transformation initiatives.',
      featured: true,
      downloads: 15420,
      rating: 4.9,
      type: 'guide'
    },
    {
      id: 10,
      title: 'Cybersecurity Best Practices for Modern Enterprises',
      category: 'guides',
      author: 'Security Expert Team',
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['Cybersecurity', 'Best Practices', 'Enterprise'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
      excerpt: 'Essential cybersecurity practices that every modern enterprise should implement to protect against evolving threats.',
      featured: false,
      downloads: 12340,
      rating: 4.9,
      type: 'guide'
    },
    {
      id: 11,
      title: 'AI Implementation Roadmap: Step-by-Step Guide',
      category: 'guides',
      author: 'AI Solutions Team',
      date: '2024-01-20',
      readTime: '18 min read',
      tags: ['AI', 'Implementation', 'Roadmap'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      excerpt: 'A detailed roadmap for implementing AI solutions in your organization, from planning to deployment and optimization.',
      featured: true,
      downloads: 9870,
      rating: 4.8,
      type: 'guide'
    },
    {
      id: 12,
      title: 'Cloud Migration Strategy: Best Practices',
      category: 'guides',
      author: 'Cloud Architecture Team',
      date: '2024-01-18',
      readTime: '14 min read',
      tags: ['Cloud Migration', 'Strategy', 'Best Practices'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
      excerpt: 'Learn the best practices for migrating your infrastructure to the cloud with minimal disruption and maximum efficiency.',
      featured: false,
      downloads: 7560,
      rating: 4.7,
      type: 'guide'
    },
    {
      id: 13,
      title: 'DevOps Implementation Guide for Enterprises',
      category: 'guides',
      author: 'DevOps Experts',
      date: '2024-01-22',
      readTime: '16 min read',
      tags: ['DevOps', 'CI/CD', 'Automation'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      excerpt: 'Complete guide to implementing DevOps practices in enterprise environments for faster delivery and better quality.',
      featured: false,
      downloads: 6340,
      rating: 4.6,
      type: 'guide'
    },

    // Case Studies
    {
      id: 14,
      title: 'AI-Powered Analytics: A Case Study with Fortune 500 Company',
      category: 'case-studies',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '8 min read',
      tags: ['AI', 'Analytics', 'Case Study'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      excerpt: 'How we helped a Fortune 500 company implement AI-powered analytics, resulting in 300% increase in insights and 95% prediction accuracy.',
      featured: true,
      downloads: 8920,
      rating: 4.8,
      type: 'case-study'
    },
    {
      id: 15,
      title: 'Digital Transformation Success: Manufacturing Giant',
      category: 'case-studies',
      author: 'Digital Solutions Team',
      date: '2024-01-12',
      readTime: '10 min read',
      tags: ['Digital Transformation', 'Manufacturing', 'Success Story'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      excerpt: 'How a traditional manufacturing company achieved 40% cost reduction and 60% efficiency improvement through digital transformation.',
      featured: true,
      downloads: 7230,
      rating: 4.9,
      type: 'case-study'
    },
    {
      id: 16,
      title: 'Cloud Migration: Banking Sector Transformation',
      category: 'case-studies',
      author: 'Financial Services Team',
      date: '2024-01-14',
      readTime: '12 min read',
      tags: ['Cloud Migration', 'Banking', 'Security'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
      excerpt: 'A comprehensive case study of how a major bank successfully migrated to cloud infrastructure while maintaining security compliance.',
      featured: false,
      downloads: 5890,
      rating: 4.7,
      type: 'case-study'
    },
    {
      id: 17,
      title: 'Automation Success: Healthcare Provider Efficiency',
      category: 'case-studies',
      author: 'Healthcare Solutions Team',
      date: '2024-01-16',
      readTime: '9 min read',
      tags: ['Automation', 'Healthcare', 'Efficiency'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop',
      excerpt: 'How a healthcare provider reduced administrative overhead by 70% and improved patient care through intelligent automation.',
      featured: false,
      downloads: 4560,
      rating: 4.8,
      type: 'case-study'
    },

    // Whitepapers
    {
      id: 18,
      title: 'The Future of Cloud Computing: Trends and Predictions',
      category: 'whitepapers',
      author: 'Tech Research Team',
      date: '2024-01-08',
      readTime: '15 min read',
      tags: ['Cloud Computing', 'Technology', 'Future Trends'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
      excerpt: 'In-depth analysis of emerging cloud computing trends and their impact on business operations and technology strategy.',
      featured: false,
      downloads: 5670,
      rating: 4.7,
      type: 'whitepaper'
    },
    {
      id: 19,
      title: 'AI Ethics and Responsible Implementation',
      category: 'whitepapers',
      author: 'AI Ethics Committee',
      date: '2024-01-19',
      readTime: '20 min read',
      tags: ['AI Ethics', 'Responsible AI', 'Governance'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      excerpt: 'Comprehensive analysis of AI ethics, responsible implementation practices, and governance frameworks for enterprise AI.',
      featured: true,
      downloads: 4320,
      rating: 4.9,
      type: 'whitepaper'
    },
    {
      id: 20,
      title: 'Cybersecurity Threat Landscape 2024',
      category: 'whitepapers',
      author: 'Security Research Team',
      date: '2024-01-21',
      readTime: '18 min read',
      tags: ['Cybersecurity', 'Threats', 'Security Trends'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
      excerpt: 'Analysis of current cybersecurity threats, emerging attack vectors, and defense strategies for modern enterprises.',
      featured: false,
      downloads: 3890,
      rating: 4.6,
      type: 'whitepaper'
    },
    {
      id: 21,
      title: 'Digital Transformation ROI: Measuring Success',
      category: 'whitepapers',
      author: 'Business Analytics Team',
      date: '2024-01-23',
      readTime: '16 min read',
      tags: ['ROI', 'Digital Transformation', 'Metrics'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      excerpt: 'Framework for measuring and quantifying the return on investment from digital transformation initiatives.',
      featured: false,
      downloads: 3450,
      rating: 4.5,
      type: 'whitepaper'
    },

    // Video Content
    {
      id: 22,
      title: 'Introduction to AI and Machine Learning',
      category: 'videos',
      author: 'AI Education Team',
      date: '2024-01-17',
      readTime: '45 min',
      tags: ['AI', 'Machine Learning', 'Education'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      excerpt: 'Comprehensive video tutorial covering the fundamentals of AI and machine learning for business professionals.',
      featured: true,
      downloads: 12340,
      rating: 4.8,
      type: 'video'
    },
    {
      id: 23,
      title: 'Cloud Architecture Best Practices',
      category: 'videos',
      author: 'Cloud Solutions Team',
      date: '2024-01-20',
      readTime: '60 min',
      tags: ['Cloud Architecture', 'Best Practices', 'Design'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
      excerpt: 'Detailed video guide on designing scalable and secure cloud architectures for enterprise applications.',
      featured: false,
      downloads: 8760,
      rating: 4.7,
      type: 'video'
    },
    {
      id: 24,
      title: 'DevOps Pipeline Automation',
      category: 'videos',
      author: 'DevOps Team',
      date: '2024-01-22',
      readTime: '30 min',
      tags: ['DevOps', 'Automation', 'CI/CD'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      excerpt: 'Step-by-step video tutorial on setting up automated DevOps pipelines for continuous integration and deployment.',
      featured: false,
      downloads: 6540,
      rating: 4.6,
      type: 'video'
    },

    // Webinars
    {
      id: 25,
      title: 'Webinar: Building Scalable Microservices Architecture',
      category: 'webinars',
      author: 'Senior Architects',
      date: '2024-01-12',
      readTime: '60 min',
      tags: ['Microservices', 'Architecture', 'Scalability'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      excerpt: 'Live webinar covering the fundamentals of building scalable microservices architecture with real-world examples.',
      featured: true,
      downloads: 3450,
      rating: 4.8,
      type: 'webinar'
    },
    {
      id: 26,
      title: 'Future of Work: AI and Automation',
      category: 'webinars',
      author: 'Future of Work Team',
      date: '2024-01-25',
      readTime: '90 min',
      tags: ['Future of Work', 'AI', 'Automation'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      excerpt: 'Interactive webinar exploring how AI and automation will reshape the future of work and business operations.',
      featured: true,
      downloads: 2890,
      rating: 4.9,
      type: 'webinar'
    },
    {
      id: 27,
      title: 'Cybersecurity in the Age of AI',
      category: 'webinars',
      author: 'Security Experts',
      date: '2024-01-28',
      readTime: '75 min',
      tags: ['Cybersecurity', 'AI', 'Threats'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
      excerpt: 'Expert panel discussion on cybersecurity challenges and solutions in the era of AI-powered threats.',
      featured: false,
      downloads: 2340,
      rating: 4.7,
      type: 'webinar'
    },

    // Tools & Templates
    {
      id: 28,
      title: 'Digital Marketing ROI Calculator Template',
      category: 'tools',
      author: 'Marketing Team',
      date: '2024-01-03',
      readTime: '5 min read',
      tags: ['Marketing', 'ROI', 'Template'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      excerpt: 'Free Excel template to calculate and track your digital marketing ROI with advanced analytics and reporting.',
      featured: false,
      downloads: 8900,
      rating: 4.6,
      type: 'template'
    },
    {
      id: 29,
      title: 'Project Management Dashboard Template',
      category: 'tools',
      author: 'Project Management Team',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['Project Management', 'Dashboard', 'Template'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      excerpt: 'Comprehensive project management dashboard template with KPI tracking and reporting capabilities.',
      featured: true,
      downloads: 5670,
      rating: 4.8,
      type: 'template'
    },
    {
      id: 30,
      title: 'AI Implementation Checklist',
      category: 'tools',
      author: 'AI Solutions Team',
      date: '2024-01-18',
      readTime: '3 min read',
      tags: ['AI', 'Implementation', 'Checklist'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      excerpt: 'Comprehensive checklist for successful AI implementation in enterprise environments.',
      featured: false,
      downloads: 4320,
      rating: 4.7,
      type: 'checklist'
    },
    {
      id: 31,
      title: 'Cloud Migration Assessment Tool',
      category: 'tools',
      author: 'Cloud Solutions Team',
      date: '2024-01-20',
      readTime: '10 min read',
      tags: ['Cloud Migration', 'Assessment', 'Tool'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
      excerpt: 'Interactive tool to assess your organization\'s readiness for cloud migration and identify potential challenges.',
      featured: false,
      downloads: 3450,
      rating: 4.5,
      type: 'tool'
    },

    // Research Reports
    {
      id: 32,
      title: 'State of Digital Transformation 2024',
      category: 'research',
      author: 'Research Team',
      date: '2024-01-10',
      readTime: '25 min read',
      tags: ['Digital Transformation', 'Research', 'Trends'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      excerpt: 'Comprehensive research report on the current state of digital transformation across industries and regions.',
      featured: true,
      downloads: 6780,
      rating: 4.9,
      type: 'research-report'
    },
    {
      id: 33,
      title: 'AI Adoption in Enterprise: Global Survey',
      category: 'research',
      author: 'AI Research Team',
      date: '2024-01-15',
      readTime: '20 min read',
      tags: ['AI Adoption', 'Enterprise', 'Survey'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      excerpt: 'Global survey results on AI adoption trends, challenges, and success factors in enterprise environments.',
      featured: false,
      downloads: 4560,
      rating: 4.7,
      type: 'research-report'
    },
    {
      id: 34,
      title: 'Cybersecurity Investment Trends 2024',
      category: 'research',
      author: 'Security Research Team',
      date: '2024-01-18',
      readTime: '18 min read',
      tags: ['Cybersecurity', 'Investment', 'Trends'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
      excerpt: 'Analysis of cybersecurity investment trends and spending patterns across different industries and company sizes.',
      featured: false,
      downloads: 3890,
      rating: 4.6,
      type: 'research-report'
    },
    {
      id: 35,
      title: 'Cloud Computing Market Analysis',
      category: 'research',
      author: 'Market Research Team',
      date: '2024-01-22',
      readTime: '22 min read',
      tags: ['Cloud Computing', 'Market Analysis', 'Trends'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
      excerpt: 'Comprehensive market analysis of cloud computing adoption, trends, and future projections.',
      featured: false,
      downloads: 3120,
      rating: 4.5,
      type: 'research-report'
    }
  ];

  const stats = [
    { icon: BookOpen, number: "500+", label: "Resources Available", color: "from-blue-500 to-cyan-500" },
    { icon: Users, number: "50K+", label: "Downloads", color: "from-purple-500 to-pink-500" },
    { icon: Star, number: "4.8", label: "Average Rating", color: "from-green-500 to-emerald-500" },
    { icon: Award, number: "100+", label: "Expert Authors", color: "from-yellow-500 to-orange-500" }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => article.tags.some(articleTag => 
                         articleTag.toLowerCase().includes(tag.toLowerCase())
                       ));
    return matchesCategory && matchesSearch && matchesTags;
  });

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.date) - new Date(a.date);
      case 'popular':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const displayedArticles = sortedArticles.slice(0, displayCount);

  // Get all unique tags from articles
  const allTags = [...new Set(articles.flatMap(article => article.tags))];

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 9);
  };

  const handleTagToggle = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setShowArticleModal(true);
  };

  const closeArticleModal = () => {
    setShowArticleModal(false);
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 custom-scrollbar text-white">
      {/* Premium Background Effects */}
      <PremiumBackground />
      <FloatingOrbs />
      <AnimatedGrid />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <ParticleBackground />
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <AnimatedTextReveal delay={0.2} className="mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-md border border-white/20 mb-6"
            >
              <BookOpen className="w-8 h-8 text-blue-400" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Knowledge <GradientText>Center</GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover premium resources, expert insights, and cutting-edge knowledge to accelerate your success
            </p>
          </AnimatedTextReveal>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources, articles, guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore by Category</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Browse our comprehensive collection of resources organized by topic and type
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-2xl backdrop-blur-md border transition-all duration-300 group hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 border-blue-500/50'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm md:text-base">{category.label}</h3>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Readiness Special Section */}
      {activeCategory === 'ai-readiness' && (
        <section className="section-padding bg-gradient-to-r from-purple-500/10 to-pink-500/10">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-purple-500/30 mb-6">
                <Brain className="w-6 h-6 text-purple-400" />
                <span className="text-purple-300 font-semibold">Premium AI Readiness Resources</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Master Your <GradientText className="text-4xl md:text-5xl">AI Journey</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive resources to assess, plan, and execute your AI transformation with confidence
              </p>
            </motion.div>

            {/* AI Readiness Journey */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-4 gap-6 mb-12"
            >
              {[
                { step: '1', title: 'Assess', desc: 'Evaluate your current AI readiness', icon: Brain, color: 'from-purple-500 to-pink-500' },
                { step: '2', title: 'Plan', desc: 'Create your AI strategy roadmap', icon: TrendingUp, color: 'from-pink-500 to-red-500' },
                { step: '3', title: 'Build', desc: 'Develop infrastructure and talent', icon: Code, color: 'from-red-500 to-orange-500' },
                { step: '4', title: 'Scale', desc: 'Deploy and optimize AI solutions', icon: Zap, color: 'from-orange-500 to-yellow-500' }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* AI Readiness Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {[
                { number: '85%', label: 'Success Rate', desc: 'Organizations following our framework' },
                { number: '6-12', label: 'Months', desc: 'Average time to AI readiness' },
                { number: '3.2x', label: 'ROI Increase', desc: 'Average return on AI investment' },
                { number: '500+', label: 'Companies', desc: 'Successfully transformed with our guidance' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          {/* Filters and Sort */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <Filter className="w-4 h-4" />
                Filters
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col md:flex-row items-start md:items-center gap-4"
                >
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="latest">Latest First</option>
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  
                  {/* Tag Filter */}
                  <div className="flex flex-wrap gap-2">
                    {allTags.slice(0, 10).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                          selectedTags.includes(tag)
                            ? 'bg-blue-500 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                    {selectedTags.length > 0 && (
                      <button
                        onClick={() => setSelectedTags([])}
                        className="px-3 py-1 text-xs rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-300"
                      >
                        Clear Tags
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
            
            <p className="text-gray-400">
              {filteredArticles.length} resource{filteredArticles.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => handleArticleClick(article)}
              >
                {/* Featured Badge */}
                {article.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Type Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    {article.type === 'guide' && <Book className="w-5 h-5 text-white" />}
                    {article.type === 'case-study' && <TrendingUp className="w-5 h-5 text-white" />}
                    {article.type === 'whitepaper' && <FileText className="w-5 h-5 text-white" />}
                    {article.type === 'webinar' && <Video className="w-5 h-5 text-white" />}
                    {article.type === 'template' && <Code className="w-5 h-5 text-white" />}
                    {article.type === 'video' && <Play className="w-5 h-5 text-white" />}
                    {article.type === 'checklist' && <CheckCircle className="w-5 h-5 text-white" />}
                    {article.type === 'tool' && <Settings className="w-5 h-5 text-white" />}
                    {article.type === 'research-report' && <Database className="w-5 h-5 text-white" />}
                    {article.type === 'assessment-guide' && <Brain className="w-5 h-5 text-white" />}
                    {article.type === 'maturity-model' && <TrendingUp className="w-5 h-5 text-white" />}
                    {article.type === 'data-guide' && <Database className="w-5 h-5 text-white" />}
                    {article.type === 'talent-guide' && <Users className="w-5 h-5 text-white" />}
                    {article.type === 'ethics-framework' && <Shield className="w-5 h-5 text-white" />}
                    {article.type === 'infrastructure-guide' && <Code className="w-5 h-5 text-white" />}
                    {article.type === 'roi-calculator' && <BarChart3 className="w-5 h-5 text-white" />}
                    {article.type === 'change-management' && <Users className="w-5 h-5 text-white" />}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                      {categories.find(cat => cat.id === article.category)?.label}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-xs">{article.rating}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <Download className="w-3 h-3" />
                      <span>{article.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button 
                        className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Action Button */}
                  <GlowButton 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleArticleClick(article);
                    }}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </GlowButton>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          {displayedArticles.length < filteredArticles.length && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-12"
            >
              <NeonButton 
                className="px-8 py-4"
                onClick={handleLoadMore}
              >
                Load More Resources ({filteredArticles.length - displayedArticles.length} remaining)
              </NeonButton>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 overflow-hidden"
          >
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-block p-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full backdrop-blur-md border border-white/20 mb-6"
              >
                <Lightbulb className="w-8 h-8 text-blue-400" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated with Latest Insights
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get exclusive access to premium content, industry reports, and expert insights delivered directly to your inbox
              </p>

              <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <GlowButton className="px-8 py-4 whitespace-nowrap">
                  Subscribe
                </GlowButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Divider */}
      <PremiumDivider />

      {/* Footer CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Access Premium Knowledge?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are already leveraging our premium resources to accelerate their success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton className="px-8 py-4">
                Get Started Today
              </NeonButton>
              <PremiumButton variant="outline" className="px-8 py-4">
                Contact Our Experts
              </PremiumButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {showArticleModal && selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={closeArticleModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 rounded-3xl border border-white/20 backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeArticleModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Article Image */}
              <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Featured Badge */}
                {selectedArticle.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Type Icon */}
                <div className="absolute top-4 right-12 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  {selectedArticle.type === 'guide' && <Book className="w-5 h-5 text-white" />}
                  {selectedArticle.type === 'case-study' && <TrendingUp className="w-5 h-5 text-white" />}
                  {selectedArticle.type === 'whitepaper' && <FileText className="w-5 h-5 text-white" />}
                  {selectedArticle.type === 'webinar' && <Video className="w-5 h-5 text-white" />}
                  {selectedArticle.type === 'template' && <Code className="w-5 h-5 text-white" />}
                  {selectedArticle.type === 'video' && <Play className="w-5 h-5 text-white" />}
                  {selectedArticle.type === 'checklist' && <CheckCircle className="w-5 h-5 text-white" />}
                  {selectedArticle.type === 'tool' && <Settings className="w-5 h-5 text-white" />}
                  {selectedArticle.type === 'research-report' && <Database className="w-5 h-5 text-white" />}
                  {selectedArticle.type === 'assessment-guide' && <Brain className="w-5 h-5 text-white" />}
                  {selectedArticle.type === 'maturity-model' && <TrendingUp className="w-5 h-5 text-white" />}
                  {selectedArticle.type === 'data-guide' && <Database className="w-5 h-5 text-white" />}
                  {selectedArticle.type === 'talent-guide' && <Users className="w-5 h-5 text-white" />}
                  {selectedArticle.type === 'ethics-framework' && <Shield className="w-5 h-5 text-white" />}
                  {selectedArticle.type === 'infrastructure-guide' && <Code className="w-5 h-5 text-white" />}
                  {selectedArticle.type === 'roi-calculator' && <BarChart3 className="w-5 h-5 text-white" />}
                  {selectedArticle.type === 'change-management' && <Users className="w-5 h-5 text-white" />}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 md:p-8">
                {/* Category and Rating */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                    {categories.find(cat => cat.id === selectedArticle.category)?.label}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">{selectedArticle.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  {selectedArticle.title}
                </h2>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{selectedArticle.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedArticle.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span>{selectedArticle.downloads.toLocaleString()} downloads</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Excerpt */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">Overview</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedArticle.excerpt}
                  </p>
                </div>

                {/* AI Readiness Specific Content */}
                {selectedArticle.category === 'ai-readiness' && (
                  <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-purple-400" />
                      AI Readiness Insights
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/5 p-4 rounded-xl">
                        <h4 className="font-semibold text-white mb-2">Key Benefits</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Strategic AI roadmap development</li>
                          <li>• Risk assessment and mitigation</li>
                          <li>• ROI optimization strategies</li>
                          <li>• Change management guidance</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl">
                        <h4 className="font-semibold text-white mb-2">Implementation Time</h4>
                        <p className="text-gray-300 text-sm">
                          {selectedArticle.type === 'assessment-guide' && '2-4 weeks for initial assessment'}
                          {selectedArticle.type === 'maturity-model' && '6-8 weeks for full evaluation'}
                          {selectedArticle.type === 'data-guide' && '3-6 months for data preparation'}
                          {selectedArticle.type === 'talent-guide' && '4-8 weeks for team building'}
                          {selectedArticle.type === 'ethics-framework' && '2-3 months for framework implementation'}
                          {selectedArticle.type === 'infrastructure-guide' && '6-12 months for infrastructure setup'}
                          {selectedArticle.type === 'roi-calculator' && '1-2 weeks for ROI analysis'}
                          {selectedArticle.type === 'change-management' && '3-6 months for organizational change'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <GlowButton className="flex-1">
                    <Download className="w-4 h-4" />
                    <span>Download Resource</span>
                  </GlowButton>
                  <PremiumButton variant="outline" className="flex-1">
                    <Share2 className="w-4 h-4" />
                    <span>Share Resource</span>
                  </PremiumButton>
                </div>

                {/* Related Resources */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-4">Related Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {articles
                      .filter(article => 
                        article.category === selectedArticle.category && 
                        article.id !== selectedArticle.id
                      )
                      .slice(0, 2)
                      .map((relatedArticle) => (
                        <div
                          key={relatedArticle.id}
                          className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                          onClick={() => handleArticleClick(relatedArticle)}
                        >
                          <h4 className="font-semibold text-white mb-2 line-clamp-2">
                            {relatedArticle.title}
                          </h4>
                          <p className="text-gray-400 text-sm line-clamp-2">
                            {relatedArticle.excerpt}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default KnowledgeCenter;


