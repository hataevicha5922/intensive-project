import { useContext } from "react";
import s from "./Profile.module.css";
import { UserContext } from "../Header";

export const Profile = () => {
  const { email } = useContext(UserContext);

  return (
    <div className={s["user"]}>
      <img
        src="../../../public/avatar.png"
        alt="Avatar"
        className={s["avatar"]}
      />
      <div className={s["email"]}>{email}</div>
    </div>
  );
};
