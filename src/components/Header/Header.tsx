import {  useNavigate } from "react-router-dom";
import s from "./Header.module.css";

import Button from "../Button/Button";
import { Profile } from "../Profile/Profile";
import Search from "../Search/Search";
import { useState } from "react";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={s["header"]}>
      <div className={s["header-wrapper"]}>
       <Logo/>
        <Search placeholder="Search" />
        <div className={s["info"]}>
          {isAuth && <Profile />}
          {isAuth ? (
            <Button
              className={s["exit"]}
              onClick={() => {
                setIsAuth(false);
                navigate("/");
              }}
            >
              LogOut
            </Button>
          ) : (
            <Button
              className={s["exit"]}
              onClick={() => {
                setIsAuth(true);
                // navigate("/auth/login");
              }}
            >
              LogIn
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
