import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";


const MainLayout = () => {
    return (
      <div className="max-w-screen-xl mx-auto pl-2 pr-2">
        <Header />
        <div>
          <Outlet />
        </div>

        <Footer />
      </div>
    );
};

export default MainLayout;