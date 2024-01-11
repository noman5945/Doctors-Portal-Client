import React, { useContext } from "react";
import Loader from "../../../Pages/Shared/Loader/Loader";
import useAdmin from "../../../hooks/useAdmin";
import { AuthContext } from "../../../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, adminLoader] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || adminLoader) {
    return <Loader></Loader>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
