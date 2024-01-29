/* eslint-disable no-console */
import { Link, useNavigate } from "react-router-dom";
import s from "./Register.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useForm } from "react-hook-form";

import { UserCredentialsType } from "../../types";
import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: errror,
  } = useForm<UserCredentialsType>({});

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });

  return (
    <div className={s["login"]}>
      <Headling>Registration</Headling>
      <form className={s["form"]} onSubmit={onSubmit}>
        <div className={s["field"]}>
          <label htmlFor="email">Email</label>
          <Input
            {...register("email")}
            id="email"
            placeholder="Email"
            name="email"
          />
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
        </div>
        <Button appearence="big">LogIn</Button>
      </form>
      <div className={s["links"]}>
        <div>I have account</div>
        <Link to="/auth/login">LogIn</Link>
      </div>
    </div>
  );
};
