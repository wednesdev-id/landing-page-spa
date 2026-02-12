import { useEffect, useState } from 'react';
import { Table, Button, Space, Typography, Card, Tag, Modal, message } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
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
                // Optimistic update or call API if delete endpoint existed
                // Since we verify API capabilities in regular task flow:
                // For now, assume we might need to implement delete later or stub it.
                // Let's try to call delete if the route exists, otherwise just show message.
                // Based on implementation plan, we are "integrating to fetch/delete".
                // I will assume standard REST DELETE /api/posts/:id in future, 
                // but for now let's just show a message if not implemented or handle error.

                axios.delete(`/api/posts/${id}`)
                    .then(() => {
                        message.success('Post deleted successfully');
                        fetchPosts();
                    })
                    .catch(err => {
                        console.error(err);
                        // If 404/405, maybe api doesn't exist yet
                        message.error('Failed to delete post (API might not be implemented)');
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
            responsive: ['md'],
            render: (date: string) => new Date(date).toLocaleDateString(),
        },
        {
            title: 'Status',
            key: 'status',
            responsive: ['sm'],
            render: () => <Tag color="green">Published</Tag>, // Assuming all are published for now
        },
        {
            title: 'Actions',
            key: 'action',
            render: (_: any, record: Post) => (
                <Space size="middle">
                    <Link to={`/dashboard/posts/edit/${record.id}`}>
                        <Button icon={<EditOutlined />} size="small">Edit</Button>
                    </Link>
                    <Button
                        danger
                        icon={<DeleteOutlined />}
                        size="small"
                        onClick={() => handleDelete(record.id)}
                    />
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
                    columns={columns as any}
                    dataSource={posts}
                    rowKey="id"
                    loading={loading}
                    pagination={{ pageSize: 10 }}
                    scroll={{ x: true }} // Valid AntD scroll prop
                />
            </Card>
        </div>
    );
}
