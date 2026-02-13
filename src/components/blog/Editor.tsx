import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TiptapImage from '@tiptap/extension-image';
import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Input,
    Button,
    Space,
    Typography,
    Divider,
    Modal,
    Tooltip,
    App, // Import App for useApp
    Upload,
    DatePicker,
    Select,
} from 'antd';
import {
    BoldOutlined,
    ItalicOutlined,
    StrikethroughOutlined,
    UnorderedListOutlined,
    OrderedListOutlined,
    CodeOutlined,
    MinusOutlined,
    PictureOutlined,
    UndoOutlined,
    RedoOutlined,
    LinkOutlined,
    SendOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';

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
function EditorToolbar({ editor, messageApi }: { editor: any, messageApi: any }) {
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
                        name="image"
                        multiple={false}
                        showUploadList={false}
                        customRequest={async ({ file, onSuccess, onError }) => {
                            try {
                                const formData = new FormData();
                                formData.append('image', file as Blob);

                                messageApi.loading({ content: 'Uploading...', key: 'upload' });
                                const response = await axios.post('/api/upload', formData, {
                                    headers: { 'Content-Type': 'multipart/form-data' },
                                });

                                const url = response.data.url;
                                if (imageModalOpen) setImageUrl(url);

                                messageApi.success({ content: 'Image uploaded successfully!', key: 'upload' });
                                if (onSuccess) onSuccess('ok');
                            } catch (error: any) {
                                console.error('Upload failed:', error);
                                messageApi.error({ content: 'Upload failed.', key: 'upload' });
                                if (onError) onError(error);
                            }
                        }}
                    >
                        <p className="ant-upload-drag-icon">
                            <UploadOutlined style={{ fontSize: 28, color: '#bbb' }} />
                        </p>
                        <p className="ant-upload-text">Drop image or click to upload</p>
                        <p className="ant-upload-hint">Uploads to S3 Storage</p>
                    </Upload.Dragger>
                </Space>
            </Modal>
        </>
    );
}

