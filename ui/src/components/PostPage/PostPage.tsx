import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import {
    PostPageContainer,
    BodyContainer,
    ImageContainer,
    Title,
    Body,
    PostImage
} from './styles';
import { AppState } from "../../state-management/store";
import { getPostById } from '../../state-management/actions/post/postActions';
import { useParams } from 'react-router-dom';
import Comments from '../Comment/Comment';

const PostPage = (): JSX.Element => {
    const params = useParams();
    const postId = params.postId;
    const dispatch = useDispatch();
    const { selectedPost } = useSelector((state: AppState) => state.posts);

    useEffect(() => {
        if (postId) {
            dispatch(getPostById(postId));
        }
    }, [dispatch, postId]);

    if (!selectedPost) {
        return <div>Loading...</div>;
    };

    const { title, body, image } = selectedPost[0];


    return (
        <PostPageContainer>
            <ImageContainer>
                <PostImage src={image} />
            </ImageContainer>
            <BodyContainer>
                <Title>{title}</Title>
                <Body>{body}</Body>
                <Comments />
            </BodyContainer>
        </PostPageContainer>
    )
}

export default PostPage;