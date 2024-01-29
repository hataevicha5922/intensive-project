/* eslint-disable no-console */
import { Link } from "react-router-dom";
import s from "./Login.module.css";
import { auth } from "../../config/firebase-config";

import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";
import { FormEvent } from "react";

type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

const Login = () => {
  console.log(auth);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & LoginForm;
    console.log(target.email.value);
    console.log(target.password.value);
  };

  return (
    <div className={s["login"]}>
      <Headling>LogIn</Headling>
      <form className={s["form"]} onSubmit={submit}>
        <div className={s["field"]}>
          <label htmlFor="email">Email</label>
          <Input id="email" placeholder="Email" name="email" />
        </div>
        <div className={s["field"]}>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            name="password"
          />
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

export default Login;
