import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: 'Mudah Digunakan',
      description: 'Setup 5 menit, interface intuitif. Tidak perlu training khusus, staff Anda langsung bisa pakai.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      title: 'Hemat Biaya',
      description: 'Satu sistem untuk semua operasional. Tidak perlu multiple software, hemat hingga 60% biaya IT.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: 'Terpercaya',
      description: 'Dipercaya oleh 2,000+ spa owner di Indonesia. 99.5% uptime dengan 24/7 monitoring.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
      title: 'Support Lokal',
      description: 'Tim support berbahasa Indonesia, ready 24/7 via WhatsApp. Respons rata-rata 5 menit.'
    }
  ];

  return (
    <section className="why-choose-us-section" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header-wcu">
          <h2 className="section-title-wcu">
            Mengapa 2,000+ Spa Owner Memilih Kami?
          </h2>
          <p className="section-subtitle-wcu">
            Sistem yang dirancang khusus untuk kebutuhan spa Indonesia. Mudah, hemat, dan terpercaya.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">
                {reason.icon}
              </div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-number">2,000+</div>
            <div className="stat-label">Spa Owner</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.5%</div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5 menit</div>
            <div className="stat-label">Setup Time</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
