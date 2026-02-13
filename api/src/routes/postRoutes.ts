import express from 'express';
import postController from '../controllers/postController.js';

const router = express.Router();

router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);
router.get('/:slug', postController.getPostBySlug);
router.put('/:slug', postController.updatePost);
router.delete('/:id', postController.deletePost);

export default router;
