import { useSelector } from "react-redux";

import { getUserSelector } from "../../store/userSlice/selectors";

import { Logo } from "../Logo/Logo";
import { RegistrationGroup } from "../RegistartionGroup";
import { ProfileGroup } from "../ProfileGroup";
import { HeaderMenu } from "../HeaderMenu";

import s from "./Header.module.css";

export const Header = () => {
  const user = useSelector(getUserSelector)!;

  return (
    <div className={s["header"]}>
      <div className={s["header-wrapper"]}>
        <Logo />
        {user && <HeaderMenu />}
        <div className={s["info"]}>
          {user ? <ProfileGroup /> : <RegistrationGroup />}
        </div>
      </div>
    </div>
  );
};
