import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Typography, Spin, Layout, Breadcrumb, Avatar, Divider, Space, ConfigProvider } from 'antd';
import { CalendarOutlined, UserOutlined, ClockCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import SEO from '../components/SEO';
import spaPos09 from '../assets/spa-pos-09.png';

const { Title, Paragraph, Text } = Typography;
const { Content, Header, Footer } = Layout;

interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    image?: string;
    createdAt: string;
}

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!slug) return;

        axios.get(`http://localhost:3001/api/posts/${slug}`)
            .then(res => {
                setPost(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch post', err);
                setError('Post not found');
                setLoading(false);
            });
    }, [slug]);

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <Spin size="large" tip="Loading post..." />
        </div>
    );

    if (error || !post) return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="text-center">
                <Title level={3} type="danger">{error || 'Post not found'}</Title>
                <Link to="/blog"><ArrowLeftOutlined /> Back to Blog</Link>
            </div>
        </div>
    );

    return (
        <Layout className="min-h-screen bg-white">
            <SEO
                title={`${post.title} - WednesDev Blog`}
                description={post.excerpt}
                image={post.image}
                type="article"
            />

            <Header className="bg-white border-b px-4 md:px-8 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-3">
                    <img src={spaPos09} alt="Logo" style={{ height: '32px', width: 'auto' }} />
                    <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-600">SPAPOSPLUS</Link>
                </div>
                <Space>
                    <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
                    <Link to="/blog" className="text-blue-600 font-medium">Blog</Link>
                </Space>
            </Header>

            <Content className="w-full">
                <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
                    <Breadcrumb className="mb-8">
                        <Breadcrumb.Item>
                            <Link to="/">Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/blog">Blog</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>{post.title}</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="mb-8 text-center">
                        <Title level={1} className="!mb-4 !text-3xl md:!text-5xl">{post.title}</Title>
                        <Space size="large" className="text-gray-500 text-sm md:text-base justify-center flex-wrap">
                            <span className="flex items-center">
                                <CalendarOutlined className="mr-2" />
                                {new Date(post.createdAt).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                            <span className="flex items-center">
                                <UserOutlined className="mr-2" />
                                Admin
                            </span>
                            <span className="flex items-center">
                                <ClockCircleOutlined className="mr-2" />
                                5 min read
                            </span>
                        </Space>
                    </div>

                    {post.image && (
                        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-auto object-cover max-h-[500px]"
                            />
                        </div>
                    )}

                    <div className="bg-white">
                        <Typography>
                            <div
                                className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-serif"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </Typography>
                    </div>

                    <Divider />

                    <div className="mt-8">
                        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:underline text-lg">
                            <ArrowLeftOutlined className="mr-2" /> Back to All Articles
                        </Link>
                    </div>
                </div>
            </Content>

            <Footer className="text-center bg-gray-50 border-t py-8">
                <Text type="secondary">© 2026 SPAPOSPLUS. All rights reserved.</Text>
            </Footer>
        </Layout>
    );
}
