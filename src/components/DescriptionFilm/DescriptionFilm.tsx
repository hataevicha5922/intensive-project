/* eslint-disable no-console */
import { useContext } from "react";
// import { useAppDispatch } from "../../hooks/hook";
import { MyDescriptionFilmContext } from "../../pages/Film";
// import { addToFavorites } from "../../store/favoritesSlice";
import s from "./DescriptionFilm.module.css";
import { useFavorites } from "../../hooks/useFavorites";
import { getAuth } from "firebase/auth";
import { auth } from "../../config/firebase-config";

export const DescriptionFilm = () => {
  const { description, nameRu, ratingKinopoisk, year, posterUrl, id } = useContext(
    MyDescriptionFilmContext
  );
  const isAuth = getAuth();
  const userId = auth.currentUser?.uid;
  const userEmail = isAuth.currentUser?.email;

  // const dispatch = useAppDispatch();

  const { addToFavorites } = useFavorites(`${userEmail}`);

  const addToFavoritesHandler = () => {
    if (userId) {
      addToFavorites({
        description: description,
        nameRu: nameRu,
        posterUrl: posterUrl,
        ratingKinopoisk: ratingKinopoisk,
        year: year,
        id: id
      });
    }
    // addToFavorites({
    //   description: description!,
    //   nameRu: nameRu!,
    //   posterUrl: posterUrl!,
    //   ratingKinopoisk: ratingKinopoisk!,
    //   year: year!,
    // })

    //   )
    // }
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
