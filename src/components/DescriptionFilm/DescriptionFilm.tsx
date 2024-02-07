import { useContext } from "react";
import { getAuth } from "firebase/auth";
import { auth } from "../../config/firebase-config";

import { useFavorites } from "../../hooks/useFavorites";

import { MyDescriptionFilmContext } from "../../pages/FilmPage";

import s from "./DescriptionFilm.module.css";

export const DescriptionFilm = () => {
  const { description, nameRu, ratingKinopoisk, year, posterUrl, id } =
    useContext(MyDescriptionFilmContext);
  const isAuth = getAuth();
  const userId = auth.currentUser?.uid;
  const userEmail = isAuth.currentUser?.email;

  const { addToFavorites } = useFavorites(`${userEmail}`);

  const addToFavoritesHandler = () => {
    if (userId) {
      addToFavorites({
        description: description,
        nameRu: nameRu,
        posterUrl: posterUrl,
        ratingKinopoisk: ratingKinopoisk,
        year: year,
        id: id,
      });
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
