import React, { useState } from 'react';
import './FAQSection.css';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'Berapa lama waktu yang dibutuhkan untuk setup SPAPOSPLUS?',
      answer: 'Setup awal hanya membutuhkan waktu 5-10 menit. Anda hanya perlu mendaftar, membuat organization, menambahkan cabang pertama, dan mulai input data dasar (services, products, staff). Data yang lebih detail bisa ditambahkan secara bertahap seiring berjalannya operasional.'
    },
    {
      question: 'Apakah ada trial gratis?',
      answer: 'Ya! Kami menyediakan free trial dengan akses ke semua fitur premium. Tidak perlu credit card. Anda bisa mencoba semua fitur sebelum memutuskan untuk berlangganan.'
    },
    {
      question: 'Apakah data saya aman?',
      answer: 'Sangat aman. Data Anda dienkripsi dengan 256-bit encryption dan kami melakukan automated backup setiap hari. System uptime kami 99.5% dengan monitoring 24/7. Data Anda milik Anda sepenuhnya dan bisa diexport kapan saja.'
    },
    {
      question: 'Berapa jumlah cabang dan staff yang bisa dikelola?',
      answer: 'Tergantung paket yang Anda pilih. Paket Monthly (199k) untuk max 3 cabang dan 10 staff. Paket 6-Month (999k) juga 3 cabang tapi unlimited staff dalam limitasi. Paket Yearly (1.899k) untuk max 5 cabang dan 20 staff. Untuk kebutuhan lebih besar, hubungi kami untuk custom quote.'
    },
    {
      question: 'Apakah perlu install software di komputer?',
      answer: 'Tidak perlu! SPAPOSPLUS adalah cloud-based system, jadi Anda bisa mengaksesnya dari browser di mana saja - laptop, tablet, atau smartphone. Tidak perlu install, tidak perlu update manual, selalu otomatis update ke versi terbaru.'
    },
    {
      question: 'Bagaimana dengan training untuk staff?',
      answer: 'SPAPOSPLUS dirancang sangat intuitive dan mudah digunakan. Sebagian besar user bisa langsung pakai tanpa training khusus. Kami juga menyediakan user guide dan video tutorial. Kalau ada pertanyaan, tim support kami ready 24/7 via WhatsApp.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header-faq">
          <h2 className="section-title-faq">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="section-subtitle-faq">
            Jawaban untuk pertanyaan umum tentang SPAPOSPLUS
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="faq-cta">
          <p>Masih punya pertanyaan?</p>
          <button
            className="faq-cta-button"
            onClick={() => window.open(`https://wa.me/6281339691260?text=${encodeURIComponent('Halo, saya ingin bertanya lebih lanjut tentang SPAPOSPLUS.')}`, '_blank')}
          >
            Chat dengan Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
