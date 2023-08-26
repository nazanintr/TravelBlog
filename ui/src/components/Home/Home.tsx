import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Grow from "@mui/material/Grow";
import { IPost } from "../../modals/posts/modals";
import { IProps } from "./IProps";
import Post from "../Post/Post";
import { GridContainer, HomeContainer } from "./styles";
import { NoPostsContainer, NoPostsText } from "../Post/styles";
import { getAllPosts } from "../../state-management/actions/post/postActions";
import { getAllUsers } from "state-management/actions/user/userActions";

const Home = ({ postsList }: IProps): JSX.Element => {

    const [showPosts, setShowPosts] = useState(false);
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getAllPosts());
        const timer = setTimeout(() => {
            setShowPosts(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    if (!postsList || postsList.length === 0) {
        return (
            <HomeContainer maxWidth="xl">
                <NoPostsContainer>
                    <NoPostsText>No posts available</NoPostsText>
                </NoPostsContainer>
            </HomeContainer>
        );
    }

    return (
        <HomeContainer maxWidth="xl">
            <GridContainer>
                {postsList.map((post: IPost, index: number) => (
                    <Grow
                        key={post._id}
                        in={showPosts}
                        style={{
                            transformOrigin: "0 0 0",
                            transitionDelay: `${index * 100}ms`,
                        }}
                        timeout={1000}
                    >
                        <div>
                            <Post key={post._id} postItems={post} />
                        </div>
                    </Grow>
                ))}
            </GridContainer>
        </HomeContainer>
    );
};

export default Home;
