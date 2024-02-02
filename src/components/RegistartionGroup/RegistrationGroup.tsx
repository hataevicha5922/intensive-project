import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

import s from "./RegistrationGroup.module.css";

export const RegistrationGroup = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        className={s["exit"]}
        onClick={() => {
          navigate("/auth/login");
        }}
      >
        LogIn
      </Button>
      <Button
        className={s["exit"]}
        onClick={() => {
          navigate("/auth/register");
        }}
      >
        Registration
      </Button>
    </>
  );
};
