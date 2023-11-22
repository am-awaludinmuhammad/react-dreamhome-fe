import React from "react"
import PathConstants from "./pathConstants"
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ProtectedRoute from "../lib/ProtectedRoute";
import ErrorPage from "../pages/ErrorPage";

const routes = [
    {
        path: '*',
        element: <ErrorPage />,
        title: 'Page Not Found'
    },
    {
        path: PathConstants.HOME,
        element: <Home />,
        title: "Home"
    },
    {
        path: PathConstants.REGISTER,
        element: <Register />,
        title: "Register"
    },
    {
        path: PathConstants.LOGIN,
        element: <Login />,
        title: "Login"
    },
    {
        path: PathConstants.PROFILE,
        element: <ProtectedRoute> <Profile /> </ProtectedRoute>,
        title: "Profile"
    }
]

export default routes
