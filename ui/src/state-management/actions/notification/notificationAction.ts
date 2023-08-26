import { AxiosError } from 'axios';
import {
    HideErrorNotification,
    HttpRequestFailed,
    HttpResponseFailed,
    HttpResponseSuccess,
    NotificationActionTypes,
} from './actionTypes';

export const hideErrorNotification = (): HideErrorNotification => ({
    type: NotificationActionTypes.HIDE_ERROR_NOTIFICATION,
});

export const httpRequestFailed = (message?: string): HttpRequestFailed => ({
    type: NotificationActionTypes.HTTP_REQUEST_FAILED,
    error: new AxiosError(message)
});

export const httpResponseSuccess = (): HttpResponseSuccess => ({
    type: NotificationActionTypes.HTTP_RESPONSE_SUCCESS
});

export const httpResponseFailed = (message?: string): HttpResponseFailed => ({
    type: NotificationActionTypes.HTTP_RESPONSE_FAILED,
    error: new AxiosError(message)
});