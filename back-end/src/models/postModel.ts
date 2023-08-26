import { Schema, model } from 'mongoose';

interface IPost {
    title: string;
    body: string;
    image: string;
    creationDate: number;
};

const postSchema = new Schema<IPost>({
    title: String,
    body: String,
    image: String,
    creationDate: Number,
});

export const Post = model<IPost>('Post', postSchema);
