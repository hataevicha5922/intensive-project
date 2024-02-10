import { ChangeEvent, useState, KeyboardEvent } from "react";

import s from "./SearchInput.module.css";
import { useLazySearchFilmQuery } from "../../store";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilms] = useLazySearchFilmQuery();
  const navigate = useNavigate();
  //   const debouncedSearchTerm = useDebounce(searchTerm, 5000);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onKeyDownHandler = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      searchFilms(searchTerm);
      navigate("/search");
    }
  };

  const onClickHandler = () => {
    searchFilms(searchTerm);
    navigate("/search");
  };

  return (
    <div className={s["input-wrapper"]}>
      <input
        type="text"
        onChange={(e) => onChangeHandler(e)}
        value={searchTerm}
        className={s["input"]}
        placeholder="Search"
        onKeyDown={(e) => onKeyDownHandler(e)}
      />
      <img
        className={s["search-icon"]}
        src="../../../public/search-svgrepo-com.svg"
        alt="Search"
      />
      <button className={s["search-button"]} onClick={onClickHandler}>
        Search
      </button>
    </div>
  );
};
