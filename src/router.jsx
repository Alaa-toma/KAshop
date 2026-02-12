import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./Layout/Mainlayout";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ChangePass from "./Pages/Auth/ChangePass";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Mainlayout />, 
        children: [
            {
                index: true, 
                element: <Home />
            },
            {
                path: '/Cart', 
                element: <Cart />
            },
            {
                path: '/Login', 
                element: <Login />
            },
            {
                path: '/Register', 
                element: <Register />
            },
            {
                path: '/ChangePass', 
                element: <ChangePass/>
            }

        ]
    }
]);

export default router ;