import express from 'express';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Request & Response Logger
app.use((req, res, next) => {
    const start = Date.now();
    const { method, originalUrl } = req;

    console.log(`→ ${method} ${originalUrl}`);

    res.on('finish', () => {
        const duration = Date.now() - start;
        const status = res.statusCode;
        const icon = status >= 400 ? '✗' : '✓';
        console.log(`  ${icon} ${status} (${duration}ms)`);
    });

    next();
});

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);

export default app;
