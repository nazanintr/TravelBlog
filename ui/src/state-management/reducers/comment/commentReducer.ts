import { IComment } from "../../../modals/comments/modals";
import { CommentActions, CommentsActionTypes } from "../../actions/comment/actionTypes";

export interface CommentsState {
    commentsList?: Array<IComment>
}

const initState: CommentsState = {
    commentsList: undefined
}

const CommentReducer = (state = initState, action: CommentActions) => {
    switch (action.type) {
        case CommentsActionTypes.GET_COMMENTS_BY_POST_ID_SUCCESS:
            return {
                commentsList: action?.payload?.data
            }
        default:
            return state;
    }
}

export default CommentReducer;