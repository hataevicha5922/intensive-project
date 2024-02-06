import { ChangeEvent, useState } from "react";
import { FilmSearchResults } from "../../components/FilmSearchResults";
import Headling from "../../components/Headling/Headling";

import s from "./SearchPage.module.css";
import { useDebounce } from "../../hooks/useDebounce";

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  return (
    <div className={s["search"]}>
      <div className={s["search-header"]}>
        <Headling>Search</Headling>
        <div className={s["input-wrapper"]}>
          <input
            type="text"
            onChange={(e) => changeHandler(e)}
            value={searchTerm}
            className={s["input"]}
            placeholder="Search"
          />
          <img
            className={s["search-icon"]}
            src="../../../public/search-svgrepo-com.svg"
            alt="Search"
          />
        </div>
      </div>
      <FilmSearchResults searchTerm={debouncedSearchTerm} />
    </div>
  );
};
