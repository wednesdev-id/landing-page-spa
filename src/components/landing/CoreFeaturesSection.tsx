import React from 'react';

const features = [
  ['Booking lebih tertata', 'Jadwal terasa rapi, omzet tidak mudah terlewat.'],
  ['Pembayaran jelas', 'Transaksi tercatat, pelayanan lebih profesional.'],
  ['Stok lebih terjaga', 'Pemakaian bahan otomatis mengurangi stok.'],
  ['Komisi mudah dicek', 'Perhitungan otomatis mengurangi salah hitung.'],
];

const CoreFeaturesSection: React.FC = () => {
  return (
    <section id="features" className="w-full bg-[#FAF8F5] py-20 md:py-32">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-5">
        <div className="text-center">
          <h2 className="text-3xl font-medium leading-tight text-[#1C2926] md:text-4xl">
            Sistem yang membuat operasional terasa lebih ringan
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map(([title, desc]) => (
            <div key={title} className="flex flex-col rounded-3xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F1EC] text-[#2A4D45]">✓</div>
              <h3 className="text-lg font-medium text-[#1C2926]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5A6B67]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
