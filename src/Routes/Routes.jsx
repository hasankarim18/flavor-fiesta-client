import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Pages/Home/Home";
import Menu from "../Components/Pages/Menu/Menu";
import Order from "../Components/Pages/Order/Order";
import Login from "../Components/Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path:"/",
            element:<Home />
        },
        {
          path:"/menu",
          element:<Menu />
        },
        {
          path:"/order/:category",
          element:<Order />
        },
        {
          path:"login",
          element:<Login />
        }
    ]
  }
]);

export default router;
