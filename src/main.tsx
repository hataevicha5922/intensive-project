import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";

import { Layout } from "./layout/Layout/Layout";
import { Error } from "./pages/Error/Error";
import { Film } from "./pages/Film";
import { AuthLayout } from "./layout/Auth/AuthLayout";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

import "./index.css";
import { SearchPage } from "./pages/SearchPage";
import { History } from "./pages/History";
import { Favorites } from "./pages/Favorites";

export const Films = lazy(() => import("./pages/Films/Films"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={"Loading..."}>
            <Films />
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
