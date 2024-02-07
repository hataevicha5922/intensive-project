import { useParams } from "react-router-dom";

import { ParamsFilmType } from "../../types/types";
import { useGetFilmInfoQuery } from "../../store/filmSlice/filmSlice";
import { Poster } from "../../components/Poster";
import { DescriptionFilm } from "../../components/DescriptionFilm";

import s from "./FilmPage.module.css";

export const FilmPage = () => {
  const params = useParams<ParamsFilmType>();
  const id = params.id!;
  const { data } = useGetFilmInfoQuery(id);

  return (
    data && (
      <div className={s["film-wrapper"]}>
        <Poster posterUrl={data.posterUrl} />
        <DescriptionFilm film={data} />
      </div>
    )
  );
};
