import { Router } from "express";
import { deleteComment, editComment, getCommentByPostId, saveComment, sendReply } from "../controllers/commentController";
import { protect } from "../controllers/authController";

export const commentRouter = Router();

commentRouter
    .route('/')
    .get(getCommentByPostId)
    .post(protect, saveComment);

commentRouter
    .route('/:commentId')
    .patch(protect, editComment)
    .delete(protect, deleteComment)
    .patch(protect, sendReply);