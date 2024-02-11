import { useNavigate } from "react-router-dom";

import { SearchFilmInterface } from "../../../store";

import s from "../Suggest.module.css";

export const SuggestItem = ({
  filmId,
  posterUrl,
  description,
  nameRu,
  nameEn,
}: SearchFilmInterface) => {
  const navigate = useNavigate();
  const filmName = nameRu || nameEn || description;
  const handleClick = () => navigate(`/film/${filmId}`);

  return (
    <div className={s["suggest-item"]} onClick={handleClick}>
      <div className={s["suggest-item-img-container"]}>
        {posterUrl && (
          <img
            className={s["suggest-item-img"]}
            src={posterUrl}
            alt={filmName}
          />
        )}
      </div>
      <div className={s["suggest-item-name"]}>{filmName}</div>
    </div>
  );
};
