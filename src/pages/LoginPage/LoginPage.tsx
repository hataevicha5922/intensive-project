import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserCredentialsType } from "../../types/types";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Button/Button";
import { Headling } from "../../components/Headling";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo";
import { useAppDispatch } from "../../hooks/hook";
import { addUser } from "../../store";
import { logInUser, logInUserInDB } from "../../utils";
import { schema } from "../../config/yup-schema";

import s from "./LoginPage.module.css";

export const LoginPage = () => {
  const [errorLogIn, setErrorLogIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentialsType>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data) => {
    logInUserInDB({
      data,
      successHandler: (userCredential) => {
        const user = userCredential.user!;
        const userData = { email: user.email!, uid: user.uid! };

        logInUser(userData);
        dispatch(addUser(userData));
        navigate("/");
      },
      errorHandler: (error: string) => {
        setErrorLogIn(true);
        throw new Error(error);
      },
    });
  });

  return (
    <div className={s["login"]}>
      <div className={s["login-header"]}>
        <Headling>LogIn</Headling>
        <Logo />
      </div>
      <form className={s["form"]} onSubmit={onSubmit}>
        <div className={s["field"]}>
          <label htmlFor="email">Email</label>
          <Input
            {...register("email")}
            id="email"
            placeholder="Email"
            name="email"
          />
          <p className={s["error"]}>{errors.email?.message}</p>
        </div>
        <div className={s["field"]}>
          <label htmlFor="password">Password</label>
          <Input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Password"
            name="password"
          />
          <p className={s["error"]}>{errors.password?.message}</p>
          {errorLogIn && (
            <p className={s["error"]}>Invalid email or password</p>
          )}
        </div>
        <Button appearence="big">LogIn</Button>
      </form>
      <div className={s["links"]}>
        <div>You don't have an account</div>
        <Link to="/auth/register">Registration</Link>
      </div>
    </div>
  );
};
