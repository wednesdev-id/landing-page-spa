import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TiptapImage from '@tiptap/extension-image';
import axios from 'axios';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Input,
    Button,
    Space,
    Typography,
    Divider,
    Modal,
    Tooltip,
    message,
    Upload,
} from 'antd';
import {
    BoldOutlined,
    ItalicOutlined,
    StrikethroughOutlined,
    OrderedListOutlined,
    UnorderedListOutlined,
    UndoOutlined,
    RedoOutlined,
    MinusOutlined,
    CodeOutlined,
    PictureOutlined,
    SendOutlined,
    LinkOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

// --- Slug Generator ---
function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/[\s]+/g, '-')
        .replace(/(^-|-$)+/g, '')
        .substring(0, 80);
}

// --- Toolbar ---
function EditorToolbar({ editor }: { editor: any }) {
    if (!editor) return null;

    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    const addImage = () => {
        if (imageUrl) {
            editor.chain().focus().setImage({ src: imageUrl }).run();
            setImageUrl('');
            setImageModalOpen(false);
        }
    };

    const tools = [
        {
            icon: <BoldOutlined />,
            title: 'Bold',
            action: () => editor.chain().focus().toggleBold().run(),
            active: editor.isActive('bold'),
        },
        {
            icon: <ItalicOutlined />,
            title: 'Italic',
            action: () => editor.chain().focus().toggleItalic().run(),
            active: editor.isActive('italic'),
        },
        {
            icon: <StrikethroughOutlined />,
            title: 'Strikethrough',
            action: () => editor.chain().focus().toggleStrike().run(),
            active: editor.isActive('strike'),
        },
        { type: 'divider' },
        {
            icon: <span style={{ fontWeight: 700, fontSize: 13 }}>H1</span>,
            title: 'Heading 1',
            action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            active: editor.isActive('heading', { level: 1 }),
        },
        {
            icon: <span style={{ fontWeight: 700, fontSize: 12 }}>H2</span>,
            title: 'Heading 2',
            action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            active: editor.isActive('heading', { level: 2 }),
        },
        {
            icon: <span style={{ fontWeight: 700, fontSize: 11 }}>H3</span>,
            title: 'Heading 3',
            action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
            active: editor.isActive('heading', { level: 3 }),
        },
        { type: 'divider' },
        {
            icon: <UnorderedListOutlined />,
            title: 'Bullet List',
            action: () => editor.chain().focus().toggleBulletList().run(),
            active: editor.isActive('bulletList'),
        },
        {
            icon: <OrderedListOutlined />,
            title: 'Ordered List',
            action: () => editor.chain().focus().toggleOrderedList().run(),
            active: editor.isActive('orderedList'),
        },
        {
            icon: <CodeOutlined />,
            title: 'Code Block',
            action: () => editor.chain().focus().toggleCodeBlock().run(),
            active: editor.isActive('codeBlock'),
        },
        {
            icon: <MinusOutlined />,
            title: 'Divider',
            action: () => editor.chain().focus().setHorizontalRule().run(),
            active: false,
        },
        { type: 'divider' },
        {
            icon: <PictureOutlined />,
            title: 'Image',
            action: () => setImageModalOpen(true),
            active: false,
        },
        { type: 'divider' },
        {
            icon: <UndoOutlined />,
            title: 'Undo',
            action: () => editor.chain().focus().undo().run(),
            active: false,
        },
        {
            icon: <RedoOutlined />,
            title: 'Redo',
            action: () => editor.chain().focus().redo().run(),
            active: false,
        },
    ];

    return (
        <>
            <div className="editor-toolbar">
                {tools.map((item: any, i) =>
                    item.type === 'divider' ? (
                        <Divider key={i} orientation="vertical" style={{ margin: '0 2px', height: 20 }} />
                    ) : (
                        <Tooltip title={item.title} key={i}>
                            <button
                                type="button"
                                className={`toolbar-btn${item.active ? ' active' : ''}`}
                                onClick={item.action}
                            >
                                {item.icon}
                            </button>
                        </Tooltip>
                    )
                )}
            </div>

            <Modal
                title="Insert Image"
                open={imageModalOpen}
                onCancel={() => setImageModalOpen(false)}
                onOk={addImage}
                okText="Insert"
            >
                <Space orientation="vertical" style={{ width: '100%' }} size="middle">
                    <Input
                        prefix={<LinkOutlined />}
                        placeholder="https://example.com/image.jpg"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        onPressEnter={addImage}
                    />
                    <Divider style={{ margin: '4px 0' }}>or</Divider>
                    <Upload.Dragger
                        name="file"
                        multiple={false}
                        showUploadList={false}
                        customRequest={({ onSuccess }) => {
                            message.info('S3/Supabase upload coming soon.');
                            if (onSuccess) onSuccess('ok');
                        }}
                    >
                        <p className="ant-upload-drag-icon">
                            <UploadOutlined style={{ fontSize: 28, color: '#bbb' }} />
                        </p>
                        <p className="ant-upload-text">Drop image or click to upload</p>
                        <p className="ant-upload-hint">S3/Supabase integration coming soon</p>
                    </Upload.Dragger>
                </Space>
            </Modal>
        </>
    );
}

