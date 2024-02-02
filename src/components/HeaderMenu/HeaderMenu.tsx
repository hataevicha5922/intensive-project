import { NavLink } from "react-router-dom";
import cn from "classnames";
import s from "./HeaderMenu.module.css";

export const HeaderMenu = () => {
  return (
    <div className={s["menu"]}>
      <NavLink
        className={({ isActive }) =>
          cn(s["menu-link"], {
            [s.active]: isActive,
          })
        }
        to="/search"
      >
        Search
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          cn(s["menu-link"], {
            [s.active]: isActive,
          })
        }
        to="/history"
      >
        History
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          cn(s["menu-link"], {
            [s.active]: isActive,
          })
        }
        to="/favorites"
      >
        Favorites
      </NavLink>
    </div>
  );
};
