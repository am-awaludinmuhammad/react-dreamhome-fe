import Home from './Home';
import Login from './Login';
import Register from './Register';

const pagesData = [
    {
        path: "",
        element: <Home />,
        title: "home"
    },
    {
        path: "/register",
        element: <Register />,
        title: "register"
    },
    {
        path: "/login",
        element: <Login />,
        title: "login"
    },
]

export default pagesData