// --- Main Editor ---
export default function BlogEditor() {
    const [title, setTitle] = useState('');
    const [featuredImage, setFeaturedImage] = useState('');
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [publishing, setPublishing] = useState(false);
    const navigate = useNavigate();

    const editor = useEditor({
        extensions: [StarterKit, TiptapImage],
        content: '',
        editorProps: {
            attributes: {
                class: 'medium-editor',
            },
        },
    });

    const handlePublish = useCallback(async () => {
        if (!editor || !title.trim()) {
            message.warning('Please enter a title.');
            return;
        }

        setPublishing(true);
        const content = editor.getHTML();
        const slug = generateSlug(title);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        const excerpt = (tempDiv.textContent || '').substring(0, 160).trim();

        try {
            await axios.post('/api/posts', {
                title,
                slug,
                content,
                excerpt,
                image: featuredImage || null,
                published: true,
            });
            message.success('Published!');
            navigate('/dashboard/posts');
        } catch (error: any) {
            message.error(error?.response?.data?.error || 'Failed to publish.');
        } finally {
            setPublishing(false);
        }
    }, [editor, title, featuredImage, navigate]);

    return (
        <div className="medium-editor-wrapper">
            {/* Sticky Toolbar */}
            <div className="medium-toolbar-container">
                <div className="medium-toolbar-inner">
                    <EditorToolbar editor={editor} />
                    <Button
                        type="primary"
                        icon={<SendOutlined />}
                        onClick={handlePublish}
                        loading={publishing}
                        style={{ borderRadius: 20, fontWeight: 600 }}
                    >
                        Publish
                    </Button>
                </div>
            </div>

            {/* Content Area */}
            <div className="medium-content">
                {/* Featured Image */}
                {featuredImage && (
                    <div className="medium-featured-image">
                        <img src={featuredImage} alt="Featured" />
                        <Button
                            size="small"
                            danger
                            onClick={() => setFeaturedImage('')}
                            style={{ position: 'absolute', top: 12, right: 12 }}
                        >
                            Remove
                        </Button>
                    </div>
                )}

                <div className="medium-image-actions">
                    {!featuredImage && (
                        <Space>
                            <Button
                                icon={<PictureOutlined />}
                                onClick={() => setImageModalOpen(true)}
                                size="small"
                                type="dashed"
                            >
                                Add cover image
                            </Button>
                        </Space>
                    )}
                </div>

                {/* Title */}
                <Input.TextArea
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    variant="borderless"
                    autoSize
                    className="medium-title-input"
                />

                {/* Tiptap Editor — this IS the live preview */}
                <EditorContent editor={editor} />
            </div>

            {/* Featured Image URL Modal */}
            <Modal
                title="Cover Image"
                open={imageModalOpen}
                onCancel={() => setImageModalOpen(false)}
                onOk={() => setImageModalOpen(false)}
                okText="Done"
            >
                <Space orientation="vertical" style={{ width: '100%' }} size="middle">
                    <Text type="secondary">Paste the image URL:</Text>
                    <Input
                        prefix={<LinkOutlined />}
                        placeholder="https://example.com/cover.jpg"
                        value={featuredImage}
                        onChange={(e) => setFeaturedImage(e.target.value)}
                    />
                    {featuredImage && (
                        <img
                            src={featuredImage}
                            alt="Preview"
                            style={{
                                width: '100%',
                                maxHeight: 200,
                                objectFit: 'cover',
                                borderRadius: 8,
                                border: '1px solid #f0f0f0',
                            }}
                        />
                    )}
                    <Divider style={{ margin: '4px 0' }}>or</Divider>
                    <Upload.Dragger
                        name="file"
                        multiple={false}
                        showUploadList={false}
                        customRequest={() => {
                            message.info('S3/Supabase upload coming soon.');
                        }}
                    >
                        <p className="ant-upload-drag-icon">
                            <UploadOutlined style={{ fontSize: 28, color: '#bbb' }} />
                        </p>
                        <p className="ant-upload-text">Drop image or click to upload</p>
                        <p className="ant-upload-hint">S3/Supabase integration coming soon</p>
                    </Upload.Dragger>
                </Space>
            </Modal>
        </div>
    );
}
