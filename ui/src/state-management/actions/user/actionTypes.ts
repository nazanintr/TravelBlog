import { AxiosErrorPayload, AxiosRequestPayload, AxiosSuccessPayload } from '../../../modals/axios/modals';
import { ILoginInfo, ISignupInfo, IUser } from '../../../modals/users/modals';

export enum UsersActionTypes {
    GET_ALL_USERS = 'GET_ALL_USERS',
    GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS',
    GET_ALL_USERS_FAIL = 'GET_ALL_USERS_FAIL',
    LOGIN = 'LOGIN',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAIL = 'LOGIN_FAIL',
    SIGN_UP = 'SIGN_UP',
    SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
    SIGN_UP_FAIL = 'SIGN_UP_FAIL',
    LOG_OUT = 'LOG_OUT'
};

export interface GetAllUsersActions extends AxiosRequestPayload {
    type: UsersActionTypes.GET_ALL_USERS
};

export interface GetAllUsersSuccessActions extends
    AxiosSuccessPayload<Array<IUser>, UsersActionTypes.GET_ALL_USERS_SUCCESS> {
    type: UsersActionTypes.GET_ALL_USERS_SUCCESS
};

export interface LoginActions extends AxiosRequestPayload<ILoginInfo> {
    type: UsersActionTypes.LOGIN
};

export interface LoginSuccessActions extends
    AxiosSuccessPayload<any, UsersActionTypes.LOGIN_SUCCESS> {
    type: UsersActionTypes.LOGIN_SUCCESS
};

export interface LoginFailActions extends
    AxiosErrorPayload<any> {
    type: UsersActionTypes.LOGIN_FAIL
};

export interface SignUpActions extends AxiosRequestPayload<ISignupInfo> {
    type: UsersActionTypes.SIGN_UP
};

export interface SignUpSuccessActions extends
    AxiosSuccessPayload<any, UsersActionTypes.GET_ALL_USERS_SUCCESS> {
    type: UsersActionTypes.SIGN_UP_SUCCESS
};

export interface logOutActions {
    type: UsersActionTypes.LOG_OUT
};

export type UserActions =
    GetAllUsersActions |
    GetAllUsersSuccessActions |
    LoginActions |
    LoginSuccessActions |
    LoginFailActions |
    logOutActions |
    SignUpActions |
    SignUpSuccessActions;