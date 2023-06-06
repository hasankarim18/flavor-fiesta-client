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
import Reservation from "../Components/Pages/Dashboard/Reservation/Reservation";
import AddReview from "../Components/Pages/Dashboard/AddReview/AddReview";
import MyBookings from "../Components/Pages/Dashboard/MyBookings/MyBookings";
import PaymentHistory from "../Components/Pages/Dashboard/PaymentHistory/PaymentHistory";
import AllUsers from "../Components/Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Components/Pages/Dashboard/AddItem/AddItem";
import ManageItem from "../Components/Pages/Dashboard/ManageItem/ManageItem";
import ManageBookings from "../Components/Pages/Dashboard/ManageBookings/ManageBookings";
import AdminRoute from "./AdminRoute";
import Payment from "../Components/Pages/Dashboard/Payment/Payment";
import UserHome from "../Components/Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Components/Pages/Dashboard/AdminHome/AdminHome";

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
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "userhome",
        element: <UserHome />
      },
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "add-review",
        element: <AddReview />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path: "manage-bookings",
        element: <ManageBookings />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      // admin route
      {
        path:"adminhome",
        element:<AdminRoute> <AdminHome /> </AdminRoute>
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "manageItem",
        element: (
          <AdminRoute>
            <ManageItem />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
