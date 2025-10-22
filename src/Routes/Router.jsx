import { createBrowserRouter } from "react-router";
import HomLayout from "../Layouts/HomLayout";
import HomePage from "../Pages/HomePage";
import Loading from "../Components/Loading";
import AuthLayout from "../Layouts/AuthLayout";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import ToyDetails from "../Layouts/ToyDetails";
import PrivateRoute from "../Components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomLayout></HomLayout>,
    children: [
      {
        path: "/home",
        element: <HomePage></HomePage>,
        loader: () => fetch("/toys.json"),

        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/profile",
        element: <h2>my profile</h2>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/details/:id",
    element: (
      <PrivateRoute>
        <ToyDetails></ToyDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/toys.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  // {
  //   path : '/Cart',
  //   element : <h2>Cart section</h2>

  // },
  {
    path: "/*",
    element: <h2>error khaise mama</h2>,
  },
]);
export default router;
