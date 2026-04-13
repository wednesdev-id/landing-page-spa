import React from 'react';
import './Integrations.css';

interface Integration {
  name: string;
  type: string;
  status: 'ready' | 'planned';
  description: string;
  icon: string;
}

const Integrations: React.FC = () => {
  const integrations: Integration[] = [
    {
      name: 'Google OAuth',
      type: 'Authentication',
      status: 'ready',
      description: 'Login dengan Google account',
      icon: '🔐'
    },
    {
      name: 'SendGrid',
      type: 'Email Service',
      status: 'planned',
      description: 'Transactional email notifications',
      icon: '📧'
    },
    {
      name: 'QuickBooks',
      type: 'Accounting',
      status: 'planned',
      description: 'Sync financial data to accounting',
      icon: '📊'
    },
    {
      name: 'REST API',
      type: 'Custom Integration',
      status: 'ready',
      description: 'Build custom integrations dengan API kami',
      icon: '🔌'
    }
  ];

  const readyIntegrations = integrations.filter(i => i.status === 'ready').length;
  const plannedIntegrations = integrations.filter(i => i.status === 'planned').length;
  const totalIntegrations = readyIntegrations + plannedIntegrations;

  return (
    <section className="integrations-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header-int">
          <h2 className="section-title-int">
            Integrasi Lengkap dengan Ekosistem Anda
          </h2>
          <p className="section-subtitle-int">
            SPAPOSPLUS terhubung dengan berbagai payment gateway, biometric devices, dan layanan lainnya
          </p>
        </div>

        {/* Integration Stats */}
        <div className="integration-stats">
          <div className="integration-stat">
            <div className="stat-number">{totalIntegrations}</div>
            <div className="stat-text">Integrasi Tersedia</div>
          </div>
          <div className="integration-stat">
            <div className="stat-number">{readyIntegrations}</div>
            <div className="stat-text">Ready</div>
          </div>
          <div className="integration-stat">
            <div className="stat-number">{plannedIntegrations}</div>
            <div className="stat-text">Coming Soon</div>
          </div>
        </div>

        {/* Integration Categories */}
        <div className="integration-categories">
          {/* All Integrations */}
          <div className="integration-category">
            <h3 className="category-title">
              <span className="category-icon">🔌</span>
              Available Integrations
            </h3>
            <div className="integrations-grid">
              {integrations.map((integration, index) => (
                <div key={index} className={`integration-card ${integration.status}`}>
                  <div className="integration-icon">{integration.icon}</div>
                  <div className="integration-info">
                    <h4 className="integration-name">{integration.name}</h4>
                    <p className="integration-description">{integration.description}</p>
                  </div>
                  <div className={`integration-status ${integration.status}`}>
                    {integration.status === 'ready' ? '✓ Ready' : 'Coming Soon'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="integrations-cta">
          <p>Butuh integrasi khusus dengan sistem Anda?</p>
          <button
            className="integrations-cta-button"
            onClick={() => window.open(`https://wa.me/6281339691260?text=${encodeURIComponent('Halo, saya ingin bertanya tentang integrasi khusus dengan SPAPOSPLUS.')}`, '_blank')}
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
