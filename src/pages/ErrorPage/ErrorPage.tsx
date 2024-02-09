import Headling from "../../components/Headling/Headling";
import { Logo } from "../../components/Logo";

import s from "./ErrorPage.module.css";

export const ErrorPage = () => {
  return (
    <div className={s["error-wrapper"]}>
      <Logo />
      <Headling>Page not found 404</Headling>
      <img
        src="../../../public/ErrorPage.png"
        alt="Error"
        className={s["error-image"]}
      />
    </div>
  );
};
