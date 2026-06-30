import React from 'react';

const milestones = [
  ['Minggu 1-2', 'Mulai rapikan data layanan, staf, dan stok.'],
  ['Bulan 1', 'Jalankan alur booking dan kasir.'],
  ['Bulan 2-3', 'Pantau laporan dan evaluasi kenyamanan.'],
];

const Trial90Section: React.FC = () => {
  return (
    <section id="trial" className="w-full bg-[#FAF8F5] py-20 md:py-32">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-5 text-center">
        <div>
          <h2 className="text-3xl font-medium leading-tight text-[#1C2926] md:text-4xl">
            Coba dulu 90 hari, rasakan perubahannya
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {milestones.map(([time, desc]) => (
            <div key={time} className="flex flex-col items-center rounded-3xl bg-white p-8 shadow-sm">
              <span className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#8B9895]">{time}</span>
              <p className="text-sm leading-relaxed text-[#1C2926]">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href="https://app.spapos.id/login" className="flex h-14 w-full items-center justify-center rounded-2xl bg-[#2A4D45] px-8 text-base font-medium text-white no-underline shadow-lg shadow-[#2A4D45]/20 sm:w-auto">
            Mulai Trial 90 Hari
          </a>
        </div>
      </div>
    </section>
  );
};

export default Trial90Section;
