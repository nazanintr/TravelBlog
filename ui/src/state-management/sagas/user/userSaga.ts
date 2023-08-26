import { call, put } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';
import { GetAllUsersActions, LoginActions, SignUpActions, UsersActionTypes } from '../../actions/user/actionTypes';
import { client } from '../../store';
import { httpRequestFailed, httpResponseFailed } from 'state-management/actions/notification/notificationAction';

export function* signUp({ payload }: SignUpActions) {
  try {
    const { method, url, data } = payload.request;
    const response: AxiosResponse = yield call(client.request, {
      method,
      url,
      data,
    });

    const token = response.data.token;
    yield put({ type: UsersActionTypes.SIGN_UP_SUCCESS, payload: { data: token } });
  } catch (error) {
    yield put(httpRequestFailed((error as any).response.data.message));
  }
};

export function* login({ payload }: LoginActions) {
  try {
    const { method, url, data } = payload.request;
    const response: AxiosResponse = yield call(client.request, {
      method,
      url,
      data,
    });

    const token = response.data.token;
    yield put({ type: UsersActionTypes.LOGIN_SUCCESS, payload: { data: token } });
  } catch (error) {
    yield put(httpRequestFailed((error as any).response.data.message));
  }
};

export function* userWorker({ payload }: GetAllUsersActions) {
  try {
    const { method, url } = payload.request;
    const response: AxiosResponse = yield call(client.request, {
      method,
      url,
    });

    const users = response.data.users;
    yield put({ type: UsersActionTypes.GET_ALL_USERS_SUCCESS, payload: { data: users } });
  } catch (error) {
    yield put(httpRequestFailed((error as any).response.data.message));
  }
};
