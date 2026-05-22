import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/layout/Navbar';
import './Features.css';

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

const Features: React.FC = () => {
    const handleGetStarted = () => {
        window.location.href = 'https://app.spapos.id/login';
    };

    const features = [
        {
            icon: <CalendarIcon />,
            title: 'Booking & Reservasi',
            description: 'Kelola jadwal reservasi spa dengan tampilan kalender yang intuitif dan notifikasi real-time.',
            details: [
                'Kalender booking real-time',
                'Notifikasi WhatsApp otomatis',
                'Manajemen room & terapis',
                'Kurangi no-show hingga 60%'
            ]
        },
        {
            icon: <UsersIcon />,
            title: 'Manajemen Terapis',
            description: 'Atur jadwal terapis, pantau kehadiran, dan kelola performa tim spa dengan mudah.',
            details: [
                'Jadwal shift otomatis',
                'Tracking performa terapis',
                'Absensi biometric',
                'Komisi otomatis per terapis'
            ]
        },
        {
            icon: <ChartIcon />,
            title: 'Laporan & Analitik',
            description: 'Insight bisnis spa dengan laporan penjualan treatment, layanan terpopuler, dan tren pendapatan.',
            details: [
                'Laporan revenue harian',
                'Analisis treatment terpopuler',
                'Multi-cabang comparison',
                'Export laporan PDF/Excel'
            ]
        },
        {
            icon: <ClipboardIcon />,
            title: 'Point of Sale (POS)',
            description: 'Sistem kasir terintegrasi untuk produk spa, treatment packages, dan invoice pelanggan.',
            details: [
                'Payment multiple channels',
                'Invoice otomatis',
                'Stock management',
                'Support berbagai metode pembayaran'
            ]
        }
    ];

    return (
        <div className="features-page">
            <SEO
                title="Fitur SPAPOS - Semua yang Anda Butuhkan untuk Kelola Spa"
                description="Booking, manajemen staff, laporan keuangan, POS - semua fitur dalam satu sistem."
            />
            <Navbar />

            <section className="features-hero">
                <div className="features-hero-content">
                    <h1 className="features-hero-title">Fitur SPAPOS</h1>
                    <p className="features-hero-subtitle">
                        Semua yang Anda butuhkan untuk mengelola operasional spa dalam satu tempat
                    </p>
                    <Link to="/" className="features-back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Kembali ke Beranda
                    </Link>
                </div>
            </section>

            <section className="features-detail-section">
                <div className="features-detail-container">
                    {features.map((feature, index) => (
                        <div key={index} className={`feature-detail-card ${index % 2 === 1 ? 'feature-detail-reverse' : ''}`}>
                            <div className="feature-detail-icon-wrapper">
                                <div className="feature-detail-icon">{feature.icon}</div>
                            </div>
                            <div className="feature-detail-content">
                                <h2 className="feature-detail-title">{feature.title}</h2>
                                <p className="feature-detail-description">{feature.description}</p>
                                <ul className="feature-detail-list">
                                    {feature.details.map((detail, i) => (
                                        <li key={i}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="features-cta-section">
                <h2 className="features-cta-title">Siap Mencoba Semua Fitur?</h2>
                <p className="features-cta-subtitle">
                    Mulai gratis dan rasakan kemudahan mengelola spa dengan SPAPOS
                </p>
                <button className="features-cta-button" onClick={handleGetStarted}>
                    Coba Free Trial
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </section>

            <footer className="landing-footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="logo-text">SPAPOS</span>
                        <p className="footer-tagline">Spa POS & Management System</p>
                    </div>
                    <div className="footer-links">
                        <Link to="/" className="footer-link">Beranda</Link>
                        <span>•</span>
                        <Link to="/features" className="footer-link">Fitur</Link>
                        <span>•</span>
                        <Link to="/contact" className="footer-link">Kontak</Link>
                        <span className="mt-2 block">© 2026 SPAPOS. All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Features;
