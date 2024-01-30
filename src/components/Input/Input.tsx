import { forwardRef } from "react";
import s from "./Input.module.css";
import cn from "classnames";
import { InputProps } from "./Input.props";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { isValid = true, className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(s["input"], className, {
        [s["invalid"]]: isValid,
      })}
      {...props}
    />
  );
});


