import { ChangeEvent, useState } from "react";

import { useDebounce } from "../../hooks/useDebounce";

import { FilmSearchResults } from "../../components/FilmSearchResults";
import Headling from "../../components/Headling/Headling";

import s from "./SearchPage.module.css";

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 5000);

  return (
    <div className={s["search"]}>
      <div className={s["search-header"]}>
        <Headling>Search</Headling>
     
      </div>
      <FilmSearchResults searchTerm={debouncedSearchTerm} />
    </div>
  );
};
