import React from 'react';

const FinalCTASection: React.FC = () => {
    const handleGetStarted = () => {
        window.location.href = 'https://app.spapos.id/login';
    };

    return (
        <section 
            className="w-full py-[120px] overflow-hidden flex flex-col items-center justify-center"
            style={{ backgroundImage: 'radial-gradient(ellipse at center, #e8f5f2 0%, #ffffff 100%)' }}
        >
            <div className="max-w-[800px] w-full flex flex-col items-center justify-center gap-[40px] px-4">
                <h2 className="text-[48px] font-semibold text-center text-[#111827] leading-[1.2] tracking-tight">
                    Siap Kendalikan Penuh Semua Bisnis<br />Spa Anda?
                </h2>
                <button 
                    className="flex flex-row items-center justify-center gap-[8px] h-[56px] py-[16px] px-[40px] rounded-[8px] bg-[#375854] text-[#FFFFFF] text-[16px] font-medium" 
                    onClick={handleGetStarted}
                >
                    Coba SPAPOS Sekarang
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default FinalCTASection;
