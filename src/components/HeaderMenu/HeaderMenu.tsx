import { NavLink } from "react-router-dom";
import cn from "classnames";

import { useAppSelector } from "../../hooks";
import { getUserSelector } from "../../store";
import { MENU_LIST } from "./constants";

import s from "./HeaderMenu.module.css";

export const HeaderMenu = () => {
  const user = useAppSelector(getUserSelector)!;

  return (
    <div className={s["menu"]}>
      {MENU_LIST.map((item) => {
        return !item.isAuth || (item.isAuth && user?.email) ? (
          <NavLink
            className={({ isActive }) =>
              cn(s["menu-link"], {
                [s.active]: isActive,
              })
            }
            to={item.route}
          >
            {item.title}
          </NavLink>
        ) : (
          <></>
        );
      })}
    </div>
  );
};
