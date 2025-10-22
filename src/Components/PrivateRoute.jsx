import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Navigate } from "react-router";
import Loading from "./Loading";
import { useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
  }
};

export default PrivateRoute;
