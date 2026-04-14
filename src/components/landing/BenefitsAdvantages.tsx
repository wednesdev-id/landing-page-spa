import React from 'react';
import './BenefitsAdvantages.css';

interface Advantage {
  title: string;
  description: string;
  icon: string;
  stat?: string;
}

const BenefitsAdvantages: React.FC = () => {
  const advantages: Advantage[] = [
    {
      title: 'All-in-One Solution',
      description: 'Single platform untuk semua operasional spa. Tidak perlu multiple software, semua integrated dalam satu sistem.',
      icon: '🎯'
    },
    {
      title: 'Multi-Location Ready',
      description: 'Kelola unlimited branches dari satu dashboard. Buka cabang baru tanpa perlu sistem baru.',
      icon: '🏢'
    },
    {
      title: 'Proven Track Record',
      description: 'Dipercaya oleh 2,000+ spa owners di seluruh Indonesia.',
      icon: '⭐'
    },
    {
      title: 'Advanced Features',
      description: 'Enterprise-grade features: membership system, automated notifications, dan banyak lagi.',
      icon: '🚀'
    },
    {
      title: 'Flexible Pricing',
      description: 'Paket untuk bisnis dari segala ukuran. Mulai dari spa kecil sampai franchise besar.',
      icon: '💰'
    },
    {
      title: 'Coba Dulu, Gratis',
      description: 'Coba semua fitur premium tanpa risiko. No credit card required.',
      icon: '🎁'
    },
    {
      title: 'Local Support',
      description: 'Tim support berbahasa Indonesia siap membantu kapanpun Anda butuh bantuan.',
      icon: '💬'
    },
    {
      title: 'Continuous Updates',
      description: 'Regular feature additions dan improvements. System yang terus evolve dengan kebutuhan Anda.',
      icon: '📈'
    }
  ];

  return (
    <section className="benefits-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header-ba">
          <h2 className="section-title-ba">
            Mengapa Memilih SPAPOSPLUS?
          </h2>
          <p className="section-subtitle-ba">
            Sistem manajemen spa yang dirancang khusus untuk bisnis spa Indonesia. Mudah, lengkap, dan terjangkau.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon">{advantage.icon}</div>
              <div className="advantage-content">
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-description">{advantage.description}</p>
              </div>
              {advantage.stat && (
                <div className="advantage-stat">{advantage.stat}</div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="benefits-cta">
          <div className="benefits-cta-content">
            <h3>Siap Transformasi Bisnis Spa Anda?</h3>
            <p>Join 2,000+ spa owners yang sudah menggunakan SPAPOSPLUS</p>
          </div>
          <button
            className="benefits-cta-button"
            onClick={() => window.location.href = 'https://app.spapos.id/login'}
          >
            Coba Gratis
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsAdvantages;
