import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Packages from "../pages/Packages/Packages";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/services.json")
            },

            {
                path: "/service/:id",
                element: <PrivateRoute><Service></Service></PrivateRoute>,
                loader: () => fetch("/services.json")
            },

            {
                path: "/login",
                element: <Login></Login>
            },

            {
                path: "/register",
                element: <Register></Register>
            },

            {
                path: "/packages",
                element: <Packages></Packages>
            },

            {
                path: "/about",
                element: <PrivateRoute><About></About></PrivateRoute>
            },

            {
                path: "/contact",
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
            },

            {
                path: "*",
                element: <PageNotFound></PageNotFound>
            }


        ]
    }
]);

export default router;

