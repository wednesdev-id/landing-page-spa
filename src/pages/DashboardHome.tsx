import { useEffect, useState } from 'react';
import { Card, Col, Row, Statistic, Typography } from 'antd';
import { FileTextOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Title } = Typography;

export default function DashboardHome() {
    const [stats, setStats] = useState({
        totalPosts: 0,
        loading: true,
    });

    useEffect(() => {
        // Fetch posts to get the count
        axios.get('/api/posts')
            .then(res => {
                setStats({
                    totalPosts: Array.isArray(res.data) ? res.data.length : 0,
                    loading: false,
                });
            })
            .catch(err => {
                console.error('Failed to fetch stats', err);
                setStats(prev => ({ ...prev, loading: false }));
            });
    }, []);

    return (
        <div>
            <div className="mb-6">
                <Title level={2} className="!mb-0">Overview</Title>
                <Typography.Text type="secondary">Here's what's happening with your blog.</Typography.Text>
            </div>

            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} lg={8}>
                    <Card variant="borderless" className="shadow-sm">
                        <Statistic
                            title="Total Posts"
                            value={stats.loading ? '...' : stats.totalPosts}
                            prefix={<FileTextOutlined className="text-blue-500" />}
                            valueStyle={{ color: '#3f8600' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={8}>
                    <Card variant="borderless" className="shadow-sm">
                        <Statistic
                            title="Active Users"
                            value={1}
                            prefix={<UserOutlined className="text-purple-500" />}
                            suffix="/ 10"
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={8}>
                    <Card variant="borderless" className="shadow-sm">
                        <Statistic
                            title="Total Views"
                            value={1234} // Mock data for now
                            prefix={<EyeOutlined className="text-orange-500" />}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