// --- Main Editor ---
export default function BlogEditor() {
    const { message: messageApi } = App.useApp(); // Use context-aware message
    const [title, setTitle] = useState('');
    const [featuredImage, setFeaturedImage] = useState('');
    const [imageCaption, setImageCaption] = useState('');
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [publishModalOpen, setPublishModalOpen] = useState(false);
    const [publishing, setPublishing] = useState(false);
    const [tags, setTags] = useState<string[]>([]);
    const [scheduledAt, setScheduledAt] = useState<dayjs.Dayjs | null>(null);
    const [availableImages, setAvailableImages] = useState<string[]>([]);
    const navigate = useNavigate();
    const { slug: urlSlug } = useParams();

    const editor = useEditor({
        extensions: [StarterKit, TiptapImage],
        content: '',
        editorProps: {
            attributes: {
                class: 'medium-editor',
            },
            handlePaste: (view, event) => {
                const items = Array.from(event.clipboardData?.items || []);
                const item = items.find(item => item.type.indexOf('image') === 0);

                if (item) {
                    event.preventDefault();
                    const file = item.getAsFile();
                    if (!file) return false;

                    const formData = new FormData();
                    formData.append('image', file);

                    messageApi.loading({ content: 'Uploading pasted image...', key: 'paste-upload' });

                    axios.post('/api/upload', formData, {
                        headers: { 'Content-Type': 'multipart/form-data' },
                    }).then(response => {
                        const url = response.data.url;
                        if (url) {
                            const { schema } = view.state;
                            const node = schema.nodes.image.create({ src: url });
                            const transaction = view.state.tr.replaceSelectionWith(node);
                            view.dispatch(transaction);
                            messageApi.success({ content: 'Image pasted!', key: 'paste-upload' });
                        }
                    }).catch(err => {
                        console.error('Paste upload failed:', err);
                        messageApi.error({ content: 'Failed to upload pasted image.', key: 'paste-upload' });
                    });

                    return true;
                }
                return false;
            }
        },
    });

    // Fetch existing post if editing
    useEffect(() => {
        if (urlSlug && editor) {
            axios.get(`/api/posts/${urlSlug}`)
                .then(res => {
                    const post = res.data;
                    setTitle(post.title);
                    setFeaturedImage(post.image || '');
                    setImageCaption(post.imageCaption || '');
                    setTags(post.tags || []);
                    setScheduledAt(post.scheduledAt ? dayjs(post.scheduledAt) : null);

                    let contentToSet = post.content;
                    if (post.image) {
                        // Parse content to find first image
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(post.content, 'text/html');
                        const firstImg = doc.querySelector('img');

                        // If first image src matches cover image, remove it
                        if (firstImg && firstImg.src === post.image) {
                            firstImg.remove();
                            contentToSet = doc.body.innerHTML;
                        }
                    }

                    if (editor && !editor.isDestroyed) {
                        editor.commands.setContent(contentToSet);
                    }
                })
                .catch(err => {
                    console.error('Failed to fetch post details', err);
                    messageApi.error('Failed to load post for editing');
                });
        }
    }, [urlSlug, editor, messageApi]);

    // Extract images from content
    const extractImagesFromContent = useCallback(() => {
        if (!editor) return [];
        const content = editor.getHTML();
        const doc = new DOMParser().parseFromString(content, 'text/html');
        const images = Array.from(doc.querySelectorAll('img')).map(img => img.src);
        return images;
    }, [editor]);

    // Handle opening publish modal logic
    const handleOpenPublishModal = () => {
        const images = extractImagesFromContent();
        setAvailableImages(images);

        // Auto-select first image if no cover image is set
        if (!featuredImage && images.length > 0) {
            setFeaturedImage(images[0]);
        }

        setPublishModalOpen(true);
    };

    const handlePublish = useCallback(async () => {
        if (!editor || !title.trim()) {
            messageApi.warning('Please enter a title.');
            return;
        }

        setPublishing(true);
        const content = editor.getHTML();
        const newSlug = generateSlug(title);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        const excerpt = (tempDiv.textContent || '').substring(0, 160).trim();

        try {
            const payload = {
                title,
                slug: newSlug,
                content,
                excerpt,
                image: featuredImage || null,
                imageCaption: imageCaption || null,
                published: true,
                tags,
                scheduledAt: scheduledAt ? scheduledAt.toISOString() : null,
            };

            if (urlSlug) {
                await axios.put(`/api/posts/${urlSlug}`, payload);
                messageApi.success('Post updated!');
            } else {
                await axios.post('/api/posts', payload);
                messageApi.success('Published!');
            }
            navigate('/dashboard/posts');
        } catch (error: any) {
            messageApi.error(error?.response?.data?.error || 'Failed to save.');
        } finally {
            setPublishing(false);
            setPublishModalOpen(false);
        }
    }, [editor, title, featuredImage, imageCaption, tags, scheduledAt, navigate, urlSlug, messageApi]);

    return (
        <div className="medium-editor-wrapper">
            <div className="medium-toolbar-container">
                <div className="medium-toolbar-inner">
                    <EditorToolbar editor={editor} messageApi={messageApi} />
                    <Button
                        type="primary"
                        icon={<SendOutlined />}
                        onClick={handleOpenPublishModal}
                        style={{ borderRadius: 20, fontWeight: 600 }}
                    >
                        Publish
                    </Button>
                </div>
            </div>

            <div className="medium-content">
                {featuredImage && (
                    <div className="medium-featured-image">
                        <img src={featuredImage} alt="Featured" />
                        <Button
                            size="small"
                            danger
                            onClick={() => {
                                setFeaturedImage('');
                                setImageCaption('');
                            }}
                            style={{ position: 'absolute', top: 12, right: 12 }}
                        >
                            Remove
                        </Button>
                        {/* Simplified caption display in editor for visual feedback */}
                        {imageCaption && (
                            <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginTop: 8, fontSize: 13 }}>
                                {imageCaption}
                            </Text>
                        )}
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

                <Input.TextArea
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    variant="borderless"
                    autoSize
                    className="medium-title-input"
                />

                <EditorContent editor={editor} />
            </div>

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
                    <Divider style={{ margin: '4px 0' }}>or</Divider>
                    <Upload.Dragger
                        name="coverImage"
                        multiple={false}
                        showUploadList={false}
                        customRequest={async ({ file, onSuccess, onError }) => {
                            try {
                                const formData = new FormData();
                                formData.append('image', file as Blob);

                                messageApi.loading({ content: 'Uploading cover...', key: 'cover-upload' });
                                const response = await axios.post('/api/upload', formData, {
                                    headers: { 'Content-Type': 'multipart/form-data' },
                                });

                                const url = response.data.url;
                                setFeaturedImage(url);
                                messageApi.success({ content: 'Cover uploaded!', key: 'cover-upload' });
                                if (onSuccess) onSuccess('ok');
                                setImageModalOpen(false);
                            } catch (error: any) {
                                console.error('Upload failed:', error);
                                messageApi.error({ content: 'Upload failed.', key: 'cover-upload' });
                                if (onError) onError(error);
                            }
                        }}
                    >
                        <p className="ant-upload-drag-icon">
                            <UploadOutlined style={{ fontSize: 28, color: '#bbb' }} />
                        </p>
                        <p className="ant-upload-text">Drop image or click to upload</p>
                        <p className="ant-upload-hint">Uploads to S3 Storage</p>
                    </Upload.Dragger>
                </Space>
            </Modal>

            <Modal
                title="Publish Settings"
                open={publishModalOpen}
                onCancel={() => setPublishModalOpen(false)}
                onOk={handlePublish}
                confirmLoading={publishing}
                okText={scheduledAt ? 'Schedule' : 'Publish Now'}
                width={600}
            >
                <Space orientation="vertical" style={{ width: '100%' }} size="middle">

                    {/* Cover Image Selection Section */}
                    <div>
                        <Text strong>Cover Image</Text>
                        <div style={{ marginTop: 8, marginBottom: 8 }}>
                            {featuredImage ? (
                                <div style={{ position: 'relative', marginBottom: 10 }}>
                                    <img
                                        src={featuredImage}
                                        alt="Cover"
                                        style={{ width: '100%', maxHeight: 200, objectFit: 'cover', borderRadius: 8 }}
                                    />
                                    <Button
                                        size="small"
                                        danger
                                        style={{ position: 'absolute', top: 8, right: 8 }}
                                        onClick={() => {
                                            setFeaturedImage('');
                                            setImageCaption('');
                                        }}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            ) : (
                                <div style={{ padding: 20, background: '#f5f5f5', borderRadius: 8, textAlign: 'center', color: '#888' }}>
                                    No cover image selected.
                                </div>
                            )}

                            {availableImages.length > 0 && (
                                <div style={{ marginTop: 10 }}>
                                    <Text type="secondary" style={{ fontSize: 12, marginBottom: 5, display: 'block' }}>Select from post images:</Text>
                                    <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 5 }}>
                                        {availableImages.map((img, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => setFeaturedImage(img)}
                                                style={{
                                                    cursor: 'pointer',
                                                    border: featuredImage === img ? '2px solid #1890ff' : '2px solid transparent',
                                                    borderRadius: 4,
                                                    overflow: 'hidden',
                                                    flexShrink: 0
                                                }}
                                            >
                                                <img src={img} alt={`Content ${idx}`} style={{ width: 60, height: 60, objectFit: 'cover' }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Input
                            placeholder="Add a caption for the cover image (optional)"
                            value={imageCaption}
                            onChange={(e) => setImageCaption(e.target.value)}
                            style={{ fontSize: 13, color: '#666' }}
                        />
                    </div>

                    <Divider style={{ margin: '12px 0' }} />

                    <div>
                        <Text strong>Schedule Publish (Optional)</Text>
                        <DatePicker
                            style={{ width: '100%', marginTop: 8 }}
                            showTime
                            format="YYYY-MM-DD HH:mm"
                            placeholder="Select date and time"
                            value={scheduledAt}
                            onChange={(date) => setScheduledAt(date)}
                        />
                        <Text type="secondary" style={{ fontSize: 12 }}>Leave empty to publish immediately.</Text>
                    </div>

                    <div>
                        <Text strong>Tags</Text>
                        <Select
                            mode="tags"
                            style={{ width: '100%', marginTop: 8 }}
                            placeholder="Add tags (e.g. Technology, News)"
                            value={tags}
                            onChange={setTags}
                            tokenSeparators={[',']}
                        />
                    </div>
                </Space>
            </Modal>
        </div>
    );
}

