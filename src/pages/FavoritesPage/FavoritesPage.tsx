import { FilmCart } from "../../components/FilmCart";
import { useAppSelector } from "../../hooks";
import { getFavoriteFilmsSelector } from "../../store";

import s from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const favoritesFilms = useAppSelector(getFavoriteFilmsSelector);

  return (
    <div className={s["favorites-wrapper"]}>
      {favoritesFilms.map((film) => {
        return (
          <FilmCart
            key={film.id}
            id={film.id}
            image={film.posterUrl}
            name={film.nameRu}
            rating={film.ratingKinopoisk}
            year={film.year}
            title={film.nameRu}
          />
        );
      })}
    </div>
  );
}
