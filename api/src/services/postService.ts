import postRepository from '../repositories/postRepository.js';

interface PostData {
    title: string;
    content: string;
    slug: string;
    published?: boolean;
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
        };
        return postRepository.create(data);
    }
}

export default new PostService();
