import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Typography, Spin, Tag, Layout } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import SEO from '../components/SEO';
import Navbar from '../components/layout/Navbar';

const { Title, Paragraph, Text } = Typography;
const { Content, Footer } = Layout;

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    coverImage?: string; // API might return this
    image?: string; // Code was using this
    date?: string; // Interface had this
    createdAt?: string; // Code was using this
    slug: string;
    tags?: string[];
}

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch posts from API
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/posts');
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Helper to get image source
    const getPostImage = (post: BlogPost) => post.coverImage || post.image || 'https://placehold.co/600x400?text=No+Image';

    // Helper to get date
    const getPostDate = (post: BlogPost) => post.date || post.createdAt || new Date().toISOString();

    return (
        <Layout className="min-h-screen bg-mara-background font-sans">
            <SEO
                title="Blog - SPAPOSPLUS"
                description="Discover tips, tutorials, and success stories to help you grow your spa and salon business."
            />

            <Navbar />

            <Content className="px-4 py-8 pt-24 md:px-12 md:py-16 max-w-7xl mx-auto w-full">

                <div className="text-center mb-16">
                    <Title level={1} className="!mb-4 !text-mara-primary font-serif !text-4xl md:!text-5xl">Our Latest Insights</Title>
                    <Paragraph className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Discover tips, tutorials, and success stories to help you grow your spa and salon business.
                    </Paragraph>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <Spin size="large" />
                    </div>
                ) : (
                    <Row gutter={[32, 32]}>
                        {posts.map((post) => (
                            <Col xs={24} sm={12} lg={8} key={post.id}>
                                <Link to={`/blog/${post.slug}`} className="group h-full block">
                                    <Card
                                        hoverable
                                        cover={
                                            <div className="overflow-hidden h-56 relative">
                                                <div className="absolute inset-0 bg-mara-primary/10 group-hover:bg-transparent transition-colors z-10" />
                                                <img
                                                    alt={post.title}
                                                    src={getPostImage(post)}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                                />
                                            </div>
                                        }
                                        className="h-full flex flex-col overflow-hidden rounded-2xl border-mara-secondary/30 shadow-sm hover:shadow-xl hover:shadow-mara-primary/5 transition-all duration-300 bg-white group"
                                        bodyStyle={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '24px' }}
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <Tag color="#0F3D3E" className="mr-0 border-none px-3 py-1 uppercase text-[10px] tracking-wider font-bold">Article</Tag>
                                            <Text type="secondary" className="text-xs font-medium flex items-center">
                                                <CalendarOutlined className="mr-1.5" />
                                                {new Date(getPostDate(post)).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </Text>
                                        </div>

                                        <h3 className="text-xl font-bold line-clamp-2 mb-2 text-mara-primary font-serif group-hover:text-mara-accent transition-colors" title={post.title}>{post.title}</h3>

                                        <Paragraph className="text-gray-500 line-clamp-3 mb-6 text-sm flex-grow leading-relaxed" ellipsis={{ rows: 3 }}>
                                            {post.excerpt}
                                        </Paragraph>

                                        <div className="mt-auto pt-6 flex items-center text-mara-primary font-bold text-sm uppercase tracking-wide group/link">
                                            Read More <span className="ml-2 text-mara-accent transition-transform group-hover/link:translate-x-1">→</span>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                )}

                <Footer className="text-center bg-white border-t border-mara-secondary/30 py-12 mt-16 bg-transparent">
                    <Text className="text-gray-500">© 2026 SPAPOSPLUS. All rights reserved.</Text>
                </Footer>
            </Content>
        </Layout>
    );
};

export default Blog;
