import { NextFunction, Request, Response } from 'express';
import { Comment } from "../models/commentModel";
import { catchAsync } from '../utilities/catchAsync';
import { AppError } from '../utilities/appError';
import { Post } from '../models/postModel';

export const getCommentByPostId = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { postId } = req.query;
    const comments = await Comment.find({ postId });
    const post = await Post.findById(postId);

    if (!post) {
        return next(new AppError(`Invalid id!`, 404));
    };

    res.status(200).json({
        status: "success",
        results: comments.length,
        comments
    });
});

export const saveComment = catchAsync(async (req: Request, res: Response) => {
     
    const newComment = await Comment.create(req.body);
    res.status(201).json({
        status: "success",
    });

  
});

export const editComment = catchAsync(async (req: Request, res: Response) => {
     
    const { commentId } = req.params;
    const editedComment = await Comment.findByIdAndUpdate(commentId, req.body);

    res.status(200).json({
        status: "success",
    });
});

export const deleteComment = catchAsync(async (req: Request, res: Response) => {
     
    const { commentId } = req.params;
    const editedComment = await Comment.findByIdAndDelete(commentId);

    res.status(204).json({
        status: "success",
    });
});

export const sendReply = catchAsync(async (req: Request, res: Response) => {
     
    const { commentId } = req.params;
    const editedComment = await Comment.findByIdAndUpdate(commentId, req.body);

    res.status(200).json({
        status: "success",
    });
});
