import { Navigate, Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate";
import { Home } from "../pages/Home";
import { routes } from "../routes/routes";
import { PrivateRoute } from "../utils/PrivateRoute";
import { Login } from "../pages/Login";
import { getUserInfo } from "../store/selectors/userSelector";
import { useAppSelector } from "../store/hooks/hooks";

export const AppRouter = () => {
  const { isAuthorized } = useAppSelector(getUserInfo);
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />}>
        <Route element={<PrivateRoute />}>
          <Route index element={<Home />} />
        </Route>

        <Route
          path={routes.LOGIN}
          element={isAuthorized ? <Navigate to={routes.HOME} /> : <Login />}
        />
      </Route>
    </Routes>
  );
};
