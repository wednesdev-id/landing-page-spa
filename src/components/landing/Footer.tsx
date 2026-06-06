import React from 'react';
import { Link } from 'react-router-dom';
import favicon from '/favicon.png';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-main-grid">
                    {/* Brand Column */}
                    <div className="footer-brand-col">
                        <div className="footer-brand">
                            <img src={favicon} alt="SPAPOS" className="footer-logo" />
                            <span className="logo-text">SPAPOS</span>
                        </div>
                        <p className="footer-desc">
                            Platform manajemen spa berbasis interlocking workflow untuk mengunci alur kerja staf, mencatat aktivitas operasional lapangan secara presisi, dan menghasilkan validitas data yang akurat.
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-nav-col">
                        <h4 className="footer-col-title">Quick links</h4>
                        <ul className="footer-col-links">
                            <li><Link to="/features" className="footer-link">Fitur</Link></li>
                            <li><a href="#pricing" className="footer-link">Biaya</a></li>
                            <li><Link to="/contact" className="footer-link">Kontak</Link></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div className="footer-nav-col">
                        <h4 className="footer-col-title">Resources</h4>
                        <ul className="footer-col-links">
                            <li><a href="https://wa.me/6281339691260" target="_blank" rel="noopener noreferrer" className="footer-link">Support</a></li>
                            <li><a href="#" className="footer-link">Privacy policy</a></li>
                            <li><a href="#" className="footer-link">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* Social Media Column */}
                    <div className="footer-nav-col">
                        <h4 className="footer-col-title">Social media</h4>
                        <div className="footer-socials">
                            <a href="#" className="footer-social-link" aria-label="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href="https://instagram.com/spapos.id" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="#" className="footer-social-link" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a href="#" className="footer-social-link" aria-label="YouTube">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 SPAPOS. All rights reserved.</p>
                    <p className="footer-powered">Powered by <strong>Wednesdev.id</strong></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
