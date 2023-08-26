import { Schema, model } from "mongoose"

export interface IComment {
    postId: string,
    authorId: string,
    creationDate: number,
    updateDate?: number,
    text: string,
    isReply: boolean,
    replies: IComment[],
};

const commentSchema = new Schema<IComment>({
    postId: { type: String, required: true },
    authorId: { type: String, required: true },
    creationDate: { type: Number, required: true },
    updateDate: Number,
    text: String,
    isReply: Boolean,
    replies: Array<IComment>,
});

export const Comment = model<IComment>('Comment', commentSchema);