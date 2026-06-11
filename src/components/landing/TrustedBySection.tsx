import React from 'react';
import './TrustedBySection.css';

const TrustedBySection: React.FC = () => {
    return (
        <section className="trusted-by-section">
            <h3 className="trusted-by-title">Dipercaya oleh 200+ SPA di Indonesia</h3>
            <div className="trusted-by-logos">
                <div className="logo-track">
                    {/* Render logos twice for seamless infinite scroll effect */}
                    {[1, 2].map((group) => (
                        <div key={group} className="logo-group">
                            {/* Dummy Logo 1: ZenSpa */}
                            <div className="trusted-logo">
                                <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto max-h-[30px]">
                                    <path d="M20 30C20 30 10 25 10 15C10 5 20 10 20 10C20 10 30 5 30 15C30 25 20 30 20 30Z" fill="currentColor"/>
                                    <text x="40" y="26" fill="currentColor" fontFamily="sans-serif" fontSize="22" fontWeight="bold">ZenSpa</text>
                                </svg>
                            </div>
                            {/* Dummy Logo 2: Lumina */}
                            <div className="trusted-logo">
                                <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto max-h-[30px]">
                                    <path d="M20 5L23 17L35 20L23 23L20 35L17 23L5 20L17 17L20 5Z" fill="currentColor"/>
                                    <text x="45" y="26" fill="currentColor" fontFamily="sans-serif" fontSize="22" fontWeight="bold">Lumina</text>
                                </svg>
                            </div>
                            {/* Dummy Logo 3: Aura */}
                            <div className="trusted-logo">
                                <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto max-h-[30px]">
                                    <circle cx="15" cy="20" r="10" stroke="currentColor" strokeWidth="3"/>
                                    <circle cx="25" cy="20" r="10" stroke="currentColor" strokeWidth="3"/>
                                    <text x="45" y="26" fill="currentColor" fontFamily="sans-serif" fontSize="22" fontWeight="bold">Aura</text>
                                </svg>
                            </div>
                            {/* Dummy Logo 4: Nova */}
                            <div className="trusted-logo">
                                <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto max-h-[30px]">
                                    <polygon points="20,5 35,12 35,28 20,35 5,28 5,12" stroke="currentColor" strokeWidth="3"/>
                                    <circle cx="20" cy="20" r="4" fill="currentColor"/>
                                    <text x="45" y="26" fill="currentColor" fontFamily="sans-serif" fontSize="22" fontWeight="bold">Nova</text>
                                </svg>
                            </div>
                            {/* Dummy Logo 5: Oasis */}
                            <div className="trusted-logo">
                                <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto max-h-[30px]">
                                    <path d="M5 25 Q 12 15 20 25 T 35 25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
                                    <path d="M5 15 Q 12 5 20 15 T 35 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
                                    <text x="45" y="26" fill="currentColor" fontFamily="sans-serif" fontSize="22" fontWeight="bold">Oasis</text>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBySection;
