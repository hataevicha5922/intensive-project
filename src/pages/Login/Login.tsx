import { Link, useNavigate } from "react-router-dom";
import s from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../../config/firebase-config";
import { UserCredentialsType } from "../../types";

import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../config/yup-schema";

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentialsType>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });

  return (
    <div className={s["login"]}>
      <Headling>LogIn</Headling>
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
        </div>
        <Button appearence="big">LogIn</Button>
      </form>
      <div className={s["links"]}>
        <div>You don't have account</div>
        <Link to="/auth/register">Registration</Link>
      </div>
    </div>
  );
};
