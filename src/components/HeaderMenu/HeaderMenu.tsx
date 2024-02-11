import { NavLink } from "react-router-dom";
import cn from "classnames";

import { useAppSelector } from "../../hooks";
import { getUserSelector } from "../../store";
import { MENU_LIST } from "./constants";
import { SearchInput } from "../SearchInput";

import s from "./HeaderMenu.module.css";
import { Fragment } from "react";

export const HeaderMenu = () => {
  const user = useAppSelector(getUserSelector)!;

  return (
    <div className={s["menu"]}>
      <SearchInput />
      {MENU_LIST.map((item) => {
        return !item.isAuth || (item.isAuth && user?.email) ? (
          <NavLink
            key={item.id}
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
          <Fragment key={item.id}></Fragment>
        );
      })}
    </div>
  );
};
