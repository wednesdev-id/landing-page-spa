import React, { useState } from 'react';
import './VideoDemo.css';

const VideoDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="video-demo-section" id="video-demo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header-video">
          <h2 className="section-title-video">
            Lihat Bagaimana SPAPOS Bekerja
          </h2>
          <p className="section-subtitle-video">
            Dalam 2 menit, pahami bagaimana SPAPOS dapat mengubah operasional spa Anda
          </p>
        </div>

        <div className="video-container">
          {!isPlaying ? (
            <div className="video-thumbnail" onClick={handlePlay}>
              <div className="thumbnail-overlay">
                <div className="play-button">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p className="thumbnail-text">Tonton Demo (2:15)</p>
              </div>
              <div className="thumbnail-placeholder">
                <svg width="100%" height="100%" viewBox="0 0 16 9" fill="none">
                  <rect width="16" height="9" fill="#0F3D3E"/>
                  <text x="8" y="4.5" textAnchor="middle" fill="white" fontSize="2" fontFamily="Inter" fontWeight="600">
                    SPAPOS Demo Video
                  </text>
                </svg>
              </div>
            </div>
          ) : (
            <div className="video-player">
              <div className="video-placeholder-player">
                <svg width="100%" height="100%" viewBox="0 0 16 9" fill="none">
                  <rect width="16" height="9" fill="#0F3D3E"/>
                  <text x="8" y="4.5" textAnchor="middle" fill="white" fontSize="2" fontFamily="Inter" fontWeight="600">
                    Video Player Placeholder
                  </text>
                  <text x="8" y="6.5" textAnchor="middle" fill="#C6A86D" fontSize="1" fontFamily="Inter">
                    Replace with actual video embed
                  </text>
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className="video-highlights">
          <div className="highlight-item">
            <div className="highlight-icon">▶</div>
            <p>Booking jadi mudah & otomatis</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">▶</div>
            <p>Laporan real-time di dashboard</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">▶</div>
            <p>Kelola banyak cabang dalam 1 view</p>
          </div>
        </div>

        <div className="video-cta">
          <p>Tertarik mencoba SPAPOS?</p>
          <button
            className="video-cta-button"
            onClick={() => window.location.href = 'https://app.spapos.id/login'}
          >
            Coba Gratis Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
