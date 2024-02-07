import { Outlet } from "react-router-dom";

import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

import s from "./AuthLayout.module.css";

export const AuthLayout = () => {
  return (
    <div className={s["layout"]}>
      <div className={s["logo"]}>
        <img src="/public/auth.svg" alt="AuthLogo" className={s["logo-img"]} />
      </div>
      <div className={s["content"]}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </div>
    </div>
  );
};
