import s from "./Profile.module.css";
import { useUserAuth } from "../../hooks/useUserAuth";

export const Profile = () => {
  const { getUser } = useUserAuth("user");
  const user = getUser()!;
  const userInfo = JSON.parse(user);

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
