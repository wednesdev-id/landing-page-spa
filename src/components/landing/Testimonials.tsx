import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F4F6F7] flex justify-center pt-[89px] pb-[81px]">
      <div className="w-[1440px] flex flex-col items-start overflow-hidden relative">
        {/* Header */}
        <div className="pl-[80px] w-full flex flex-col items-start">
          <h2 className="text-[36px] font-[800] text-[#111827] leading-[1.2] m-0 mb-[25px]">
            Bergabung Bersama Para Owner yang Telah Memegang Kendali Penuh
          </h2>
          <p className="text-[16px] text-[#4B5563] leading-[1.5] m-0 mb-[78px]">
            Baca kisah sukses para pemilik jaringan spa retail dalam mengotomatiskan operasional lapangan dan<br />menyatukan data multi-cabang secara real-time.
          </p>
        </div>

        {/* Carousel Container */}
        {/* Added snap-x and cursor classes for scroll snapping / interaction hints */}
        <div className="w-full overflow-x-auto flex flex-row gap-[21px] px-[80px] snap-x snap-mandatory cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {/* Card 1: Standard Testimonial */}
          <div className="snap-start min-w-[305px] h-[340px] bg-[#E2E7E8] rounded-[16px] p-[24px] flex flex-col justify-start">
            <div className="flex flex-col mb-[32px]">
              <span className="text-[16px] text-[#6B7280] mb-[16px] font-[500]">03 April 2026</span>
              <p className="text-[16px] text-[#111827] leading-[1.5] m-0 font-[400]">
                Dulu pusing rekap data dari 4 cabang setiap akhir bulan. Sejak pakai SPAPOS, semua laporan pendapatan dan komisi terapis langsung terkonsolidasi otomatis secara real-time ke dasbor pusat saya.
              </p>
            </div>
            <div className="flex flex-row items-start gap-[12px] mt-auto">
              <div className="w-[48px] h-[48px] rounded-full bg-[#D1D5DB] flex-shrink-0"></div>
              <div className="flex flex-col pt-[4px]">
                <span className="text-[16px] font-[700] text-[#111827]">Hendra Wijaya</span>
                <span className="text-[14px] text-[#6B7280]">SPA Beauty</span>
              </div>
            </div>
          </div>

          {/* Card 2: Brand Callout Card */}
          <div className="snap-start min-w-[305px] h-[340px] bg-[#345F56] rounded-[16px] p-[24px] flex flex-col justify-start pt-[80px]">
            <h3 className="text-[20px] font-[700] text-[#FFFFFF] leading-[1.4] m-0 mb-[24px]">
              Kami berkomitmen membantu pemilik spa mengoperasionalkan bisnisnya lebih mudah kapan saja di mana saja
            </h3>
            <span className="text-[16px] font-[600] text-[#E5F2EE] italic">_SPAPOS</span>
          </div>

          {/* Card 3: Standard Testimonial */}
          <div className="snap-start min-w-[305px] h-[340px] bg-[#E2E7E8] rounded-[16px] p-[24px] flex flex-col justify-start">
            <div className="flex flex-col mb-[32px]">
              <span className="text-[16px] text-[#6B7280] mb-[16px] font-[500]">07 Juni 2026</span>
              <p className="text-[16px] text-[#111827] leading-[1.5] m-0 font-[400]">
                Kebocoran stok minyak esensial dan krim pijat yang dulu sering terjadi sekarang bisa dihentikan. Fitur potong stok otomatisnya sangat presisi mengunci pemakaian bahan baku sesuai jenis layanan.
              </p>
            </div>
            <div className="flex flex-row items-start gap-[12px] mt-auto">
              <div className="w-[48px] h-[48px] rounded-full bg-[#D1D5DB] flex-shrink-0"></div>
              <div className="flex flex-col pt-[4px]">
                <span className="text-[16px] font-[700] text-[#111827]">Dewi Sartika</span>
                <span className="text-[14px] text-[#6B7280]">Allila Wellness Spa</span>
              </div>
            </div>
          </div>

          {/* Card 4: Standard Testimonial */}
          <div className="snap-start min-w-[305px] h-[340px] bg-[#E2E7E8] rounded-[16px] p-[24px] flex flex-col justify-start">
            <div className="flex flex-col mb-[32px]">
              <span className="text-[16px] text-[#6B7280] mb-[16px] font-[500]">03 May 2026</span>
              <p className="text-[16px] text-[#111827] leading-[1.5] m-0 font-[400]">
                Sistem membership-nya luar biasa! Pelanggan kami bisa otomatis naik ke level VIP dan menikmati promo yang sama di cabang mana pun mereka berkunjung tanpa perlu kasir kami melakukan input manual.
              </p>
            </div>
            <div className="flex flex-row items-start gap-[12px] mt-auto">
              <div className="w-[48px] h-[48px] rounded-full bg-[#D1D5DB] flex-shrink-0"></div>
              <div className="flex flex-col pt-[4px]">
                <span className="text-[16px] font-[700] text-[#111827]">Budi Santoso</span>
                <span className="text-[14px] text-[#6B7280]">Reflexology & Spa</span>
              </div>
            </div>
          </div>

          {/* Card 5: Partially Visible Overflow Card */}
          <div className="snap-start min-w-[305px] h-[340px] bg-[#E2E7E8] rounded-[16px] p-[24px] flex flex-col justify-start">
            <div className="flex flex-col mb-[32px]">
              <span className="text-[16px] text-[#6B7280] mb-[16px] font-[500]">03 Aug 2026</span>
              <p className="text-[16px] text-[#111827] leading-[1.5] m-0 font-[400]">
                Sinkronisasi data multi-cabang sekarang terpusat dan online. Tidak ada lagi kendala pembukuan beda antar cabang yang bikin pusing.
              </p>
            </div>
            <div className="flex flex-row items-start gap-[12px] mt-auto">
              <div className="w-[48px] h-[48px] rounded-full bg-[#D1D5DB] flex-shrink-0"></div>
              <div className="flex flex-col pt-[4px]">
                <span className="text-[16px] font-[700] text-[#111827]">Siti Aminah</span>
                <span className="text-[14px] text-[#6B7280]">Lotus Beauty</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
