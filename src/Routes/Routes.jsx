import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Pages/Home/Home";
import Menu from "../Components/Pages/Menu/Menu";
import Order from "../Components/Pages/Order/Order";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/SignUp/SignUp";
import Secret from "../Components/Pages/Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Components/MainLayout/Dashboard";
import MyCart from "../Components/Pages/Dashboard/MyCart/MyCart";
import DashboardHome from "../Components/Pages/Dashboard/DashboardHome/DashboardHome";
import Reservation from "../Components/Pages/Dashboard/Reservation/Reservation";
import AddReview from "../Components/Pages/Dashboard/AddReview/AddReview";
import MyBookings from "../Components/Pages/Dashboard/MyBookings/MyBookings";
import PaymentHistory from "../Components/Pages/Dashboard/PaymentHistory/PaymentHistory";
import AllUsers from "../Components/Pages/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoutes>
            <Secret />,
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/mycart",
        element: <MyCart />,
      },
      {
        path: "/dashboard/reservation",
        element: <Reservation />,
      },
      {
        path: "/dashboard/add-review",
        element: <AddReview />,
      },
      {
        path: "/dashboard/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory />,
      },
      {
        path:"/dashboard/all-users",
        element:<AllUsers />
      }
    ],
  },
]);

export default router;
