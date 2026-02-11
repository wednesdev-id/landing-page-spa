import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Col, Row, Typography, Spin, Tag, Space, Layout, Breadcrumb } from 'antd';
import { CalendarOutlined, ReadOutlined } from '@ant-design/icons';
import SEO from '../components/SEO';
import spaPos09 from '../assets/spa-pos-09.png'; // Assuming we want to use the logo or similar branding

const { Title, Paragraph, Text } = Typography;
const { Content, Footer, Header } = Layout;
const { Meta } = Card;

interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    image?: string;
    createdAt: string;
}

export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001/api/posts')
            .then(res => {
                setPosts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch posts', err);
                setLoading(false);
            });
    }, []);

    return (
        <Layout className="min-h-screen bg-gray-50">
            <SEO
                title="Blog - WednesDev"
                description="Insights and updates from WednesDev Team."
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

            <Content className="px-4 py-8 md:px-12 md:py-12 max-w-7xl mx-auto w-full">
                <Breadcrumb className="mb-8">
                    <Breadcrumb.Item>
                        <Link to="/">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Blog</Breadcrumb.Item>
                </Breadcrumb>

                <div className="text-center mb-12">
                    <Title level={1} className="!mb-4">Our Latest Insights</Title>
                    <Paragraph className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Discover articles about spa management, business growth, and the latest updates from SPAPOSPLUS.
                    </Paragraph>
                </div>

                {loading ? (
                    <div className="text-center py-20">
                        <Spin size="large" tip="Loading posts..." />
                    </div>
                ) : (
                    <Row gutter={[24, 24]}>
                        {posts.map(post => (
                            <Col xs={24} sm={12} lg={8} key={post.id}>
                                <Link to={`/blog/${post.slug}`}>
                                    <Card
                                        hoverable
                                        cover={
                                            post.image ? (
                                                <div className="h-48 overflow-hidden">
                                                    <img
                                                        alt={post.title}
                                                        src={post.image}
                                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-300">
                                                    <ReadOutlined style={{ fontSize: '48px' }} />
                                                </div>
                                            )
                                        }
                                        className="h-full flex flex-col overflow-hidden rounded-xl border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                                        bodyStyle={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                                    >
                                        <div className="mb-2">
                                            <Tag color="blue">Article</Tag>
                                            <Text type="secondary" className="text-xs">
                                                <CalendarOutlined className="mr-1" />
                                                {new Date(post.createdAt).toLocaleDateString(undefined, {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </Text>
                                        </div>
                                        <Meta
                                            title={<h3 className="text-lg font-semibold line-clamp-2 mb-0" title={post.title}>{post.title}</h3>}
                                            description={
                                                <Paragraph className="text-gray-500 line-clamp-3 mb-0 mt-2" ellipsis={{ rows: 3 }}>
                                                    {post.excerpt}
                                                </Paragraph>
                                            }
                                        />
                                        <div className="mt-auto pt-4 flex items-center text-blue-600 font-medium group">
                                            Read More <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                )}
            </Content>

            <Footer className="text-center bg-white border-t py-8">
                <Text type="secondary">© 2026 SPAPOSPLUS. All rights reserved.</Text>
            </Footer>
        </Layout>
    );
}
