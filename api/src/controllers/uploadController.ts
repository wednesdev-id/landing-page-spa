import { Request, Response } from 'express';
import s3Service from '../services/s3Service.js';

class UploadController {
    async uploadImage(req: Request, res: Response) {
        try {
            if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded' });
            }

            const fileUrl = await s3Service.uploadFile(req.file);

            res.status(200).json({
                url: fileUrl,
                success: true,
                message: 'Image uploaded successfully'
            });
        } catch (error) {
            console.error('Upload Error:', error);
            res.status(500).json({ error: 'Failed to upload image' });
        }
    }
}

export default new UploadController();
