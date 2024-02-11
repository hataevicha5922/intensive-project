import { ChangeEvent, useState, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useDebounce } from "../../hooks";
import { setSearchWord } from "../../store/searchWordSlice/searchWordSlice";
import { useSearchFilmQuery } from "../../store";

import s from "./SearchInput.module.css";
import { Suggest } from "../Suggest";

export const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isShowSuggest, setIsShowSuggest] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const searchText = useDebounce(searchTerm, 1000);

  const { data } = useSearchFilmQuery(searchText)!;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onKeyDownHandler = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      dispatch(setSearchWord(searchTerm));
      navigate("/search");
    }
  };

  const onClickHandler = async () => {
    dispatch(setSearchWord(searchTerm));
    navigate("/search");
  };

  const onFocusHandler = () => setIsShowSuggest(true);

  const onBlurHandler = () => setTimeout(() => setIsShowSuggest(false), 200);

  return (
    <div className={s["input-wrapper"]}>
      <input
        type="text"
        onChange={(e) => onChangeHandler(e)}
        value={searchTerm}
        className={s["input"]}
        placeholder="Search"
        onKeyDown={(e) => onKeyDownHandler(e)}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      />
      <img
        className={s["search-icon"]}
        src="../../../public/search-svgrepo-com.svg"
        alt="Search"
      />
      <button className={s["search-button"]} onClick={onClickHandler}>
        Search
      </button>
      {searchText?.trim() && data && isShowSuggest && (
        <Suggest films={data} searchText={searchText} />
      )}
    </div>
  );
};
