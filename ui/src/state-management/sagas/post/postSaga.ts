import { call, put } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';
import { client } from '../../store';
import { GetAllPostsAction, GetPostByIdAction, PostsActionTypes } from '../../actions/post/actionTypes';
import { httpRequestFailed, httpResponseFailed, httpResponseSuccess } from 'state-management/actions/notification/notificationAction';

export function* getAllPosts({ payload }: GetAllPostsAction) {
    try {
        const { method, url } = payload.request;

        const response: AxiosResponse = yield call(client.request, {
            method,
            url,
        });
        const posts = response.data.posts;
        yield put({ type: PostsActionTypes.GET_ALL_POSTS_SUCCESS, payload: { data: posts } });
        yield put(httpResponseSuccess());

    } catch (error) {
        handleAxiosError(error);
    }
};

export function* getPostById({ payload }: GetPostByIdAction) {
    try {
        const { method, url } = payload.request;

        const response: AxiosResponse = yield call(client.request, {
            method,
            url,
        });

        const post = response.data.post;
        yield put({ type: PostsActionTypes.GET_POST_BY_ID_SUCCESS, payload: { data: post } });
        yield put(httpResponseSuccess());

    } catch (error) {
        handleAxiosError(error);
    }
};


function* handleAxiosError(error: unknown) {
    const err = error as AxiosError;
    if (err.isAxiosError) {
        if (err.response) {
            const status = err.response.status;
            if (status >= 400 && status < 500) {
                yield put(httpRequestFailed());
            } else if (status >= 500) {
                yield put(httpResponseFailed());
            }
        } else {
            yield put(httpResponseFailed());
        }
    }
};