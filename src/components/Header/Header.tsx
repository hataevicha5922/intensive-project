import { Logo } from "../Logo/Logo";
import { RegistrationGroup } from "../RegistartionGroup";
import { ProfileGroup } from "../ProfileGroup";
import { HeaderMenu } from "../HeaderMenu";
import { useAppSelector } from "../../hooks";
import { getAuthorizeCheckedSelector, getUserSelector } from "../../store";
import { useTheme } from "../../context/ThemeContext";
import { ThemeIcon } from "../ThemeIcon/ThemeIcon";

import s from "./Header.module.css";

export const Header = () => {
  const user = useAppSelector(getUserSelector)!;
  const authorizeChecked = useAppSelector(getAuthorizeCheckedSelector);
  const { isDark } = useTheme();

  return (
    <div className={`${s["header"]} ${isDark ? s["dark"] : s["light"]}`}>
      <div className={s["header-wrapper"]}>
        <Logo />
        <ThemeIcon />
        <HeaderMenu />
        <div className={s["info"]}>
          {authorizeChecked && (
            <>{user ? <ProfileGroup /> : <RegistrationGroup />}</>
          )}
        </div>
      </div>
    </div>
  );
};
