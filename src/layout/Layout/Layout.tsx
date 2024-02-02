import s from "./Layout.module.css";

import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

export function Layout() {
  return (
    <div className={s["layout"]}>
      <Header />
      <div className={s["content"]}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </div>
    </div>
  );
}
