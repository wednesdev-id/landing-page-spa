import express from 'express';
import multer from 'multer';
import uploadController from '../controllers/uploadController.js';

const router = express.Router();

// Configure Multer to store files in memory
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only images are allowed'));
        }
    }
});

// POST /api/upload
router.post('/', upload.single('image'), uploadController.uploadImage);

export default router;
