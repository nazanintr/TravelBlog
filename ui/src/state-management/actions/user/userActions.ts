import { ILoginInfo, ISignupInfo } from "modals/users/modals";
import { GetAllUsersActions, LoginActions, SignUpActions, UsersActionTypes, logOutActions } from "./actionTypes";

export const getAllUsers = (): GetAllUsersActions => ({
    type: UsersActionTypes.GET_ALL_USERS,
    payload: {
        request: {
            method: 'get',
            url: '/api/users',
        },
    },
});

export const login = (userInfo: ILoginInfo): LoginActions => ({
    type: UsersActionTypes.LOGIN,
    payload: {
        request: {
            method: 'post',
            url: '/api/users/login',
            data: userInfo,
        },
    },
});

export const signUp = (userInfo: ISignupInfo): SignUpActions => ({
    type: UsersActionTypes.SIGN_UP,
    payload: {
        request: {
            method: 'post',
            url: '/api/users/signup',
            data: userInfo,
        },
    },
});

export const logOut = (): logOutActions => ({
    type: UsersActionTypes.LOG_OUT,
});