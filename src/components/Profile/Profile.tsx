import s from "./Profile.module.css";

export const Profile = () => {
  const email = localStorage.getItem("email");
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
