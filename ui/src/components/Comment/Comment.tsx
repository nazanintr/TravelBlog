import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    CommentBody,
    CommentBox,
    CommentHeader,
    CommentRow,
    CommentText,
    CommentTime,
    DeleteButton,
    EditButton,
    ReplyBody,
    ReplyBox,
    ReplyButton,
    SendButton,
    WriterName,
    Edited,
    CommentInputContainer,
    CommentButtonsContainer,
    CommentContainer,
    StyledTextField
} from "./styles";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { formatDistanceToNow } from 'date-fns';
import EditDialog from "./EditDialogue/EditDialogue";
import { AppState } from "../../state-management/store";
import { IComment } from "../../modals/comments/modals";
import { deleteComment, getCommentById, saveComment, sendReply } from "../../state-management/actions/comment/commentActions";
import { IPost } from '../../modals/posts/modals';

const Comments = (): JSX.Element => {
    const params = useParams();
    const postId = params.postId;
    const dispatch = useDispatch();
    const { commentsList } = useSelector((state: AppState) => state.comments);
    const { authenticatedUserId } = useSelector((state: AppState) => state.users);
    const selectedPost = useSelector((state: AppState) => state.posts.selectedPost);
    const { userList, authenticatedUserId: authUser } = useSelector((state: AppState) => state.users);
    const [commentText, setCommentText] = useState('');
    const [replyText, setReplyText] = useState('');
    const [selectedComment, setSelectedComment] = useState<IComment>();
    const [isEditDialogueOpen, setIsEditDialogueOpen] = useState(false);

    useEffect(() => {
        selectedPost && dispatch(getCommentById(selectedPost[0]?._id));
    }, []);


    const sendComment = (): void => {
        if ((selectedPost as IPost[])[0]._id && authenticatedUserId && commentText) {
            const newComment: IComment = {
                postId: (selectedPost as IPost[])[0]._id,
                creationDate: Date.now(),
                updateDate: undefined,
                text: commentText,
                authorId: authenticatedUserId,
                isReply: false,
                replies: []
            }
            dispatch(saveComment(newComment))
            setCommentText('');
            setTimeout(() => {
                dispatch(getCommentById((selectedPost as IPost[])[0]._id))
            }, 0);
        }
    }

    const deleteParentComment = (commentId: string): void => {
        dispatch(deleteComment(commentId, postId || ''));
        setTimeout(() => {
            selectedPost && dispatch(getCommentById((selectedPost as IPost[])[0]._id))
        }, 0);
    }

    const openReplyContentBox = (commentId: string): void => {
        const reply = document.getElementById(`${commentId}-reply`);
        if (reply)
            reply.style.display = 'flex';
    }

    const openEditDialogue = (comment: IComment): void => {
        setSelectedComment(comment);
        setIsEditDialogueOpen(true)
    }

    return (
        <>
            <CommentHeader data-testid='commentHeader'>
                {`Comments (${commentsList?.length ? commentsList.length : 'No comments yet'})`}
            </CommentHeader>
            <CommentBox data-testid='commentBox'>

                {isEditDialogueOpen && selectedComment &&
                    < EditDialog
                        onClose={() => setIsEditDialogueOpen(false)}
                        isOpen={isEditDialogueOpen}
                        commentInitialContent={selectedComment} />
                }



                {
                    (

                        [...commentsList || []].reverse() || []).map((c) =>
                            <CommentBody key={c.creationDate} data-testid='commentBody'>
                                <CommentContainer>
                                    <CommentRow>
                                        <Avatar alt={userList?.find(u => u._id === c?.authorId)?.name || ''}
                                            src={`${userList?.find(u => u._id === c?.authorId)?._id || ''}.jpg`} />
                                        <WriterName>
                                            {userList?.find(u => u._id === c?.authorId)?.name}
                                        </WriterName>
                                        {!!c?.updateDate && <Edited>
                                            Edited
                                        </Edited>}
                                    </CommentRow>
                                    <CommentRow style={{ flexDirection: 'column' }}>
                                        <CommentText>
                                            {c.text}
                                        </CommentText>

                                        <CommentRow
                                            style={{ display: 'none' }}
                                            id={`${c._id}-reply`}>
                                            <TextField
                                                style={{ width: '70%' }}
                                                onChange={(e) => {
                                                    setReplyText(e.target.value)
                                                }}
                                                value={replyText}
                                                multiline
                                                placeholder="Write your reply here..."
                                                variant="outlined" />
                                            <SendButton onClick={() => {
                                                replyText && dispatch(sendReply({
                                                    ...c,
                                                    replies: [...c.replies, {
                                                        text: replyText,
                                                        authorId: authUser || '',
                                                        isReply: true,
                                                        postId: (selectedPost as IPost[])[0]._id || '',
                                                        creationDate: Date.now(),
                                                        updateDate: undefined
                                                    } as IComment]
                                                }));
                                                setTimeout(() => {
                                                    selectedPost && dispatch(getCommentById((selectedPost as IPost[])[0]._id))
                                                }, 0);

                                                const reply = document.getElementById(`${c._id}-reply`);
                                                if (reply)
                                                    reply.style.display = 'none';

                                                setReplyText('');
                                            }}>
                                                Reply
                                            </SendButton>
                                        </CommentRow>


                                    </CommentRow>
                                    <CommentRow>
                                        <CommentTime>{formatDistanceToNow(c.creationDate)}</CommentTime>

                                        <CommentButtonsContainer>
                                            {authUser === c.authorId && <EditButton
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => openEditDialogue(c)}
                                            >
                                                <EditOutlinedIcon />
                                            </EditButton>}
                                            {authUser === c.authorId && <DeleteButton
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    deleteParentComment(c._id || '')
                                                }}>
                                                <DeleteOutlineOutlinedIcon />
                                            </DeleteButton>}
                                            {<ReplyButton
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => openReplyContentBox(c._id || '')}
                                            >
                                                <ReplyOutlinedIcon />
                                            </ReplyButton>}

                                        </CommentButtonsContainer>

                                    </CommentRow>
                                    <ReplyBox>
                                        {
                                            ([...c.replies].reverse() || []).map((r) =>
                                                <ReplyBody key={r.creationDate} data-testid='replyBody'>
                                                    <CommentRow>
                                                        <Avatar alt={userList?.find(u => u._id === r?.authorId)?.name || ''}
                                                            src={`${userList?.find(u => u._id === r?.authorId)?._id || ''}.jpg`} />
                                                        <WriterName>
                                                            {userList?.find(u => u._id === r?.authorId)?.name}
                                                        </WriterName>
                                                    </CommentRow>
                                                    <CommentRow>
                                                        <CommentText>
                                                            {r.text}
                                                        </CommentText>
                                                    </CommentRow>
                                                    <CommentRow>
                                                        <CommentTime>{formatDistanceToNow(r.creationDate)}</CommentTime>
                                                    </CommentRow>
                                                </ReplyBody>
                                            )
                                        }
                                    </ReplyBox>
                                </CommentContainer>
                            </CommentBody>
                        )
                }

            </CommentBox >

            <CommentInputContainer data-testid='commentInput'>
                <CommentRow>
                    <StyledTextField
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setCommentText(e.target.value)
                        }}
                        style={{ width: '70%' }}
                        value={commentText}
                        multiline
                        placeholder="Write your comment here..."
                        variant="outlined" />
                    <SendButton onClick={sendComment}>
                        SEND
                    </SendButton>
                </CommentRow>
            </CommentInputContainer>
        </>

    )
};

export default Comments;