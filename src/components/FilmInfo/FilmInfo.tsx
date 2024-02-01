import { useContext } from "react";
import { MyDescriptionFilmContext } from "../../pages/Film";
import { DescriptionFilm } from "../DescriptionFilm/DescriptionFilm";

import s from "./FilmInfo.module.css";

export const FilmInfo = () => {
  const { posterUrl } = useContext(MyDescriptionFilmContext);
  return (
    <div className={s["film-wrapper"]}>
      <div className={s["film-image"]}>
        <img src={posterUrl} alt="Poster" />
      </div>
      <DescriptionFilm />
    </div>
  );
};
