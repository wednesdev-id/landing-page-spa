import { useEffect } from 'react';
import { Layout, Menu, Typography, Avatar, Dropdown, Space, theme, Spin } from 'antd'; // Added Spin
import {
    DashboardOutlined,
    FileTextOutlined,
    LogoutOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation, Outlet, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

export default function Dashboard() {
    const { user, logout, isAuthenticated, loading } = useAuth(); // Destructure loading
    const navigate = useNavigate();
    const location = useLocation();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    useEffect(() => {
        if (!loading && !isAuthenticated) { // Only redirect if NOT loading and NOT authenticated
            navigate('/login');
        }
    }, [isAuthenticated, loading, navigate]);

    if (loading) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-[#f8f6f2]">
                <Spin size="large" />
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const userMenu = {
        items: [
            {
                key: 'logout',
                label: 'Logout',
                icon: <LogoutOutlined />,
                onClick: handleLogout,
            },
        ],
    };

    const menuItems = [
        {
            key: '/dashboard',
            icon: <DashboardOutlined />,
            label: <Link to="/dashboard">Overview</Link>,
        },
        {
            key: '/dashboard/posts',
            icon: <FileTextOutlined />,
            label: <Link to="/dashboard/posts">Blog Posts</Link>,
        },
    ];

    return (
        <Layout className="min-h-screen" style={{ background: '#f8f6f2' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                theme="light"
                className="border-r border-gray-200"
                style={{ background: '#f8f6f2' }}
            >
                <div className="p-4 flex items-center justify-center border-b border-gray-100">
                    <Title level={4} className="!mb-0" style={{ color: '#0f3c3e' }}>WednesDev</Title>
                </div>
                <Menu
                    mode="inline"
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                    className="border-none"
                    style={{ background: '#f8f6f2' }}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: '0 24px', background: colorBgContainer }} className="flex justify-between items-center shadow-sm">
                    <Title level={4} className="!mb-0 capitalize">
                        {location.pathname.split('/').pop() || 'Dashboard'}
                    </Title>
                    <div className="flex items-center gap-4">
                        <Space>
                            <div className="text-right hidden md:block">
                                <Text strong className="block">{user?.name}</Text>
                                <Text type="secondary" className="text-xs">{user?.role}</Text>
                            </div>
                            <Dropdown menu={userMenu} placement="bottomRight">
                                <Avatar icon={<UserOutlined />} className="cursor-pointer bg-blue-100 text-blue-600" />
                            </Dropdown>
                        </Space>
                    </div>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {location.pathname === '/dashboard' ? (
                            <div>
                                <Title level={2}>Welcome back, {user?.name}!</Title>
                                <Text type="secondary">Select an item from the menu to get started.</Text>
                            </div>
                        ) : (
                            <Outlet />
                        )}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
