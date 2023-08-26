import { NextFunction, Response, Request } from "express";

export const catchAsync = (catchAsync: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        catchAsync(req, res, next).catch(next);
    }
};