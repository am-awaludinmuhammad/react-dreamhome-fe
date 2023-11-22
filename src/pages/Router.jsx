import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../routes";
import PathConstants from "../routes/pathConstants";
import { useAuthContext } from "../hooks/useAuthContext";

const Router = () => {
  const { user } = useAuthContext();

  const pageRoutes = routes.map(({ path, title, element }) => {
    if (user && [PathConstants.LOGIN, PathConstants.REGISTER].includes(path)) {
      element = <Navigate to={PathConstants.HOME} />
    }

    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;