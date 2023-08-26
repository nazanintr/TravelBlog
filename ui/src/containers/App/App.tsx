import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AppState } from '../../state-management/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Home from "../../components/Home/Home";
import { AppContainer } from "./styled";
import Header from "../../components/Header/Header";
import PostPage from "../../components/PostPage/PostPage";
import Notification from "components/Notification/Notification";
import PrivateRoute from "helper/auth/PrivateRoute";
import LogIn from "components/LogIn/LogIn";
import SignUp from "components/SignUp/SignUp";

const App = (): JSX.Element => {

  const { postsList } = useSelector((state: AppState) => state.posts);
  const { open, message, severity } = useSelector((state: AppState) => state.notification );
  const { authenticatedUserId } = useSelector((state: AppState) => state.users);
  const location = useLocation();
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    setShowHeader(location.pathname === "/login" || location.pathname === "/signup");
  }, [location.pathname]);

  useEffect(() => {
    navigate("/", { replace: true });
  }, [authenticatedUserId]);

  return (
    <AppContainer>
      {!showHeader && <Header/>}
      <Routes>
        <Route element={<PrivateRoute authenticatedUserId={authenticatedUserId as string} />}>
          <Route path="/" element={<Home postsList={postsList} />} />
          <Route path="/post/:postId" element={<PostPage />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Notification open={open} message={message} severity={severity} />
    </AppContainer>
  );
}

export default App;
