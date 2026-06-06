import React from 'react';
import ssSetup from '../../assets/ss_setup.png';

const RegistrationCTASection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#E5F2EE] pt-[112px] pb-0 flex justify-center overflow-hidden">
      <div className="w-[1122px] flex flex-row justify-between items-start">
        
        {/* Left Column */}
        <div className="w-[382px] flex flex-col items-start mt-[69px]">
          <h2 className="text-[36px] font-[800] text-[#111827] leading-[1.2] m-0 mb-[27px]">
            Set up Mudah Cukup<br />dengan Akun Google
          </h2>
          <p className="text-[16px] text-[#4B5563] leading-[1.5] m-0 mb-[50px]">
            Akses dasbor pusat SPAPOS Anda secara instan dan aman, kapan saja dan dari mana saja, langsung menggunakan akun Google Anda.
          </p>
          
          <button className="w-[384px] h-[56px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] flex items-center justify-start pl-[74px] gap-[8px] text-[#111827] font-[500] overflow-hidden">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Daftar dengan Google
          </button>
        </div>

        {/* Right Column */}
        <div className="relative w-[557px] h-[434px]">
          {/* Backdrop Stroke Box */}
          <div className="absolute top-[47px] -left-[32px] w-[625px] h-[387px] border-[2px] border-[#C1D8D4] rounded-t-[16px] z-0 pointer-events-none"></div>

          {/* Screenshot Image */}
          <img 
            src={ssSetup} 
            alt="Registration Setup" 
            className="relative z-10 w-[557px] h-[434px] object-cover object-top rounded-t-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] block" 
          />
        </div>

      </div>
    </section>
  );
};

export default RegistrationCTASection;
