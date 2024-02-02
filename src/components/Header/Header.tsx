import { createContext } from "react";
import { useUserAuth } from "../../hooks/useUserAuth";

import { Logo } from "../Logo/Logo";
import { RegistrationGroup } from "../RegistartionGroup";
import { ProfileGroup } from "../ProfileGroup";
import { HeaderMenu } from "../HeaderMenu";
import { UserContextInterface } from "../../api/api.interface";

import s from "./Header.module.css";

export const UserContext = createContext<UserContextInterface>({
  email: "",
  uid: "",
});

export const Header = () => {
  const { getUser } = useUserAuth("user");

  const user = getUser();

  return (
    <div className={s["header"]}>
      <div className={s["header-wrapper"]}>
        <Logo />
        {user && <HeaderMenu />}
        <div className={s["info"]}>
          {user ? (
            <UserContext.Provider value={JSON.parse(user)}>
              <ProfileGroup />
            </UserContext.Provider>
          ) : (
            <RegistrationGroup />
          )}
        </div>
      </div>
    </div>
  );
};
