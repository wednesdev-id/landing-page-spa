import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import spaPos07 from '../../assets/spa-pos-07.png';
import '../../pages/LandingPage.css';

const Navbar: React.FC = () => {
    // const { isAuthenticated } = useAuth(); // Unused
    const location = useLocation();
    const isHome = location.pathname === '/';

    const handleCobaGratis = () => {
        window.location.href = 'https://dashboard.spapos.id/login';
    };

    const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
        if (!isHome) return; // If not on home, Link will handle navigation
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="landing-nav">
            <div className="landing-nav-content">
                <div className="landing-logo">
                    <Link to="/">
                        <img src={spaPos07} alt="SPAPOSPLUS" style={{ height: '40px', width: 'auto' }} />
                    </Link>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-6">
                        {isHome ? (
                            <a href="#features" onClick={scrollToSection('features')} className="text-gray-600 hover:text-mara-primary font-medium transition-colors">Fitur Utama</a>
                        ) : (
                            <Link to="/#features" className="text-gray-600 hover:text-mara-primary font-medium transition-colors">Fitur Utama</Link>
                        )}

                        <Link to="/blog" className="text-gray-600 hover:text-mara-primary font-medium transition-colors">Blog</Link>

                        {isHome ? (
                            <a href="#pricing" onClick={scrollToSection('pricing')} className="text-gray-600 hover:text-mara-primary font-medium transition-colors">Biaya</a>
                        ) : (
                            <Link to="/#pricing" className="text-gray-600 hover:text-mara-primary font-medium transition-colors">Biaya</Link>
                        )}

                        <Link to="/contact" className="text-gray-600 hover:text-mara-primary font-medium transition-colors">Kontak</Link>
                    </div>

                    <button className="nav-cta" onClick={handleCobaGratis}>
                        Coba Gratis
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
