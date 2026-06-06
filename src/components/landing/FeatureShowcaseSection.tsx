import React from 'react';
import './FeatureShowcaseSection.css';

const FeatureShowcaseSection: React.FC = () => {
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

                <div className="showcase-grid">
                    {/* Top Left Card */}
                    <div className="showcase-card half-card">
                        <div className="card-visual visual-bg-light">
                            {/* Abstract visual representation matching design */}
                            <div className="mockup-window">
                                <div className="mockup-header">Jadwal Terapis</div>
                                <div className="mockup-body">
                                    <div className="mockup-line w-1/2">Active saat ini</div>
                                    <div className="mockup-box-group">
                                        <div className="mockup-box solid"></div>
                                        <div className="mockup-box outline"></div>
                                    </div>
                                </div>
                                <div className="floating-badge badge-stok">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                    </svg>
                                    Stok Valid
                                    <span className="badge-sub">Kelola Inventory</span>
                                </div>
                                <div className="floating-badge badge-booking">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    Booking & Reservation
                                </div>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>Otomatisasi Stok & Reservasi</h3>
                            <p>Sistem memvalidasi jadwal terapis dan ruangan secara real-time. Stok bahan baku otomatis terpotong saat layanan berjalan agar data inventaris selalu akurat.</p>
                        </div>
                    </div>

                    {/* Top Right Card */}
                    <div className="showcase-card half-card">
                        <div className="card-visual visual-bg-light">
                            <div className="staff-ecosystem">
                                <div className="staff-nodes">
                                    <div className="staff-node">
                                        <div className="avatar res"></div>
                                        <span>Resepsionis</span>
                                    </div>
                                    <div className="staff-node">
                                        <div className="avatar ter"></div>
                                        <span>Terapis</span>
                                    </div>
                                    <div className="staff-node">
                                        <div className="avatar man"></div>
                                        <span>Manajer Cabang</span>
                                    </div>
                                </div>
                                <div className="ecosystem-info">
                                    <h4>Ekosistem Kerja</h4>
                                    <span className="eco-sub">Terintegrasi satu sama lain</span>
                                    <ul className="eco-list">
                                        <li>Tersistem</li>
                                        <li>Terjadwal</li>
                                        <li>Terkunci</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>Integrasi Kerja & Efisiensi Staf</h3>
                            <p>Sistem memastikan staf fokus pada peran masing-masing. Jadwal shift otomatis langsung sinkron dengan reservasi untuk menjaga konsistensi operasional harian.</p>
                        </div>
                    </div>

                    {/* Bottom Full Card */}
                    <div className="showcase-card full-card">
                        <div className="card-visual visual-bg-dark">
                            <div className="dashboard-structure">
                                <div className="sidebar-nodes">
                                    <div className="s-node">Cabang Ketiga</div>
                                    <div className="s-node active">Cabang Kedua</div>
                                    <div className="s-node">Cabang Utama</div>
                                </div>
                                <div className="main-board">
                                    <div className="board-header">Dashboard Owner</div>
                                    <div className="board-widgets">
                                        <div className="widget w-large"></div>
                                        <div className="widget w-small"></div>
                                        <div className="widget w-small"></div>
                                        <div className="widget w-small"></div>
                                    </div>
                                    <div className="floating-badge badge-data-valid">
                                        <span className="dot active"></span>
                                        Data Valid
                                        <span className="badge-sub">Update Real-Time</span>
                                    </div>
                                    <div className="floating-badge badge-data-aman">
                                        <span className="dot safe"></span>
                                        Data Aman
                                        <span className="badge-sub">Enkripsi 256-bit</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>Konsolidasi Data & Analitik Pusat</h3>
                            <p>Data pendapatan, produktivitas terapis, hingga pertumbuhan membership seluruh cabang langsung terintegrasi ke dasbor pusat secara transparan saat ini juga.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureShowcaseSection;
