import { AxiosResponse, AxiosError } from 'axios';
import { DispatchProp } from 'react-redux';
import { AppState } from '../../state-management/store';

export interface AxiosRequestPayload<TData = undefined> {
    payload: {
        request: {
            method: 'get' | 'post' | 'delete' | 'put' | 'patch';
            url: string;
            data?: TData;
            params?: TData;
        };
        // The options property is an object that contains optional callbacks for handling success and error cases
        options?: {
            onSuccess?: (payload: { response: AxiosResponse; getState: () => AppState } & DispatchProp) => void;
            onError?: (payload: { error: AxiosError } & DispatchProp) => void;
        };
    }
};

export interface AxiosSuccessPayload<TData, T> {
    payload: {
        type: T;
    } & AxiosResponse<TData>;
};

export interface AxiosErrorPayload<T> {
    type: T;
    error: AxiosError;
};