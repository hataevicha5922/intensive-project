import { NavLink } from "react-router-dom";
import cn from "classnames";

import s from "./Logo.module.css";

export const Logo = () => (
  <div className={s["logo"]}>
    <NavLink
      to="/"
      className={({ isActive }) =>
        cn(s["link"], {
          [s.active]: isActive,
        })
      }
    >
      <img
        src="../../../public/film-camera-svgrepo-com.svg"
        alt="Logo"
        className={s["logo-img"]}
      />
      KiNo
    </NavLink>
  </div>
);
