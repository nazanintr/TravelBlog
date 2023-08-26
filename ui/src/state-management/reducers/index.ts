import { combineReducers } from "@reduxjs/toolkit";
import { UsersReducer } from "./user/userReducer";
import PostsReducer from "./post/postReducer";
import CommentReducer from "./comment/commentReducer";
import NotificationReducer from "state-management/reducers/notification/notificationReducer";

export const rootReducer = combineReducers({
    users: UsersReducer,
    posts: PostsReducer,
    comments: CommentReducer,
    notification: NotificationReducer,
});