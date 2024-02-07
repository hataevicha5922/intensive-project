import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { MainLayout, AuthLayout } from "../../layouts";
import {
  SearchPage,
  FilmPage,
  LoginPage,
  RegisterPage,
  ErrorPage,
} from "../../pages";
import { useUserAuth } from "../../hooks";

export const FilmsPage = lazy(() => import("../../pages/FilmsPage/FilmsPage"));
export const HistoryPage = lazy(
  () => import("../../pages/HistoryPage/HistoryPage")
);
export const FavoritesPage = lazy(
  () => import("../../pages/FavoritesPage/FavoritesPage")
);

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
        element: (
          <Suspense fallback={"Loading"}>
            <HistoryPage />
          </Suspense>
        ),
      },
      {
        path: "favorites",
        element: (
          <Suspense fallback={"Loading..."}>
            <FavoritesPage />
          </Suspense>
        ),
      },
      {
        path: "/film/:id",
        element: <FilmPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export const MainRouter = () => {
  useUserAuth();

  return <RouterProvider router={router} />;
};
