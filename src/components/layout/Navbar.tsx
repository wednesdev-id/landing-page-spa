import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import favicon from '/favicon.png';
import '../../pages/LandingPage.css';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const getActiveState = (path: string) => {
        if (path === 'home') return isHome && window.location.hash === '';
        if (path === '/blog') return location.pathname === '/blog';
        if (path === '/contact') return location.pathname === '/contact';
        if (path === '/features') return location.pathname === '/features';
        if (path === '/pricing') return location.pathname === '/pricing';
        return false;
    };

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleCobaGratis = () => {
        window.location.href = 'https://app.spapos.id/login';
    };

    const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
        if (!isHome) return;
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
                    <Link to="/" className="logo-container">
                        <img src={favicon} alt="SPAPOS" className="logo-image" />
                        <span className="logo-text">SPAPOS</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-6">
                        {isHome ? (
                            <a href="#hero" onClick={scrollToSection('hero')} className="text-gray-600 hover:text-mara-primary font-medium transition-colors">Beranda</a>
                        ) : (
                            <Link to="/" className="text-gray-600 hover:text-mara-primary font-medium transition-colors">Beranda</Link>
                        )}

                        <Link to="/features" className={`font-medium transition-colors ${getActiveState('/features') ? 'text-mara-primary' : 'text-gray-600 hover:text-mara-primary'}`}>
                            Fitur
                        </Link>

                        <Link to="/pricing" className={`font-medium transition-colors ${getActiveState('/pricing') ? 'text-mara-primary' : 'text-gray-600 hover:text-mara-primary'}`}>
                            Biaya
                        </Link>

                        <Link to="/contact" className={`font-medium transition-colors ${getActiveState('/contact') ? 'text-mara-primary' : 'text-gray-600 hover:text-mara-primary'}`}>
                            Kontak
                        </Link>
                    </div>

                    <button className="nav-cta hidden md:block" onClick={handleCobaGratis}>
                        Coba Gratis
                    </button>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="hamburger-button md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {isMobileMenuOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" />
                            ) : (
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                        <div className="mobile-menu-header">
                            <h2>Menu</h2>
                            <div className="mobile-menu-header-actions">
                                <button
                                    className="mobile-menu-cta-small"
                                    onClick={handleCobaGratis}
                                    aria-label="Coba gratis"
                                >
                                    Coba Gratis
                                </button>
                                <button
                                    className="mobile-menu-close"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    aria-label="Close menu"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <nav className="mobile-menu-nav">
                            <Link
                                to="/"
                                className={`mobile-menu-link ${getActiveState('home') ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Beranda
                            </Link>

                            <Link
                                to="/features"
                                className={`mobile-menu-link ${getActiveState('/features') ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Fitur
                            </Link>

                            <Link
                                to="/pricing"
                                className={`mobile-menu-link ${getActiveState('/pricing') ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Biaya
                            </Link>

                            <Link
                                to="/contact"
                                className={`mobile-menu-link ${getActiveState('/contact') ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Kontak
                            </Link>
                        </nav>

                        <div className="mobile-menu-footer">
                            <div className="mobile-menu-branding">
                                <span className="branding-text">© 2026 SPAPOS</span>
                            </div>
                            <div className="mobile-menu-social">
                                <a
                                    href="https://instagram.com/spapos.id"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="Instagram"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                                <a
                                    href="https://wa.me/6281339691260"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="WhatsApp"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
