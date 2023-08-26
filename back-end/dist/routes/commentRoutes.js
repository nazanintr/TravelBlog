import { Router } from "express";
import { deleteComment, editComment, getCommentByPostId, saveComment, sendReply } from "../controllers/commentController";
export const commentRouter = Router();
commentRouter
    .route('/')
    .get(getCommentByPostId)
    .post(saveComment);
commentRouter
    .route('/:commentId')
    .patch(editComment)
    .delete(deleteComment)
    .patch(sendReply);
