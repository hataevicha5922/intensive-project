import { forwardRef } from "react";
import s from "./Search.module.css";
import cn from "classnames";
import { SearchProps } from "./Search.props.ts";

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input(
  { isValid = true, className, ...props },
  ref
) {
  return (
    <div className={s["input-wrapper"]}>
      <input
        ref={ref}
        className={cn(s["input"], className, {
          [s["invalid"]]: isValid,
        })}
        {...props}
        type="text"
      />
      <img
        className={s["search-icon"]}
        src="../../../public/search-svgrepo-com.svg"
        alt="Search"
      />
    </div>
  );
});

export default Search;
