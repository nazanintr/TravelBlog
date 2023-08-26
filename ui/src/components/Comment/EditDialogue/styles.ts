import styled from 'styled-components';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    TextField
} from "@mui/material";

const text = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0125em;
`;

export const ButtonText = styled(text)`
  font-weight: 500;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #004A93;
  `;
export const CloseButton = styled(Button)`
  :hover {
    cursor: pointer;
    background-color: transparent!important;
  }
`;


export const DeleteButton = styled.button`
  box-sizing: border-box;
  width: 103px;
  height: 14px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  font-size: 14px;;
  width: 135px;
  height: 30px;
  line-height: 14px;
  background: #FFFFFF;
  border: 1px solid #004A93;
  border-radius: 2px;
  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 0;
`;


export const EditActions = styled(DialogActions)`
  padding: 20px 24px!important;
`;

export const EditDialogContainer = styled(Dialog)`
  & .MuiDialog-paper {
    background-color: blue;
    width: 80%;
    background: #FFFFFF;
    border-radius: 0;
  }
`;

export const EditHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const EditTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 234px;
    padding: 4px 8px 4px 16px;
    background: rgba(0, 97, 192, 0.02);
    border: 1px solid #0061C0;
    border-radius: 2px;
  }
  & .MuiOutlinedInput-input {
    height: 100%!important;
    margin-top: 10px;
  }
`;

export const EditTitle = styled(DialogTitle)`
  width: 50%;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.0125em;
  margin-left: auto;
  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const SaveButton = styled(DeleteButton)`
  background: #004A93;
  color: #FFFFFF;
  width: 63px;
  height: 30px;
`;

export const WordCount = styled.span`
  position: absolute;
  bottom: 0;
  right: 9px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;
  text-align: right;
  letter-spacing: 0.0025em;
  color: #172335;
`;
