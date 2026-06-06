import React, { useState } from 'react';
import './FAQSection.css';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Open the second one by default to match design

  const faqs: FAQ[] = [
    {
      question: 'Apakah data transaksi dan laporan keuangan antar cabang akan tercampur di dalam sistem?',
      answer: 'Tidak. SPAPOS memisahkan data transaksi dan laporan per cabang, namun Anda sebagai owner tetap dapat melihat rekapitulasi gabungan di dasbor pusat.'
    },
    {
      question: 'Bagaimana cara sistem memotong stok bahan baku secara otomatis?',
      answer: 'Setiap kali status reservasi berubah menjadi berjalan, sistem secara otomatis akan memotong persediaan bahan habis pakai (seperti minyak pijat atau krim) sesuai dengan takaran yang sudah Anda tentukan untuk layanan tersebut.'
    },
    {
      question: 'Apakah sistem membership pelanggan berlaku di semua cabang?',
      answer: 'Ya, sistem membership terintegrasi antar cabang. Pelanggan dapat menikmati benefit mereka di cabang mana pun tanpa perlu pendataan ulang.'
    },
    {
      question: 'Bagaimana jika terapis bertukar shift kerja secara mendadak di lapangan?',
      answer: 'Manajer cabang dapat dengan mudah menyesuaikan jadwal shift di sistem. Semua reservasi yang terhubung akan otomatis menyesuaikan ketersediaan terapis.'
    },
    {
      question: 'Apakah laporan komisi dan kinerja terapis bisa dihitung otomatis?',
      answer: 'Tentu saja. Sistem secara otomatis menghitung komisi berdasarkan layanan yang diselesaikan oleh masing-masing terapis, yang bisa Anda akses laporannya secara real-time.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
          <p className="section-subtitle">
            Kami merangkum hal-hal penting yang paling sering ditanyakan oleh para pemilik bisnis spa sebelum mengintegrasikan sistem mereka dengan platform kami.
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
                <span className="faq-icon">
                    {openIndex === index ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    )}
                </span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
