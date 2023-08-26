import { Schema, model } from 'mongoose';
;
const postSchema = new Schema({
    title: String,
    body: String,
    image: String,
    creationDate: Number,
});
export const Post = model('Post', postSchema);
