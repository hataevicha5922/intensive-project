import { FC } from "react";

import { WrapperProps } from "./Wrapper.props";

import s from "./Wrapper.module.css";

export const Wrapper: FC<WrapperProps> = () => {
  return <div className={s["wrapper"]}></div>;
};
