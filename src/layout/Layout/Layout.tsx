import s from "./Layout.module.css";

import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export function Layout() {

  return (
    <div className={s["layout"]}>
      <Header/>
      <div className={s["content"]}>
        <Outlet />
      </div>
    </div>
  );
}
