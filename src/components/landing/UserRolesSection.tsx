import React from 'react';
import OwnerIcon from './icons/OwnerIcon';
import BranchAdminIcon from './icons/BranchAdminIcon';
import ReceptionistIcon from './icons/ReceptionistIcon';
import TherapistIcon from './icons/TherapistIcon';
import SuperAdminIcon from './icons/SuperAdminIcon';
import './UserRolesSection.css';

interface Role {
  id: string;
  title: string;
  subtitle: string;
  icon: React.FC<{ className?: string }>;
  permissions: string[];
  color: string;
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
      </div>
    </section>
  );
};

export default UserRolesSection;
