import React from 'react';

const cards = [
  ['Minggu 1-2', 'Rapikan data dasar'],
  ['Bulan 1', 'Jalankan booking & POS'],
  ['Bulan 2-3', 'Pantau stok, komisi, laporan'],
];

const TrialWhySection: React.FC = () => {
  return (
    <section id="trial-why" className="w-full bg-[#F8FBFA] py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F3D3E]">Kenapa trial 90 hari</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">Coba Dulu 90 Hari, Rasakan Bedanya di Operasional Spa Anda</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {cards.map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F3D3E]">{title}</p>
              <p className="mt-3 text-xl font-semibold text-slate-950">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="https://app.spapos.id/login" className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0F3D3E] px-6 text-sm font-semibold text-white no-underline">Mulai Trial 90 Hari</a>
          <a href="https://wa.me/6281234567890" className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 no-underline">Konsultasi via WhatsApp</a>
        </div>
      </div>
    </section>
  );
};

export default TrialWhySection;
