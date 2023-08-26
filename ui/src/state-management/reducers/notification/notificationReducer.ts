import { NotificationActions, NotificationActionTypes } from '../../actions/notification/actionTypes';
import { AlertColor } from '@mui/material';

export interface NotificationState {
    open: boolean;
    message: string;
    severity?: AlertColor
}

export const initialState: NotificationState = {
    open: false,
    message: '',
    severity: undefined
};

const NotificationReducer = (state: NotificationState = initialState, action: NotificationActions):
    NotificationState => {
    switch (action.type) {
        case NotificationActionTypes.HTTP_RESPONSE_SUCCESS:
            return {
                open: true,
                message: 'Operation is done successfully',
                severity: 'success'
            }
        case NotificationActionTypes.HTTP_RESPONSE_FAILED:
            return {
                open: true,
                message: action.error.message || 'No response could be generated!',
                severity: 'error'
            }
        case NotificationActionTypes.HTTP_REQUEST_FAILED:
            return {
                open: true,
                message: action.error.message || 'Request could not be sent successfully!',
                severity: 'error'
            }
        case NotificationActionTypes.HIDE_ERROR_NOTIFICATION:
            return {
                open: false,
                message: ''
            }
        default:
            return state;
    }
};

export default NotificationReducer;
