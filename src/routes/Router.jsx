import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./../components/layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
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
    ],
  },
]);
