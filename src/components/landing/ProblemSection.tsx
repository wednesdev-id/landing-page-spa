import React from 'react';

const problems = [
  {
    title: 'Booking terlewat',
    desc: 'Omzet hilang pelan-pelan karena chat tidak tercatat rapi.',
  },
  {
    title: 'Stok bahan bocor',
    desc: 'Bahan treatment habis tanpa jejak pemakaian yang jelas.',
  },
  {
    title: 'Komisi salah hitung',
    desc: 'Hitung manual rawan selisih dan membuat staf bingung.',
  },
  {
    title: 'Sulit pantau dari jauh',
    desc: 'Laporan telat membuat keputusan bisnis jadi tertunda.',
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="w-full bg-white py-20 md:py-32">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-5 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-medium leading-tight text-[#1C2926] md:text-4xl">
            Detail Kecil yang Diam-Diam Mengurangi Omzet Spa Anda
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item) => (
            <div key={item.title} className="flex flex-col items-center rounded-3xl bg-[#FAF8F5] p-8 text-center transition-colors hover:bg-[#F4F1EC]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#E8E4DB] text-lg text-[#2A4D45]">!</div>
              <h3 className="text-lg font-medium text-[#1C2926]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A6B67]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
