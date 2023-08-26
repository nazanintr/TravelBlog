import React, { useState } from "react";
import { DialogContent } from "@mui/material";
import { useDispatch } from 'react-redux';
import {
    ButtonText,
    CloseButton,
    DeleteButton,
    EditActions,
    EditDialogContainer,
    EditHeader,
    EditTextField,
    EditTitle,
    SaveButton,
    WordCount
} from "./styles";
import {
    InputAdornment
} from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { IEditDialogProps } from "./IProps";
import { editComment, getCommentById } from "../../../state-management/actions/comment/commentActions";

const EditDialog = ({ isOpen, onClose, commentInitialContent }: IEditDialogProps): JSX.Element => {

    const dispatch = useDispatch();
    const [content, setContent] = useState(commentInitialContent.text);

    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };

    const handleSave = () => {
        dispatch(editComment({
            ...commentInitialContent,
            text: content,
            updateDate: Date.now()
        }))
        setTimeout(() => {
            commentInitialContent?._id &&
                dispatch(getCommentById(commentInitialContent.postId))
        }, 0)
        onClose();
    };

    const handleDelete = () => {
        setContent('')
    };

    return (
        <EditDialogContainer open={isOpen} onClose={onClose}>
            <EditHeader>
                <EditTitle>Edit your comment</EditTitle>
                <CloseButton onClick={onClose} color="secondary">
                    <CloseOutlinedIcon style={{ backgroundColor: 'white' }} />
                </CloseButton>
            </EditHeader>
            <DialogContent>
                <EditTextField
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    value={content}
                    onChange={handleContentChange}
                    inputProps={{ maxLength: 280 }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><WordCount>{`${content.length}/280`}</WordCount></InputAdornment>
                    }}
                />
            </DialogContent>
            <EditActions>
                <DeleteButton onClick={handleDelete}><ButtonText>Delete comment</ButtonText></DeleteButton>
                <SaveButton onClick={handleSave} color="primary" disabled={content.length === 0}>Save</SaveButton>
            </EditActions>
        </EditDialogContainer>
    );
};

export default EditDialog;