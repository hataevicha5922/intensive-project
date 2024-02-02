import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FilmSearchResultsInterface } from "../../api/api.interface";
import { useSearchFilmQuery } from "../../store/filmSlice";

import s from "./FilmSearchResults.module.css";
import { FilmCart } from "../FilmCard";

export const FilmSearchResults = ({
  searchTerm,
}: FilmSearchResultsInterface) => {
  const [filteredSearchTerm, setFilteredSearchTerm] = useState(searchTerm);
  const { data, error, isLoading, isFetching } =
    useSearchFilmQuery(filteredSearchTerm);

  const films = data?.films ?? [];

  useEffect(() => {
    if (searchTerm.length === 0 || searchTerm.length > 4) {
      setFilteredSearchTerm(searchTerm);
    }
  }, [searchTerm]);

  if (error) {
    return <div>Error while fetching films</div>;
  }
  if (isLoading) {
    return <div>Loading films...</div>;
  }
  if (isFetching) {
    return <div>Fetching films</div>;
  }

  if (films.length === 0) {
    return <div>No films found</div>;
  }

  return (
    <div className={s["list-wrapper"]}>
      {films.map((item) => (
        <FilmCart
          key={item.filmId}
          id={item.filmId}
          title={item.nameEn || item.nameRu}
          description={item.type}
          price={+item.year}
          rating={+item.rating || item.ratingVoteCount}
          image={item.posterUrlPreview}
        />
      ))}
    </div>
  );
};

FilmSearchResults.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};