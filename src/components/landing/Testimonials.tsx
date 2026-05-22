import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Setup cepat, staff saya jadi lebih produktif. Revenue naik 30% dalam 3 bulan! Sangat recommended untuk spa owner yang ingin serius grow.",
      author: "Budi Santoso",
      role: "Owner, Sea Spa Jakarta",
      rating: 5
    },
    {
      quote: "Dulu pusing dengan booking manual, staff sering double-book. Sekarang semua otomatis, no-show turun 60%. Best investment ever!",
      author: "Sari Wulandari",
      role: "Manager, Glow Spa Bandung",
      rating: 5
    },
    {
      quote: "Support-nya juara! Ada pertanyaan langsung dibantu via WhatsApp. System-nya stabil, tidak pernah down saat jam sibuk.",
      author: "Andi Pratama",
      role: "Owner, Zen Spa Bali",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill={i < rating ? '#C6A86D' : 'none'} stroke="#C6A86D" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header-test">
          <h2 className="section-title-test">
            Apa Mereka Setelah Merasakah Kemudahan SPAPOS?
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C6A86D" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <p>Siap jadi cerita sukses berikutnya?</p>
          <button
            className="testimonials-cta-button"
            onClick={() => window.location.href = 'https://app.spapos.id/login'}
          >
            Gabung Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
