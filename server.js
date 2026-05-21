import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';

import authRouter from './routes/authRoutes.js';

const app = express();
const port = 3000;

connectDB();

app.use(bodyParser.json());

app.use('/api', authRouter);

app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
