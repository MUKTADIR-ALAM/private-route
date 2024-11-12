import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../components/PrivateRoute";
import Order from "../components/Order";
export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Mainlayout />,
        children: [
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            },
            {
                path:'/order',
                element:<PrivateRoute><Order/></PrivateRoute>
            }
        ]
    }
])