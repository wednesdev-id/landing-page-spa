import { Request, Response } from 'express';
import authService from '../services/authService.js';

class AuthController {
    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const result = await authService.login(email, password);
            res.json(result);
        } catch (error: any) {
            console.error(error);
            res.status(401).json({ error: error.message || 'Authentication failed' });
        }
    }
}

export default new AuthController();
