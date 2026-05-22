import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/layout/Navbar';
import './Pricing.css';

const Pricing: React.FC = () => {
    const handleGetStarted = () => {
        window.location.href = 'https://app.spapos.id/login';
    };

    const handleSubscribe = (plan: string) => {
        const message = `Halo, saya tertarik dengan paket ${plan} SPAPOS. Mohon info lebih lanjut.`;
        window.open(`https://wa.me/6281339691260?text=${encodeURIComponent(message)}`, '_blank');
    };

    const plans = [
        {
            name: 'Monthly Package',
            period: 'Bulanan',
            price: 'Rp 199.000',
            priceUnit: '/bulan',
            description: 'Paket dasar untuk pengelolaan operasional jangka pendek.',
            popular: false,
            features: [
                'Maksimal 10 Staff',
                'Maksimal 3 Cabang',
                'Sistem POS',
                'Laporan',
                'Manajemen Inventori'
            ]
        },
        {
            name: '6-Month Package',
            period: 'Hemat',
            price: 'Rp 999.000',
            priceUnit: '/6 bulan',
            description: 'Lebih hemat dari harga bulanan.',
            popular: true,
            features: [
                'Maksimal 10 Staff',
                'Maksimal 3 Cabang',
                'Sistem POS',
                'Laporan Lanjutan',
                'Manajemen Inventori',
                'Unlimited Staff (dalam limitasi paket)'
            ]
        },
        {
            name: 'Yearly Package',
            period: 'Super Hemat',
            price: 'Rp 1.899.000',
            priceUnit: '/tahun',
            priceNote: '~Rp 158rb/bulan',
            description: 'Investasi terbaik untuk pertumbuhan bisnis jangka panjang.',
            popular: false,
            features: [
                'Maksimal 20 Staff',
                'Maksimal 5 Cabang',
                'Semua Fitur 6-Month',
                'Priority Support',
                'Training Onboarding'
            ]
        }
    ];

    const faqs = [
        {
            question: 'Apakah ada biaya setup atau biaya tersembunyi?',
            answer: 'Tidak ada. Harga yang tertera sudah mencakup semua fitur dalam paket yang Anda pilih. Tidak ada biaya tambahan untuk setup.'
        },
        {
            question: 'Bisa ganti paket di tengah periode langganan?',
            answer: 'Ya, Anda bisa upgrade paket kapan saja. Selisih harga akan dihitung secara prorata dari sisa periode langganan.'
        },
        {
            question: 'Apakah ada trial gratis?',
            answer: 'Ya, kami menyediakan free trial agar Anda bisa mencoba semua fitur sebelum memutuskan berlangganan.'
        },
        {
            question: 'Bagaimana cara pembayaran?',
            answer: 'Pembayaran bisa dilakukan via transfer bank, e-wallet, atau menghubungi tim kami melalui WhatsApp untuk metode pembayaran lainnya.'
        }
    ];

    return (
        <div className="pricing-page">
            <SEO
                title="Biaya Langganan SPAPOS - Paket Harga Terjangkau"
                description="Pilih paket SPAPOS yang sesuai dengan kebutuhan bisnis spa Anda. Mulai dari Rp 199.000/bulan."
            />
            <Navbar />

            {/* Hero */}
            <section className="pricing-hero">
                <div className="pricing-hero-content">
                    <Link to="/" className="pricing-back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Kembali ke Beranda
                    </Link>
                    <h1 className="pricing-hero-title">Biaya Langganan</h1>
                    <p className="pricing-hero-subtitle">
                        Pilih paket yang sesuai dengan kebutuhan bisnis spa Anda. Investasi terbaik untuk pertumbuhan bisnis.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pricing-cards-section">
                <div className="pricing-cards-container">
                    {plans.map((plan, index) => (
                        <div key={index} className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`}>
                            {plan.popular && <div className="pricing-popular-badge">MOST POPULAR</div>}
                            <div className="pricing-card-header">
                                <h3 className="pricing-card-name">{plan.name}</h3>
                                <span className="pricing-card-period">({plan.period})</span>
                            </div>
                            <div className="pricing-card-price">
                                <span className="pricing-price-value">{plan.price}</span>
                                <span className="pricing-price-unit">{plan.priceUnit}</span>
                            </div>
                            {plan.priceNote && (
                                <div className="pricing-price-note">{plan.priceNote}</div>
                            )}
                            <p className="pricing-card-desc">{plan.description}</p>
                            <ul className="pricing-features-list">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6A86D" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`pricing-card-btn ${plan.popular ? 'pricing-btn-popular' : ''}`}
                                onClick={() => handleSubscribe(plan.name)}
                            >
                                Pilih {plan.name.split(' ')[0]}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="pricing-faq-section">
                <div className="pricing-faq-container">
                    <h2 className="pricing-faq-title">Pertanyaan Seputar Biaya</h2>
                    <div className="pricing-faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className="pricing-faq-item">
                                <h4 className="pricing-faq-question">{faq.question}</h4>
                                <p className="pricing-faq-answer">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pricing-cta-section">
                <h2 className="pricing-cta-title">Masih Ragu? Coba Gratis Dulu</h2>
                <p className="pricing-cta-subtitle">
                    Nikmati semua fitur SPAPOS tanpa biaya selama masa trial
                </p>
                <button className="pricing-cta-button" onClick={handleGetStarted}>
                    Mulai Free Trial
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </section>

            {/* Footer */}
            <footer className="pricing-footer">
                <div className="pricing-footer-content">
                    <div className="pricing-footer-links">
                        <Link to="/" className="pricing-footer-link">Beranda</Link>
                        <Link to="/features" className="pricing-footer-link">Fitur</Link>
                        <Link to="/pricing" className="pricing-footer-link">Biaya</Link>
                        <Link to="/contact" className="pricing-footer-link">Kontak</Link>
                    </div>
                    <p>© 2026 SPAPOS. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Pricing;
