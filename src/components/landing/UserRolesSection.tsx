import React from 'react';
import OwnerIcon from './icons/OwnerIcon';
import BranchAdminIcon from './icons/BranchAdminIcon';
import ReceptionistIcon from './icons/ReceptionistIcon';
import TherapistIcon from './icons/TherapistIcon';
import SuperAdminIcon from './icons/SuperAdminIcon';
import BookingFlowIcon from './icons/BookingFlowIcon';
import TreatmentFlowIcon from './icons/TreatmentFlowIcon';
import DashboardFlowIcon from './icons/DashboardFlowIcon';
import './UserRolesSection.css';

interface Role {
  id: string;
  title: string;
  subtitle: string;
  icon: React.FC<{ className?: string }>;
  permissions: string[];
  color: string;
}

interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

interface Workflow {
  id: string;
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  steps: WorkflowStep[];
}

const UserRolesSection: React.FC = () => {
  const roles: Role[] = [
    {
      id: 'owner',
      title: 'Owner / Pemilik',
      subtitle: 'Pemilik Spa',
      icon: OwnerIcon,
      color: '#C6A86D',
      permissions: [
        'Lihat performa semua cabang dalam 1 dashboard',
        'Kelola staff, tambah cabang, pantau pendapatan',
        'Akses laporan lengkap & analitik bisnis',
        'Kelola subscription & pembayaran'
      ]
    },
    {
      id: 'branch-admin',
      title: 'Branch Admin',
      subtitle: 'Manager / Kepala Cabang',
      icon: BranchAdminIcon,
      color: '#0F3D3E',
      permissions: [
        'Kelola 1 cabang secara lengkap',
        'Atur jadwal & operasional harian cabang',
        'Pantau performa staff cabang',
        'Laporan cabang real-time'
      ]
    },
    {
      id: 'receptionist',
      title: 'Receptionist',
      subtitle: 'Resepsionis / Front Desk',
      icon: ReceptionistIcon,
      color: '#E8DCCB',
      permissions: [
        'Booking & reservasi pelanggan',
        'Check-in/check-out pelanggan',
        'Proses payment & kasir',
        'Cetak invoice & receipt',
        'Kelola customer data'
      ]
    },
    {
      id: 'therapist',
      title: 'Therapist',
      subtitle: 'Terapis / Tenaga Ahli',
      icon: TherapistIcon,
      color: '#C6A86D',
      permissions: [
        'Lihat jadwal & assignment hari ini',
        'Update status treatment (mulai/selesai)',
        'Lihat performa & rating pelanggan',
        'Log produk yang digunakan'
      ]
    },
    {
      id: 'super-admin',
      title: 'Super Admin',
      subtitle: 'Administrator Sistem',
      icon: SuperAdminIcon,
      color: '#0F3D3E',
      permissions: [
        'Kelola semua organization',
        'Monitoring performa sistem',
        'Kelola subscription plans',
        'Full system access'
      ]
    }
  ];

  const workflows: Workflow[] = [
    {
      id: 'booking',
      title: 'Alur Booking Mudah',
      description: 'Proses booking yang simpel dan cepat',
      icon: BookingFlowIcon,
      steps: [
        { step: '1', title: 'Customer Datang', description: 'Customer walk-in atau booking via WhatsApp' },
        { step: '2', title: 'Cari Slot Kosong', description: 'Receptionist cek ketersediaan therapist & room' },
        { step: '3', title: 'Konfirmasi Booking', description: 'Pilih service, therapist, room, dan waktu' },
        { step: '4', title: 'Notifikasi', description: 'System kirim konfirmasi ke customer' }
      ]
    },
    {
      id: 'treatment',
      title: 'Alur Treatment Harian Terapis',
      description: 'Hari kerja terapis jadi lebih terorganisir',
      icon: TreatmentFlowIcon,
      steps: [
        { step: '1', title: 'Login & Cek Jadwal', description: 'Lihat assignment treatment hari ini' },
        { step: '2', title: 'Customer Check-In', description: 'Customer datang, mulai treatment' },
        { step: '3', title: 'Update Status', description: 'Update status: mulai → selesai' },
        { step: '4', title: 'Log & Rating', description: 'Log produk & customer kasih rating' }
      ]
    },
    {
      id: 'dashboard',
      title: 'Alur Owner Pantau Bisnis',
      description: 'Pantau performa bisnis dari mana saja',
      icon: DashboardFlowIcon,
      steps: [
        { step: '1', title: 'Buka Dashboard', description: 'Login dari laptop atau HP' },
        { step: '2', title: 'Lihat Performa', description: 'Analisa revenue, booking, staff performance' },
        { step: '3', title: 'Baca Laporan', description: 'Export laporan untuk keputusan bisnis' },
        { step: '4', title: 'Action', description: 'Buat keputusan berdasarkan data' }
      ]
    }
  ];

  return (
    <section className="user-roles-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header-ur">
          <h2 className="section-title-ur">
            Setiap Staff Punya Akses Sesuai Perannya
          </h2>
          <p className="section-subtitle-ur">
            Owner, receptionist, atau terapis - semua bisa gunakan SPAPOSPLUS dengan mudah
          </p>
        </div>

        {/* Role Cards Grid */}
        <div className="roles-grid">
          {roles.map((role) => {
            const IconComponent = role.icon;
            return (
              <div key={role.id} className="role-card">
                <div className="role-card-header" style={{ backgroundColor: `${role.color}10` }}>
                  <div className="role-icon" style={{ color: role.color }}>
                    <IconComponent />
                  </div>
                  <div className="role-card-info">
                    <h3 className="role-card-title">{role.title}</h3>
                    <p className="role-card-subtitle">{role.subtitle}</p>
                  </div>
                </div>
                <div className="role-card-body">
                  <ul className="role-permissions">
                    {role.permissions.map((permission, idx) => (
                      <li key={idx} className="permission-item">
                        <span className="permission-bullet" style={{ backgroundColor: role.color }}></span>
                        <span className="permission-text">{permission}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflows Section */}
        <div className="workflows-section">
          <div className="workflows-header">
            <h3>Workflow yang Simpel & Jelas</h3>
            <p>Setiap peran punya alur kerja yang mudah diikuti</p>
          </div>

          <div className="workflows-grid">
            {workflows.map((workflow) => {
              const IconComponent = workflow.icon;
              return (
                <div key={workflow.id} className="workflow-card">
                  <div className="workflow-header">
                    <div className="workflow-icon">
                      <IconComponent />
                    </div>
                    <div className="workflow-header-content">
                      <h4 className="workflow-title">{workflow.title}</h4>
                      <p className="workflow-description">{workflow.description}</p>
                    </div>
                  </div>
                  <div className="workflow-steps">
                    {workflow.steps.map((step, idx) => (
                      <div key={idx} className="workflow-step">
                        <div className="step-number">{step.step}</div>
                        <div className="step-content">
                          <h5 className="step-title">{step.title}</h5>
                          <p className="step-description">{step.description}</p>
                        </div>
                        {idx < workflow.steps.length - 1 && (
                          <div className="step-arrow">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 5v14M19 12l-7 7-7-7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRolesSection;
