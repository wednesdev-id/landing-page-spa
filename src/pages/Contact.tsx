import React from 'react';
import { Layout, Typography, Row, Col, Form, Input, Button, message } from 'antd';
import { MailOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import SEO from '../components/SEO';
import Navbar from '../components/layout/Navbar';

const { Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const Contact: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Success:', values);
        message.success('Pesan Anda telah terkirim! Tim kami akan segera menghubungi Anda.');
        form.resetFields();
    };

    return (
        <Layout className="min-h-screen bg-mara-background font-sans">
            <SEO
                title="Hubungi Kami - SPAPOSPLUS"
                description="Hubungi tim SPAPOSPLUS untuk pertanyaan seputar sistem manajemen spa dan demo produk."
            />

            <Navbar />

            <Content className="pt-24 pb-12 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <Title level={1} className="!mb-4 !text-mara-primary font-serif !text-4xl md:!text-5xl">Hubungi Kami</Title>
                        <Paragraph className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Punya pertanyaan tentang SPAPOSPLUS? Tim kami siap membantu Anda mengembangkan bisnis spa impian.
                        </Paragraph>
                    </div>

                    <Row gutter={[48, 48]}>
                        <Col xs={24} md={10}>
                            <div className="bg-mara-primary text-white p-8 md:p-12 rounded-2xl h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-mara-accent opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-mara-secondary opacity-10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold font-serif mb-8">Informasi Kontak</h3>

                                    <div className="space-y-8">
                                        <div className="flex items-start">
                                            <div className="bg-white/10 p-3 rounded-lg mr-4">
                                                <WhatsAppOutlined className="text-2xl text-mara-accent" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-mara-secondary mb-1">WhatsApp</div>
                                                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mara-accent transition-colors block text-lg font-medium">+62 812-3456-7890</a>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-white/10 p-3 rounded-lg mr-4">
                                                <MailOutlined className="text-2xl text-mara-accent" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-mara-secondary mb-1">Email</div>
                                                <a href="mailto:hello@spaposplus.id" className="text-white hover:text-mara-accent transition-colors block text-lg font-medium">hello@spaposplus.id</a>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-white/10 p-3 rounded-lg mr-4">
                                                <InstagramOutlined className="text-2xl text-mara-accent" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-mara-secondary mb-1">Instagram</div>
                                                <a href="https://instagram.com/spaposplus" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mara-accent transition-colors block text-lg font-medium">@spaposplus</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-16 pt-8 border-t border-white/10">
                                        <h4 className="font-bold text-mara-secondary mb-4">Jam Operasional</h4>
                                        <p className="text-white/80 mb-2">Senin - Jumat: 09:00 - 18:00 WIB</p>
                                        <p className="text-white/80">Sabtu - Minggu: Libur</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} md={14}>
                            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-mara-secondary/30">
                                <h3 className="text-2xl font-bold text-mara-primary font-serif mb-2">Kirim Pesan</h3>
                                <p className="text-gray-500 mb-8">Silakan isi formulir di bawah ini, kami akan membalas secepatnya.</p>

                                <Form
                                    form={form}
                                    layout="vertical"
                                    onFinish={onFinish}
                                    size="large"
                                >
                                    <Row gutter={16}>
                                        <Col xs={24} md={12}>
                                            <Form.Item
                                                name="name"
                                                label={<span className="font-medium text-gray-700">Nama Lengkap</span>}
                                                rules={[{ required: true, message: 'Mohon isi nama lengkap Anda' }]}
                                            >
                                                <Input placeholder="John Doe" className="rounded-lg" />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} md={12}>
                                            <Form.Item
                                                name="phone"
                                                label={<span className="font-medium text-gray-700">Nomor WhatsApp</span>}
                                                rules={[{ required: true, message: 'Mohon isi nomor WhatsApp Anda' }]}
                                            >
                                                <Input placeholder="+62 812..." className="rounded-lg" />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Form.Item
                                        name="email"
                                        label={<span className="font-medium text-gray-700">Email Bisnis</span>}
                                        rules={[
                                            { required: true, message: 'Mohon isi email bisnis Anda' },
                                            { type: 'email', message: 'Format email tidak valid' }
                                        ]}
                                    >
                                        <Input placeholder="john@spabusiness.com" className="rounded-lg" />
                                    </Form.Item>

                                    <Form.Item
                                        name="message"
                                        label={<span className="font-medium text-gray-700">Pesan / Pertanyaan</span>}
                                        rules={[{ required: true, message: 'Mohon tulis pesan Anda' }]}
                                    >
                                        <TextArea rows={5} placeholder="Tuliskan pertanyaan atau kebutuhan bisnis Anda..." className="rounded-lg" />
                                    </Form.Item>

                                    <Form.Item className="mb-0">
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            className="w-full h-12 bg-mara-primary hover:bg-mara-primary/90 border-none rounded-lg text-lg font-bold tracking-wide"
                                        >
                                            Kirim Pesan
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Content>

            <Footer className="text-center bg-white border-t border-mara-secondary/30 py-12 mt-auto">
                <Text className="text-gray-500">© 2026 SPAPOSPLUS. All rights reserved.</Text>
            </Footer>
        </Layout>
    );
};

export default Contact;
