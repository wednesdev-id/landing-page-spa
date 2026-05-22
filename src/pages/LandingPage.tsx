import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import favicon from '/favicon.png';
import dashboardImg from '/image.png';
import Navbar from '../components/layout/Navbar';
import VideoDemo from '../components/landing/VideoDemo';
import Testimonials from '../components/landing/Testimonials';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    const handleGetStarted = () => {
        window.location.href = 'https://app.spapos.id/login';
    };

    const getHandleFeature = () => {
        window.location.href = '/features';
    };

    const kenapaReasons = [
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            ),
            title: 'Pemetaan Manajemen Lebih Terkendali dan Terpusat',
            subheading: 'Digitalisasi sistem yang jelas dan tepat untuk menghindari celah kecurangan dan human error.'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
            title: 'Efisiensi Waktu dan  Biaya',
            subheading: 'Owner bebas pantau cabang dari mana saja, real-time, hemar biaya perjalanan.'
        },
        {
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
            ),
            title: 'Bantu Buat Keputusan Bisnis, Tepat, dan Cepat',
            subheading: 'Ketersediaan data real-time mempermudah analisis dan bantu perencanaan strategi bisnis.'
        }
    ];

    const layananItems = [
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                </svg>
            ),
            text: 'Sistem Pelaporan Real-Time Terkendali'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            text: 'Manajemen Staff Lebih Mudah'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
            ),
            text: 'Akses Fleksible dengan Multi-Device'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            ),
            text: 'Kendali Penuh Database Pelanggan'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <line x1="7.5" y1="4.21" x2="12" y2="7.01" />
                    <line x1="12" y1="22.08" x2="12" y2="7" />
                    <line x1="16.5" y1="4.21" x2="12" y2="7.01" />
                </svg>
            ),
            text: 'Kelola Stok Barang Lebih Mudah'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            ),
            text: 'Laporan Keuangan Lebih Terkendali'
        }
    ];

    return (
        <div className="landing-page">
            <SEO
                title="SPAPOS - Kelola Spa Tanpa Pusing | Satu Aplikasi untuk Semua Cabang"
                description="Booking, manajemen staff, laporan keuangan - semua dalam satu sistem. 2,000+ spa owner di Indonesia sudah membuktikkan. Coba gratis sekarang."
            />
            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <section className="hero-section" id="hero">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="hero-badge-dot"></span>
                        <span className="hero-badge-text">Dipercaya oleh 2,000+ Spa Owner</span>
                    </div>

                    <h2 className="hero-title">
                        Kelola Bisnis SPA Anda dari Mana Saja.
                        <span className="hero-accent"> Lebih Cepat, Lebih Mudah dengan SPAPOS.</span>
                    </h2>
                    <p className="hero-subtitle">
                        Pantau setiap cabang secara real-time, minimalkan human error, dan tingkatkan performa bisnis dengan satu sistem terintegrasi
                    </p>

                    <div className="hero-cta-group">
                        <button className="hero-cta hero-cta-primary" onClick={handleGetStarted}>
                            Coba Free Trial
                            <svg className="hero-cta-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button className="hero-cta hero-cta-secondary" onClick={getHandleFeature}>
                            Lihat Fitur
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                    </div>

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
                    <div className="hero-dashboard-screenshot">
                        <img src={dashboardImg} alt="SPAPOS Dashboard" className="dashboard-img" />
                        <p className="powered-by">Powered by Wednesdev.id</p>
                    </div>
                </div>
            </section>

            {/* Kenapa SPapos Section */}
            <section className="kenapa-section" id="kenapa">
                <div className="kenapa-container">
                    <div className="kenapa-header">
                        <h2 className="kenapa-title">Kenapa SPAPOS?</h2>
                        <p className="kenapa-subtitle">
                            SPAPOS sebagai Investasi Cerdas Bisnis SPA Anda
                        </p>
                    </div>
                    <div className="kenapa-grid">
                        {kenapaReasons.map((reason, index) => (
                            <div key={index} className="kenapa-card">
                                <h3 className="kenapa-card-title">{reason.title}</h3>
                                <div className="kenapa-card-icon">{reason.icon}</div>
                                <p className="kenapa-card-subheading">{reason.subheading}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Layanan SPapos Section */}
            <section className="layanan-section" id="layanan">
                <div className="layanan-container">
                    <div className="layanan-grid">
                        {/* Left Side */}
                        <div className="layanan-left">
                            <h2 className="layanan-heading">
                                Apa saja yang Anda dapatkan Bersama SPAPOS?
                            </h2>
                            <div className="layanan-screenshot-wrapper">
                                <img src={dashboardImg} alt="SPAPOS Dashboard" className="layanan-dashboard-img" />
                                <div className="layanan-floating-check">
                                    <div className="layanan-check-icon">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <span>Performa Terapis</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="layanan-right">
                            <div className="layanan-cards-grid">
                                {layananItems.map((item, index) => (
                                    <div key={index} className="layanan-card">
                                        <div className="layanan-card-icon">{item.icon}</div>
                                        <span className="layanan-card-text">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Demo Produk Section */}
            <VideoDemo />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Final CTA Section */}
            <section className="cta-section">
                <h2 className="cta-title">Siap Mengelola Spa dengan Lebih Tenang?</h2>
                <p className="cta-subtitle">
                    Bergabung dengan SPAPOS dan rasakan perbedaannya.
                </p>
                <button className="cta-button" onClick={handleGetStarted}>
                    Mulai Gratis
                </button>
            </section>

            {/* Footer */}
            <footer className="landing-footer">
                <div className="footer-main">
                    <div className="footer-brand-col">
                        <div className="footer-brand">
                            <img src={favicon} alt="SPAPOS" className="footer-logo" />
                            <span className="logo-text">SPAPOS</span>
                        </div>
                        <p className="footer-desc">
                            Sistem manajemen spa terintegrasi. Booking, POS, laporan & staff management dalam satu platform.
                        </p>
                        <div className="footer-socials">
                            <a href="https://wa.me/6281339691260" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="WhatsApp">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                            </a>
                            <a href="https://instagram.com/spapos.id" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-nav-col">
                        <h4 className="footer-col-title">Produk</h4>
                        <div className="footer-col-links">
                            <Link to="/features" className="footer-link">Fitur</Link>
                            <a href="#layanan" className="footer-link">Layanan</a>
                            <a href="#video-demo" className="footer-link">Demo</a>
                        </div>
                    </div>

                    <div className="footer-nav-col">
                        <h4 className="footer-col-title">Perusahaan</h4>
                        <div className="footer-col-links">
                            <a href="#hero" className="footer-link">Beranda</a>
                            <Link to="/blog" className="footer-link">Blog</Link>
                            <Link to="/contact" className="footer-link">Kontak</Link>
                        </div>
                    </div>

                    <div className="footer-nav-col">
                        <h4 className="footer-col-title">Kontak</h4>
                        <div className="footer-col-links">
                            <a href="https://wa.me/6281339691260" target="_blank" rel="noopener noreferrer" className="footer-link">+62 813-3969-1260</a>
                            <a href="mailto:fara@spapos.id" className="footer-link">fara@spapos.id</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 SPAPOS. All rights reserved.</p>
                    <p className="footer-powered">Powered by <strong>Wednesdev.id</strong></p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
