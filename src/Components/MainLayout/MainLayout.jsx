import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";


const MainLayout = () => {

    const location = useLocation();

    const noHeaderFooter = location.pathname.includes("login");



    return (
      <div className="max-w-screen-xl mx-auto ">
        {
          !noHeaderFooter &&  <Header />
        }
        {/* <Header /> */}
        <div>
          <Outlet />
        </div>

        {
          !noHeaderFooter && <Footer />
        }

      </div>
    );
};

export default MainLayout;