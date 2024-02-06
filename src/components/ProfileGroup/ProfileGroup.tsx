import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logOut } from "../../store/userSlice/userSlice";
import Button from "../Button/Button";
import { Profile } from "../Profile";
import { AppDispatch } from "../../store/store";
import { logOutUser } from "../../utils";

import s from "./ProfileGroup.module.css";

export const ProfileGroup = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

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
