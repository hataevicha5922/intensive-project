import cn from "classnames";
import { HeadlingProps } from "./Headling.props";

import s from "./Headling.module.css";

export const Headling = ({ children, className, ...props }: HeadlingProps) => {
  return (
    <h1 className={cn(className, s["h1"])} {...props}>
      {children}
    </h1>
  );
};

