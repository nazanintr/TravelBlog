import express, { Request, Response, NextFunction } from 'express';
import { postRouter } from './routes/postRoutes';
import { userRouter } from './routes/userRoutes';
import { commentRouter } from './routes/commentRoutes';
import bodyParser from 'body-parser';
import cors from 'cors';
import { AppError } from './utilities/appError';
import { globarErrorHandler } from './controllers/errorController';

export const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
// Parse URL-encoded data with extended mode
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);
app.use('/api/comments', commentRouter);

// Handle undefined routes
app.all('*', (req: Request, res: Response, next: NextFunction) => {
    const err = new AppError(`Can't find ${req.originalUrl} on this server!`, 404, 'fail');
    next(err);
});

// Error handling middleware
app.use(globarErrorHandler);