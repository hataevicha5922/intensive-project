import s from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={s["user"]}>
      <img
        src="../../../public/avatar.png"
        alt="Avatar"
        className={s["avatar"]}
      />
      <div className={s["email"]}>{"Email"}</div>
    </div>
  );
};
