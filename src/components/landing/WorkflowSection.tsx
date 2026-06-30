import React from 'react';
import { motion } from 'framer-motion';
import './WorkflowSection.css';

const steps = [
  {
    title: 'Booking masuk tercatat rapi',
    desc: 'Reservasi masuk otomatis, tanpa double booking dan tanpa catatan tercecer.',
  },
  {
    title: 'Jadwal staf tervalidasi',
    desc: 'Jadwal staf sinkron, konflik slot cepat terlihat sebelum ganggu operasional.',
  },
  {
    title: 'Treatment berjalan tenang',
    desc: 'Frontdesk dan terapis lihat alur layanan yang sama secara real-time.',
  },
  {
    title: 'Stok terpotong otomatis',
    desc: 'Pemakaian produk langsung tercatat, jadi selisih stok makin mudah dikendalikan.',
  },
  {
    title: 'Laporan cabang tersusun',
    desc: 'Owner pantau omzet, performa, dan ringkasan cabang tanpa tunggu rekap manual.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
    },
  },
};

const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="workflow-section">
      <div className="workflow-container">
        <div className="workflow-header">
          <h2 className="workflow-title">
            Dari awal booking sampai laporan, semua mengalir lebih rapi
          </h2>
          <p className="workflow-subtitle">
            Setiap proses tersambung dalam alur yang jelas, jadi tim lebih tenang dan owner lebih mudah memantau.
          </p>
        </div>

        <motion.div
          className="workflow-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              className="workflow-card"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <div className="workflow-card-top">
                <div className="workflow-step-badge">{String(index + 1).padStart(2, '0')}</div>
                <div className="workflow-hallmark" aria-hidden="true">✓</div>
              </div>

              <h3 className="workflow-card-title">{step.title}</h3>
              <p className="workflow-card-desc">{step.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;
