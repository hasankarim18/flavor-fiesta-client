import { useContext, useEffect, useState } from 'react';
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../../Provider/AuthProvider';
import { FaCartArrowDown } from "react-icons/fa";
import useCart from '../../../../../hooks/useCart';


const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false)
  const { logout, user, setUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const [cart] = useCart();

  const cartData = cart?.data?.data

  useEffect(() => {
    const handleScroll = ()=> {
      let isScrolled = window.scrollY > 400;
      setScrollNav(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return ()=> {
      window.removeEventListener('scroll',handleScroll)
    }

  }, [])


  const handleLogout = ()=> {
 
      logout()
      .then(()=> {
        setUser(null)      
        navigate('/')
      })
      .catch(()=> {
        console.log("logout failed");
      })
  }
  



    const navOptions = (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Our Menu</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>

        <li>
          <Link to="/order/salad">Order Food</Link>
        </li>
        <li>
          {user ? (
            <button className="btn btn-ghost" onClick={handleLogout}>
              Sing Out
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li className="flex items-center text-xl">
          <Link to="/dashboard/mycart" className="badge badge-secondary " >
            <FaCartArrowDown className="text-2xl" />{" "}
            <span>{cartData?.length}</span>
          </Link>
        </li>
      </>
    );


    return (
      <div
        className={`${!scrollNav ? "navbar-scroll" : "navbar-scroll-active"} `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Flavor Fiesta</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    );
};

export default Navbar;