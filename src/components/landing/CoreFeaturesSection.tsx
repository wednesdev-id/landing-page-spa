import React from 'react';

const features = [
  ['Booking terlewat', 'Chat masuk dari banyak channel, jadwal lupa dicatat, pelanggan akhirnya batal datang.'],
  ['Stok treatment bocor', 'Cream, oil, dan bahan treatment terpakai tanpa catatan jelas. Biaya jalan terus, profit makin tipis.'],
  ['Komisi salah hitung', 'Hitung manual rawan selisih, bikin staf komplain, dan admin kerja dua kali.'],
  ['Sulit pantau dari jauh', 'Owner tidak selalu di outlet. Tanpa laporan real-time, keputusan bisnis jadi terlambat.'],
];

const CoreFeaturesSection: React.FC = () => {
  return (
    <section id="features" className="w-full bg-[#FAF8F5] py-20 md:py-32">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-5">
        <div className="text-center">
          <h2 className="text-3xl font-medium leading-tight text-[#1C2926] md:text-4xl">
            Tanpa Sistem yang Rapi, Omzet Spa Bisa Bocor dari Banyak Sisi
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#5A6B67] md:text-lg">
            Bukan selalu karena pelanggan sepi. Kadang profit berkurang karena booking tidak tercatat, stok tidak terkontrol, komisi salah hitung, dan laporan datang terlambat.
          </p>
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
