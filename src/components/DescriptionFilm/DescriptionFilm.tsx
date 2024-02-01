import { useContext } from "react";
import { MyDescriptionFilmContext } from "../../pages/Film";
import s from "./DescriptionFilm.module.css";

export const DescriptionFilm = () => {
  const { description, nameRu, ratingKinopoisk, year } = useContext(
    MyDescriptionFilmContext
  );
  return (
    <div className={s["film-description"]}>
      <h2>{nameRu}</h2>
      <p>{description}</p>
      <span>Year {year} </span>
      <span>Raiting {ratingKinopoisk}</span>
    </div>
  );
};
