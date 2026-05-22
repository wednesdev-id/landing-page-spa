import React, { useState } from 'react';
import './VideoDemo.css';

const VideoDemo: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleGetStarted = () => {
    window.location.href = 'https://app.spapos.id/login';
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <section className="video-demo-section" id="video-demo">
        <div className="video-demo-container">
          {/* Left Side */}
          <div className="video-demo-left">
            <h2 className="video-demo-heading">
              Lihat sendiri bagaimana SPAPOS Mengubah cara Kerja SPA Anda.
            </h2>
            <div className="video-demo-buttons">
              <button className="vd-btn vd-btn-primary" onClick={handleGetStarted}>
                Gunakan SPAPOS
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button className="vd-btn vd-btn-secondary" onClick={openModal}>
                Lihat Demo
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="video-demo-right">
            <div className="video-thumbnail" onClick={openModal}>
              <div className="video-thumb-img">
                <img
                  src="https://img.youtube.com/vi/C3eKq1FDIZY/maxresdefault.jpg"
                  alt="SPAPOS Demo Video"
                />
                <div className="video-thumb-overlay">
                  <div className="play-btn">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="video-modal-player">
              <iframe
                src="https://www.youtube.com/embed/C3eKq1FDIZY?autoplay=1"
                title="SPAPOS Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoDemo;
