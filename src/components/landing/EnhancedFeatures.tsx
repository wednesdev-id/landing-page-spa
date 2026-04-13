import React, { useState } from 'react';
import BusinessIcon from './icons/BusinessIcon';
import OperationsIcon from './icons/OperationsIcon';
import CustomerIcon from './icons/CustomerIcon';
import FinanceIcon from './icons/FinanceIcon';
import StaffIcon from './icons/StaffIcon';
import AutomationIcon from './icons/AutomationIcon';
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
  const [activeCategory, setActiveCategory] = useState('business');

  const categories: Category[] = [
    {
      id: 'business',
      title: 'Kelola Bisnis',
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
          title: 'Lihat Performa Semua Cabang dalam 1 View',
          description: 'Bandingkan performa antar cabang secara real-time. Tahu cabang mana yang paling produktif.'
        },
        {
          title: 'Manajemen Organization & Branch',
          description: 'Tambah, edit, atau hapus cabang dengan mudah. Setup cabang baru dalam hitungan menit.'
        },
        {
          title: 'Cross-Branch Analytics',
          description: 'Laporan gabungan dari semua cabang untuk analisis bisnis yang lebih komprehensif.'
        }
      ]
    },
    {
      id: 'operations',
      title: 'Operasional Harian',
      icon: OperationsIcon,
      features: [
        {
          title: 'Booking Mudah, Minim No-Show',
          description: 'Booking system dengan notifikasi otomatis. Kurangi no-show hingga 60% dengan reminder WhatsApp.'
        },
        {
          title: 'Pantau Ketersediaan Room Real-Time',
          description: 'Lihat status room (available, occupied, cleaning) secara langsung. Optimalkan penggunaan room.'
        },
        {
          title: 'Jadwal Shift yang Fleksibel',
          description: 'Atur jadwal shift staff dengan mudah. Drag-and-drop schedule, auto-cleanup, dan conflict detection.'
        },
        {
          title: 'Absensi Staff yang Teratur',
          description: 'Sistem absensi dengan check-in/check-out. Pantau kehadiran staff dan tracking jam kerja dengan mudah.'
        },
        {
          title: 'Kasir Cepat & Pembayaran Mudah',
          description: 'POS system untuk treatment dan produk. Proses pembayaran cash, transfer, atau e-wallet dengan mudah.'
        },
        {
          title: 'Manajemen Room & Cleaning Tasks',
          description: 'Track room status dan assign cleaning tasks. Pastikan room selalu siap untuk next customer.'
        }
      ]
    },
    {
      id: 'customer',
      title: 'Pelanggan Setia',
      icon: CustomerIcon,
      features: [
        {
          title: 'Kenali Pelanggan Anda Lebih Dekat',
          description: 'Database pelanggan lengkap dengan preferensi, history treatment, dan feedback.'
        },
        {
          title: 'Program Membership Silver, Gold, Platinum',
          description: 'Loyalty program dengan tier-based benefits. Buat pelanggan merasa spesial dan betah.'
        },
        {
          title: 'Buat Pelanggan Betah di Spa Anda',
          description: 'Member benefits, free products, milestone rewards. Tingkatkan customer retention rate.'
        },
        {
          title: 'Pahami Perilaku Pelanggan',
          description: 'Analytics tentang visit frequency, spending patterns, dan treatment preferences.'
        },
        {
          title: 'Customer History & Notes',
          description: 'Catat preferensi dan feedback setiap pelanggan. Personalized service = happy customer.'
        }
      ]
    },
    {
      id: 'finance',
      title: 'Keuangan Teratur',
      icon: FinanceIcon,
      features: [
        {
          title: 'Invoice Otomatis, Rapi & Profesional',
          description: 'Generate invoice otomatis setiap treatment selesai. Customize template dengan logo spa Anda.'
        },
        {
          title: 'Terima Pembayaran Cash, Card, E-Wallet',
          description: 'Multi payment gateway support (Mayar, Midtrans, Xendit). Pembayaran jadi lebih fleksibel.'
        },
        {
          title: 'Laporan Lengkap, 1 Klik',
          description: 'Laporan harian, mingguan, bulanan. Sales report, staff performance, inventory consumption.'
        },
        {
          title: 'Pantau Pendapatan Harian Real-Time',
          description: 'Dashboard revenue dengan breakdown per service, product, therapist, dan cabang.'
        },
        {
          title: 'Track Payment Status & Overdue',
          description: 'Monitor invoice status (pending, paid, overdue). Follow-up payments yang lebih efektif.'
        },
        {
          title: 'Tax Management & Reports',
          description: 'Hitung pajak per service. Generate tax reports untuk keperluan akuntansi.'
        }
      ]
    },
    {
      id: 'staff',
      title: 'Tim Terapis Lebih Produktif',
      icon: StaffIcon,
      features: [
        {
          title: 'Database Terapis Lengkap',
          description: 'Profil staff dengan specialization, certification, contract dates, dan performance history.'
        },
        {
          title: 'Atur Jadwal Tanpa Ribet',
          description: 'Schedule system dengan recurring patterns, templates, dan auto-cleanup. Save time, reduce errors.'
        },
        {
          title: 'Absensi yang Akurat',
          description: 'Sistem absensi dengan check-in/check-out. Data kehadiran tercatat dengan rapi dan siap untuk payroll.'
        },
        {
          title: 'Review Performa Terapis',
          description: 'Performance metrics: order hours, customer count, efficiency, ratings. Identify top performers.'
        },
        {
          title: 'Log Produk yang Digunakan',
          description: 'Track product usage per treatment untuk inventory control dan cost calculation.'
        },
        {
          title: 'Training & Development Tracking',
          description: 'Monitor staff training progress dan skill development. Build a stronger team.'
        }
      ]
    },
    {
      id: 'automation',
      title: 'Otomatisasi Cerdas',
      icon: AutomationIcon,
      features: [
        {
          title: 'Notifikasi Booking, Payment, Dll Otomatis',
          description: 'Automated notifications untuk booking reminders, payment confirmations, dan alerts.'
        },
        {
          title: 'Sistem Stabil, Support 24/7',
          description: '99.5% uptime dengan 24/7 monitoring. System yang reliable untuk bisnis Anda.'
        },
        {
          title: 'Data Aman, Backup Otomatis Setiap Hari',
          description: 'Automated daily backups dengan data encryption 256-bit. Data Anda aman dan selalu recoverable.'
        },
        {
          title: 'Google OAuth & Multiple Login Options',
          description: 'Multiple login options: password atau Google OAuth. Secure dan convenient untuk staff.'
        },
        {
          title: 'Automated Cleanup Jobs',
          description: 'Auto-delete old schedules, cleanup error logs, maintenance tasks. System tetap optimal tanpa manual effort.'
        },
        {
          title: 'API untuk Custom Integrations',
          description: 'RESTful API untuk integrasi dengan accounting software, SMS gateway, atau custom systems.'
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
