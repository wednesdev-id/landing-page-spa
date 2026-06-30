import React from 'react';
import dashboardImg from '../../assets/image.png';

const DashboardPreviewSection: React.FC = () => {
  return (
    <section id="dashboard" className="w-full bg-white py-20 md:py-32">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-5 text-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium leading-tight text-[#1C2926] md:text-4xl">
            Pantau kondisi semua cabang dengan lebih tenang
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#5A6B67] md:text-lg">
            Tidak perlu menunggu akhir bulan. Data booking, transaksi, stok, dan performa staf terkumpul rapi di ujung jari Anda.
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-[24px] bg-[#FAF8F5] p-2 shadow-sm md:p-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-[16px] border border-[#EBE7E0] bg-white">
            <iframe 
              className="absolute inset-0 h-full w-full border-none"
              src="https://www.youtube.com/embed/13ey36f4ItU?start=84" 
              title="SPAPOS Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreviewSection;
