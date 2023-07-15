import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Appointment from "../pages/Appointment/Appointment";
import Login from "../pages/Login/Login";
import About from "../pages/Shared/About/About";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "appointment",
                element: <Appointment></Appointment>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            }
        ]
    },
]);