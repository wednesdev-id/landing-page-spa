import React from 'react';
import dashboardImg from '../../assets/image.png';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="w-full bg-[#FAF8F5] pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#2A4D45]">
          Trial 7 hari untuk owner spa
        </p>
        <h1 className="text-4xl font-medium leading-[1.15] text-[#1C2926] md:text-6xl">
          Kelola Spa Lebih Rapi,<br className="hidden md:block" /> Tenang, dan Nyaman
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5A6B67] md:text-lg">
          Jaga booking tetap tercatat, stok lebih terkendali, komisi terapis lebih rapi, dan laporan cabang terpantau tanpa harus selalu berada di lokasi.
        </p>

        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href="https://app.spapos.id/login" className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#2A4D45] px-8 text-base font-medium text-white no-underline shadow-lg shadow-[#2A4D45]/20 sm:w-auto transition-transform hover:scale-[1.02]">
            Coba Gratis 7 Hari
          </a>
          <a href="https://wa.me/6282230713260?text=halo%20saya%20ingin%20berkonsultasi%2030%20menit%2C%20terkait%20dengan%20Operasional%20Spa%20dengan%20mas%20Feri%0ANama%3A%20%5Bdiisi%5D%0AIG%20brand%20SPA%2FPribadi%3A%20%5Bdiisi%5D%0AJumlah%20Karyawan%3A%20%5Bdiisi%5D%0AJumlah%20Cabang%20Spa%3A%20" className="flex h-14 w-full items-center justify-center rounded-2xl border border-[#D5D0C8] bg-white px-8 text-base font-medium text-[#2A4D45] no-underline sm:w-auto transition-colors hover:bg-[#F4F1EC]">
            Konsultasi WhatsApp
          </a>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2 text-sm text-[#8B9895] sm:flex-row sm:gap-4">
          <span className="flex items-center gap-1.5"><span className="text-[#2A4D45]">✓</span> Tanpa komitmen</span>
          <span className="flex items-center gap-1.5"><span className="text-[#2A4D45]">✓</span> Setup sederhana</span>
        </div>

        <div className="relative mx-auto mt-14 w-full max-w-4xl px-2">
          <div className="rounded-[24px] bg-white p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] md:p-4">
            <img
              src={dashboardImg}
              alt="SPAPOS Dashboard"
              className="block h-auto w-full rounded-[16px] border border-[#EBE7E0]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
