import { Router } from "express";
import { getAllUsers } from "../controllers/userController";
import { login, protect, signup } from "../controllers/authController";

export const userRouter = Router();

userRouter.post('/signup',signup);
userRouter.post('/login',login);

userRouter
    .route('/')
    .get(protect, getAllUsers);