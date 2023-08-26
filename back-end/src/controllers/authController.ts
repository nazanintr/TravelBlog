import { NextFunction, Response, Request } from "express";
import jwt, { Secret } from "jsonwebtoken";
import { User } from "../models/userModel";
import { ObjectId } from "mongodb";
import { catchAsync } from "../utilities/catchAsync";
import { AppError } from "../utilities/appError";

const signToken = (id: ObjectId) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as Secret, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

export const signup = catchAsync (async (req: Request, res: Response, next: NextFunction) => {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
        });

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT secret key is not defined");
        }
        if (!process.env.JWT_EXPIRES_IN) {
            throw new Error("JWT expiration duration is not defined");
        };

        const token = signToken(newUser._id);

        res.status(201).json({
            status: 'success',
            token,
            data: {
                user: newUser
            }
        });
});


export const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { email, password } = await req.body;

        if (!email || !password) {
            return next(new Error("please provide email and password"));
        };

        const user = await User.findOne({ email }).select('+password');
        if (!user || !(await user.correctPassword(password, user.password))) {
            return next(new AppError('Incorrect password or email!', 404));
        };


        const token = signToken(user._id);
        res.status(200).json({
            status: 'success',
            token,
        });
});

export const protect = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        //check the token
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(' ')[1];
        };
        if (!token) {
            return next(new Error("You are not logged in!"));
        };
        // verify the token
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT secret key is not defined");
        }
        const verifyToken = (token: string, secret: Secret) => {
            return new Promise((resolve, reject) => {
                jwt.verify(token, secret, (err, decoded) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(decoded);
                    }
                });
            });
        };

        const decoded = await verifyToken(token, process.env.JWT_SECRET) as Record<string, string>;
        
        // check if user still exists
        const freshUser = await User.findById(decoded.id);
        if(!freshUser){
            return(
                next(new Error('the user belonging to this token does no longer exist.'))
            )
        };

        next();
});