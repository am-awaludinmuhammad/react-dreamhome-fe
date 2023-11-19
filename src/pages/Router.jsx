import { Route, Routes } from "react-router-dom";
import PagesData from "./PagesData";

const Router = () => {
  const pageRoutes = PagesData.map(({ path, title, element }) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;