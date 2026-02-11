import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import axios from 'axios';
import { useState } from 'react';

interface EditorProps {
    onSave?: (post: { title: string; slug: string; content: string; excerpt: string; image: string }) => void;
}

export default function BlogEditor({ onSave }: EditorProps) {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [featuredImage, setFeaturedImage] = useState('');

    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
        ],
        content: '<p>Start writing your amazing story...</p>',
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px]',
            },
        },
    });

    const handleSave = async () => {
        if (!editor) return;

        const content = editor.getHTML();
        const postData = {
            title,
            slug,
            excerpt,
            image: featuredImage,
            content,
        };

        if (onSave) {
            onSave(postData);
        } else {
            // Default save behavior if no prop provided
            try {
                await axios.post('http://localhost:3001/api/posts', { ...postData, published: true });
                alert('Post published successfully!');
                // Reset form or redirect
                setTitle('');
                setSlug('');
                setExcerpt('');
                setFeaturedImage('');
                editor.commands.setContent('<p>Start writing...</p>');
            } catch (error) {
                console.error(error);
                alert('Failed to publish post');
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Create New Post</h2>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter post title"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Slug</label>
                <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="post-url-slug"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Excerpt</label>
                <textarea
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Short summary for SEO and previews"
                    rows={3}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Featured Image URL</label>
                <input
                    type="text"
                    value={featuredImage}
                    onChange={(e) => setFeaturedImage(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="https://example.com/image.jpg"
                />
            </div>

            <div className="mb-6 border rounded p-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
                <div className="border p-2 min-h-[200px] rounded">
                    <EditorContent editor={editor} />
                </div>
            </div>

            <button
                onClick={handleSave}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Publish Post
            </button>
        </div>
    );
}
