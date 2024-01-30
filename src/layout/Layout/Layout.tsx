/* eslint-disable no-console */
import { useMemo, useState } from "react";
import Button from "../../components/Button/Button";
import s from "./Layout.module.css";
import cn from "classnames";
import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
  const [isAuth, setIsAuth] = useState(true);
  const email = useMemo(() => localStorage.getItem("email"), []);

  return (
    <div className={s["layout"]}>
      <div className={s["sidebar"]}>
        <div className={s["user"]}>
          <img
            src="../../../public/avatar.png"
            alt="Avatar"
            className={s["avatar"]}
          />
          <div className={s["email"]}>{isAuth ? email : null}</div>
        </div>
        <div className={s["menu"]}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(s["link"], {
                [s.active]: isActive,
              })
            }
          >
            <img
              src="../../../public/menu-svgrepo-com.svg"
              alt="Menu"
              className={s["menu-img"]}
            />
            Menu
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn(s["link"], {
                [s.active]: isActive,
              })
            }
          >
            <img
              src="../../../public/cart-3-svgrepo-com.svg"
              alt="Cart"
              className={s["menu-img"]}
            />
            Cart
          </NavLink>
        </div>
        <Button className={s["exit"]}>
          <img
            src="../../../public/off-on-power-svgrepo-com.svg"
            alt="LogOut"
          />
          LogOut
        </Button>
      </div>
      <div className={s["content"]}>
        <Outlet />
      </div>
    </div>
  );
}
