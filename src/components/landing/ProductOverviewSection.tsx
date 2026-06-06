import React from 'react';
import './ProductOverviewSection.css';

const ProductOverviewSection: React.FC = () => {
    const products = [
        {
            title: 'Multi-Branch Control',
            description: 'Kontrol operasional dan pantau perkembangan semua cabang spa dari satu pusat.',
            icon: (
                <div className="product-abstract">
                    <div className="ab-window">
                        <div className="ab-header"></div>
                        <div className="ab-body">
                            <div className="ab-box-large"></div>
                            <div className="ab-box-small-group">
                                <div className="ab-box-s"></div>
                                <div className="ab-box-s"></div>
                            </div>
                        </div>
                    </div>
                    <div className="ab-badge ab-badge-bottom-right">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                </div>
            )
        },
        {
            title: 'Smart Reservation',
            description: 'Atur jadwal booking dan paket layanan berurutan terapis secara real-time.',
            icon: (
                <div className="product-abstract">
                    <div className="ab-window">
                        <div className="ab-header"></div>
                        <div className="ab-body flex-row">
                            <div className="ab-col">
                                <div className="ab-box-s"></div>
                                <div className="ab-box-s"></div>
                            </div>
                            <div className="ab-col">
                                <div className="ab-box-s"></div>
                                <div className="ab-box-s"></div>
                            </div>
                        </div>
                    </div>
                    <div className="ab-badge ab-badge-bottom-right">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </div>
                </div>
            )
        },
        {
            title: 'Automated Stock',
            description: 'Cegah stok bocor, bahan baku otomatis berkurang tiap perawatan dimulai.',
            icon: (
                <div className="product-abstract">
                    <div className="ab-window">
                        <div className="ab-header"></div>
                        <div className="ab-body">
                            <div className="ab-list-item"></div>
                            <div className="ab-list-item"></div>
                            <div className="ab-list-item w-half"></div>
                        </div>
                    </div>
                    <div className="ab-badge ab-badge-bottom-right">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        </svg>
                    </div>
                </div>
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
