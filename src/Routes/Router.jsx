import { createBrowserRouter, Navigate } from "react-router";
import HomLayout from "../Layouts/HomLayout";
import HomePage from "../Pages/HomePage";
import Loading from "../Components/Loading";
import AuthLayout from "../Layouts/AuthLayout";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import ToyDetails from "../Layouts/ToyDetails";
import PrivateRoute from "../Components/PrivateRoute";
import Profile from "../Pages/Profile";
import ForgotPassword from "../Components/ForgotPassword";
import Errorpage from "../Components/Errorpage";
import ToyGallery from "../Components/ToyGallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomLayout />,
    children: [
      // ✅ Redirect root "/" to "/home"
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <HomePage />,
        loader: () => fetch("/toys.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/details/:id",
    element: (
      <PrivateRoute>
        <ToyDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/toys.json"),
    hydrateFallbackElement: <Loading />,
  },
  {
    path: "/gallery",
    element: (
      <PrivateRoute>
        <ToyGallery />
      </PrivateRoute>
    ),
    loader: () => fetch("/toys.json"),
    hydrateFallbackElement: <Loading />,
  },
  {
    path: "*",
    element: <Errorpage />,
  },
]);

export default router;
