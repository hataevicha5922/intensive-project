/* eslint-disable no-console */
import s from "./FilmList.module.css";
import { FilmCart } from "../../../components/FilmCard/FilmCard";
import { FilmListPropsType } from "./FilmList.props";

export const FilmList = ({ data }: FilmListPropsType) => {


  return (
    <div className={s["list-wrapper"]}>
      {data.map((item) => (
        <FilmCart
          key={item.kinopoiskId}
          id={item.kinopoiskId}
          title={item.nameOriginal || item.nameRu}
          description={item.type}
          price={item.year}
          rating={item.ratingImdb || item.ratingKinopoisk}
          image={item.posterUrlPreview}
        />
      ))}
    </div>
  );
};
