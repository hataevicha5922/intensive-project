import { useMemo } from "react";

import { useAppSelector } from "../../hooks";
import { getFavoriteFilmsSelector, getUserSelector } from "../../store";
import { FilmInterface } from "../../types/types";
import { addToFavorites, removeToFavorites } from "../../utils";
import { useNavigate } from "react-router-dom";

import s from "./DescriptionFilm.module.css";

export const DescriptionFilm = ({ film }: { film: FilmInterface }) => {
  const { nameRu, description, ratingKinopoisk, year, id } = film;
  const navigate = useNavigate();
  const favoritesFilms = useAppSelector(getFavoriteFilmsSelector);
  const user = useAppSelector(getUserSelector)!;

  const userEmail = useMemo(() => user?.email, [user]);
  const isFavorite = useMemo<boolean>(
    () => Boolean(favoritesFilms.find((film) => film.id === id)),
    [favoritesFilms, id]
  );

  const addToFavoritesHandler = () => {
    if (userEmail) {
      addToFavorites(film, userEmail);
    }
  };

  const removeFromFavoritesHandler = () => {
    if (userEmail) {
      removeToFavorites(id, userEmail);
    }
  };

  return (
    <div className={s["film-description"]}>
      <h2>{nameRu}</h2>
      <p>{description}</p>
      <div className={s["film-description-footer"]}>
        <div className={s["film-description-statistics"]}>
          <p className={s["year"]}>
            Year <span> {year} </span>
          </p>
          <p className={s["rating"]}>
            Raiting <span> {ratingKinopoisk}</span>
          </p>
        </div>
        {isFavorite ? (
          <button
            className={s["favorites-button-remove"]}
            onClick={removeFromFavoritesHandler}
          >
            remove from Favorites
          </button>
        ) : (
          <button
            className={s["favorites-button"]}
            onClick={
              user ? addToFavoritesHandler : () => navigate("/auth/login")
            }
          >
            add to Favorites
          </button>
        )}
      </div>
    </div>
  );
};
