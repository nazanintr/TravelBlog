import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { app } from './app';
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE && process.env.DATABASE_password
    ? process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_password)
    : undefined;
mongoose.connect(`${DB}`)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => {
    console.log('Failed to connect to MongoDB:', error);
});
const port = 8080;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
