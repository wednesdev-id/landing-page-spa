import React from 'react';
import dashboardImg from '../../assets/image.png';

const HeroSection: React.FC = () => {
    return (
        <section className="w-full flex flex-col items-center bg-gradient-to-b from-[#FFFFFF] to-[#F0FDF4] pt-[80px] pb-0">
            {/* Content Column */}
            <div className="w-full max-w-[840px] flex flex-col items-center text-center section-header">
                <h1 className="section-title m-0">
                    Pegang Kendali Penuh Seluruh Cabang<br />
                    Spa Anda, 24/7 Tanpa Jeda
                </h1>
                
                <p className="section-subtitle mt-[24px] mb-0">
                    SPAPOS menyatukan operasional lapangan, standarisasi kerja staf, dan validitas<br />
                    data multisite Anda ke dalam satu dasbor terpusat yang real-time.
                </p>

                <div className="mt-[40px] mb-[64px] flex flex-col md:flex-row gap-[16px] w-full md:w-auto">
                    <button className="h-[56px] px-[32px] rounded-[8px] text-[16px] font-[600] bg-[#315c54] text-[#ffffff] border-none flex items-center justify-center gap-[8px] w-full md:w-auto cursor-pointer">
                        Coba Trial 90 Hari
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                    <a href="#video-demo" className="h-[56px] px-[32px] rounded-[8px] text-[16px] font-[600] bg-[#ffffff] text-[#111827] border border-solid border-[#D1D5DB] w-full md:w-auto flex items-center justify-center no-underline cursor-pointer">
                        Lihat Demo
                    </a>
                </div>
            </div>

            {/* Visual Column */}
            <div className="w-full max-w-[1024px] relative px-[32px] lg:px-0 mx-auto">
                <img 
                    src={dashboardImg} 
                    alt="SPAPOS Dashboard" 
                    className="w-full h-auto rounded-[12px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] relative z-[2] block" 
                />
                
                {/* Fade Shadow Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[#FFFFFF] z-[5]"></div>

                {/* Floating Card: Data Aman */}
                <div className="hidden md:flex absolute top-[-24px] right-[-32px] bg-[#ffffff] rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-solid border-[#F3F4F6] p-[16px] pr-[24px] items-center z-[10] lg:scale-100 scale-[0.85]">
                    <div className="w-[48px] h-[48px] rounded-[12px] bg-[#DCFCE7] flex items-center justify-center mr-[16px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-[16px] font-[700] text-[#111827] leading-[1.5] m-0">Data Aman</h4>
                        <p className="text-[14px] font-[400] text-[#6B7280] leading-[1.5] m-0">Enkripsi 256-bit</p>
                    </div>
                </div>

                {/* Floating Card: Inventory */}
                <div className="hidden md:flex absolute bottom-[25%] right-[-48px] bg-[#ffffff] rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-solid border-[#F3F4F6] p-[16px] pr-[24px] items-center z-[10] lg:scale-100 scale-[0.85]">
                    <div className="w-[40px] h-[40px] rounded-[8px] bg-[#315c54] flex items-center justify-center mr-[16px]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-[16px] font-[700] text-[#111827] leading-[1.5] m-0">Inventory</h4>
                        <p className="text-[14px] font-[400] text-[#6B7280] leading-[1.5] m-0">Kelola produk</p>
                    </div>
                </div>

                {/* Floating Card: Cabang terbaik */}
                <div className="hidden md:flex absolute bottom-[12%] left-[-56px] w-[320px] bg-[#ffffff] rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-solid border-[#F3F4F6] p-[24px] flex-col items-start z-[10] lg:scale-100 scale-[0.85]">
                    <h4 className="text-[16px] font-[700] text-[#111827] leading-[1.5] m-0">Cabang terbaik</h4>
                    <p className="text-[14px] font-[400] text-[#6B7280] leading-[1.5] m-0 mb-[16px]">Beauty SPA | Cabang Jakarta</p>
                    <div className="w-full h-[60px] flex items-end">
                        <svg width="100%" height="100%" viewBox="0 0 200 60" preserveAspectRatio="none">
                            <path d="M0 50 C 40 50, 60 20, 100 30 C 140 40, 160 10, 200 15" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <p className="text-[14px] font-[700] text-[#111827] w-full text-center mt-[16px] m-0">327 Booking /bulan</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
