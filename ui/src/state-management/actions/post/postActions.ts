import { GetAllPostsAction, GetPostByIdAction, PostsActionTypes } from './actionTypes';

export const getAllPosts = (): GetAllPostsAction => {
  return {
    type: PostsActionTypes.GET_ALL_POSTS,
    payload: {
      request: {
        method: 'get',
        url: '/api/posts',
      },
    },
  };
};

export const getPostById = (id: string): GetPostByIdAction => {
  return {
    type: PostsActionTypes.GET_POST_BY_ID,
    payload: {
      request: {
        method: 'get',
        url: `/api/posts/${id}`,
      },
    },
  };
};
