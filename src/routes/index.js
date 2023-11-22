import React from "react"
import PathConstants from "./pathConstants"
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

const routes = [
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
    }
]

export default routes
