import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import { rootSaga } from './sagas';
import { UsersState } from './reducers/user/userReducer';
import { PostsState } from './reducers/post/postReducer';
import { CommentsState } from './reducers/comment/commentReducer';
import axios from 'axios';
import { NotificationState } from './reducers/notification/notificationReducer';

const apiHost = 'http://localhost:8080';

export const client = axios.create({
    baseURL: apiHost,
    responseType: 'json',
});

export interface AppState {
    posts: PostsState;
    users: UsersState;
    comments: CommentsState;
    notification: NotificationState;
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

client.interceptors.request.use((reqConfig) => {
    const token = store.getState().users.token;

    if (token) {
        reqConfig.headers.Authorization = `Bearer ${token}`;
    }

    return reqConfig;
}, (error) => {
    return Promise.reject(error);
});

sagaMiddleware.run(rootSaga);
