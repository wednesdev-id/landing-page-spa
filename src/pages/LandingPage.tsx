import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import spaPos09 from '../assets/spa-pos-09.png';
import coverageMap from '../assets/coverage-map.png';
import Navbar from '../components/layout/Navbar';
import EnhancedFeatures from '../components/landing/EnhancedFeatures';
import UserRolesSection from '../components/landing/UserRolesSection';
import BenefitsAdvantages from '../components/landing/BenefitsAdvantages';
import Integrations from '../components/landing/Integrations';
import FAQSection from '../components/landing/FAQSection';
import './LandingPage.css';

// Interface for Blog Post
interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    coverImage?: string;
    image?: string;
    date?: string;
    createdAt?: string;
    slug: string;
}

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
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Using relative URL which is proxied by Vite to the backend
                const response = await fetch('/api/posts');
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data.slice(0, 3));
                }
            } catch (error) {
                console.error('Error fetching posts for landing page:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handleGetStarted = () => {
        // Redirect to dashboard login
        window.location.href = 'https://app.spapos.id/login';
    };

    const handleSubscribe = (plan: string) => {
        const message = `Halo, saya tertarik dengan paket ${plan} SPAPOSPLUS. Mohon info lebih lanjut.`;
        window.open(`https://wa.me/6281339691260?text=${encodeURIComponent(message)}`, '_blank');
    };

    // Helper to get image source
    const getPostImage = (post: BlogPost) => post.coverImage || post.image || 'https://placehold.co/600x400?text=No+Image';

    // Helper to get date
    const getPostDate = (post: BlogPost) => {
        const dateStr = post.date || post.createdAt || new Date().toISOString();
        return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
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

    return (
        <div className="landing-page">
            <SEO
                title="SPAPOSPLUS - Sistem Manajemen Spa Mudah & Lengkap | Booking, Membership, POS"
                description="Kelola bisnis spa dengan mudah! Booking online, manajemen terapis, membership, laporan keuangan, dan POS dalam satu aplikasi. Setup 5 menit. Gratis 14 hari."
            />
            {/* Navigation */}
            <Navbar />

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
                            Mulai Gratis 14 Hari
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
            <section id="features" className="features-section">
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

            {/* Enhanced Features Showcase Section */}
            <EnhancedFeatures />

            {/* User Roles & Workflows Section */}
            <UserRolesSection />

            {/* Benefits & Advantages Section */}
            <BenefitsAdvantages />

            {/* Integrations Section */}
            <Integrations />

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-mara-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-mara-primary mb-4 font-serif">Biaya Langganan</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Pilih paket yang sesuai dengan kebutuhan bisnis spa Anda. Investasi terbaik untuk pertumbuhan bisnis.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Monthly Package - 199k */}
                        <div className="bg-white rounded-2xl p-8 border border-mara-secondary/30 shadow-sm hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-bold text-mara-primary mb-2">Monthly Package</h3>
                            <div className="text-sm font-semibold text-gray-500 mb-4">(Bulanan)</div>
                            <div className="text-4xl font-bold text-mara-accent mb-2">Rp 199.000<span className="text-sm text-gray-400 font-normal">/bulan</span></div>
                            <p className="text-gray-500 mb-6 text-sm">Paket dasar untuk pengelolaan operasional jangka pendek.</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-gray-600"><span className="text-mara-accent mr-2">✓</span> Maksimal 10 Staff</li>
                                <li className="flex items-center text-gray-600"><span className="text-mara-accent mr-2">✓</span> Maksimal 3 Cabang</li>
                                <li className="flex items-center text-gray-600"><span className="text-mara-accent mr-2">✓</span> Sistem POS</li>
                                <li className="flex items-center text-gray-600"><span className="text-mara-accent mr-2">✓</span> Laporan</li>
                                <li className="flex items-center text-gray-600"><span className="text-mara-accent mr-2">✓</span> Manajemen Inventori</li>
                            </ul>
                            <button onClick={() => handleSubscribe('Monthly Package')} className="w-full py-3 rounded-lg border-2 border-mara-primary text-mara-primary font-bold hover:bg-mara-primary hover:text-white transition-colors">
                                Pilih Monthly
                            </button>
                        </div>

                        {/* 6-Month Package - 999k */}
                        <div className="bg-white rounded-2xl p-8 border-2 border-mara-accent shadow-xl transform scale-105 relative">
                            <div className="absolute top-0 right-0 bg-mara-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MOST POPULAR</div>
                            <h3 className="text-xl font-bold text-mara-primary mb-2">6-Month Package</h3>
                            <div className="text-sm font-semibold text-gray-500 mb-4">(Hemat)</div>
                            <div className="text-4xl font-bold text-mara-accent mb-2">Rp 999.000<span className="text-sm text-gray-400 font-normal">/6 bulan</span></div>
                            <p className="text-gray-500 mb-6 text-sm">Lebih hemat dari harga bulanan.</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-gray-600"><span className="text-mara-accent mr-2">✓</span> Maksimal 10 Staff</li>
                                <li className="flex items-center text-gray-600"><span className="text-mara-accent mr-2">✓</span> Maksimal 3 Cabang</li>
                                <li className="flex items-center text-gray-600"><span className="text-mara-accent mr-2">✓</span> Sistem POS</li>
                                <li className="flex items-center text-gray-600"><span className="text-mara-accent mr-2">✓</span> Laporan Lanjutan</li>
                                <li className="flex items-center text-gray-600"><span className="text-mara-accent mr-2">✓</span> Manajemen Inventori</li>
                                <li className="flex items-center text-gray-600"><span className="text-mara-accent mr-2">✓</span> Unlimited Staff (dalam limitasi paket)</li>
                            </ul>
                            <button onClick={() => handleSubscribe('6-Month Package')} className="w-full py-3 rounded-lg bg-mara-accent text-white font-bold hover:bg-white hover:text-mara-accent border-2 border-mara-accent transition-colors">
                                Pilih 6-Month
                            </button>
                        </div>

                        {/* Yearly Package - 1.899k */}
                        <div className="bg-white rounded-2xl p-8 border border-mara-secondary/30 shadow-sm hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-bold text-mara-primary mb-2">Yearly Package</h3>
                            <div className="text-sm font-semibold text-gray-500 mb-4">(Super Hemat)</div>
                            <div className="text-4xl font-bold text-mara-accent mb-1">Rp 1.899.000<span className="text-sm text-gray-400 font-normal">/tahun</span></div>
                            <div className="text-xs text-mara-primary font-semibold mb-6">(~Rp 158rb/bulan)</div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-gray-600"><span className="text-mara-accent mr-2">✓</span> Maksimal 20 Staff</li>
                                <li className="flex items-center text-gray-600"><span className="text-mara-accent mr-2">✓</span> Maksimal 5 Cabang</li>
                                <li className="flex items-center text-gray-600"><span className="text-mara-accent mr-2">✓</span> Semua Fitur 6-Month</li>
                                <li className="flex items-center text-gray-600"><span className="text-mara-accent mr-2">✓</span> Priority Support</li>
                            </ul>
                            <button onClick={() => handleSubscribe('Yearly Package')} className="w-full py-3 rounded-lg border-2 border-mara-primary text-mara-primary font-bold hover:bg-mara-primary hover:text-white transition-colors">
                                Pilih Yearly
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coverage Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="uppercase tracking-widest text-xs font-bold text-gray-400 mb-4">JANGKAUAN KAMI DI INDONESIA</div>
                    </div>

                    <div className="relative">
                        {/* Map Background */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 transform scale-110">
                            <img
                                src={coverageMap}
                                alt="Indonesia Map"
                                className="w-full max-w-5xl object-contain"
                            />
                        </div>

                        {/* Stats Overlay */}
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-12">
                            <div>
                                <div className="text-5xl md:text-6xl font-bold text-mara-accent mb-2">2,474</div>
                                <div className="text-gray-500 font-medium">Owner Bisnis Spa</div>
                            </div>
                            <div>
                                <div className="text-5xl md:text-6xl font-bold text-mara-accent mb-2">4,760,067</div>
                                <div className="text-gray-500 font-medium">Total Pelanggan</div>
                            </div>
                            <div>
                                <div className="text-5xl md:text-6xl font-bold text-mara-accent mb-2">3,167</div>
                                <div className="text-gray-500 font-medium">Outlet Aktif</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Blog Section */}
            <section className="py-20 bg-gray-50" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-mara-primary mb-2 font-serif">Wawasan Terbaru</h2>
                            <p className="text-gray-500">Tips dan strategi untuk mengembangkan bisnis spa Anda.</p>
                        </div>
                        <Link to="/blog" className="hidden md:inline-flex items-center text-mara-primary font-bold hover:text-mara-accent transition-colors">
                            Lihat Semua Artikel <span className="ml-2">→</span>
                        </Link>
                    </div>

                    {loading ? (
                        <div className="text-center py-12 text-gray-500">Loading articles...</div>
                    ) : posts.length > 0 ? (
                        <div className="grid md:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <Link key={index} to={post.slug ? `/blog/${post.slug}` : '/blog'} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-mara-primary/10 group-hover:bg-transparent transition-colors z-10" />
                                        <img src={getPostImage(post)} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-xs font-bold text-mara-accent uppercase tracking-wider mb-2">{getPostDate(post)}</div>
                                        <h3 className="text-xl font-bold text-mara-primary mb-3 font-serif group-hover:text-mara-accent transition-colors line-clamp-2">{post.title}</h3>
                                        <div
                                            className="text-gray-500 text-sm line-clamp-3 mb-4 prose prose-sm max-w-none"
                                            dangerouslySetInnerHTML={{ __html: post.excerpt || post.title }} // Basic excerpt handling
                                        />
                                        <div className="text-mara-primary font-bold text-sm inline-flex items-center">
                                            Baca Selengkapnya <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
                            <p className="text-gray-500">Belum ada artikel terbaru.</p>
                        </div>
                    )}

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/blog" className="inline-flex items-center text-mara-primary font-bold hover:text-mara-accent transition-colors">
                            Lihat Semua Artikel <span className="ml-2">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-mara-primary mb-4 font-serif">Kata Mereka</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Apa kata pemilik bisnis spa yang telah mempercayakan operasional mereka pada SPAPOSPLUS.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah Wijaya",
                                role: "Owner",
                                spa: "Zen Wellness Jakarta",
                                content: "Sejak menggunakan SPAPOSPLUS, pencatatan transaksi jadi jauh lebih rapi. Fitur laporannya sangat membantu saya menganalisa performa terapis.",
                                initial: "S"
                            },
                            {
                                name: "Budi Santoso",
                                role: "Manager",
                                spa: "Bali Radiance Spa",
                                content: "Sistem booking onlinenya juara! Pelanggan jadi lebih mudah reservasi, dan no-show rate kami turun drastis berkat fitur reminder WhatsApp otomatis.",
                                initial: "B"
                            },
                            {
                                name: "Linda Kusuma",
                                role: "Owner",
                                spa: "The Beauty Lounge",
                                content: "Customer supportnya sangat responsif. Aplikasi mudah digunakan bahkan oleh staff baru. Sangat direkomendasikan untuk bisnis spa yang ingin scale up.",
                                initial: "L"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-mara-background p-8 rounded-2xl shadow-sm border border-mara-secondary/20 relative">
                                <div className="text-mara-accent text-4xl font-serif absolute top-4 right-6 opacity-20">"</div>
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-mara-primary flex items-center justify-center text-white font-bold text-xl">
                                        {testimonial.initial}
                                    </div>
                                    <div>
                                        <div className="font-bold text-mara-primary">{testimonial.name}</div>
                                        <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.spa}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            {/* CTA Section */}
            <section className="cta-section" >
                <h2 className="cta-title">Siap Mengelola Spa dengan Lebih Tenang?</h2>
                <p className="cta-subtitle">
                    Bergabung dengan SPAPOSPLUS dan rasakan perbedaannya.
                </p>
                <button className="cta-button" onClick={handleGetStarted}>
                    Mulai Gratis
                </button>
            </section>

            {/* Footer */}
            <footer className="landing-footer" >
                <div className="footer-content">
                    <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img src={spaPos09} alt="Logo" style={{ height: '48px', width: 'auto' }} />
                        <div>
                            <span className="logo-text">SPAPOSPLUS</span>
                            <p className="footer-tagline">Spa POS & Management System</p>
                            <Link to="/blog" className="text-sm text-gray-400 hover:text-white mt-1 block">Read our Blog</Link>
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
