import { Outlet, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

import { useTheme } from "../../context/ThemeContext";
import { useAppSelector } from "../../hooks";
import { getUserSelector } from "../../store";
import { useEffect } from "react";

import s from "./Layout.module.css";

export const MainLayout = ({ isAuth }: { isAuth: boolean }) => {
  const user = useAppSelector(getUserSelector)!;
  const { isDark } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth && !user?.email) {
      navigate("/auth/login");
    }
  }, [isAuth, user, navigate]);

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
