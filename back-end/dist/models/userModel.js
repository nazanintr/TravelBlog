import { Schema, model } from "mongoose";
;
const userSchema = new Schema({
    name: String,
    email: String,
    profile: String,
});
export const User = model('User', userSchema);
