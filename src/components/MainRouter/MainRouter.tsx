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
    element: <MainLayout isAuth={false} />,
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
    ],
  },
  {
    path: "/",
    element: <MainLayout isAuth={true} />,
    children: [
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

export const MainRouter = () => <RouterProvider router={router} />;
