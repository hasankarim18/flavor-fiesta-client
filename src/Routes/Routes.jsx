import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Pages/Home/Home";
import Menu from "../Components/Pages/Menu/Menu";
import Order from "../Components/Pages/Order/Order";

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
        }
    ]
  },
]);

export default router;
