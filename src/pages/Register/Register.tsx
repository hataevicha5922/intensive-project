import { Link } from "react-router-dom";
import s from "./Register.module.css";
import { auth } from "../../config/firebase-config";

import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";
import { FormEvent } from "react";

const Register = () => {
  
  return (
    <div className={s["login"]}>
      <Headling>Registration</Headling>
      <form className={s["form"]} onSubmit={() => {}}>
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
        <div>I have account</div>
        <Link to="/auth/login">LogIn</Link>
      </div>
    </div>
  );
};

export default Register;
