import { call, put } from 'redux-saga/effects';
import { AxiosResponse, AxiosError } from 'axios';
import { client } from '../../store';
import { GetAllPostsAction, GetPostByIdAction } from '../../actions/post/actionTypes';
import { CommentsActionTypes } from '../../actions/comment/actionTypes';
import { getCommentById } from '../../actions/comment/commentActions';
import { httpRequestFailed, httpResponseFailed, httpResponseSuccess } from 'state-management/actions/notification/notificationAction';

export function* getCommentByPostId({ payload }: GetAllPostsAction) {
    try {
        const { method, url } = payload.request;

        const response: AxiosResponse = yield call(client.request, {
            method,
            url,
        });
        const posts = response.data.comments;
        yield put({ type: CommentsActionTypes.GET_COMMENTS_BY_POST_ID_SUCCESS, payload: { data: posts } });
        yield put(httpResponseSuccess());

    } catch (error) {
        handleAxiosError(error);
    }

};

export function* saveComment({ payload }: GetPostByIdAction) {
    try {
        const { method, url, data } = payload.request;

        yield call(client.request, {
            method,
            url,
            data,
        });

        yield put(getCommentById((data as any).postId));
        yield put(httpResponseSuccess());

    } catch (error) {
        handleAxiosError(error);
    }
};

export function* editComment({ payload }: GetPostByIdAction) {
    try {
        const { method, url, data } = payload.request;

        yield call(client.request, {
            method,
            url,
            data,
        });

        yield put(getCommentById((data as any).postId));
        yield put(httpResponseSuccess());

    } catch (error) {
        handleAxiosError(error);
    }
};

export function* sendReply({ payload }: GetPostByIdAction) {
    try {
        const { method, url, data } = payload.request;

        yield call(client.request, {
            method,
            url,
            data,
        });

        yield put(getCommentById((data as any).postId));
        yield put(httpResponseSuccess());

    } catch (error) {
        handleAxiosError(error);
    }
};

export function* deleteComment({ payload }: GetPostByIdAction) {
    try {
        const { method, url } = payload.request;

        yield call(client.request, {
            method,
            url,
        });

        yield put(getCommentById((payload?.request?.data) as unknown as string));
        yield put(httpResponseSuccess());

    } catch (error) {
        handleAxiosError(error);
    };
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