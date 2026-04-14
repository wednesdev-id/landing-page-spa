import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import spaPos07 from '../../assets/spa-pos-07.png';
import '../../pages/LandingPage.css';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    // Determine active menu item
    const getActiveState = (path: string) => {
        if (path === 'home') return isHome;
        if (path === '/blog') return location.pathname === '/blog';
        if (path === '/contact') return location.pathname === '/contact';
        return false;
    };

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Close mobile menu when clicking outside
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

    // Prevent body scroll when mobile menu is open
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

                {/* Desktop Navigation */}
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
                                <path d="M18 6L6 18M6 6l12 12" /> // Close icon
                            ) : (
                                <path d="M3 12h18M3 6h18M3 18h18" /> // Hamburger icon
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
                            <a
                                href="#features"
                                onClick={(e) => {
                                    if (isHome) scrollToSection('features')(e);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`mobile-menu-link ${getActiveState('home') ? 'active' : ''}`}
                            >
                                Fitur Utama
                            </a>

                            <Link
                                to="/blog"
                                className={`mobile-menu-link ${getActiveState('/blog') ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>

                            <a
                                href="#pricing"
                                onClick={(e) => {
                                    if (isHome) scrollToSection('pricing')(e);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="mobile-menu-link"
                            >
                                Biaya
                            </a>

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
                                <span className="branding-text">© 2024 SPAPOSPLUS</span>
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
                                    href="https://linkedin.com/company/spapos-id"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="LinkedIn"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
