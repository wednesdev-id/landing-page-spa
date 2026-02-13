import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Spin, Typography } from 'antd';
import { CalendarOutlined, UserOutlined, ClockCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TiptapImage from '@tiptap/extension-image';
import SEO from '../components/SEO';
import Navbar from '../components/layout/Navbar';
import spaPos09 from '../assets/spa-pos-09.png';

const { Title } = Typography;

interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    image?: string;
    imageCaption?: string;
    createdAt: string;
    tags?: string[];
}

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [content, setContent] = useState('');

    const editor = useEditor({
        extensions: [StarterKit, TiptapImage],
        content: content, // Use modified content
        editable: false, // Read-only mode
        editorProps: {
            attributes: {
                class: 'prose prose-lg max-w-none focus:outline-none text-mara-text leading-relaxed prose-headings:text-mara-primary prose-a:text-mara-primary prose-a:font-medium prose-blockquote:border-mara-accent prose-strong:text-mara-primary prose-img:rounded-xl prose-img:shadow-md',
            },
        },
    });

    // Update editor content when content state changes
    useEffect(() => {
        if (editor && content) {
            editor.commands.setContent(content);
        }
    }, [content, editor]);

    useEffect(() => {
        if (!slug) return;

        axios.get(`/api/posts/${slug}`)
            .then(res => {
                const postData: Post = res.data;
                setPost(postData);

                // Content Deduplication Logic
                let processedContent = postData.content;
                if (postData.image) {
                    // Parse content to find first image
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(postData.content, 'text/html');
                    const firstImg = doc.querySelector('img');

                    // If first image src matches cover image, remove it
                    if (firstImg && firstImg.src === postData.image) {
                        firstImg.remove();
                        processedContent = doc.body.innerHTML;
                    }
                }

                setContent(processedContent);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch post', err);
                setError('Post not found');
                setLoading(false);
            });
    }, [slug]);

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen bg-mara-background">
            <Spin size="large" tip="Loading post..." />
        </div>
    );

    if (error || !post) return (
        <div className="flex justify-center items-center min-h-screen bg-mara-background">
            <div className="text-center">
                <Title level={3} type="danger">{error || 'Post not found'}</Title>
                <Link to="/blog"><ArrowLeftOutlined /> Back to Blog</Link>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-mara-background font-sans">
            <SEO
                title={`${post.title} - WednesDev Blog`}
                description={post.excerpt}
                image={post.image}
                type="article"
            />

            {/* Header */}
            <Navbar />

            <main className="w-full pt-24">
                <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                    {/* Breadcrumb */}
                    <div className="mb-8 text-sm text-gray-500 font-medium tracking-wide">
                        <Link to="/" className="hover:text-mara-primary transition-colors">HOME</Link>
                        <span className="mx-3 text-mara-accent">•</span>
                        <Link to="/blog" className="hover:text-mara-primary transition-colors">BLOG</Link>
                        <span className="mx-3 text-mara-accent">•</span>
                        <span className="text-mara-primary line-clamp-1 inline-block align-bottom max-w-[300px] opacity-80">{post.title}</span>
                    </div>

                    {/* Header Section */}
                    <div className="mb-12 text-center">
                        {/* Tags if available (mockup for now if not in component state) */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex justify-center gap-2 mb-6">
                                {post.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-mara-secondary/20 text-mara-primary text-xs font-semibold rounded-full uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-mara-primary mb-6 leading-tight font-serif">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 text-sm md:text-base border-y border-mara-secondary/30 py-4 mx-auto max-w-2xl">
                            <span className="flex items-center">
                                <CalendarOutlined className="mr-2 text-mara-accent" />
                                {new Date(post.createdAt).toLocaleDateString('id-ID', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                            <span className="hidden md:inline text-mara-secondary">•</span>
                            <span className="flex items-center">
                                <UserOutlined className="mr-2 text-mara-accent" />
                                Admin
                            </span>
                            <span className="hidden md:inline text-mara-secondary">•</span>
                            <span className="flex items-center">
                                <ClockCircleOutlined className="mr-2 text-mara-accent" />
                                5 min read
                            </span>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {post.image && (
                        <div className="mb-14">
                            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-mara-primary/10 ring-1 ring-black/5">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-auto object-cover max-h-[600px] transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {post.imageCaption && (
                                <div className="text-center mt-3 text-sm text-gray-500 italic font-serif">
                                    {post.imageCaption}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Content using Tiptap Read-Only */}
                    <div className="bg-white p-8 md:p-14 rounded-2xl shadow-sm border border-mara-secondary/30 relative">
                        {/* Decorative quote mark */}
                        <div className="absolute -top-6 -left-6 text-8xl text-mara-accent opacity-20 font-serif hidden lg:block">“</div>

                        <EditorContent editor={editor} />
                    </div>

                    <div className="my-14 flex items-center justify-center">
                        <div className="h-px bg-mara-secondary w-full max-w-xs opacity-50"></div>
                        <div className="mx-4 text-mara-accent text-2xl">❦</div>
                        <div className="h-px bg-mara-secondary w-full max-w-xs opacity-50"></div>
                    </div>

                    {/* Footer Navigation */}
                    <div className="flex justify-between items-center bg-white p-8 rounded-xl border border-mara-secondary/30">
                        <div className="text-left">
                            <span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Kembali</span>
                            <Link to="/blog" className="inline-flex items-center text-mara-primary hover:text-mara-accent font-bold text-lg group transition-colors">
                                <ArrowLeftOutlined className="mr-3 group-hover:-translate-x-1 transition-transform" />
                                Semua Artikel
                            </Link>
                        </div>
                        <div className="text-right hidden sm:block">
                            <span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Lanjut Membaca</span>
                            <Link to="#" className="inline-flex items-center text-gray-400 font-medium text-lg cursor-not-allowed">
                                Artikel Selanjutnya
                                <span className="ml-2">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-white border-t border-mara-secondary py-12 mt-12">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <img src={spaPos09} alt="Logo" className="h-8 w-auto opacity-70 grayscale hover:grayscale-0 transition-all" />
                    </div>
                    <p className="text-gray-500 text-sm">
                        © 2026 SPAPOSPLUS. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
