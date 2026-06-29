import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/landing/HeroSection';
import TrustedBySection from '../components/landing/TrustedBySection';
import FeatureShowcaseSection from '../components/landing/FeatureShowcaseSection';
import ProductOverviewSection from '../components/landing/ProductOverviewSection';
import VideoDemo from '../components/landing/VideoDemo';
import RegistrationCTASection from '../components/landing/RegistrationCTASection';
import Testimonials from '../components/landing/Testimonials';
import PricingSection from '../components/landing/PricingSection';
import FAQSection from '../components/landing/FAQSection';
import FinalCTASection from '../components/landing/FinalCTASection';
import Footer from '../components/landing/Footer';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page new-design">
            <SEO
                title="SPAPOS - Kelola Spa Tanpa Pusing | Satu Aplikasi untuk Semua Cabang"
                description="Booking, manajemen staff, laporan keuangan - semua dalam satu sistem. 2,000+ spa owner di Indonesia sudah membuktikkan. Coba trial 90 hari sekarang."
            />
            <Navbar />
            <HeroSection />
            {/* <TrustedBySection /> */}
            <FeatureShowcaseSection />
            <ProductOverviewSection />
            <VideoDemo />
            <RegistrationCTASection />
            {/* <Testimonials /> */}
            <PricingSection />
            <FAQSection />
            <FinalCTASection />
            <Footer />
        </div>
    );
};

export default LandingPage;
