import React from 'react';

const VideoDemo: React.FC = () => {
  const handleGetStarted = () => {
    window.location.href = 'https://app.spapos.id/login';
  };

  return (
    <section className="w-full bg-[#FFFFFF] pt-[104px] pb-[104px]" id="video-demo">
      <div className="w-full max-w-[1231px] mx-auto flex flex-row items-stretch gap-[105px]">
        
        {/* Left Track: Text content and Call-to-Action */}
        <div className="flex flex-col justify-between w-[385px]">
          
          {/* Header Block (Top Aligned, Fixed Height 135px) */}
          <div className="h-[135px] flex flex-col justify-start">
            {/* Visual styling estimated (Confidence: High) */}
            <h2 className="text-[40px] font-[800] text-[#111827] leading-[1.1] m-0">
              Lihat Langsung<br />Bagaimana SPAPOS<br />Bekerja untuk Anda
            </h2>
          </div>
          
          {/* Description & CTA Block (Bottom Aligned) */}
          <div className="flex flex-col">
            
            {/* Description (Fixed Height 103px) */}
            <div className="h-[103px] mb-[35px] flex flex-col justify-start">
              {/* Visual styling estimated (Confidence: High) */}
              <p className="text-[18px] leading-[1.4] text-[#4B5563] m-0">
                Saksikan bagaimana sistem kami mengotomatiskan reservasi, memotong stok secara presisi, dan menyatukan laporan semua cabang Anda dalam satu simulasi interaktif.
              </p>
            </div>
            
            {/* Call-to-Action Button (Fixed Height 48px) */}
            <div className="h-[48px]">
              {/* Visual styling estimated (Confidence: Medium) */}
              <button 
                onClick={handleGetStarted}
                className="h-full inline-flex items-center justify-center gap-[8px] bg-[#0F3D3E] text-[#FFFFFF] px-[32px] rounded-[12px] font-[600] text-[16px] border-none cursor-pointer hover:bg-[#0d3536] transition-colors shadow-[0_4px_14px_rgba(15,61,62,0.3)]"
              >
                Coba Trial 7 Hari
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

        </div>

        {/* Right Track: Video Embed Frame (Fixed Width 741px, Height 640px) */}
        {/* Visual styling estimated: rounded-24px, shadow (Confidence: Medium) */}
        <div className="w-[741px] h-[640px] rounded-[24px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.12)] shrink-0 bg-[#f3f4f6]">
          <iframe
            className="w-full h-full border-none"
            src="https://www.youtube.com/embed/13ey36f4ItU"
            title="SPAPOS Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default VideoDemo;
