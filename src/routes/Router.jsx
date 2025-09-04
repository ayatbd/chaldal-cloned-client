import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./../components/layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../auth/pages/LogIn";
import Sidebar from "../shared/SideBar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Sidebar></Sidebar>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sidebar",
        element: <Sidebar></Sidebar>,
      },
    ],
  },
]);
