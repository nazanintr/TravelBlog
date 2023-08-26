import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utilities/appError';


const handleCastErrorDB = (err: any) => {
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err: any) => {
    const message = "Duplicate user information!";
    return new AppError(message, 409, 'fail');
};

export const globarErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (err.name === 'CastError') {
        err = handleCastErrorDB(err);
    } else if (err.code === 11000) {
        err = handleDuplicateFieldsDB(err);
    }

    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
    });
};