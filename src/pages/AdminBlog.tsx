import BlogEditor from '../components/blog/Editor';
import SEO from '../components/SEO';

export default function AdminBlog() {
    return (
        <>
            <SEO title="Create New Post - Admin" description="Create a new blog post" />
            <div className="container mx-auto py-10">
                <h1 className="text-3xl font-bold text-center mb-10">Blog Admin Dashboard</h1>
                <BlogEditor />
            </div>
        </>
    );
}
