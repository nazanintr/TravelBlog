import { useLocation, Navigate, Outlet } from "react-router-dom";
import { IProps } from "./IProps";

const PrivateRoute = ({ authenticatedUserId }: IProps): JSX.Element => {
    const user = authenticatedUserId;
    const location = useLocation();

    if (!user) return <Navigate to="/login" state={{ path: location.pathname }} replace />;
    return <Outlet />;
}

export default PrivateRoute;
