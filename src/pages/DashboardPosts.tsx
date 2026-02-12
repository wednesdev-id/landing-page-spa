import { useEffect, useState } from 'react';
import { Table, Button, Space, Typography, Card, Tag, Modal, Tooltip, App } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const { Title } = Typography;

interface Post {
    id: string;
    title: string;
    slug: string;
    createdAt: string;
    published: boolean;
}

export default function DashboardPosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    // Use App static methods if needed or just fallback to standard message if not fully wrapped
    // But since we wrapped App in App.tsx, we can use App.useApp()
    const { message } = App.useApp();

    const fetchPosts = () => {
        setLoading(true);
        axios.get('/api/posts')
            .then(res => {
                setPosts(Array.isArray(res.data) ? res.data : []);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch posts', err);
                message.error('Failed to fetch posts');
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleDelete = (id: string) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this post?',
            content: 'This action cannot be undone.',
            okText: 'Yes, Delete',
            okType: 'danger',
            cancelText: 'Cancel',
            onOk: () => {
                axios.delete(`/api/posts/${id}`)
                    .then(() => {
                        message.success('Post deleted successfully');
                        fetchPosts();
                    })
                    .catch(err => {
                        console.error(err);
                        message.error('Failed to delete post');
                    });
            },
        });
    };

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text: string) => <span className="font-medium">{text}</span>,
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            responsive: ['md' as const],
            render: (date: string) => new Date(date).toLocaleDateString(),
        },
        {
            title: 'Status',
            key: 'status',
            responsive: ['sm' as const],
            render: () => <Tag color="green">Published</Tag>,
        },
        {
            title: 'Actions',
            key: 'action',
            render: (_: any, record: Post) => (
                <Space size="small">
                    <Tooltip title="View Post">
                        <Link to={`/blog/${record.slug}`} target="_blank">
                            <Button type="text" icon={<EyeOutlined />} size="small" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50" />
                        </Link>
                    </Tooltip>

                    <Tooltip title="Edit Post">
                        <Link to={`/dashboard/posts/edit/${record.id}`}>
                            <Button type="text" icon={<EditOutlined />} size="small" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50" />
                        </Link>
                    </Tooltip>

                    <Tooltip title="Delete Post">
                        <Button
                            type="text"
                            danger
                            icon={<DeleteOutlined />}
                            size="small"
                            onClick={() => handleDelete(record.id)}
                            className="hover:bg-red-50"
                        />
                    </Tooltip>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <Title level={2} className="!mb-0">Blog Posts</Title>
                    <Typography.Text type="secondary">Manage your blog content</Typography.Text>
                </div>
                <Link to="/blog/new">
                    <Button type="primary" icon={<PlusOutlined />} size="large">
                        New Post
                    </Button>
                </Link>
            </div>

            <Card className="shadow-sm" variant="borderless" styles={{ body: { padding: 0 } }}>
                <Table
                    columns={columns}
                    dataSource={posts}
                    rowKey="id"
                    loading={loading}
                    pagination={{ pageSize: 10 }}
                    scroll={{ x: true }}
                />
            </Card>
        </div>
    );
}
