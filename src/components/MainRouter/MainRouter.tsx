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
import { PrivateRoute } from "../PrivateRoute";

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
        path: "/film/:id",
        element: <FilmPage />,
      },
      {
        path: "/history",
        element: (
          <PrivateRoute>
            <Suspense fallback={"Loading"}>
              <HistoryPage />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "favorites",
        element: (
          <PrivateRoute>
            <Suspense fallback={"Loading..."}>
              <FavoritesPage />
            </Suspense>
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

export const MainRouter = () => <RouterProvider router={router} />;
