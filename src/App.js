import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import IncreaseRevenue from './pages/IncreaseRevenue';
import ReduceCosts from './pages/ReduceCosts';
import ImproveEfficiency from './pages/ImproveEfficiency';
import EnhanceCustomerExperience from './pages/EnhanceCustomerExperience';
import AccelerateDecisions from './pages/AccelerateDecisions';
import OurApproach from './pages/OurApproach';
import WhyUs from './pages/WhyUs';
import ROICalculator from './pages/ROICalculator';
import CaseStudies from './pages/CaseStudies';
import Resources from './pages/Resources';
import GetStarted from './pages/GetStarted';
import Blog from './pages/Blog';
import KnowledgeCenter from './pages/KnowledgeCenter';
import PremiumFloatingButton from './components/PremiumFloatingButton';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import AIReadiness from './pages/AIReadiness';
import AIStrategyRoadmap from './pages/AIStrategyRoadmap';
import DataAudit from './pages/DataAudit';
import UseCaseIdentification from './pages/UseCaseIdentification';
import ProjectScopingROI from './pages/ProjectScopingROI';
import IndustryBenchmarking from './pages/IndustryBenchmarking';
import IndustryReports from './pages/IndustryReports';
import FutureMarketInsights from './pages/FutureMarketInsights';
import ChatbotsAgents from './pages/dev/ChatbotsAgents';
import WorkflowAutomation from './pages/dev/WorkflowAutomation';
import IntelligentDocumentProcessing from './pages/dev/IntelligentDocumentProcessing';
import GenerativeAIIntegration from './pages/dev/GenerativeAIIntegration';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/increase-revenue" element={<IncreaseRevenue />} />
          <Route path="/reduce-costs" element={<ReduceCosts />} />
          <Route path="/improve-efficiency" element={<ImproveEfficiency />} />
          <Route path="/enhance-customer-experience" element={<EnhanceCustomerExperience />} />
          <Route path="/accelerate-decisions" element={<AccelerateDecisions />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/roi-calculator" element={<ROICalculator />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/ai-readiness" element={<AIReadiness />} />
          <Route path="/resources/ai-strategy-roadmap" element={<AIStrategyRoadmap />} />
          <Route path="/services/consulting/data-audit" element={<DataAudit />} />
          <Route path="/services/consulting/use-cases" element={<UseCaseIdentification />} />
          <Route path="/services/consulting/scoping-roi" element={<ProjectScopingROI />} />
          <Route path="/services/consulting/future-market-insights" element={<FutureMarketInsights />} />
          <Route path="/resources/benchmarking" element={<IndustryBenchmarking />} />
          <Route path="/resources/industry-reports" element={<IndustryReports />} />
          <Route path="/services/dev/chatbots" element={<ChatbotsAgents />} />
          <Route path="/services/dev/automation" element={<WorkflowAutomation />} />
          <Route path="/services/dev/idp" element={<IntelligentDocumentProcessing />} />
          <Route path="/services/dev/genai" element={<GenerativeAIIntegration />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/knowledge-center" element={<KnowledgeCenter />} />
        </Routes>
        <PremiumFloatingButton />
        <ScrollProgress />
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
