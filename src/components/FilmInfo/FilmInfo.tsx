import { FilmInfoPropsInterface } from "../../api/api.interface";

import { DescriptionFilm } from "../DescriptionFilm/DescriptionFilm";

import s from "./FilmInfo.module.css";

export const FilmInfo = ({ posterUrl }: FilmInfoPropsInterface) => {
  return (
    <div className={s["film-wrapper"]}>
      <div className={s["film-image"]}>
        <img src={posterUrl} alt="Poster" />
      </div>
      <DescriptionFilm />
    </div>
  );
};
