import { useTheme } from "../../context/ThemeContext";
import { themeIcons } from "../../assets";

import s from "./ThemeIcon.module.css";

export const ThemeIcon = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div>
      <img
        src={isDark ? themeIcons.light : themeIcons.dark}
        alt="theme"
        className={s["icon-theme"]}
        onClick={toggleTheme}
      />
    </div>
  );
};
