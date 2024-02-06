import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../hooks/useUserAuth";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/userSlice";

import Button from "../Button/Button";
import { Profile } from "../Profile";

import s from "./ProfileGroup.module.css";
import { AppDispatch } from "../../store/store";

export const ProfileGroup = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { logOutUser } = useUserAuth("user");

  const logOutHandler = () => {
    logOutUser();
    dispatch(logOut());
    navigate("/auth/login");
  };

  return (
    <>
      <Profile />
      <Button className={s["exit"]} onClick={logOutHandler}>
        LogOut
      </Button>
    </>
  );
};
