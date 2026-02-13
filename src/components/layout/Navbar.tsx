import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import spaPos07 from '../../assets/spa-pos-07.png';
import '../../pages/LandingPage.css'; // Reuse existing styles

// Get dashboard URL from environment variable or use default
const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:5173';

const Navbar: React.FC = () => {
    const { isAuthenticated } = useAuth();

    const handleGetStarted = () => {
        // Redirect to dashboard (separate application)
        if (isAuthenticated) {
            window.location.href = `${DASHBOARD_URL}/app/dashboard`;
        } else {
            // Navigate to login with register mode
            window.location.href = `${DASHBOARD_URL}/login?mode=register`;
        }
    };

    return (
        <nav className="landing-nav">
            <div className="landing-nav-content">
                <div className="landing-logo">
                    <Link to="/">
                        <img src={spaPos07} alt="SPAPOSPLUS" style={{ height: '40px', width: 'auto' }} />
                    </Link>
                </div>
                <div className="flex items-center gap-6">
                    <Link to="/blog" className="text-gray-600 hover:text-gray-900 font-medium">Blog</Link>
                    <button className="nav-cta" onClick={handleGetStarted}>
                        {isAuthenticated ? 'Dashboard' : 'Masuk'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
