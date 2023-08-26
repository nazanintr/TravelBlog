import { Router } from "express";
import { getAllPosts, getPostById } from "../controllers/postController";

export const postRouter = Router();

postRouter
    .route('/')
    .get(getAllPosts);

postRouter
    .route('/:id')
    .get(getPostById);