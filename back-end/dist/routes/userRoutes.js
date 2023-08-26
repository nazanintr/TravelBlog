import { Router } from "express";
import { getAllUsers } from "../controllers/userController";
export const userRouter = Router();
userRouter
    .route('/')
    .get(getAllUsers);
