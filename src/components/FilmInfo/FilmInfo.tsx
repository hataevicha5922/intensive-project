import { Poster } from "../Poster";
import { DescriptionFilm } from "../DescriptionFilm/DescriptionFilm";

import s from "./FilmInfo.module.css";

export const FilmInfo = () => {
  return (
    <div className={s["film-wrapper"]}>
      <Poster />
      <DescriptionFilm />
    </div>
  );
};
