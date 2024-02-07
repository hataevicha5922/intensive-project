import { Logo } from "../Logo/Logo";
import { RegistrationGroup } from "../RegistartionGroup";
import { ProfileGroup } from "../ProfileGroup";
import { HeaderMenu } from "../HeaderMenu";
import { useAppSelector } from "../../hooks";
import { getUserSelector } from "../../store";

import s from "./Header.module.css";

export const Header = () => {
  const user = useAppSelector(getUserSelector)!;

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
