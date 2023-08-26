import { AxiosErrorPayload } from "modals/axios/modals";

export enum NotificationActionTypes {
    HIDE_ERROR_NOTIFICATION = 'HIDE_ERROR_NOTIFICATION',
    HTTP_REQUEST_FAILED = 'HTTP_REQUEST_FAILED',
    HTTP_RESPONSE_FAILED = 'HTTP_RESPONSE_FAILED',
    HTTP_RESPONSE_SUCCESS = 'HTTP_RESPONSE_SUCCESS',
};


export interface HideErrorNotification {
    type: NotificationActionTypes.HIDE_ERROR_NOTIFICATION;
};

export interface HttpResponseFailed extends AxiosErrorPayload<any> {
    type: NotificationActionTypes.HTTP_RESPONSE_FAILED;
};

export interface HttpResponseSuccess {
    type: NotificationActionTypes.HTTP_RESPONSE_SUCCESS;
};

export interface HttpRequestFailed extends AxiosErrorPayload<any> {
    type: NotificationActionTypes.HTTP_REQUEST_FAILED;
};

export type NotificationActions =
    HideErrorNotification |
    HttpResponseFailed |
    HttpResponseSuccess |
    HttpRequestFailed 
