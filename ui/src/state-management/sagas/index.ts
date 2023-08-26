import { login, signUp, userWorker } from "./user/userSaga";
import { takeLatest } from 'redux-saga/effects';
import { UsersActionTypes } from '../../state-management/actions/user/actionTypes';
import { PostsActionTypes } from "../actions/post/actionTypes";
import { getAllPosts, getPostById } from "./post/postSaga";
import { CommentsActionTypes } from "../actions/comment/actionTypes";
import {
    deleteComment,
    editComment,
    getCommentByPostId,
    saveComment,
    sendReply
} from "./comment/commentSaga";

export function* rootSaga() {
    yield takeLatest(UsersActionTypes.GET_ALL_USERS, userWorker);
    yield takeLatest(UsersActionTypes.LOGIN, login);
    yield takeLatest(UsersActionTypes.SIGN_UP, signUp);
    yield takeLatest(PostsActionTypes.GET_ALL_POSTS, getAllPosts);
    yield takeLatest(PostsActionTypes.GET_POST_BY_ID, getPostById);
    yield takeLatest(CommentsActionTypes.GET_COMMENTS_BY_POSIT_ID, getCommentByPostId);
    yield takeLatest(CommentsActionTypes.EDIT_COMMENT, editComment);
    yield takeLatest(CommentsActionTypes.SEND_COMMENT, saveComment);
    yield takeLatest(CommentsActionTypes.SEND_REPLY, sendReply);
    yield takeLatest(CommentsActionTypes.DELETE_COMMENT_BY_ID, deleteComment);
};