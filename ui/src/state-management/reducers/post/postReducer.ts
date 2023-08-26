import { IPost } from "../../../modals/posts/modals";
import { PostsActionTypes, PostsActions } from "../../actions/post/actionTypes";

export interface PostsState {
    postsList: Array<IPost>;
    selectedPost?: IPost[];
}
export const initialState: PostsState = {
    postsList: [],
    selectedPost: undefined,
};

const PostsReducer = (state = initialState, action: PostsActions) => {
    switch (action.type) {
        case PostsActionTypes.GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                postsList: action?.payload?.data || [],
                selectedPost: undefined,
            };

        case PostsActionTypes.GET_POST_BY_ID_SUCCESS:
            return {
                ...state,
                selectedPost: action?.payload?.data,
            };
            
        default:
            return state;
    }
};

export default PostsReducer;
