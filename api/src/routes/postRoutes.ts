import express from 'express';
import postController from '../controllers/postController.js';

const router = express.Router();

router.get('/posts', postController.getAllPosts);
router.post('/posts', postController.createPost);
router.get('/posts/:slug', postController.getPostBySlug);
router.delete('/posts/:id', postController.deletePost);

export default router;
