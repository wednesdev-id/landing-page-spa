import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import spaPos09 from '../assets/spa-pos-09.png';
import coverageMap from '../assets/coverage-map.png';
import Navbar from '../components/layout/Navbar';
import './LandingPage.css';

// Interface for Blog Post
interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    coverImage?: string;
    image?: string;
    date?: string;
    createdAt?: string;
    slug: string;
}

// Icons as simple SVG components for clean look
const CalendarIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const UsersIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const ChartIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
);

const ClipboardIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
);

const LandingPage: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Using relative URL which is proxied by Vite to the backend
                const response = await fetch('/api/posts');
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data.slice(0, 3));
                }
            } catch (error) {
                console.error('Error fetching posts for landing page:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // ... (keep handleGetStarted and handleSubscribe)

    // Helper to get image source
    const getPostImage = (post: BlogPost) => post.coverImage || post.image || 'https://placehold.co/600x400?text=No+Image';

    // Helper to get date
    const getPostDate = (post: BlogPost) => {
        const dateStr = post.date || post.createdAt || new Date().toISOString();
        return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    // ... (keep features array)

    return (
        // ... (keep JSX up to Latest Blog Section)
        {/* Latest Blog Section */ }
        < section className = "py-20 bg-gray-50" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-mara-primary mb-2 font-serif">Wawasan Terbaru</h2>
                        <p className="text-gray-500">Tips dan strategi untuk mengembangkan bisnis spa Anda.</p>
                    </div>
                    <Link to="/blog" className="hidden md:inline-flex items-center text-mara-primary font-bold hover:text-mara-accent transition-colors">
                        Lihat Semua Artikel <span className="ml-2">→</span>
                    </Link>
                </div>

                {loading ? (
                    <div className="text-center py-12 text-gray-500">Loading articles...</div>
                ) : posts.length > 0 ? (
                    <div className="grid md:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <Link key={index} to={post.slug ? `/blog/${post.slug}` : '/blog'} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-mara-primary/10 group-hover:bg-transparent transition-colors z-10" />
                                    <img src={getPostImage(post)} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-bold text-mara-accent uppercase tracking-wider mb-2">{getPostDate(post)}</div>
                                    <h3 className="text-xl font-bold text-mara-primary mb-3 font-serif group-hover:text-mara-accent transition-colors line-clamp-2">{post.title}</h3>
                                    <div
                                        className="text-gray-500 text-sm line-clamp-3 mb-4 prose prose-sm max-w-none"
                                        dangerouslySetInnerHTML={{ __html: post.excerpt || post.title }} // Basic excerpt handling
                                    />
                                    <div className="text-mara-primary font-bold text-sm inline-flex items-center">
                                        Baca Selengkapnya <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
                        <p className="text-gray-500">Belum ada artikel terbaru.</p>
                    </div>
                )}

                <div className="mt-8 text-center md:hidden">
                    <Link to="/blog" className="inline-flex items-center text-mara-primary font-bold hover:text-mara-accent transition-colors">
                        Lihat Semua Artikel <span className="ml-2">→</span>
                    </Link>
                </div>
            </div>
            </section >

    {/* Testimonials Section */ }
    < section className = "py-20 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-mara-primary mb-4 font-serif">Kata Mereka</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Apa kata pemilik bisnis spa yang telah mempercayakan operasional mereka pada SPAPOSPLUS.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        name: "Sarah Wijaya",
                        role: "Owner",
                        spa: "Zen Wellness Jakarta",
                        content: "Sejak menggunakan SPAPOSPLUS, pencatatan transaksi jadi jauh lebih rapi. Fitur laporannya sangat membantu saya menganalisa performa terapis.",
                        initial: "S"
                    },
                    {
                        name: "Budi Santoso",
                        role: "Manager",
                        spa: "Bali Radiance Spa",
                        content: "Sistem booking onlinenya juara! Pelanggan jadi lebih mudah reservasi, dan no-show rate kami turun drastis berkat fitur reminder WhatsApp otomatis.",
                        initial: "B"
                    },
                    {
                        name: "Linda Kusuma",
                        role: "Owner",
                        spa: "The Beauty Lounge",
                        content: "Customer supportnya sangat responsif. Aplikasi mudah digunakan bahkan oleh staff baru. Sangat direkomendasikan untuk bisnis spa yang ingin scale up.",
                        initial: "L"
                    }
                ].map((testimonial, index) => (
                    <div key={index} className="bg-mara-background p-8 rounded-2xl shadow-sm border border-mara-secondary/20 relative">
                        <div className="text-mara-accent text-4xl font-serif absolute top-4 right-6 opacity-20">"</div>
                        <div className="flex items-center gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-mara-primary flex items-center justify-center text-white font-bold text-xl">
                                {testimonial.initial}
                            </div>
                            <div>
                                <div className="font-bold text-mara-primary">{testimonial.name}</div>
                                <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.spa}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            </section >

    {/* CTA Section */ }
    < section className = "cta-section" >
                <h2 className="cta-title">Siap Mengelola Spa dengan Lebih Tenang?</h2>
                <p className="cta-subtitle">
                    Bergabung dengan SPAPOSPLUS dan rasakan perbedaannya.
                </p>
                <button className="cta-button" onClick={handleGetStarted}>
                    Mulai Gratis
                </button>
            </section >

    {/* Footer */ }
    < footer className = "landing-footer" >
        <div className="footer-content">
            <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={spaPos09} alt="Logo" style={{ height: '48px', width: 'auto' }} />
                <div>
                    <span className="logo-text">SPAPOSPLUS</span>
                    <p className="footer-tagline">Spa POS & Management System</p>
                    <Link to="/blog" className="text-sm text-gray-400 hover:text-white mt-1 block">Read our Blog</Link>
                </div>
            </div>
            <div className="footer-links">
                <span>© 2026 SPAPOSPLUS. All rights reserved.</span>
            </div>
        </div>
            </footer >
        </div >
    );
};

export default LandingPage;
