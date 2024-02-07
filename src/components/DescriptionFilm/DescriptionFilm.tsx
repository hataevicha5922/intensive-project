
import { useMemo } from "react";

import { useAppSelector } from "../../hooks";
import { useFavorites } from "../../hooks/useFavorites";
import { getUserSelector } from "../../store";
import { FilmInterface } from "../../types/types";

import s from "./DescriptionFilm.module.css";

export const DescriptionFilm = ({ film }: { film: FilmInterface }) => {
  const { nameRu, description, ratingKinopoisk, year } = film;

  const user = useAppSelector(getUserSelector)!;
  const userEmail = useMemo(() => user?.email, [user]);

  const { addToFavorites } = useFavorites(`${userEmail}`);

  const addToFavoritesHandler = () => {
    if (userEmail) {
      addToFavorites(film);
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
        <button
          className={s["favorites-button"]}
          onClick={addToFavoritesHandler}
        >
          Favorites
        </button>
      </div>
    </div>
  );
};
