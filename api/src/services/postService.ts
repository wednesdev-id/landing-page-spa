import postRepository from '../repositories/postRepository.js';

interface PostData {
    title: string;
    content: string;
    slug: string;
    published?: boolean;
    image?: string | null;
    tags?: string[];
    scheduledAt?: string | Date | null;
}

class PostService {
    async getAllPosts() {
        return postRepository.findAll();
    }

    async getPostBySlug(slug: string) {
        const post = await postRepository.findBySlug(slug);
        if (!post) {
            throw new Error('Post not found');
        }
        return post;
    }

    async createPost(postData: PostData) {
        // Add any validation or slug generation logic here if needed
        // For now, slug is provided by client
        // Ensure published defaults to false if not provided
        const data = {
            ...postData,
            published: postData.published ?? false,
            tags: postData.tags || [],
            scheduledAt: postData.scheduledAt ? new Date(postData.scheduledAt) : null,
        };
        return postRepository.create(data);
    }

    async deletePost(id: string) {
        return postRepository.delete(id);
    }
}

export default new PostService();
