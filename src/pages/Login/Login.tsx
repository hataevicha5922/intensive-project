import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../../config/firebase-config";
import { UserCredentialsType } from "../../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../config/yup-schema";
import { useUserAuth } from "../../hooks/useUserAuth";

import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo";

import s from "./Login.module.css";

export const Login = () => {
  const navigate = useNavigate();
  const { logInUser } = useUserAuth("user");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentialsType>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const { email, uid } = userCredential.user;
        const user = { email, uid };
        logInUser(user);

        navigate("/");
      })
      .catch((error) => {
        throw new Error(error);
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
