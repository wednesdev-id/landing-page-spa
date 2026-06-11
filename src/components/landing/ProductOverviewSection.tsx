import React from 'react';
import './ProductOverviewSection.css';
import multiBranchImg from '../../assets/multi_branch.png';
import smartReservationImg from '../../assets/smart_reservation.png';
import automatedStockImg from '../../assets/automated_stock.png';

const ProductOverviewSection: React.FC = () => {
    const products = [
        {
            title: 'Multi-Branch Control',
            description: 'Kontrol operasional dan pantau perkembangan semua cabang spa dari satu pusat.',
            icon: (
                <img 
                    src={multiBranchImg} 
                    alt="Multi-Branch Control Illustration" 
                    className="w-full h-full object-cover" 
                />
            )
        },
        {
            title: 'Smart Reservation',
            description: 'Atur jadwal booking dan paket layanan berurutan terapis secara real-time.',
            icon: (
                <img 
                    src={smartReservationImg} 
                    alt="Smart Reservation Illustration" 
                    className="w-full h-full object-cover" 
                />
            )
        },
        {
            title: 'Automated Stock',
            description: 'Cegah stok bocor, bahan baku otomatis berkurang tiap perawatan dimulai.',
            icon: (
                <img 
                    src={automatedStockImg} 
                    alt="Automated Stock Illustration" 
                    className="w-full h-full object-cover" 
                />
            )
        }
    ];

    return (
        <section className="w-full bg-[#ffffff] pt-[118px] pb-[118px] overflow-hidden">
            {/* Header Section */}
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 mb-[64px]">
                <div className="max-w-[815px] text-left">
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
                        Satu Ekosistem Lengkap untuk Seluruh Operasional Spa Anda
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: '0', maxWidth: '100%' }}>
                        Jelajahi fitur modular yang dirancang khusus untuk menyederhanakan manajemen terapis, otomatisasi stok, hingga retensi pelanggan di setiap cabang.
                    </p>
                </div>
            </div>

            {/* Carousel Section */}
            <div className="w-full relative pause-on-hover">
                <div className="flex animate-marquee w-max">
                    {/* Track 1 */}
                    <div className="flex gap-[28px] mr-[28px]">
                        {products.map((product, index) => (
                            <div 
                                key={`t1-${index}`} 
                                className="w-[412px] h-[488px] flex flex-col justify-start rounded-[22px] bg-[#ffffff] border border-solid border-[#E5E7EB] shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden"
                            >
                                {/* Illustration */}
                                <div className="w-full h-[244px] flex items-center justify-center bg-[#fafafa]">
                                    {/* Using object-fit contain analog for custom SVG abstracts */}
                                    <div className="w-full h-full flex items-center justify-center">
                                        {product.icon}
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="flex flex-col">
                                    <h3 className="text-[20px] font-[700] text-[#111827] leading-[1.4] pt-[32px] px-[32px] m-0">
                                        {product.title}
                                    </h3>
                                    <p className="text-[16px] font-[400] text-[#4B5563] leading-[1.6] pt-[12px] px-[32px] pb-[32px] m-0">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Track 2 (Duplicated for infinite loop) */}
                    <div className="flex gap-[28px] pr-[28px]">
                        {products.map((product, index) => (
                            <div 
                                key={`t2-${index}`} 
                                className="w-[412px] h-[488px] flex flex-col justify-start rounded-[22px] bg-[#ffffff] border border-solid border-[#E5E7EB] shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden"
                            >
                                {/* Illustration */}
                                <div className="w-full h-[244px] flex items-center justify-center bg-[#fafafa]">
                                    <div className="w-full h-full flex items-center justify-center">
                                        {product.icon}
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="flex flex-col">
                                    <h3 className="text-[20px] font-[700] text-[#111827] leading-[1.4] pt-[32px] px-[32px] m-0">
                                        {product.title}
                                    </h3>
                                    <p className="text-[16px] font-[400] text-[#4B5563] leading-[1.6] pt-[12px] px-[32px] pb-[32px] m-0">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductOverviewSection;
