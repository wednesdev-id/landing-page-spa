import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/Untitled-2-04.png';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    window.location.href = 'https://app.spapos.id/login';
  };

  const navLinks = [
    { name: 'Beranda', path: isHome ? '#hero' : '/', activeKey: 'home' },
    { name: 'Masalah', path: isHome ? '#problem' : '/#problem', activeKey: '' },
    { name: 'Trial 7 Hari', path: isHome ? '#trial' : '/#trial', activeKey: '' },
    { name: 'Biaya', path: isHome ? '#pricing' : '/#pricing', activeKey: '' },
  ];

  const getActiveState = (path: string) => path === 'home' && isHome && window.location.hash === '';

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main Navigation">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-group" aria-label="SPA POS Home">
          <img src={logoImg} alt="SPA POS Logo" className="navbar-logo-icon" />
          <span className="navbar-brand-text">SPAPOS</span>
        </Link>

        <div className="navbar-right-group">
          <div className="navbar-nav-group">
            {navLinks.map((link, index) => (
              link.path.startsWith('#') ? (
                <a key={index} href={link.path} className={`navbar-link ${getActiveState(link.activeKey) ? 'active' : 'inactive'}`}>{link.name}</a>
              ) : (
                <Link key={index} to={link.path} className={`navbar-link ${getActiveState(link.activeKey) ? 'active' : 'inactive'}`}>{link.name}</Link>
              )
            ))}
          </div>
          <button className="navbar-cta-button" onClick={handleGetStarted} role="button" tabIndex={0}>
            <span className="navbar-cta-text">Coba Gratis 7 Hari</span>
            <svg className="navbar-cta-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>

        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></> : <><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></>}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu-wrapper">
          <div className="mobile-menu-content">
            {navLinks.map((link, index) => (
              link.path.startsWith('#') ? (
                <a key={index} href={link.path} className="mobile-link" onClick={() => setIsMenuOpen(false)}>{link.name}</a>
              ) : (
                <Link key={index} to={link.path} className="mobile-link" onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
              )
            ))}
            <button className="mobile-cta" onClick={() => { handleGetStarted(); setIsMenuOpen(false); }}>
              Coba Gratis 7 Hari
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
