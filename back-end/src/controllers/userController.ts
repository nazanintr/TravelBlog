import { Request, Response } from 'express';
import { User } from "../models/userModel";
import { catchAsync } from '../utilities/catchAsync';

export const getAllUsers = catchAsync(async (req: Request, res: Response) => {
        const users = await User.find();

        res.status(200).json({
            users
        });
});