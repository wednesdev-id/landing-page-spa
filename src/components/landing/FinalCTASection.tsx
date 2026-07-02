import React from 'react';

const FinalCTASection: React.FC = () => {
  return (
    <section className="w-full bg-[#2A4D45] py-20 px-5 text-center md:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <h2 className="text-3xl font-medium leading-tight text-white md:text-5xl">
          Rapikan operasional spa Anda agar bisnis terasa lebih tenang
        </h2>
        <p className="mt-6 text-base leading-relaxed text-[#F4F1EC] md:text-lg">
          Kontrol booking, stok, komisi, dan laporan cabang dengan lebih rapi dari satu tempat.
        </p>
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href="https://wa.me/6282230713260?text=halo%20saya%20ingin%20berkonsultasi%2030%20menit%2C%20terkait%20dengan%20Operasional%20Spa%20dengan%20mas%20Feri%0ANama%3A%20%5Bdiisi%5D%0AIG%20brand%20SPA%2FPribadi%3A%20%5Bdiisi%5D%0AJumlah%20Karyawan%3A%20%5Bdiisi%5D%0AJumlah%20Cabang%20Spa%3A%20" className="flex h-14 w-full items-center justify-center rounded-2xl bg-white px-8 text-base font-medium text-[#2A4D45] no-underline sm:w-auto">
            Konsultasi WhatsApp
          </a>
          <a href="https://app.spapos.id/login" className="flex h-14 w-full items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-8 text-base font-medium text-white no-underline sm:w-auto">
            Coba Gratis 7 Hari
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
