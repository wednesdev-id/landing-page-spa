import dotenv from 'dotenv';
import app from './src/app.js';

dotenv.config();

const port = process.env.SERVER_PORT || 3001;

app.listen(port, () => {
    console.log('\n┌──────────────────────────────────────────┐');
    console.log('│          🚀 API Server Ready             │');
    console.log('├──────────────────────────────────────────┤');
    console.log(`│  Backend:  http://localhost:${port}          │`);
    console.log('│  Proxy:    /api/* → :3001 (via Vite)     │');
    console.log('│  Frontend: http://localhost:3000          │');
    console.log('└──────────────────────────────────────────┘\n');
});
