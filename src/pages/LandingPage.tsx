import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import spaPos07 from '../assets/spa-pos-07.png';
import spaPos09 from '../assets/spa-pos-09.png';
import './LandingPage.css';

// Get dashboard URL from environment variable or use default
const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:5173';

// Icons as simple SVG components for clean look
const CalendarIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const UsersIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const ChartIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
);

const ClipboardIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
);

const LandingPage: React.FC = () => {
    const { isAuthenticated } = useAuth();

    const handleGetStarted = () => {
        // Redirect to dashboard (separate application)
        if (isAuthenticated) {
            window.location.href = `${DASHBOARD_URL}/app/dashboard`;
        } else {
            // Navigate to login with register mode
            window.location.href = `${DASHBOARD_URL}/login?mode=register`;
        }
    };

    const features = [
        {
            icon: <CalendarIcon />,
            title: 'Booking & Reservasi',
            description: 'Kelola jadwal reservasi spa dengan tampilan kalender yang intuitif dan notifikasi real-time.'
        },
        {
            icon: <UsersIcon />,
            title: 'Manajemen Terapis',
            description: 'Atur jadwal terapis, pantau kehadiran, dan kelola performa tim spa dengan mudah.'
        },
        {
            icon: <ChartIcon />,
            title: 'Laporan & Analitik',
            description: 'Insight bisnis spa dengan laporan penjualan treatment, layanan terpopuler, dan tren pendapatan.'
        },
        {
            icon: <ClipboardIcon />,
            title: 'Point of Sale (POS)',
            description: 'Sistem kasir terintegrasi untuk produk spa, treatment packages, dan invoice pelanggan.'
        }
    ];

    const benefits = [
        'Antarmuka yang tenang dan fokus, nyaman digunakan sepanjang hari',
        'Sistem terintegrasi dari booking hingga invoice dalam satu platform',
        'Akses multi-peran untuk owner, admin, resepsionis, dan terapis',
        'Laporan keuangan harian yang akurat dan siap cetak'
    ];

    return (
        <div className="landing-page">
            {/* Navigation */}
            <nav className="landing-nav">
                <div className="landing-nav-content">
                    <div className="landing-logo">
                        <img src={spaPos07} alt="SPAPOSPLUS" style={{ height: '40px', width: 'auto' }} />
                    </div>
                    <button className="nav-cta" onClick={handleGetStarted}>
                        {isAuthenticated ? 'Dashboard' : 'Masuk'}
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    {/* Badge */}
                    <div className="hero-badge">
                        <span className="hero-badge-dot"></span>
                        <span className="hero-badge-text">Trusted by 500+ Spa Businesses</span>
                    </div>

                    <h1 className="hero-title">
                        Platform POS & Manajemen Spa
                        <span className="hero-accent"> All-in-One</span>
                    </h1>
                    <p className="hero-subtitle">
                        Kelola booking, terapis, inventori, dan keuangan bisnis spa Anda dalam satu platform terintegrasi. Meningkatkan efisiensi hingga 60%.
                    </p>

                    {/* CTA Button */}
                    <div className="hero-cta-group">
                        <button className="hero-cta hero-cta-primary" onClick={handleGetStarted}>
                            Mulai Gratis 7 Hari
                            <svg className="hero-cta-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="hero-trust">
                        <div className="trust-item">
                            <div className="trust-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <div className="trust-content">
                                <div className="trust-label">Setup Cepat</div>
                                <div className="trust-value">Dalam 5 Menit</div>
                            </div>
                        </div>
                        <div className="trust-item">
                            <div className="trust-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <div className="trust-content">
                                <div className="trust-label">Data Aman</div>
                                <div className="trust-value">Enkripsi 256-bit</div>
                            </div>
                        </div>
                        <div className="trust-item">
                            <div className="trust-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                            <div className="trust-content">
                                <div className="trust-label">Support 24/7</div>
                                <div className="trust-value">Bahasa Indonesia</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-mockup">
                        {/* Mockup Header */}
                        <div className="mockup-header">
                            <div className="mockup-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="mockup-title">Dashboard</div>
                        </div>

                        {/* Mockup Content */}
                        <div className="mockup-body">
                            {/* Sidebar */}
                            <div className="mockup-sidebar">
                                <div className="sidebar-brand" style={{ background: 'transparent', padding: 0 }}>
                                    <img src={spaPos09} alt="S+" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                                <div className="sidebar-items">
                                    <div className="sidebar-item active"></div>
                                    <div className="sidebar-item"></div>
                                    <div className="sidebar-item"></div>
                                    <div className="sidebar-item"></div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="mockup-main">
                                {/* Stats Cards */}
                                <div className="mockup-stats">
                                    <div className="stat-card stat-primary">
                                        <div className="stat-dot"></div>
                                        <div className="stat-lines">
                                            <div className="stat-line stat-line-long"></div>
                                            <div className="stat-line stat-line-short"></div>
                                        </div>
                                    </div>
                                    <div className="stat-card stat-success">
                                        <div className="stat-dot"></div>
                                        <div className="stat-lines">
                                            <div className="stat-line stat-line-long"></div>
                                            <div className="stat-line stat-line-short"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Chart Area */}
                                <div className="mockup-chart">
                                    <div className="chart-header">
                                        <div className="chart-title"></div>
                                        <div className="chart-legend">
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="chart-bars">
                                        <div className="chart-bar" style={{ height: '40%' }}></div>
                                        <div className="chart-bar" style={{ height: '65%' }}></div>
                                        <div className="chart-bar" style={{ height: '45%' }}></div>
                                        <div className="chart-bar" style={{ height: '80%' }}></div>
                                        <div className="chart-bar" style={{ height: '55%' }}></div>
                                        <div className="chart-bar" style={{ height: '90%' }}></div>
                                        <div className="chart-bar" style={{ height: '70%' }}></div>
                                    </div>
                                </div>

                                {/* Recent Activity */}
                                <div className="mockup-activity">
                                    <div className="activity-item">
                                        <div className="activity-dot"></div>
                                        <div className="activity-line activity-line-long"></div>
                                    </div>
                                    <div className="activity-item">
                                        <div className="activity-dot"></div>
                                        <div className="activity-line activity-line-medium"></div>
                                    </div>
                                    <div className="activity-item">
                                        <div className="activity-dot"></div>
                                        <div className="activity-line activity-line-short"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="mockup-badge">
                            <div className="badge-icon">✓</div>
                            <div className="badge-content">
                                <div className="badge-title">Booking Baru</div>
                                <div className="badge-time">Baru saja</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="section-header">
                    <h2 className="section-title">Fitur Utama</h2>
                    <p className="section-subtitle">
                        Semua yang Anda butuhkan untuk mengelola operasional spa dalam satu tempat
                    </p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="benefits-section">
                <div className="benefits-content">
                    <h2 className="section-title">Mengapa SPAPOSPLUS?</h2>
                    <ul className="benefits-list">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="benefit-item">
                                <span className="benefit-check">✓</span>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="benefits-visual">
                    <div className="benefit-stat">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Terintegrasi</span>
                    </div>
                    <div className="benefit-stat">
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">Akses Cloud</span>
                    </div>
                    <div className="benefit-stat">
                        <span className="stat-number">∞</span>
                        <span className="stat-label">Booking</span>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <h2 className="cta-title">Siap Mengelola Spa dengan Lebih Tenang?</h2>
                <p className="cta-subtitle">
                    Bergabung dengan SPAPOSPLUS dan rasakan perbedaannya.
                </p>
                <button className="cta-button" onClick={handleGetStarted}>
                    Mulai Gratis
                </button>
            </section>

            {/* Footer */}
            <footer className="landing-footer">
                <div className="footer-content">
                    <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img src={spaPos09} alt="Logo" style={{ height: '48px', width: 'auto' }} />
                        <div>
                            <span className="logo-text">SPAPOSPLUS</span>
                            <p className="footer-tagline">Spa POS & Management System</p>
                        </div>
                    </div>
                    <div className="footer-links">
                        <span>© 2026 SPAPOSPLUS. All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
