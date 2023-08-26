import { AxiosRequestPayload, AxiosSuccessPayload } from "../../../modals/axios/modals";
import { IComment } from "../../../modals/comments/modals";

export enum CommentsActionTypes {
    GET_COMMENTS_BY_POSIT_ID = 'GET_COMMENTS_BY_POST_ID',
    GET_COMMENTS_BY_POST_ID_SUCCESS = 'GET_COMMENTS_BY_POST_ID_SUCCESS',
    GET_COMMENTS_BY_POST_ID_FAIL = 'GET_COMMENTS_BY_POST_ID_FAIL',
    SEND_COMMENT = 'SEND_COMMENT',
    DELETE_COMMENT_BY_ID = 'DELETE_COMMENT_BY_ID',
    SEND_REPLY = 'SEND_REPLY',
    EDIT_COMMENT = 'EDIT_COMMENT'
}


export interface SendCommentAction extends AxiosRequestPayload<IComment> {
    type: CommentsActionTypes.SEND_COMMENT
}

export interface DeleteCommentAction extends AxiosRequestPayload<string> {
    type: CommentsActionTypes.DELETE_COMMENT_BY_ID
}

export interface SendReplyAction extends AxiosRequestPayload<IComment> {
    type: CommentsActionTypes.SEND_REPLY
}

export interface EditCommentAction extends AxiosRequestPayload<IComment> {
    type: CommentsActionTypes.EDIT_COMMENT
}

export interface GetCommentsByPostIdAction extends AxiosRequestPayload<string> {
    type: CommentsActionTypes.GET_COMMENTS_BY_POSIT_ID
}

export interface GetCommentsByPostIdSuccessAction
    extends AxiosSuccessPayload<Array<IComment>,
        CommentsActionTypes.GET_COMMENTS_BY_POST_ID_SUCCESS> {
    type: CommentsActionTypes.GET_COMMENTS_BY_POST_ID_SUCCESS
}

export type CommentActions =
    SendCommentAction |
    DeleteCommentAction |
    SendReplyAction |
    GetCommentsByPostIdAction |
    GetCommentsByPostIdSuccessAction |
    EditCommentAction;