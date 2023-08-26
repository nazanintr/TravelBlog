import { IUser } from "../../../modals/users/modals";
import { UserActions, UsersActionTypes } from "../../actions/user/actionTypes";

export interface UsersState {
    userList: Array<IUser>;
    authenticatedUserId?: string;
    token?: string;
};

const initState: UsersState = {
    userList: [],
    authenticatedUserId: undefined,
    token: undefined,
};

export const UsersReducer = (state = initState, action: UserActions): UsersState => {
    switch (action.type) {
        case UsersActionTypes.GET_ALL_USERS:
            return {
                ...state,
                userList: [],
            };
        case UsersActionTypes.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                userList: action.payload.data,
            }
        case UsersActionTypes.LOGIN:
            return initState;
        case UsersActionTypes.LOGIN_SUCCESS:
            const loginToken = action.payload.data;
            return {
                userList: [],
                authenticatedUserId: extractUserIdFromToken(loginToken),
                token: loginToken
            };
        case UsersActionTypes.LOGIN_FAIL:
            return initState;
        case UsersActionTypes.SIGN_UP:
            return initState;
        case UsersActionTypes.SIGN_UP_SUCCESS:
            const signUpToken = action.payload.data;
            return {
                userList: [],
                authenticatedUserId: extractUserIdFromToken(signUpToken),
                token: signUpToken
            };
        case UsersActionTypes.LOG_OUT:
            return initState;
        default:
            return state;
    }
};


function extractUserIdFromToken(token: string): string | undefined {
    try {
        const payload = token.split(".")[1];
        const decodedPayload = atob(payload);
        const { id } = JSON.parse(decodedPayload);
        return id;
    } catch (error) {
        return undefined;
    }
}