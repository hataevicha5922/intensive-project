import { useSelector } from "react-redux";

import { Logo } from "../Logo/Logo";
import { RegistrationGroup } from "../RegistartionGroup";
import { ProfileGroup } from "../ProfileGroup";
import { HeaderMenu } from "../HeaderMenu";
import { getUserSelector } from "../../store/userSlice/selectors";

import s from "./Header.module.css";

export const Header = () => {
  const user = useSelector(getUserSelector)!;
  console.log("user", user);
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
