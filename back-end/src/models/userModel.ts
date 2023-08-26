import { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs';

interface IUser extends Document {
    name: string;
    email: string;
    profile?: string;
    password: string;
    passwordConfirm: string;
    correctPassword(candidatePassword: string, userPassword: string): Promise<boolean>;
};

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        validate: {
            validator: (value: string) => validator.isEmail(value),
            message: "Invalid email address"
        }
    },
    profile: String,
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false,
    },
    passwordConfirm: {
        type: String,
        minlength: 8,
        validate: {
            validator: function (this: IUser, value: string) {
                return value === this.password;
            },
            message: "Passwords do not match"
        }
    },
});

userSchema.pre('save', async function (next) {
    // only run this function if password was actually modified
    if (!this.isModified('password')) return next();

    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);

    this.passwordConfirm = undefined;

    next();
});

userSchema.methods.correctPassword = async function(candidatePassword: string, userPassword: string) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

export const User = model<IUser>('User', userSchema);