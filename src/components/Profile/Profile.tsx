import { useSelector } from "react-redux";

import { getUserSelector } from "../../store/userSlice/selectors";

import s from "./Profile.module.css";

export const Profile = () => {
  const userInfo = useSelector(getUserSelector)!;

  return (
    <div className={s["user"]}>
      <img
        src="../../../public/avatar.png"
        alt="Avatar"
        className={s["avatar"]}
      />
      <div className={s["email"]}>{userInfo.email}</div>
    </div>
  );
};
