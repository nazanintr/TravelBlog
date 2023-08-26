import { IProps } from "./IProps";
import { Avatar, CardHeader, CardMedia, CardContent } from "@mui/material";
import { Description, PostCard, PostContainer } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../state-management/store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostById } from "../../state-management/actions/post/postActions";

const Post = ({ postItems }: IProps) => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const { authenticatedUserId, userList } = useSelector((state: AppState) => state.users);
    const selectedPost = useSelector((state: AppState) => state.posts.selectedPost);
    const name = userList?.find(u => u._id === authenticatedUserId)?.name;
    const { image, title, body, creationDate, _id } = postItems;
    const date = new Date(creationDate);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    useEffect(() => {
        if (selectedPost && isOpen)
            nav(`/post/${_id}`)
    }, [isOpen, selectedPost]);

    const openPostPage = (postId: string): void => {
        dispatch(getPostById(postId));
        setIsOpen(!isOpen);
    };


    return (
        <PostContainer onClick={() => {openPostPage(_id)}} data-testid="post-test-id">
            <PostCard sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            {name?.charAt(0)}
                        </Avatar>
                    }
                    title={title}
                    subheader={formattedDate}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt={title}
                />
                <CardContent>
                    <Description variant="body2" color="text.secondary">
                        {body}
                    </Description>
                </CardContent>
            </PostCard>
        </PostContainer>
    )
}

export default Post;