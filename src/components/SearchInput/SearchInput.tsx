import { ChangeEvent, useState, KeyboardEvent } from "react";

import { useAppDispatch } from "../../hooks";
import { setSearchWord } from "../../store/searchWordSlice/searchWordSlice";

import s from "./SearchInput.module.css";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
