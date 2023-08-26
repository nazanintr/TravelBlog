import { Post } from "../models/postModel";
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            status: "success",
            results: posts.length,
            data: {
                posts
            }
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
export const getPostById = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await Post.find({ postId });
        res.status(200).json({
            post
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
