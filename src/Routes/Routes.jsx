import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../Layout/MainRoute";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogInRegister/Login";
import Register from "../Pages/LogInRegister/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoute></MainRoute>,
      children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
      ]
    },
  ]);

  export default router