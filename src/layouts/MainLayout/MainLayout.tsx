import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

import s from "./Layout.module.css";
import { useTheme } from "../../context/ThemeContext";

export const MainLayout = () => {
  const { isDark } = useTheme();

  return (
    <div className={`${s["layout"]} ${isDark ? s["dark"] : s["light"]}`}>
      <Header />
      <div className={s["content"]}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </div>
    </div>
  );
};
