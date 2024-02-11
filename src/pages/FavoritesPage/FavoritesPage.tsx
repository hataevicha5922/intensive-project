import { FilmCart } from "../../components/FilmCart";
import { Headling } from "../../components/Headling";
import { useAppSelector } from "../../hooks";
import { getFavoriteFilmsSelector } from "../../store";

import s from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const favoritesFilms = useAppSelector(getFavoriteFilmsSelector);

  return (
    <div className={s["favorites-wrapper"]}>
      <Headling>Favorites</Headling>
      <div className={s["favorites-films"]}>
        {favoritesFilms.length === 0 && <h2>Favorites list is empty</h2>}
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
    </div>
  );
}
