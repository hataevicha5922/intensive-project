import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { MainLayout, AuthLayout } from "../../layouts";
import {
  SearchPage,
  History,
  Favorites,
  Film,
  Login,
  Register,
  Error,
} from "../../pages";

export const FilmsPage = lazy(() => import("../../pages/FilmsPage/FilmsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={"Loading..."}>
            <FilmsPage />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "/film/:id",
        element: <Film />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export const MainRouter = () => {
  return <RouterProvider router={router} />;
};
