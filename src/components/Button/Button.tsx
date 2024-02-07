import { FC } from "react";
import s from "./Button.module.css";
import cn from "classnames";
import { ButtonProps } from "./Button.props";

export const Button: FC<ButtonProps> = ({
  children,
  className,
  appearence = "small",
  ...props
}) => {
  return (
    <button
      className={cn(s["button"], s["accente"], className, {
        [s["small"]]: appearence === "small",
        [s["big"]]: appearence === "big",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
// export default Button;
