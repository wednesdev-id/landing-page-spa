import { Request, Response } from 'express';
import postService from '../services/postService.js';

class PostController {
    async getAllPosts(req: Request, res: Response) {
        try {
            const posts = await postService.getAllPosts();
            res.json(posts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error fetching posts' });
        }
    }

    async getPostBySlug(req: Request, res: Response) {
        const { slug } = req.params;
        try {
            const post = await postService.getPostBySlug(slug as string);
            res.json(post);
        } catch (error: any) {
            if (error.message === 'Post not found') {
                res.status(404).json({ error: 'Post not found' });
            } else {
                console.error(error);
                res.status(500).json({ error: 'Error fetching post' });
            }
        }
    }

    async createPost(req: Request, res: Response) {
        try {
            const newPost = await postService.createPost(req.body);
            res.status(201).json(newPost);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error creating post' });
        }
    }

    async updatePost(req: Request, res: Response) {
        const { slug } = req.params;
        try {
            const updatedPost = await postService.updatePost(slug as string, req.body);
            res.json(updatedPost);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error updating post' });
        }
    }

    async deletePost(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await postService.deletePost(id as string);
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error deleting post' });
        }
    }
}

export default new PostController();
