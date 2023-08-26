import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { hideErrorNotification } from 'state-management/actions/notification/notificationAction';
import { IProps } from './IProps';

const Notification = ({ open, message, severity }: IProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleClose = (): void => {
    dispatch(hideErrorNotification());
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity={severity}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Notification;