import { NextFunction, Request, Response } from 'express';
import { Post } from "../models/postModel";
import { catchAsync } from '../utilities/catchAsync';
import { AppError } from '../utilities/appError';

export const getAllPosts = catchAsync(async (req: Request, res: Response) => {
        const posts = await Post.find();

        res.status(200).json({
            status: "success",
            results: posts.length,
            posts,
        });
});

export const getPostById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;

        if (!await Post.find({ _id: id })) {
            return next(new AppError('Invalid id!', 404));
        };

        const post = await Post.find({ _id: id });
        res.status(200).json({
            post
        });
});