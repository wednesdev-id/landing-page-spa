import React, { useState } from 'react';
import './FeatureShowcaseSection.css';

const MockupAppWrapper = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="app-mockup">
        <div className="app-sidebar">
            <div className="app-logo-mark"></div>
            <div className="nav-item active" style={{ background: '#ecfdf5' }}></div>
            <div className="nav-item" style={{ background: '#f1f5f9' }}></div>
            <div className="nav-item" style={{ background: '#f1f5f9' }}></div>
            <div className="nav-item" style={{ background: '#f1f5f9' }}></div>
        </div>
        <div className="app-main">
            <div className="app-topbar">
                <div className="topbar-title">{title}</div>
                <div className="topbar-actions">
                    <div className="topbar-icon"></div>
                    <div className="topbar-avatar"></div>
                </div>
            </div>
            <div className="app-content">
                {children}
            </div>
        </div>
    </div>
);

const featuresData = [
    {
        id: 'otomatisasi',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
        ),
        title: 'Otomatisasi Stok & Reservasi',
        description: 'Sistem memvalidasi jadwal terapis dan ruangan secara real-time. Stok bahan baku otomatis terpotong saat layanan berjalan.',
        tags: ['Stok Valid', 'Real-Time', '+2'],
        fiturUtama: [
            'Validasi Jadwal Otomatis',
            'Potong Stok Real-Time',
            'Manajemen Inventaris Akurat',
            'Booking & Reservation'
        ],
        visualContent: (
            <MockupAppWrapper title="Jadwal & Inventaris">
                <div className="dash-row">
                    <div className="dash-metric">
                        <div className="metric-label">Total Booking</div>
                        <div className="metric-value">124</div>
                        <div className="metric-trend positive">Aktif Hari Ini</div>
                    </div>
                    <div className="dash-metric">
                        <div className="metric-label">Stok Kritis</div>
                        <div className="metric-value warning">8 Item</div>
                        <div className="metric-trend negative">Perlu Restock</div>
                    </div>
                </div>
                <div className="dash-card">
                    <div className="card-header">Jadwal Terapis Harian</div>
                    <div className="timeline-view">
                        <div className="timeline-row">
                            <div className="t-label">Rina</div>
                            <div className="t-track">
                                <div className="t-bar booked" style={{ width: '30%', left: '10%' }}></div>
                                <div className="t-bar active" style={{ width: '20%', left: '50%' }}></div>
                            </div>
                        </div>
                        <div className="timeline-row">
                            <div className="t-label">Sari</div>
                            <div className="t-track">
                                <div className="t-bar booked" style={{ width: '45%', left: '0%' }}></div>
                                <div className="t-bar booked" style={{ width: '30%', left: '60%' }}></div>
                            </div>
                        </div>
                        <div className="timeline-row">
                            <div className="t-label">Dian</div>
                            <div className="t-track">
                                <div className="t-bar active" style={{ width: '60%', left: '20%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dash-card">
                    <div className="card-header">Log Pemakaian Stok (Real-Time)</div>
                    <div className="table-mock">
                        <div className="th-row"><div className="td">Item</div><div className="td">Terapis</div><div className="td">Qty</div></div>
                        <div className="tr"><div className="td">Minyak Zaitun</div><div className="td">Rina</div><div className="td" style={{color: '#ef4444', fontWeight: 600}}>-50ml</div></div>
                        <div className="tr"><div className="td">Lulur Spa</div><div className="td">Dian</div><div className="td" style={{color: '#ef4444', fontWeight: 600}}>-100g</div></div>
                    </div>
                </div>
            </MockupAppWrapper>
        )
    },
    {
        id: 'integrasi',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        ),
        title: 'Integrasi Kerja & Efisiensi Staf',
        description: 'Sistem memastikan staf fokus pada peran masing-masing. Jadwal shift otomatis langsung sinkron dengan reservasi.',
        tags: ['Tersistem', 'Terjadwal', 'Terkunci'],
        fiturUtama: [
            'Sinkronisasi Shift & Reservasi',
            'Pembagian Peran Jelas',
            'Sistem Terkunci (Aman)',
            'Notifikasi Real-Time'
        ],
        visualContent: (
            <MockupAppWrapper title="Manajemen Staf & Shift">
                <div className="dash-row">
                    <div className="dash-metric">
                        <div className="metric-label">Staf Aktif</div>
                        <div className="metric-value success">24</div>
                    </div>
                    <div className="dash-metric">
                        <div className="metric-label">Cuti/Izin</div>
                        <div className="metric-value">2</div>
                    </div>
                    <div className="dash-metric">
                        <div className="metric-label">Shift Malam</div>
                        <div className="metric-value">8</div>
                    </div>
                </div>
                <div className="dash-row" style={{ alignItems: 'flex-start' }}>
                    <div className="dash-card" style={{ flex: 2 }}>
                        <div className="card-header">Distribusi Peran</div>
                        <div className="chart-bars">
                            <div className="bar" style={{ height: '80%' }}></div>
                            <div className="bar highlight" style={{ height: '100%' }}></div>
                            <div className="bar" style={{ height: '40%' }}></div>
                            <div className="bar" style={{ height: '60%' }}></div>
                            <div className="bar" style={{ height: '30%' }}></div>
                        </div>
                    </div>
                    <div className="dash-card" style={{ flex: 1.5 }}>
                        <div className="card-header">Status Hadir</div>
                        <div className="staff-list">
                            <div className="staff-item">
                                <div className="staff-avatar" style={{background: '#bae6fd'}}></div>
                                <div className="staff-info"><div className="staff-name">Andi</div><div className="staff-role">Resepsionis</div></div>
                                <div className="status-dot green"></div>
                            </div>
                            <div className="staff-item">
                                <div className="staff-avatar" style={{background: '#bbf7d0'}}></div>
                                <div className="staff-info"><div className="staff-name">Siti</div><div className="staff-role">Terapis</div></div>
                                <div className="status-dot green"></div>
                            </div>
                            <div className="staff-item">
                                <div className="staff-avatar" style={{background: '#fecaca'}}></div>
                                <div className="staff-info"><div className="staff-name">Budi</div><div className="staff-role">Manajer</div></div>
                                <div className="status-dot gray"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </MockupAppWrapper>
        )
    },
    {
        id: 'konsolidasi',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
        ),
        title: 'Konsolidasi Data & Analitik Pusat',
        description: 'Data pendapatan, produktivitas terapis, hingga pertumbuhan membership seluruh cabang langsung terintegrasi ke dasbor pusat.',
        tags: ['Multi Cabang', 'Enkripsi Data', '+1'],
        fiturUtama: [
            'Pantau Seluruh Cabang',
            'Laporan Pendapatan',
            'Analitik Produktivitas',
            'Keamanan Enkripsi 256-bit'
        ],
        visualContent: (
            <MockupAppWrapper title="Dasbor Analitik Pusat">
                <div className="dash-row">
                    <div className="dash-card" style={{ flex: 1, background: '#1e293b', color: 'white', borderColor: '#1e293b' }}>
                        <div className="card-header" style={{ color: '#94a3b8', borderBottom: '1px solid #334155' }}>Total Pendapatan</div>
                        <div className="metric-value" style={{ color: 'white', marginTop: '8px', fontSize: '1.25rem' }}>Rp 128.5M</div>
                        <div className="metric-trend positive" style={{ color: '#34d399', fontSize: '0.65rem' }}>+15.4% vs bulan lalu</div>
                    </div>
                    <div className="dash-card" style={{ flex: 1 }}>
                        <div className="card-header">Member Baru</div>
                        <div className="metric-value">1,420</div>
                        <div className="chart-bars" style={{ height: '30px', paddingTop: '4px', gap: '4px' }}>
                            <div className="bar" style={{ height: '40%' }}></div>
                            <div className="bar" style={{ height: '60%' }}></div>
                            <div className="bar highlight" style={{ height: '90%' }}></div>
                            <div className="bar" style={{ height: '50%' }}></div>
                            <div className="bar" style={{ height: '70%' }}></div>
                            <div className="bar" style={{ height: '100%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="dash-card">
                    <div className="card-header">Kinerja Cabang Terbaik</div>
                    <div className="table-mock">
                        <div className="th-row"><div className="td">Cabang</div><div className="td">Tamu</div><div className="td">Rev</div></div>
                        <div className="tr"><div className="td" style={{fontWeight: 600}}>Cabang Utama</div><div className="td">840</div><div className="td">Rp 64M</div></div>
                        <div className="tr"><div className="td">Cabang Selatan</div><div className="td">520</div><div className="td">Rp 42M</div></div>
                        <div className="tr"><div className="td">Cabang Timur</div><div className="td">310</div><div className="td">Rp 22.5M</div></div>
                    </div>
                </div>
            </MockupAppWrapper>
        )
    }
];

const FeatureShowcaseSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeFeature = featuresData[activeIndex];

    return (
        <section className="feature-showcase-section" id="features">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">
                        SPAPOS Menyatukan Alur Kerja &<br /> Menjamin Validitas Data Bisnis Anda
                    </h2>
                    <p className="section-subtitle">
                        Sistem interlocking kami memastikan seluruh aktivitas lapangan berjalan transparan dan terstandarisasi secara real-time.
                    </p>
                </div>

                <div className="showcase-layout">
                    {/* Left Side: Feature Cards Menu */}
                    <div className="feature-cards-list">
                        {featuresData.map((feature, index) => (
                            <div 
                                key={feature.id} 
                                className={`feature-card-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="f-card-header">
                                    <div className="f-card-icon">
                                        {feature.icon}
                                    </div>
                                    <h3 className="f-card-title">{feature.title}</h3>
                                </div>
                                <p className="f-card-desc">{feature.description}</p>
                                <div className="f-card-tags">
                                    {feature.tags.map(tag => (
                                        <span key={tag} className="f-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Preview Panel */}
                    <div className="preview-panel">
                        <div className="preview-header">
                            <h3 className="preview-title">
                                {activeFeature.icon}
                                {activeFeature.title}
                            </h3>
                            <a href="#demo" className="preview-btn">Preview</a>
                        </div>
                        <div className="preview-visual">
                            {activeFeature.visualContent}
                        </div>
                        <div className="preview-features">
                            <h4>Fitur Utama</h4>
                            <div className="features-grid">
                                {activeFeature.fiturUtama.map((fitur, idx) => (
                                    <div key={idx} className="feature-check-item">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        {fitur}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureShowcaseSection;
