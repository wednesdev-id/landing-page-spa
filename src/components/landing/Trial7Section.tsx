import React from 'react';
import { motion, Variants } from 'framer-motion';
import './Trial7Section.css';

const milestones = [
  {
    label: 'Hari 1-2',
    title: 'Rapikan fondasi operasional',
    desc: 'Mulai dari data layanan, staf, dan stok agar alur kerja tertata di awal.',
  },
  {
    label: 'Hari 3-5',
    title: 'Jalankan operasional harian',
    desc: 'Booking, kasir, dan jadwal staf mulai berjalan lebih stabil dan terbiasa.',
  },
  {
    label: 'Hari 6-7',
    title: 'Evaluasi dan optimalkan',
    desc: 'Pantau laporan harian, temukan insight, dan rasakan kemudahan SPAPOS.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 130,
      damping: 18,
    },
  },
};

const Trial7Section: React.FC = () => {
  return (
    <section id="trial" className="trial-section">
      <div className="trial-container">
        <div className="trial-header">
          <h2 className="trial-title">
            Coba dulu 7 hari, rasakan perubahannya
          </h2>
          <p className="trial-subtitle">
            Roadmap trial dibuat bertahap supaya tim Anda bisa adaptasi tanpa terasa berat.
          </p>
        </div>

        <motion.div
          className="trial-roadmap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {milestones.map((milestone, index) => (
            <motion.article key={milestone.label} className="trial-card" variants={cardVariants}>
              <div className="trial-card-head">
                <span className="trial-badge">{String(index + 1).padStart(2, '0')}</span>
                <span className="trial-label">{milestone.label}</span>
              </div>
              <h3 className="trial-card-title">{milestone.title}</h3>
              <p className="trial-card-desc">{milestone.desc}</p>
              <div className="trial-card-progress" aria-hidden="true">
                <span />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="trial-cta-wrap">
          <a href="https://app.spapos.id/login" className="trial-cta">
            Mulai Trial 7 Hari
          </a>
        </div>
      </div>
    </section>
  );
};

export default Trial7Section;
