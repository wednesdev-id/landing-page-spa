import React from 'react';
import SpotlightCard from './SpotlightCard';

const packages = [
  { title: 'Bulanan', price: '199', suffix: 'rb', oldPrice: '249' },
  { title: '6 Bulan', price: '999', suffix: 'rb', oldPrice: '1,19 jt', highlight: true },
  { title: '1 Tahun', price: '1,89', suffix: 'jt', oldPrice: '2,39 jt', annual: true },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="w-full bg-white py-20 md:py-32">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-5">
        <div className="text-center">
          <h2 className="text-3xl font-medium leading-tight text-[#1C2926] md:text-4xl">
            Biaya sistem lebih mudah dikelola <br className="hidden md:block" />daripada kerugian yang tidak tercatat
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {packages.map((pkg) => (
            <SpotlightCard
              key={pkg.title}
              spotlightColor={pkg.highlight ? 'rgba(255, 255, 255, 0.18)' : 'rgba(15, 61, 62, 0.12)'}
              className={`relative border p-8 text-center transition-transform duration-300 hover:-translate-y-1 md:p-10 ${pkg.highlight ? 'border-[#2A4D45] bg-[#2A4D45] text-white shadow-xl shadow-[#2A4D45]/15 md:scale-[1.03]' : 'border-[#E8E4DB] bg-[#FAF8F5] text-[#1C2926]'} ${pkg.annual ? 'ring-2 ring-[#C6A86D]/40' : ''}`}
            >
              {pkg.annual ? (
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#C6A86D] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white">
                  Paling hemat
                </div>
              ) : null}
              <h3 className={`text-lg font-medium ${pkg.highlight ? 'text-[#F4F1EC]' : 'text-[#5A6B67]'}`}>{pkg.title}</h3>
              <div className="mt-6 flex items-baseline justify-center gap-2">
                <span className={`text-sm font-medium ${pkg.highlight ? 'text-[#D5D0C8]' : 'text-[#8B9895]'}`}>Rp</span>
                <span className="text-4xl font-medium tracking-tight md:text-[2.75rem]">{pkg.price}</span>
                <span className={`text-sm ${pkg.highlight ? 'text-[#D5D0C8]' : 'text-[#8B9895]'}`}>{pkg.suffix}</span>
              </div>
              <div className={`mt-2 text-sm ${pkg.highlight ? 'text-[#E9E5DD]' : 'text-[#7A8582]'}`}>
                <span className="line-through opacity-80">Rp {pkg.oldPrice}</span>
                <span className="ml-2">/ {pkg.title.toLowerCase()}</span>
              </div>
              {pkg.annual ? <p className={`mt-3 text-sm font-semibold ${pkg.highlight ? 'text-[#F6F2E8]' : 'text-[#0F3D3E]'}`}>Prioritas 1 tahun. Harga paling hemat per bulan.</p> : null}
              <ul className={`mb-8 mt-6 flex w-full flex-col gap-3 text-left text-sm ${pkg.highlight ? 'text-[#F4F1EC]' : 'text-[#5A6B67]'}`}>
                <li className="flex gap-2"><span>✓</span> Maksimal 10 staff & 3 cabang</li>
                <li className="flex gap-2"><span>✓</span> Booking & POS lengkap</li>
                <li className="flex gap-2"><span>✓</span> Manajemen inventori</li>
              </ul>
              <a href="https://app.spapos.id/login" className={`mt-auto flex h-12 w-full items-center justify-center rounded-xl text-sm font-medium no-underline ${pkg.highlight ? 'bg-white text-[#2A4D45]' : 'bg-[#E8E4DB] text-[#1C2926]'}`}>
                Coba 90 Hari
              </a>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
