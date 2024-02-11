import PropTypes from "prop-types";

import { useSearchFilmQuery } from "../../store";

import { FilmCart } from "../FilmCart";
import { FilmSearchResultsInterface } from "./FilmSearchResult.props";

import s from "./FilmSearchResults.module.css";

export const FilmSearchResults = ({
  searchTerm,
}: FilmSearchResultsInterface) => {
  const { data } = useSearchFilmQuery(searchTerm);

  if (data) {
    return (
      <div className={s["list-wrapper"]}>
        {data.map((item) => (
          <FilmCart
            key={item.filmId}
            id={item.filmId}
            title={item.nameEn || item.nameRu}
            rating={+item.rating || item.ratingVoteCount}
            image={item.posterUrlPreview}
            name={item.nameRu}
            year={+item.year}
          />
        ))}
      </div>
    );
  }
};

FilmSearchResults.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
