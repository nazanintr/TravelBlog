import { useNavigate } from 'react-router';
import {
    HeaderContainer,
    Title,
    Profile,
    LogOutButton
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../state-management/store';
import { logOut } from '../../state-management/actions/user/userActions';

const Header = (): JSX.Element => {
    const { authenticatedUserId, userList } = useSelector((state: AppState) => state.users);
    const dispatch = useDispatch();
    const name = userList?.find(u => u._id === authenticatedUserId)?.name;
    const profile = userList?.find(u => u._id === authenticatedUserId)?.profile;
    const nav = useNavigate();

    const handleProfileClick = (): void => {
        nav("/", { replace: false });
    };

    const handleLogoutClick = (): void => {
        dispatch(logOut());
        nav("/login");
    };

    return (
        <HeaderContainer data-testid='header'>
            {profile ?
                <Profile aria-label="recipe">
                    <img src={profile} alt="profile" onClick={handleProfileClick} />
                </Profile>
                :
                <Profile aria-label="recipe" onClick={handleProfileClick}>
                    {name?.charAt(0)}
                </Profile>
            }
            <Title
                variant="h6"
                noWrap
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                {`Welcome ${name} :)`}
            </Title>
            <LogOutButton onClick={handleLogoutClick}>Log Out</LogOutButton>
        </HeaderContainer>
    )
};

export default Header;