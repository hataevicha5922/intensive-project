import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useTheme } from "../../context/ThemeContext";
import { addToFavorites, removeToFavorites } from "../../utils";
import { useAppSelector } from "../../hooks";
import { getFavoriteFilmsSelector, getUserSelector } from "../../store";

import { FilmCardProps } from "./FilmCart.props";

import s from "./FilmCart.module.css";

export const FilmCart = ({
  name,
  id,
  image,
  rating,
  title,
  year,
}: FilmCardProps) => {
  const user = useAppSelector(getUserSelector)!;
  const { isDark } = useTheme();
  const favoritesFilms = useAppSelector(getFavoriteFilmsSelector);
  const navigate = useNavigate();

  const cardHeadStyles = useMemo(
    () => ({
      backgroundImage: `url(${image})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }),
    [image]
  );

  const isFavorite = useMemo<boolean>(
    () => Boolean(favoritesFilms.find((film) => film.id === id)),
    [favoritesFilms, id]
  );
  const addToFavoritesHandler = () => {
    if (user?.email) {
      addToFavorites(
        {
          nameRu: name,
          posterUrl: image,
          ratingKinopoisk: rating,
          year: year,
          id: id,
          description: name,
        },
        user.email
      );
    }
  };

  const removeFromFavoritesHandler = () => {
    if (user?.email) {
      removeToFavorites(id, user.email);
    }
  };

  return (
    <div className={`${s["card"]} ${isDark ? s["dark"] : s["light"]}`}>
      <div className={s["card-head"]} style={cardHeadStyles}>
        <div className={s["price"]}>{year}</div>
        <div className={s["rating"]}>
          {rating}&nbsp;
          <img
            src="../../../public/star-sharp-svgrepo-com.svg"
            alt="Rating Star"
          />
        </div>
      </div>
      <div className={s["card-footer"]}>
        <div className={s["title"]}>{title}</div>
      </div>
      <div>
        <div className={s["button-wrapper"]}>
          <Link to={`/film/${id}`} className={s["add-to-favorites"]}>
            More
          </Link>
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
                user?.email
                  ? addToFavoritesHandler
                  : () => navigate("/auth/login")
              }
            >
              add to Favorites
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
