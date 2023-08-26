import { Comment } from "../models/commentModel";
export const getCommentByPostId = async (req, res) => {
    try {
        const { postId } = req.query;
        const comments = await Comment.find({ postId });
        res.status(200).json({
            status: "success",
            results: comments.length,
            comments
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};
export const saveComment = async (req, res) => {
    try {
        const newComment = await Comment.create(req.body);
        res.status(201).json({
            status: "success",
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};
export const editComment = async (req, res) => {
    try {
        const { id } = req.params;
        const editedComment = await Comment.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            status: "success",
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const editedComment = await Comment.findByIdAndDelete(id);
        res.status(204).json({
            status: "success",
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};
export const sendReply = async (req, res) => {
    try {
        const { id } = req.params;
        const editedComment = await Comment.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            status: "success",
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};
