import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector, useDebounce } from "../../hooks";
import { getUserSelector, useSearchFilmQuery } from "../../store";
import { Suggest } from "../Suggest";
import { addToHistory } from "../../utils";

import s from "./SearchInput.module.css";

export const SearchInput = () => {
  const user = useAppSelector(getUserSelector)!;

  const [searchTerm, setSearchTerm] = useState("");
  const [isShowSuggest, setIsShowSuggest] = useState(false);

  const navigate = useNavigate();
  const searchText = useDebounce(searchTerm, 200);

  const { data } = useSearchFilmQuery(searchText)!;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onSubmitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (user?.email) {
      await addToHistory(searchTerm, user.email);
    }
    navigate(`/search?searchText=${searchTerm}`);
  };

  const onFocusHandler = () => setIsShowSuggest(true);

  const onBlurHandler = () => setTimeout(() => setIsShowSuggest(false), 200);

  return (
    <div className={s["input-wrapper"]}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          onChange={(e) => onChangeHandler(e)}
          value={searchTerm}
          className={s["input"]}
          placeholder="Search"
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
        />
        <img
          className={s["search-icon"]}
          src="../../../public/search-svgrepo-com.svg"
          alt="Search"
        />
        <button className={s["search-button"]}>Search</button>
      </form>
      {searchText?.trim() && data && isShowSuggest && (
        <Suggest films={data} searchText={searchText} />
      )}
    </div>
  );
};
