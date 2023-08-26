import { TextField } from '@mui/material';
import styled from 'styled-components';

export const CommentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    float: right;
    margin-bottom: 15px;
    gap: 16px;
    max-height: 60vh;
    max-width: 100%;
    width: 100%;
    overflow-y: scroll;
    border-radius: 4px;
    &::-webkit-scrollbar {
        display: none;
    }
    @media (max-width: 768px) {
        display: block;
        width: 100%;
        flex-direction: row;
        align-items: flex-start;
        max-height: 30%;
    }
`;

export const CommentHeader = styled.div`
    width: 100%;
    font-weight: bold;
    color: white;
    padding: 15px 0;
    font-size: 22px;
`;

export const CommentBody = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    background-color:rgba(209, 209, 239, 1);
    margin-top:10px;
`;

export const CommentContainer = styled.div`
    padding: 21px 25px;
`;

export const CommentRow = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
`;

export const WriterName = styled.div`
    width:70%;
    box-sizing:border-box;
    padding-top:10px;
    padding-left:10px;
    font-weight:bold;    
`;

export const Edited = styled.div`
    font-style: italic;
    font-weight: 400;
    color: #949494;
    box-sizing:border-box;
    padding-top:10px;
    width:18%;
    text-align:right
`;

export const CommentText = styled.div`
    width:100%;
    box-sizing:border-box;
    padding:5px;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.0125em;
`;

export const ReplyBox = styled.div`
    width:80%;
    margin-left:20%;
    box-sizing:border-box;
    padding-top:5px;
    padding-bottom:5px;
    border-top-style:none;
    border-color:#ffffff;
    border-width:3px;
    @media (max-width: 768px) {
        width:90%;
    }
`;

export const ReplyBody = styled.div`
    width:90%;
    display:flex;
    flex-direction:column;
`;

export const SendButton = styled.div`
    width: 20%;
    margin: auto;
    text-align: center;
    font-weight: bold;
    letter-spacing: 0.0125em;
    text-transform: uppercase;
    display: inline-block;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    @media (max-width: 768px) {
        margin-right: 8px;
    }
`

export const CommentTime = styled.div`
    font-size: 12px;
    color: #949494;
    width: 50%;
    box-sizing:border-box;
    padding-left:5px;
    padding-top:7px;
`
export const CommentButtonsContainer = styled.div`
    width:50%;
    display:flex;
    flex-direction:row-reverse;
`;


export const EditButton = styled.div`
    color: #949494;
    padding-right:5px;
`

export const DeleteButton = styled.div`
    color: #949494;
    padding-right:5px;
`

export const ReplyButton = styled.div`
    color: #949494;
    padding-right:5px;
`

export const CommentInputContainer = styled.div`
    & > ${CommentRow} {
        display: flex;
        align-items: center;
        width: 100%;
        padding-left: 21px;

        @media (max-width: 768px) {
            align-items: flex-start;
            padding-left: 10px;
        }
    }
    align-items: center;
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    background: rgba(209, 209, 239, 1);
    width: 100%;
    box-sizing: content-box;  
    @media (max-width: 768px) {
        padding: 0;
        gap: 0;
        width: 100%;
    }
`;

export const StyledTextField = styled(TextField)`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 8px 4px 16px;
    padding: 24px 8px 4px 16px;
    background: #FFFFFF;
    border: 1px solid #CACACA;
    width: 100%;
    border-radius: 2px;
    && {
        margin: 16px 0;
        width: 80%!important;
    }
    .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root {
        width: 100% !important;
    }
    label {
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 21px;
        letter-spacing: 0.0025em;
        color: #AFAFAF;
        transform: translateY(-50%);   
        position: absolute;
        top: ${({ value }) => (value ? '0' : '16px')};
        margin-left: 5px;
    }
    label.Mui-focused {
        top: 0;
    }
    @media (max-width: 768px) {
        && {
            margin: 16px 12px;
        }
    }
`;
