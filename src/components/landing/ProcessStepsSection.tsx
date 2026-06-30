import React from 'react';

const steps = [
  ['1', 'Konsultasi kebutuhan', 'Ceritakan alur booking dan kendala cabang yang paling sering terjadi.'],
  ['2', 'Setup data awal', 'Masukkan layanan, daftar staf, dan aturan stok sesuai kenyamanan Anda.'],
  ['3', 'Simulasi operasional', 'Coba alur dari booking, treatment, hingga laporan owner.'],
  ['4', 'Mulai harian', 'Gunakan SPAPOS untuk menjaga transaksi dan stok harian tetap rapi.'],
];

const ProcessStepsSection: React.FC = () => {
  return (
    <section id="process" className="w-full bg-white py-20 md:py-32">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-5">
        <div className="text-center">
          <h2 className="text-3xl font-medium leading-tight text-[#1C2926] md:text-4xl">
            Mulai rapikan operasional dalam beberapa langkah
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {steps.map(([num, title, desc]) => (
            <div key={title} className="flex flex-col rounded-3xl bg-[#FAF8F5] p-8">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#2A4D45] text-white">{num}</div>
              <h3 className="text-lg font-medium text-[#1C2926]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5A6B67]">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex w-full flex-col items-center gap-4 rounded-3xl bg-[#F4F1EC] p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-lg font-medium text-[#1C2926]">Jadwalkan konsultasi</p>
            <p className="mt-1 text-sm text-[#5A6B67]">Lihat apakah SPAPOS cocok dengan alur spa Anda.</p>
          </div>
          <a href="https://wa.me/6281234567890" className="flex h-12 w-full items-center justify-center rounded-xl bg-[#2A4D45] px-6 text-sm font-medium text-white no-underline sm:w-auto">
            Konsultasi WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessStepsSection;
