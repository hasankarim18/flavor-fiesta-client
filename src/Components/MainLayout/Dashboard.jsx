import { Link, Outlet } from "react-router-dom";
import {  FaCalendarAlt, FaCartArrowDown, FaHamburger, FaHome, FaWallet } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="bg-gray-200 max-w-screen-xl mx-auto ">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">
                {" "}
                <span>
                  <FaHome />{" "}
                </span>{" "}
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard/wallet">
                {" "}
                <span>
                  <FaCalendarAlt />{" "}
                </span>{" "}
                Calender
              </Link>
            </li>
            <li>
              <Link to="/dashboard/mycart">
                <span>
                  {" "}
                  <FaCartArrowDown />{" "}
                </span>{" "}
                My Cart{" "}
              </Link>
            </li>
            <li>
              <Link to="/wallet">
                {" "}
                <span>
                  <FaWallet />{" "}
                </span>{" "}
                Wallet
              </Link>
            </li>
            <li className="divider"></li>
            <li>
              <Link to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/menu">
                {" "}
                <FaHamburger /> Our Menu
              </Link>
            </li>
            <li>
              <Link to="/order/salad">Our Menu</Link>
            </li>
            <li>
              <Link to=""></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
