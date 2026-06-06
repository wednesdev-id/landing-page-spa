import React from 'react';
import './PricingSection.css';

const PricingSection: React.FC = () => {
    const packages = [
        {
            title: 'Montly Package\n(Bulanan)',
            subtitle: 'Paket hemat untuk bisnis skala kecil',
            price: 'Rp 199',
            priceSuffix: '.000',
            features: [
                'Maksimal 10 staff',
                'Maksimal 3 cabang',
                'Sistem Booking',
                'Sistem POS',
                'Manajemen Inventori',
                'Laporan'
            ],
            cta: 'Pilih Paket Bulanan',
            highlighted: false
        },
        {
            title: '6-Month Package\n(6-Bulan)',
            subtitle: 'Paket hemat untuk bisnis skala kecil',
            price: 'Rp 999',
            priceSuffix: '.000',
            features: [
                'Maksimal 10 staff',
                'Maksimal 3 cabang',
                'Sistem Booking',
                'Sistem POS',
                'Manajemen Inventori',
                'Laporan'
            ],
            cta: 'Pilih Paket 6 Bulan',
            highlighted: true
        },
        {
            title: 'Yearly Package\n(Tahunan)',
            subtitle: 'Paket hemat untuk bisnis skala kecil',
            price: 'Rp 189',
            priceSuffix: '.000.000',
            features: [
                'Maksimal 10 staff',
                'Maksimal 3 cabang',
                'Sistem Booking',
                'Sistem POS',
                'Manajemen Inventori',
                'Laporan'
            ],
            cta: 'Pilih Paket Tahunan',
            highlighted: false
        }
    ];

    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Investasi Tepat untuk Kendali Multi-Cabang Tanpa Batas</h2>
                    <p className="section-subtitle">Mulai gratis dan upgrade seiring berkembangnya bisnis spa Anda. Harga transparan tanpa biaya tersembunyi.</p>
                </div>

                <div className="pricing-grid">
                    {packages.map((pkg, idx) => (
                        <div className={`pricing-card ${pkg.highlighted ? 'highlighted' : ''}`} key={idx}>
                            <div className="pricing-card-header">
                                <h3 className="pricing-title">{pkg.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</h3>
                                <p className="pricing-subtitle">{pkg.subtitle}</p>
                                <div className="pricing-price">
                                    <span className="price-main">{pkg.price}</span>
                                    <span className="price-suffix">{pkg.priceSuffix}</span>
                                </div>
                            </div>
                            <div className="pricing-features">
                                <ul>
                                    {pkg.features.map((feat, fidx) => (
                                        <li key={fidx}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="pricing-cta">{pkg.cta}</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
