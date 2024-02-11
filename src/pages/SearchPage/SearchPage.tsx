import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { FilmSearchResults } from "../../components/FilmSearchResults";
import { Headling } from "../../components/Headling";

import s from "./SearchPage.module.css";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("searchText"));

  useEffect(() => {
    setSearchTerm(searchParams.get("searchText"));
  }, [searchParams]);

  return (
    <div className={s["search"]}>
      <div className={s["search-header"]}>
        <Headling>Search</Headling>
      </div>
      <FilmSearchResults searchTerm={searchTerm || ""} />
    </div>
  );
};
