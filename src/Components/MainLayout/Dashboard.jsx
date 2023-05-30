import { Link, NavLink, Outlet } from "react-router-dom";
import {  FaCalendarAlt, FaCalendarCheck, FaCartArrowDown, FaHamburger, FaHome, FaStackExchange, FaWallet } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Dashboard = () => {

  const [cartResult] = useCart()
  const cart = cartResult?.data?.data 

  return (
    <div className="bg-gray-200 max-w-screen-xl mx-auto  ">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-aztecGold drawer-button lg:hidden"
          >
            Open Menu
          </label>
          <Outlet />
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul
            id="sidebar"
            className="menu bg-aztecGold uppercase flex gap-4 text-xl p-4 w-80  text-base-content"
          >
            <li>
              <NavLink to="/dashboard/">
                {" "}
                <span>
                  <FaHome />{" "}
                </span>{" "}
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservation">
                {" "}
                <span>
                  <FaCalendarAlt />{" "}
                </span>{" "}
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/payment-history">
                {" "}
                <span>
                  <FaWallet />{" "}
                </span>{" "}
                payment history
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mycart">
                <span>
                  {" "}
                  <FaCartArrowDown />{" "}
                </span>{" "}
                My Cart <span className="ml-4
                 p-4
                  flex items-center justify-center
                  bg-white
                 text-aztecGold
                 text-semibold
                 rounded-full  
                 w-8 h-8">{cart?.length}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/add-review">
                <span>
                  <FaStackExchange />
                </span>{" "}
                Add Review{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-bookings">
                <span> <FaCalendarCheck /> </span> MY Booking{" "}
              </NavLink>
            </li>

            {/* front end connection below */}
            <li className="divider"></li>
            <li>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <Link to="/menu">
                {" "}
                <FaHamburger /> Our Menu
              </Link>
            </li>
            <li>
              <NavLink to="/order/salad">Our Menu</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
