import { Schema, model } from "mongoose";
;
const commentSchema = new Schema({
    postId: { type: String, required: true },
    authorId: { type: String, required: true },
    creationDate: { type: Number, required: true },
    updateDate: Number,
    text: String,
    isReply: Boolean,
    replies: (Array),
});
export const Comment = model('Comment', commentSchema);
