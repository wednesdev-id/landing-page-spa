import React, { useState } from 'react';
import './FAQSection.css';

interface FAQ { question: string; answer: string; }

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    { question: 'Bisa dipakai untuk beberapa cabang?', answer: 'Bisa. Anda bisa melihat ringkasan semua cabang dengan tenang dari satu dashboard.' },
    { question: 'Pemakaian bahan tercatat otomatis?', answer: 'Bisa. Pemakaian oil, cream, dan lulur dapat tercatat agar stok tidak mudah bocor.' },
    { question: 'Komisi terapis dihitung sistem?', answer: 'Ya, komisi dihitung otomatis dari transaksi sehingga proses rekap lebih rapi.' },
    { question: 'Bisa dicoba dulu?', answer: 'Bisa. Anda dapat mulai dari trial 7 hari untuk mencoba kecocokan alurnya.' },
  ];

  return (
    <section id="faq" className="w-full bg-[#FAF8F5] py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-3xl font-medium leading-tight text-[#1C2926]">Pertanyaan umum</h2>
        
        <div className="mt-10 flex flex-col gap-3 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-3xl bg-white p-2 shadow-sm">
              <button 
                className="flex w-full items-center justify-between p-4 text-left font-medium text-[#1C2926] outline-none" 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="text-[#8B9895]">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm leading-relaxed text-[#5A6B67]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
