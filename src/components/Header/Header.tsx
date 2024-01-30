import { NavLink, useNavigate } from "react-router-dom";
import s from "./Header.module.css";
import cn from "classnames";

import Button from "../Button/Button";
import { Profile } from "../Profile/Profile";
import Search from "../Search/Search";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={s["header"]}>
      <div className={s["header-wrapper"]}>
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
        <Search placeholder="Search" />
        <div className={s["info"]}>
          <Profile />
          <Button
            className={s["exit"]}
            onClick={() => {
              navigate("/auth/login");
            }}
          >
            LogOut
          </Button>
        </div>
      </div>
    </div>
  );
};
