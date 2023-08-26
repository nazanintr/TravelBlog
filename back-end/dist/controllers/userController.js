import { User } from "../models/userModel";
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            users
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
