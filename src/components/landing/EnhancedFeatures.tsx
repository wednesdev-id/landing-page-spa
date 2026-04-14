import React, { useState } from 'react';
import BusinessIcon from './icons/BusinessIcon';
import OperationsIcon from './icons/OperationsIcon';
import FinanceIcon from './icons/FinanceIcon';
import './EnhancedFeatures.css';

interface Feature {
  title: string;
  description: string;
}

interface Category {
  id: string;
  title: string;
  icon: React.FC<{ className?: string }>;
  features: Feature[];
}

const EnhancedFeatures: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('multicabang');

  const categories: Category[] = [
    {
      id: 'multicabang',
      title: 'Kelola Semua Cabang',
      icon: BusinessIcon,
      features: [
        {
          title: '1 Sistem untuk Semua Cabang',
          description: 'Kelola banyak cabang spa Anda dari satu dashboard. Tidak perlu multiple login, semua data terintegrasi.'
        },
        {
          title: 'Hak Akses Sesuai Peran Staff',
          description: 'Owner, manager, receptionist, terapis - masing-masing punya akses yang sesuai pekerjaannya. Aman dan teratur.'
        },
        {
          title: 'Lihat Performa Semua Cabang',
          description: 'Bandingkan performa antar cabang secara real-time. Tahu cabang mana yang paling produktif.'
        }
      ]
    },
    {
      id: 'operasional',
      title: 'Operasional Mudah',
      icon: OperationsIcon,
      features: [
        {
          title: 'Booking Mudah & Cepat',
          description: 'Booking system dengan notifikasi otomatis. Kurangi no-show dengan reminder otomatis.'
        },
        {
          title: 'POS Kasir',
          description: 'Proses pembayaran cash, transfer, atau e-wallet dengan mudah dan cepat.'
        },
        {
          title: 'Jadwal Shift & Absensi',
          description: 'Atur jadwal shift staff dengan mudah. Pantau kehadiran dan tracking jam kerja.'
        }
      ]
    },
    {
      id: 'bisnis',
      title: 'Laporan & Analitik',
      icon: FinanceIcon,
      features: [
        {
          title: 'Laporan Lengkap 1 Klik',
          description: 'Laporan harian, mingguan, bulanan. Sales report, staff performance, inventory.'
        },
        {
          title: 'Pantau Pendapatan Real-Time',
          description: 'Dashboard revenue dengan breakdown per service, product, therapist, dan cabang.'
        },
        {
          title: 'Invoice Otomatis & Pajak',
          description: 'Generate invoice otomatis dan hitung pajak per service. Rapi dan profesional.'
        }
      ]
    }
  ];

  const activeFeatures = categories.find(cat => cat.id === activeCategory)?.features || [];

  return (
    <section className="enhanced-features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header-ef">
          <h2 className="section-title-ef">
            Semua yang Anda Butuhkan untuk Mengelola Spa dengan Mudah
          </h2>
          <p className="section-subtitle-ef">
            Dari booking sampai laporan keuangan, semua dalam satu aplikasi yang mudah digunakan
          </p>
        </div>

        {/* Split Layout */}
        <div className="enhanced-features-layout">
          {/* Left Sidebar - Category Navigation */}
          <div className="category-nav">
            <div className="category-nav-header">
              <h3>Pilih Kategori</h3>
              <span className="category-nav-hint">
                Swipe
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </span>
            </div>
            <nav className="category-nav-list">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    className={`category-nav-item ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span className="category-icon">
                      <IconComponent />
                    </span>
                    <span className="category-label">{category.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Content - Feature Cards Grid */}
          <div className="feature-content">
            <div className="feature-content-header">
              <h3>{categories.find(cat => cat.id === activeCategory)?.title}</h3>
              <p>{activeFeatures.length} fitur tersedia</p>
            </div>
            <div className="feature-cards-grid">
              {activeFeatures.map((feature, index) => (
                <div key={index} className="feature-card-ef">
                  <div className="feature-card-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h4 className="feature-card-title">{feature.title}</h4>
                  <p className="feature-card-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedFeatures;
