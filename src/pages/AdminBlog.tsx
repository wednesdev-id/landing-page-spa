import BlogEditor from '../components/blog/Editor';
import SEO from '../components/SEO';

export default function AdminBlog() {
    return (
        <>
            <SEO title="Create New Post - Admin" description="Create a new blog post" />
            <BlogEditor />
        </>
    );
}
