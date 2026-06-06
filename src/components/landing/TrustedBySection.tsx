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
                            <div className="trusted-logo">
                                <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 15C20 20.5228 15.5228 25 10 25C4.47715 25 0 20.5228 0 15C0 9.47715 4.47715 5 10 5C15.5228 5 20 9.47715 20 15Z" fill="#1e1b4b"/>
                                    <path d="M30 20V10H33V20H30ZM45 20H42V10H45C47.7614 10 50 12.2386 50 15C50 17.7614 47.7614 20 45 20ZM45 13H45V17H45C46.1046 17 47 16.1046 47 15C47 13.8954 46.1046 13 45 13ZM65 20V10H68V20H65ZM85 20H82V10H85C87.7614 10 90 12.2386 90 15C90 17.7614 87.7614 20 85 20ZM85 13H85V17H85C86.1046 17 87 16.1046 87 15C87 13.8954 86.1046 13 85 13Z" fill="#1e1b4b"/>
                                </svg>
                            </div>
                            <div className="trusted-logo">
                                <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 5L20 15L10 25L0 15L10 5Z" fill="#1e1b4b"/>
                                    <path d="M30 20V10H33V20H30ZM45 20H42V10H45C47.7614 10 50 12.2386 50 15C50 17.7614 47.7614 20 45 20ZM45 13H45V17H45C46.1046 17 47 16.1046 47 15C47 13.8954 46.1046 13 45 13ZM65 20V10H68V20H65ZM85 20H82V10H85C87.7614 10 90 12.2386 90 15C90 17.7614 87.7614 20 85 20ZM85 13H85V17H85C86.1046 17 87 16.1046 87 15C87 13.8954 86.1046 13 85 13Z" fill="#1e1b4b"/>
                                </svg>
                            </div>
                            <div className="trusted-logo">
                                <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="15" r="10" fill="#1e1b4b"/>
                                    <circle cx="10" cy="15" r="5" fill="#ffffff"/>
                                    <path d="M30 20V10H33V20H30ZM45 20H42V10H45C47.7614 10 50 12.2386 50 15C50 17.7614 47.7614 20 45 20ZM45 13H45V17H45C46.1046 17 47 16.1046 47 15C47 13.8954 46.1046 13 45 13ZM65 20V10H68V20H65ZM85 20H82V10H85C87.7614 10 90 12.2386 90 15C90 17.7614 87.7614 20 85 20ZM85 13H85V17H85C86.1046 17 87 16.1046 87 15C87 13.8954 86.1046 13 85 13Z" fill="#1e1b4b"/>
                                </svg>
                            </div>
                            <div className="trusted-logo">
                                <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0" y="5" width="20" height="20" rx="4" fill="#1e1b4b"/>
                                    <path d="M30 20V10H33V20H30ZM45 20H42V10H45C47.7614 10 50 12.2386 50 15C50 17.7614 47.7614 20 45 20ZM45 13H45V17H45C46.1046 17 47 16.1046 47 15C47 13.8954 46.1046 13 45 13ZM65 20V10H68V20H65ZM85 20H82V10H85C87.7614 10 90 12.2386 90 15C90 17.7614 87.7614 20 85 20ZM85 13H85V17H85C86.1046 17 87 16.1046 87 15C87 13.8954 86.1046 13 85 13Z" fill="#1e1b4b"/>
                                </svg>
                            </div>
                            <div className="trusted-logo">
                                <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 25L10 5L20 25H16L10 13L4 25H0Z" fill="#1e1b4b"/>
                                    <path d="M30 20V10H33V20H30ZM45 20H42V10H45C47.7614 10 50 12.2386 50 15C50 17.7614 47.7614 20 45 20ZM45 13H45V17H45C46.1046 17 47 16.1046 47 15C47 13.8954 46.1046 13 45 13ZM65 20V10H68V20H65ZM85 20H82V10H85C87.7614 10 90 12.2386 90 15C90 17.7614 87.7614 20 85 20ZM85 13H85V17H85C86.1046 17 87 16.1046 87 15C87 13.8954 86.1046 13 85 13Z" fill="#1e1b4b"/>
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
