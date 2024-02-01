import { useUserAuth } from "../../hooks/useUserAuth";

import Search from "../Search/Search";
import { Logo } from "../Logo/Logo";
import { RegistrationGroup } from "../RegistartionGroup";

import s from "./Header.module.css";
import { ProfileGroup } from "../ProfileGroup";

export const Header = () => {
  const { getUser } = useUserAuth("user");

  const user = getUser();

  return (
    <div className={s["header"]}>
      <div className={s["header-wrapper"]}>
        <Logo />
        <Search placeholder="Search" />
        <div className={s["info"]}>
          {user ? <ProfileGroup /> : <RegistrationGroup />}
        </div>
      </div>
    </div>
  );
};
