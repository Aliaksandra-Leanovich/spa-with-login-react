import { Navigate, Outlet } from "react-router-dom";
import { routes } from "../routes/routes";
import { useAppSelector } from "../store/hooks/hooks";
import { getUserInfo } from "../store/selectors/userSelector";

export const PrivateRoute = () => {
  const { isAuthorized } = useAppSelector(getUserInfo);
  return isAuthorized ? <Outlet /> : <Navigate to={routes.LOGIN} />;
};
