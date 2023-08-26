import { IComment } from "../../../modals/comments/modals";
import { CommentsActionTypes, DeleteCommentAction, EditCommentAction, GetCommentsByPostIdAction, SendCommentAction, SendReplyAction } from "./actionTypes";

export const saveComment = (comment: IComment):
    SendCommentAction => ({
        type: CommentsActionTypes.SEND_COMMENT,
        payload: {
            request: {
                method: 'post',
                url: '/api/comments',
                data: comment
            }
        }
    });

export const editComment = (comment: IComment): EditCommentAction => ({
    type: CommentsActionTypes.EDIT_COMMENT,
    payload: {
        request: {
            method: 'patch',
            url: `/api/comments/${comment._id}`,
            data: comment
        }
    }
});

export const deleteComment = (commentId: string, postId: string):
    DeleteCommentAction => ({
        type: CommentsActionTypes.DELETE_COMMENT_BY_ID,
        payload: {
            request: {
                method: 'delete',
                url: `/api/comments/${commentId}`,
                data: postId
            }
        }
    });

export const sendReply = (comment: IComment):
    SendReplyAction => ({
        type: CommentsActionTypes.SEND_REPLY,
        payload: {
            request: {
                method: 'patch',
                url: `/api/comments/${comment._id}`,
                data: comment
            }
        }
    });

export const getCommentById = (postId: string):
    GetCommentsByPostIdAction => ({
        type: CommentsActionTypes.GET_COMMENTS_BY_POSIT_ID,
        payload: {
            request: {
                method: 'get',
                url: `/api/comments?postId=${postId}`,
            }
        }
    });