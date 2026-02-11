import dotenv from 'dotenv';
import app from './src/app.js';

dotenv.config();

const port = process.env.SERVER_PORT || 3001;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
