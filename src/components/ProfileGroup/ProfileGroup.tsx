import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/useUserAuth";

import Button from "../Button/Button";
import { Profile } from "../Profile";

import s from "./ProfileGroup.module.css";

export const ProfileGroup = () => {
  const navigate = useNavigate();
  const { logOutUser } = useUserAuth("user");

  return (
    <>
      <Profile />
      <Button
        className={s["exit"]}
        onClick={() => {
          navigate("/");
          logOutUser();
        }}
      >
        LogOut
      </Button>
    </>
  );
};
