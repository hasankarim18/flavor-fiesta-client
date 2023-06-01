
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <h1 className="text-5xl">Loading...</h1>;
  } else {
    if (user && isAdmin) {
      return <>{children}</>;
    } else {
      return <Navigate to="/login" state={{ from: location }} />;
    }
  }
};

export default AdminRoute;
