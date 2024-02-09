import { useMemo } from "react";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

import { useHistory } from "../../hooks/useHistory";

import { FilmCardProps } from "./FilmCart.props";

import s from "./FilmCart.module.css";
import { useTheme } from "../../context/ThemeContext";

export const FilmCart = ({
  name,
  id,
  image,
  rating,
  title,
  year,
}: FilmCardProps) => {
  const auth = getAuth();
  const { isDark } = useTheme();
  const user = auth.currentUser;
  const userId = auth.currentUser?.uid;
  const userEmail = auth.currentUser?.email;

  const { addToHistory } = useHistory(`${userEmail}`);

  const addToHistoryHandler = () => {
    if (userId) {
      addToHistory({
        nameRu: name,
        posterUrl: image,
        ratingKinopoisk: rating,
        year: year,
        id: id,
      });
    }
  };

  const cardHeadStyles = useMemo(
    () => ({
      backgroundImage: `url(${image})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }),
    [image]
  );

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
        <div>
          {user ? (
            <Link
              to={`/film/${id}`}
              className={s["add-to-favorites"]}
              onClick={addToHistoryHandler}
            >
              More
            </Link>
          ) : (
            <Link to={`/auth/login`} className={s["add-to-favorites"]}>
              More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
