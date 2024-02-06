/* eslint-disable no-console */
import { useUserAuth } from "../../hooks/useUserAuth";

import { Logo } from "../Logo/Logo";
import { RegistrationGroup } from "../RegistartionGroup";
import { ProfileGroup } from "../ProfileGroup";
import { HeaderMenu } from "../HeaderMenu";

import s from "./Header.module.css";

export const Header = () => {
  const { getUser } = useUserAuth("user");
  const user = getUser()!;

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
