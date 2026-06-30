import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';
import WorkflowSection from '../components/landing/WorkflowSection';
import CoreFeaturesSection from '../components/landing/CoreFeaturesSection';
import DashboardPreviewSection from '../components/landing/DashboardPreviewSection';
import Trial90Section from '../components/landing/Trial90Section';
import PricingSection from '../components/landing/PricingSection';
import FAQSection from '../components/landing/FAQSection';
import ProcessStepsSection from '../components/landing/ProcessStepsSection';
import FinalCTASection from '../components/landing/FinalCTASection';
import Footer from '../components/landing/Footer';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page new-design">
      <SEO
        title="SPAPOS - Kelola Spa Tanpa Jadwal Bentrok | Trial 90 Hari"
        description="SPAPOS membantu owner spa mengontrol booking, stok, kasir, komisi, membership, dan laporan cabang dalam satu dashboard. Coba trial 90 hari sekarang."
      />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <WorkflowSection />
      <CoreFeaturesSection />
      <DashboardPreviewSection />
      <Trial90Section />
      <PricingSection />
      <FAQSection />
      <ProcessStepsSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
